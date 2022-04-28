import { gql } from 'apollo-angular';

export const DELETE_ARTICLES = gql`
    mutation deleteArticles($where: ArticleWhere, $delete: ArticleDeleteInput) {
        deleteArticles(where: $where, delete: $delete) {
            nodesDeleted
            relationshipsDeleted
        }
    }
`;
