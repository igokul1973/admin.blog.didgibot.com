import { gql } from '@apollo/client/core';

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
