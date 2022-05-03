import { gql } from 'apollo-angular';

export const DELETE_CATEGORIES = gql`
    mutation deleteCategories($where: CategoryWhere, $delete: CategoryDeleteInput) {
        deleteCategories(where: $where, delete: $delete) {
            nodesDeleted
            relationshipsDeleted
        }
    }
`;
