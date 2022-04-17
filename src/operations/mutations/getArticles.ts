import { gql } from '@apollo/client/core';

export const GET_ARTICLES = gql`
    query articles {
        articles {
            id
            header
            subheader
            content
        }
    }
`;
