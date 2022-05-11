import { gql } from 'apollo-angular';
import { CategoryFragment } from '../fragments/category';

export const GET_CATEGORIES = gql`
    query categories($where: CategoryWhere, $options: CategoryOptions, $fulltext: CategoryFulltext) {
        categories(where: $where, options: $options, fulltext: $fulltext) {
            ...CategoryFragment
        }
    }
    ${CategoryFragment}
`;
