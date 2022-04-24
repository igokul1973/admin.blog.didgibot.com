import { Component, EventEmitter, OnInit } from '@angular/core';
import { checkDEV } from '@apollo/client/utilities/globals';
import {
    IArticle,
    IArticleArticleSearchFulltext,
    IArticleFulltext,
    IArticleWhere,
    IQueryArticlesArgs,
    ISortDirection
} from '@src/generated/types';
import { GET_ARTICLES } from '@src/operations/mutations/getArticles';
import { Apollo, QueryRef } from 'apollo-angular';
import { GraphQLError } from 'graphql';
import {
    BehaviorSubject,
    catchError,
    combineLatest,
    debounceTime,
    distinctUntilChanged,
    map,
    Observable,
    pluck,
    Subscription,
    tap
} from 'rxjs';
import { IObservables } from './types';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
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
    search = new EventEmitter<IArticleArticleSearchFulltext['phrase']>();

    constructor(private apollo: Apollo) {}

    ngOnInit(): void {
        this.queryVariables$.subscribe({
            next: (queryVariables) => {
                if (!this.source$) {
                    this.source$ = this.getArticles(queryVariables);
                } else {
                    this.source$.refetch(queryVariables);
                    this.source$.refetch;
                }
                this.currentQueryVariables = queryVariables;
                if (!this.observables) {
                    this.observables = {
                        loading: this.source$.valueChanges.pipe(pluck('loading')),
                        errors: this.source$.valueChanges.pipe(pluck('errors')),
                        articles: this.source$.valueChanges.pipe(pluck('data', 'articles')),
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

        this.search
            .pipe(
                debounceTime(500),
                distinctUntilChanged(),
                map((s) => s.trim())
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

    private getArticles(queryVariables: IQueryArticlesArgs) {
        return this.apollo.watchQuery<{ articles: IArticle[] }, IQueryArticlesArgs>({
            query: GET_ARTICLES,
            variables: { ...queryVariables },
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'network-only'
        });
    }

    sortArticles(sortDirection: ISortDirection) {
        this.sortUpdatedAtSubject.next(sortDirection);
    }

    editArticle({ $event, article }: { $event: MouseEvent; article: IArticle }) {
        $event.stopPropagation();
        console.log('Editing article with id: ', article.id);
    }

    deleteArticle({ $event, article }: { $event: MouseEvent; article: IArticle }) {
        $event.stopPropagation();
        console.log('Deleting article with id: ', article.id);
    }

    private subscribeToSortUpdatedAt(observables: IObservables): void {
        if (!this.sortUpdatedAtSubscription) {
            this.sortUpdatedAtSubscription = observables.sortUpdatedAt.subscribe({
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
            this.search.emit(value);
        }
    }
}
