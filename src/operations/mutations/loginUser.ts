import { gql } from '@apollo/client/core';

export const LOGIN_USER = gql`
    mutation LoginUser($input: CredentialsInput!) {
        loginUser(input: $input) {
            accessToken
            refreshToken
        }
    }
`;
