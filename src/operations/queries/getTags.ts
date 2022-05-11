import { gql } from 'apollo-angular';
import { TagFragment } from '../fragments/tag';

export const GET_TAGS = gql`
    query tags($where: TagWhere, $options: TagOptions, $fulltext: TagFulltext) {
        tags(where: $where, options: $options, fulltext: $fulltext) {
            ...TagFragment
        }
    }
    ${TagFragment}
`;
