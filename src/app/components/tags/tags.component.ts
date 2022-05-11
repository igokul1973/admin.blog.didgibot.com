import { Component, EventEmitter, OnInit } from '@angular/core';
import { RightDrawerService } from '@services/right-drawer.service';
import { SnackbarService } from '@services/snackbar.service';
import { TagService } from '@services/tag.service';
import { RightDrawerComponentsEnum } from '@services/types';
import { IQueryTagsArgs, ISortDirection, ITag, ITagTagSearchFulltext, ITagWhere } from '@src/generated/types';
import { QueryRef } from 'apollo-angular';
import { GraphQLError } from 'graphql';
import {
    BehaviorSubject,
    combineLatest,
    debounceTime,
    distinctUntilChanged,
    map,
    Observable,
    Subject,
    Subscription,
    takeUntil
} from 'rxjs';
import { IObservables } from '../tags/types';

@Component({
    selector: 'app-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
    queryVariablesSubject = new BehaviorSubject<IQueryTagsArgs>({
        options: {
            sort: [
                {
                    name: ISortDirection.Asc
                }
            ]
        }
    });
    queryVariables$ = this.queryVariablesSubject.asObservable();
    currentQueryVariables: IQueryTagsArgs | null = null;

    sortNameSubject = new BehaviorSubject<ISortDirection>(ISortDirection.Asc);
    source$: QueryRef<{ tags: ITag[] }, IQueryTagsArgs> | null = null;
    observables: IObservables | null = null;
    data$: Observable<{
        [x: string]: unknown;
        loading: boolean;
        errors: readonly GraphQLError[] | undefined;
        tags: ITag[];
        sortName: ISortDirection;
    }> | null = null;
    isFilterSectionOpen = false;
    sortDirections = [
        {
            name: 'Ascending',
            value: ISortDirection.Asc
        },
        {
            name: 'Descending',
            value: ISortDirection.Desc
        }
    ];
    sortNameSubscription: Subscription | null = null;
    queryVariablesSubscription: Subscription | null = null;
    filter = new EventEmitter<ITagWhere['name']>();
    destroyedSubject = new Subject<boolean>();
    destroyed$ = this.destroyedSubject.asObservable();

    constructor(
        private tagService: TagService,
        private rightDrawerService: RightDrawerService,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit(): void {
        this.queryVariablesSubscription = this.queryVariables$.pipe(takeUntil(this.destroyed$)).subscribe({
            next: (queryVariables) => {
                if (!this.source$) {
                    this.source$ = this.tagService.getTags(queryVariables);
                } else {
                    this.source$.refetch(queryVariables);
                    this.source$.refetch;
                }
                this.currentQueryVariables = queryVariables;
                if (!this.observables) {
                    this.observables = {
                        loading: this.source$.valueChanges.pipe(map((r) => r?.loading)),
                        errors: this.source$.valueChanges.pipe(map((r) => r?.errors)),
                        tags: this.source$.valueChanges.pipe(map((r) => r?.data?.tags)),
                        sortName: this.sortNameSubject.asObservable()
                    };
                }

                if (this.observables && !this.data$) {
                    this.data$ = combineLatest<IObservables>(this.observables);

                    // Subscribing to the changes of sorting of updatedAt field
                    this.subscribeToSortUpdatedAt(this.observables);
                }
            }
        });

        this.filter
            .pipe(
                debounceTime(500),
                distinctUntilChanged(),
                map((s) => s && s.trim()),
                takeUntil(this.destroyed$)
            )
            .subscribe({
                next: (value: ITagWhere['name']) => {
                    this.setNewTagsQueryVariables(value);
                    if (this.currentQueryVariables) {
                        this.queryVariablesSubject.next(this.currentQueryVariables);
                    }
                }
            });
    }

    ngOnDestroy(): void {
        this.destroyedSubject.next(true);
    }

    openRightDrawer(tag: ITag) {
        this.rightDrawerService.open<ITag>(RightDrawerComponentsEnum.updateTag, tag);
    }

    sortTags(sortDirection: ISortDirection) {
        this.sortNameSubject.next(sortDirection);
    }

    editTag({ $event, tag }: { $event: MouseEvent; tag: ITag }) {
        $event.stopPropagation();
        this.openRightDrawer(tag);
    }

    deleteTag({ $event, tag }: { $event: MouseEvent; tag: ITag }) {
        $event.stopPropagation();
        this.tagService
            .deleteTags({
                where: {
                    id: tag.id
                }
            })
            .subscribe({
                next: () => {
                    this.snackbarService.addSnackbar({
                        type: 'success',
                        data: {
                            message: `The tag ${tag.name} was successfully deleted`
                        }
                    });
                }
            });
    }

    private subscribeToSortUpdatedAt(observables: IObservables): void {
        if (!this.sortNameSubscription) {
            this.sortNameSubscription = observables.sortName.pipe(takeUntil(this.destroyed$)).subscribe({
                next: (sortDirection) => {
                    const newQueryVariables = this.getNewUpdatedAtSortVariables(sortDirection);
                    if (newQueryVariables) {
                        this.queryVariablesSubject.next(newQueryVariables);
                    }
                }
            });
        }
    }

    private getNewUpdatedAtSortVariables(sortDirection: ISortDirection): IQueryTagsArgs | null {
        if (this.currentQueryVariables?.options?.sort) {
            const sortObject = this.currentQueryVariables.options.sort[0];
            if (sortObject) {
                if (sortObject.name && sortObject.name !== sortDirection) {
                    sortObject.name = sortDirection;
                } else {
                    return null;
                }
            } else {
                this.currentQueryVariables.options.sort.push({ name: sortDirection });
            }
            return {
                ...this.currentQueryVariables,
                options: {
                    ...this.currentQueryVariables?.options,
                    sort: [sortObject]
                }
            };
        }
        return null;
    }

    private setNewTagsQueryVariables(value?: ITagTagSearchFulltext['phrase'] | null): void {
        if (this.currentQueryVariables) {
            if (this.currentQueryVariables.fulltext) {
                if (!value) {
                    return (this.currentQueryVariables.fulltext = undefined);
                } else {
                    this.currentQueryVariables.fulltext = {
                        ...this.currentQueryVariables.fulltext,
                        TagSearch: {
                            ...this.currentQueryVariables.fulltext.TagSearch,
                            phrase: value
                        }
                    };
                }
            } else if (value) {
                this.currentQueryVariables.fulltext = {
                    TagSearch: { phrase: value }
                };
            }
        }

        if (this.currentQueryVariables) {
            const fullTextObject = this.currentQueryVariables.fulltext;

            if (!value) {
                this.currentQueryVariables.fulltext = undefined;
            } else if (fullTextObject && fullTextObject.TagSearch) {
                fullTextObject.TagSearch.phrase = value;
            } else {
                this.currentQueryVariables.fulltext = {
                    TagSearch: { phrase: value }
                };
            }
        }
    }

    filterEmit($event: KeyboardEvent) {
        const target = $event.target as HTMLInputElement;
        const value = target.value;
        if (value === '' || value.length > 2) {
            this.filter.emit(value);
        }
    }
}
