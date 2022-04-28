import { gql } from 'apollo-angular';
import { TokensFragment } from '../fragments/tokens';

export const LOGIN_USER = gql`
    mutation LoginUser($input: CredentialsInput!) {
        loginUser(input: $input) {
            ...TokensFragment
        }
    }
    ${TokensFragment}
`;
