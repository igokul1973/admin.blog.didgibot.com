import { Injectable } from '@angular/core';
import {
    ICategory,
    IDeleteInfo,
    IMutationCreateCategoriesArgs,
    IMutationDeleteCategoriesArgs,
    IMutationUpdateCategoriesArgs,
    IQueryCategoriesArgs,
    ISortDirection
} from '@src/generated/types';
import { CREATE_CATEGORIES } from '@src/operations/mutations/createCategories';
import { DELETE_CATEGORIES } from '@src/operations/mutations/deleteCategories';
import { UPDATE_CATEGORIES } from '@src/operations/mutations/updateCategories';
import { GET_CATEGORIES } from '@src/operations/queries/getCategories';
import { Apollo, QueryRef } from 'apollo-angular';
import { map, take } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private apollo: Apollo) {}

    getCategories(variables?: IQueryCategoriesArgs): QueryRef<{ categories: ICategory[] }, IQueryCategoriesArgs> {
        if (!variables?.options?.sort) {
            const sortObj = { sort: [{ name: ISortDirection.Asc }] };
            if (variables) {
                variables.options = sortObj;
            } else {
                variables = { options: sortObj };
            }
        }
        return this.apollo.watchQuery<{ categories: ICategory[] }>({
            query: GET_CATEGORIES,
            variables
        });
    }

    createCategories(variables: IMutationCreateCategoriesArgs) {
        return this.apollo
            .mutate<{ createCategories: { categories: ICategory[] } }, IMutationCreateCategoriesArgs>({
                mutation: CREATE_CATEGORIES,
                variables,
                refetchQueries: ['categories']
            })
            .pipe(
                map((r) => r?.data?.createCategories?.categories),
                take(1)
            );
    }

    updateCategories(variables: IMutationUpdateCategoriesArgs) {
        return this.apollo
            .mutate<{ updateCategories: { categories: ICategory[] } }, IMutationUpdateCategoriesArgs>({
                mutation: UPDATE_CATEGORIES,
                variables
            })
            .pipe(
                map((r) => r?.data?.updateCategories?.categories),
                take(1)
            );
    }

    deleteCategories(variables: IMutationDeleteCategoriesArgs) {
        return this.apollo
            .mutate<{ deleteCategories: IDeleteInfo }, IMutationDeleteCategoriesArgs>({
                mutation: DELETE_CATEGORIES,
                variables,
                update: (cache, { data }, { variables }) => {
                    const deletedCategoryId = cache.identify({ __typename: 'Category', id: variables?.where?.id });
                    if (deletedCategoryId && data?.deleteCategories.nodesDeleted === 1) {
                        cache.evict({ id: deletedCategoryId });
                        cache.gc();
                    }
                }
            })
            .pipe(
                map((r) => r?.data?.deleteCategories),
                take(1)
            );
    }
}
