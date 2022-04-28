import { gql } from 'apollo-angular';
import { TokensFragment } from '../fragments/tokens';

export const REFRESH_TOKENS = gql`
    mutation RefreshTokens($refreshToken: String!) {
        refreshTokens(refreshToken: $refreshToken) {
            ...TokensFragment
        }
    }
    ${TokensFragment}
`;
