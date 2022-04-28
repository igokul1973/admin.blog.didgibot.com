import { gql } from 'apollo-angular';

export const TokensFragment = gql`
    fragment TokensFragment on Tokens {
        accessToken
        refreshToken
    }
`;
