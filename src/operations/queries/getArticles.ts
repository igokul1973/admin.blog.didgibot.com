import { gql } from 'apollo-angular';
import { ArticleFragment } from '../fragments/article';

export const GET_ARTICLES = gql`
    query articles($where: ArticleWhere, $options: ArticleOptions, $fulltext: ArticleFulltext) {
        articles(where: $where, options: $options, fulltext: $fulltext) {
            ...ArticleFragment
        }
    }
    ${ArticleFragment}
`;
