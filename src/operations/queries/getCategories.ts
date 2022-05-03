import { gql } from 'apollo-angular';

export const GET_CATEGORIES = gql`
    query categories($where: CategoryWhere, $options: CategoryOptions) {
        categories(where: $where, options: $options) {
            id
            name
            createdAt
            updatedAt
        }
    }
`;
