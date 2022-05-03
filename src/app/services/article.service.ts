import { Injectable } from '@angular/core';
import {
    IMutationCreateArticlesArgs,
    IArticle,
    IQueryArticlesArgs,
    IMutationUpdateArticlesArgs,
    IMutationDeleteArticlesArgs,
    IDeleteInfo
} from '@src/generated/types';
import { CREATE_ARTICLES } from '@src/operations/mutations/createArticles';
import { DELETE_ARTICLES } from '@src/operations/mutations/deleteArticles';
import { UPDATE_ARTICLES } from '@src/operations/mutations/updateArticles';
import { GET_ARTICLES } from '@src/operations/queries/getArticles';
import { Apollo, QueryRef } from 'apollo-angular';
import { map, take } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor(private apollo: Apollo) {}

    getArticles(variables: IQueryArticlesArgs): QueryRef<{ articles: IArticle[] }, IQueryArticlesArgs> {
        return this.apollo.watchQuery<{ articles: IArticle[] }, IQueryArticlesArgs>({
            query: GET_ARTICLES,
            variables,
            fetchPolicy: 'cache-and-network'
        });
    }

    createArticles(variables: IMutationCreateArticlesArgs) {
        return this.apollo
            .mutate<{ createArticles: { articles: IArticle[] } }, IMutationCreateArticlesArgs>({
                mutation: CREATE_ARTICLES,
                variables,
                refetchQueries: ['articles']
            })
            .pipe(
                map((r) => r?.data?.createArticles?.articles),
                take(1)
            );
    }

    updateArticles(variables: IMutationUpdateArticlesArgs) {
        return this.apollo
            .mutate<{ updateArticles: { articles: IArticle[] } }, IMutationUpdateArticlesArgs>({
                mutation: UPDATE_ARTICLES,
                variables
            })
            .pipe(
                map((r) => r?.data?.updateArticles?.articles),
                take(1)
            );
    }

    deleteArticles(variables: IMutationDeleteArticlesArgs) {
        return this.apollo
            .mutate<{ deleteArticles: IDeleteInfo }, IMutationDeleteArticlesArgs>({
                mutation: DELETE_ARTICLES,
                variables,
                update: (cache, { data }, { variables }) => {
                    const deletedArticleId = cache.identify({ __typename: 'Article', id: variables?.where?.id });
                    if (deletedArticleId && data?.deleteArticles.nodesDeleted === 1) {
                        cache.evict({ id: deletedArticleId });
                        cache.gc();
                    }
                }
            })
            .pipe(
                map((r) => r?.data?.deleteArticles),
                take(1)
            );
    }
}
