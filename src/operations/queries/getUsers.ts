import { gql } from 'apollo-angular';

export const GET_USERS = gql`
    query users {
        users(where: UserWhere) {
            id
            email
            phone
            ip
            lastLoggedAt
        }
    }
`;
