import { gql } from 'apollo-angular';

export const GET_CATEGORIES = gql`
    query categories {
        categories {
            id
            name
        }
    }
`;
