import { Component, EventEmitter, OnInit } from '@angular/core';
import { CategoryService } from '@services/category.service';
import { RightDrawerService } from '@services/right-drawer.service';
import { SnackbarService } from '@services/snackbar.service';
import { RightDrawerComponentsEnum } from '@services/types';
import { IQueryCategoriesArgs, ISortDirection, ICategory, ICategoryWhere } from '@src/generated/types';
import { QueryRef } from 'apollo-angular';
import { GraphQLError } from 'graphql';
import {
    BehaviorSubject,
    Observable,
    Subscription,
    Subject,
    takeUntil,
    map,
    combineLatest,
    debounceTime,
    distinctUntilChanged
} from 'rxjs';
import { IObservables } from '../categories/types';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    queryVariablesSubject = new BehaviorSubject<IQueryCategoriesArgs>({
        options: {
            sort: [
                {
                    name: ISortDirection.Asc
                }
            ]
        }
    });
    queryVariables$ = this.queryVariablesSubject.asObservable();
    currentQueryVariables: IQueryCategoriesArgs | null = null;

    sortNameSubject = new BehaviorSubject<ISortDirection>(ISortDirection.Asc);
    source$: QueryRef<{ categories: ICategory[] }, IQueryCategoriesArgs> | null = null;
    observables: IObservables | null = null;
    data$: Observable<{
        [x: string]: unknown;
        loading: boolean;
        errors: readonly GraphQLError[] | undefined;
        categories: ICategory[];
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
    filter = new EventEmitter<ICategoryWhere['name']>();
    destroyedSubject = new Subject<boolean>();
    destroyed$ = this.destroyedSubject.asObservable();

    constructor(
        private categoryService: CategoryService,
        private rightDrawerService: RightDrawerService,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit(): void {
        this.queryVariablesSubscription = this.queryVariables$.pipe(takeUntil(this.destroyed$)).subscribe({
            next: (queryVariables) => {
                if (!this.source$) {
                    this.source$ = this.categoryService.getCategories(queryVariables);
                } else {
                    this.source$.refetch(queryVariables);
                    this.source$.refetch;
                }
                this.currentQueryVariables = queryVariables;
                if (!this.observables) {
                    this.observables = {
                        loading: this.source$.valueChanges.pipe(map((r) => r?.loading)),
                        errors: this.source$.valueChanges.pipe(map((r) => r?.errors)),
                        categories: this.source$.valueChanges.pipe(map((r) => r?.data?.categories)),
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
                next: (value: ICategoryWhere['name']) => {
                    this.setNewQueryVariables(value);
                    if (this.currentQueryVariables) {
                        this.queryVariablesSubject.next(this.currentQueryVariables);
                    }
                }
            });
    }

    ngOnDestroy(): void {
        this.destroyedSubject.next(true);
    }

    openRightDrawer(category: ICategory) {
        this.rightDrawerService.open<ICategory>(RightDrawerComponentsEnum.updateCategory, category);
    }

    sortCategories(sortDirection: ISortDirection) {
        this.sortNameSubject.next(sortDirection);
    }

    editCategory({ $event, category }: { $event: MouseEvent; category: ICategory }) {
        $event.stopPropagation();
        this.openRightDrawer(category);
    }

    deleteCategory({ $event, category }: { $event: MouseEvent; category: ICategory }) {
        $event.stopPropagation();
        this.categoryService
            .deleteCategories({
                where: {
                    id: category.id
                }
            })
            .subscribe({
                next: () => {
                    this.snackbarService.addSnackbar({
                        type: 'success',
                        data: {
                            message: `The category ${category.name} was successfully deleted`
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

    private getNewUpdatedAtSortVariables(sortDirection: ISortDirection): IQueryCategoriesArgs | null {
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

    private setNewQueryVariables(name: ICategoryWhere['name']): void {
        if (this.currentQueryVariables) {
            if (this.currentQueryVariables.where) {
                this.currentQueryVariables.where.name = name || undefined;
            } else {
                this.currentQueryVariables.where = (name && { name }) || undefined;
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
