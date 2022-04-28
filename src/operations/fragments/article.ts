import { gql } from 'apollo-angular';

export const ArticleFragment = gql`
    fragment ArticleFragment on Article {
        id
        header
        subheader
        content
        createdAt
        updatedAt
        isPublished
        categories {
            id
            name
        }
    }
`;
