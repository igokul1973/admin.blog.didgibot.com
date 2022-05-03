import { gql } from 'apollo-angular';
import { ArticleFragment } from '../fragments/article';

export const CREATE_ARTICLES = gql`
    mutation createArticles($input: [ArticleCreateInput!]!) {
        createArticles(input: $input) {
            articles {
                ...ArticleFragment
            }
        }
    }
    ${ArticleFragment}
`;
