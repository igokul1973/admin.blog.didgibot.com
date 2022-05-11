import { gql } from 'apollo-angular';

export const DELETE_TAGS = gql`
    mutation deleteTags($where: TagWhere, $delete: TagDeleteInput) {
        deleteTags(where: $where, delete: $delete) {
            nodesDeleted
            relationshipsDeleted
        }
    }
`;
