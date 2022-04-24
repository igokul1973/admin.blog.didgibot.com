import { gql } from '@apollo/client/core';

export const GET_ARTICLES = gql`
    query articles($where: ArticleWhere, $options: ArticleOptions, $fulltext: ArticleFulltext) {
        articles(where: $where, options: $options, fulltext: $fulltext) {
            id
            header
            subheader
            content
            createdAt
            updatedAt
            isPublished
            categories {
                name
            }
        }
    }
`;
