import { gql } from 'apollo-angular';
import { CategoryFragment } from '../fragments/category';

export const CREATE_CATEGORIES = gql`
    mutation createCategories($input: [CategoryCreateInput!]!) {
        createCategories(input: $input) {
            categories {
                ...CategoryFragment
            }
        }
    }
    ${CategoryFragment}
`;
