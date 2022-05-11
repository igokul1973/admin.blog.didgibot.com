import { gql } from 'apollo-angular';
import { TagFragment } from '../fragments/tag';

export const UPDATE_TAGS = gql`
    mutation updateTags($where: TagWhere, $update: TagUpdateInput!) {
        updateTags(where: $where, update: $update) {
            tags {
                ...TagFragment
            }
        }
    }
    ${TagFragment}
`;
