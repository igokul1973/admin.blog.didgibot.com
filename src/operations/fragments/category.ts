import { gql } from 'apollo-angular';

export const CategoryFragment = gql`
    fragment CategoryFragment on Category {
        id
        name
    }
`;
