import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from '@services/article.service';
import { RightDrawerService } from '@services/right-drawer.service';
import { IArticle, IArticleArticleSearchFulltext, IQueryArticlesArgs, ISortDirection } from '@src/generated/types';
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
import { IObservables } from './types';
import { RightDrawerComponentsEnum } from '@services/types';
import { SnackbarService } from '@src/app/services/snackbar.service';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
    queryVariablesSubject = new BehaviorSubject<IQueryArticlesArgs>({
        options: {
            sort: [
                {
                    updatedAt: ISortDirection.Desc
                }
            ]
        }
    });
    queryVariables$ = this.queryVariablesSubject.asObservable();
    currentQueryVariables: IQueryArticlesArgs | null = null;

    sortUpdatedAtSubject = new BehaviorSubject<ISortDirection>(ISortDirection.Desc);
    source$: QueryRef<{ articles: IArticle[] }, IQueryArticlesArgs> | null = null;
    observables: IObservables | null = null;
    data$: Observable<{
        [x: string]: unknown;
        loading: boolean;
        errors: readonly GraphQLError[] | undefined;
        articles: IArticle[];
        sortUpdatedAt: ISortDirection;
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
    sortUpdatedAtSubscription: Subscription | null = null;
    queryVariablesSubscription: Subscription | null = null;
    filter = new EventEmitter<IArticleArticleSearchFulltext['phrase']>();
    destroyedSubject = new Subject<boolean>();
    destroyed$ = this.destroyedSubject.asObservable();

    constructor(
        private articleService: ArticleService,
        private rightDrawerService: RightDrawerService,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit(): void {
        this.queryVariablesSubscription = this.queryVariables$.pipe(takeUntil(this.destroyed$)).subscribe({
            next: (queryVariables) => {
                if (!this.source$) {
                    this.source$ = this.articleService.getArticles(queryVariables);
                } else {
                    this.source$.refetch(queryVariables);
                    this.source$.refetch;
                }
                this.currentQueryVariables = queryVariables;
                if (!this.observables) {
                    this.observables = {
                        loading: this.source$.valueChanges.pipe(map((r) => r?.loading)),
                        errors: this.source$.valueChanges.pipe(map((r) => r?.errors)),
                        articles: this.source$.valueChanges.pipe(map((r) => r?.data?.articles)),
                        sortUpdatedAt: this.sortUpdatedAtSubject.asObservable()
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
                map((s) => s.trim()),
                takeUntil(this.destroyed$)
            )
            .subscribe({
                next: (value: IArticleArticleSearchFulltext['phrase']) => {
                    const newQueryVariables = this.getNewFulltextSearchVariables(value);
                    if (newQueryVariables) {
                        this.queryVariablesSubject.next(newQueryVariables);
                    }
                }
            });
    }

    ngOnDestroy(): void {
        this.destroyedSubject.next(true);
    }

    openRightDrawer(article: IArticle) {
        this.rightDrawerService.open<IArticle>(RightDrawerComponentsEnum.updateArticle, article);
    }

    sortArticles(sortDirection: ISortDirection) {
        this.sortUpdatedAtSubject.next(sortDirection);
    }

    editArticle({ $event, article }: { $event: MouseEvent; article: IArticle }) {
        $event.stopPropagation();
        this.openRightDrawer(article);
    }

    deleteArticle({ $event, article }: { $event: MouseEvent; article: IArticle }) {
        $event.stopPropagation();
        this.articleService
            .deleteArticle({
                where: {
                    id: article.id
                }
            })
            .subscribe({
                next: () => {
                    this.snackbarService.addSnackbar({
                        type: 'success',
                        data: {
                            message: `The article ${article.header} was successfully deleted`
                        }
                    });
                }
            });
    }

    private subscribeToSortUpdatedAt(observables: IObservables): void {
        if (!this.sortUpdatedAtSubscription) {
            this.sortUpdatedAtSubscription = observables.sortUpdatedAt.pipe(takeUntil(this.destroyed$)).subscribe({
                next: (sortDirection) => {
                    const newQueryVariables = this.getNewUpdatedAtSortVariables(sortDirection);
                    if (newQueryVariables) {
                        this.queryVariablesSubject.next(newQueryVariables);
                    }
                }
            });
        }
    }

    private getNewUpdatedAtSortVariables(sortDirection: ISortDirection): IQueryArticlesArgs | null {
        if (
            this.currentQueryVariables &&
            this.currentQueryVariables.options &&
            this.currentQueryVariables.options.sort
        ) {
            const sortObject = this.currentQueryVariables.options.sort[0];
            if (sortObject) {
                if (sortObject.updatedAt && sortObject.updatedAt !== sortDirection) {
                    sortObject.updatedAt = sortDirection;
                } else {
                    return null;
                }
            } else {
                this.currentQueryVariables.options.sort.push({ updatedAt: sortDirection });
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

    private getNewFulltextSearchVariables(value: IArticleArticleSearchFulltext['phrase']): IQueryArticlesArgs | null {
        if (this.currentQueryVariables) {
            const fullTextObject = this.currentQueryVariables.fulltext;

            if (!value) {
                this.currentQueryVariables.fulltext = undefined;
            } else if (fullTextObject && fullTextObject.ArticleSearch) {
                // fullTextObject.ArticleSearch.phrase = `*${value}*`;
                // fullTextObject.ArticleSearch.phrase = `"${value}"`;
                fullTextObject.ArticleSearch.phrase = value;
            } else {
                this.currentQueryVariables.fulltext = {
                    // ArticleSearch: { phrase: `*${value}*` }
                    // ArticleSearch: { phrase: `"${value}"` }
                    ArticleSearch: { phrase: value }
                };
            }
            return this.currentQueryVariables;
        }
        return null;
    }

    filterEmit($event: KeyboardEvent) {
        const target = $event.target as HTMLInputElement;
        const value = target.value;
        if (value === '' || value.length > 2) {
            this.filter.emit(value);
        }
    }
}
