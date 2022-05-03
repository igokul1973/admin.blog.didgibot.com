import { gql } from 'apollo-angular';
import { CategoryFragment } from '../fragments/category';

export const UPDATE_CATEGORIES = gql`
    mutation updateCategories($where: CategoryWhere, $update: CategoryUpdateInput!) {
        updateCategories(where: $where, update: $update) {
            categories {
                ...CategoryFragment
            }
        }
    }
    ${CategoryFragment}
`;
