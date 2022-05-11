import { Injectable } from '@angular/core';
import {
    IMutationCreateTagsArgs,
    IMutationUpdateTagsArgs,
    IMutationDeleteTagsArgs,
    IDeleteInfo,
    IQueryTagsArgs,
    ITag
} from '@src/generated/types';
import { CREATE_TAGS } from '@src/operations/mutations/createTags';
import { DELETE_TAGS } from '@src/operations/mutations/deleteTags';
import { UPDATE_TAGS } from '@src/operations/mutations/updateTags';
import { GET_TAGS } from '@src/operations/queries/getTags';
import { Apollo, QueryRef } from 'apollo-angular';
import { map, take } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TagService {
    constructor(private apollo: Apollo) {}

    getTags(variables: IQueryTagsArgs): QueryRef<{ tags: ITag[] }, IQueryTagsArgs> {
        return this.apollo.watchQuery<{ tags: ITag[] }, IQueryTagsArgs>({
            query: GET_TAGS,
            variables,
            fetchPolicy: 'cache-and-network'
        });
    }

    createTags(variables: IMutationCreateTagsArgs) {
        return this.apollo
            .mutate<{ createTags: { tags: ITag[] } }, IMutationCreateTagsArgs>({
                mutation: CREATE_TAGS,
                variables,
                refetchQueries: ['tags']
            })
            .pipe(
                map((r) => r?.data?.createTags?.tags),
                take(1)
            );
    }

    updateTags(variables: IMutationUpdateTagsArgs) {
        return this.apollo
            .mutate<{ updateTags: { tags: ITag[] } }, IMutationUpdateTagsArgs>({
                mutation: UPDATE_TAGS,
                variables
            })
            .pipe(
                map((r) => r?.data?.updateTags?.tags),
                take(1)
            );
    }

    deleteTags(variables: IMutationDeleteTagsArgs) {
        return this.apollo
            .mutate<{ deleteTags: IDeleteInfo }, IMutationDeleteTagsArgs>({
                mutation: DELETE_TAGS,
                variables,
                update: (cache, { data }, { variables }) => {
                    const deletedTagId = cache.identify({ __typename: 'Tag', id: variables?.where?.id });
                    if (deletedTagId && data?.deleteTags.nodesDeleted === 1) {
                        cache.evict({ id: deletedTagId });
                        cache.gc();
                    }
                }
            })
            .pipe(
                map((r) => r?.data?.deleteTags),
                take(1)
            );
    }
}
