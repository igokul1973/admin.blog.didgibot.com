import { gql } from '@apollo/client/core';

export const REFRESH_TOKENS = gql`
    mutation RefreshTokens($refreshToken: String!) {
        refreshTokens(refreshToken: $refreshToken) {
            accessToken
            refreshToken
        }
    }
`;
