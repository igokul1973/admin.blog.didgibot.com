import { gql } from 'apollo-angular';

export const TagFragment = gql`
    fragment TagFragment on Tag {
        id
        name
        createdAt
        updatedAt
    }
`;
