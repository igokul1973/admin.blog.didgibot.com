import { gql } from 'apollo-angular';
import { TagFragment } from '../fragments/tag';

export const CREATE_TAGS = gql`
    mutation createTags($input: [TagCreateInput!]!) {
        createTags(input: $input) {
            tags {
                ...TagFragment
            }
        }
    }
    ${TagFragment}
`;
