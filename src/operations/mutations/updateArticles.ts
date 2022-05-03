import { gql } from 'apollo-angular';
import { ArticleFragment } from '../fragments/article';

export const UPDATE_ARTICLES = gql`
    mutation updateArticles(
        $where: ArticleWhere
        $update: ArticleUpdateInput!
        $connect: ArticleConnectInput
        $disconnect: ArticleDisconnectInput
    ) {
        updateArticles(where: $where, update: $update, connect: $connect, disconnect: $disconnect) {
            articles {
                ...ArticleFragment
            }
        }
    }
    ${ArticleFragment}
`;
