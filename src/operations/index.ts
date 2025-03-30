import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
    query articles(
        $entityName: EntityEnum
        $filterInput: ArticlesFilterInputType
        $sortInput: [SortInputType!]
        $limit: Int
        $skip: Int
    ) {
        articles(filter_input: $filterInput, sort_input: $sortInput, limit: $limit, skip: $skip) {
            id
            translations {
                language
                header
                content {
                    version
                    time
                    blocks {
                        id
                        type
                        data
                    }
                }
                is_published
                published_at
                category {
                    id
                    name
                }
                tags {
                    id
                    name
                }
            }
            created_at
            updated_at
        }
        count(entity: $entityName) {
            count
            entity
        }
    }
`;

export const GET_CATEGORIES = gql`
    query get_categories(
        $entityName: EntityEnum
        $filterInput: CategoriesFilterInputType
        $sortInput: [SortInputType!]
        $limit: Int
        $skip: Int
    ) {
        categories(filter_input: $filterInput, sort_input: $sortInput, limit: $limit, skip: $skip) {
            __typename
            id
            name
            created_at
            updated_at
        }
        count(entity: $entityName) {
            count
            entity
        }
    }
`;

export const GET_TAGS = gql`
    query get_tags(
        $entityName: EntityEnum
        $filterInput: TagsFilterInputType
        $sortInput: [SortInputType!]
        $limit: Int
        $skip: Int
    ) {
        tags(filter_input: $filterInput, sort_input: $sortInput, limit: $limit, skip: $skip) {
            __typename
            id
            name
            created_at
            updated_at
        }
        count(entity: $entityName) {
            count
            entity
        }
    }
`;

export const CREATE_ARTICLE = gql`
    mutation set_article($input: ArticleCreateInputType!) {
        set_article(data: $input) {
            __typename
            id
            translations {
                language
                header
                content {
                    version
                    time
                    blocks {
                        id
                        type
                        data
                    }
                }
                is_published
                published_at
                category {
                    id
                    name
                }
                tags {
                    id
                    name
                }
            }
            created_at
            updated_at
        }
    }
`;

export const UPDATE_ARTICLE = gql`
    mutation update_article($input: ArticleUpdateInputType!) {
        update_article(data: $input) {
            __typename
            id
            translations {
                language
                header
                content {
                    version
                    time
                    blocks {
                        id
                        type
                        data
                    }
                }
                is_published
                published_at
                category {
                    id
                    name
                }
                tags {
                    id
                    name
                }
            }
            created_at
            updated_at
        }
    }
`;

export const CREATE_category = gql`
    mutation set_category($input: CategoryCreateInputType!) {
        set_category(data: $input) {
            id
            name
            created_at
            updated_at
        }
    }
`;

export const UPDATE_category = gql`
    mutation update_category($input: CategoryUpdateInputType!) {
        update_category(data: $input) {
            id
            name
            created_at
            updated_at
        }
    }
`;

export const DELETE_ARTICLE = gql`
    mutation Delete_Article($id: String!) {
        delete_article(data: { id: $id }) {
            acknowledged
            deleted_count
        }
    }
`;

export const DELETE_CATEGORY = gql`
    mutation Delete_Category($id: String!) {
        delete_category(data: { id: $id }) {
            acknowledged
            deleted_count
        }
    }
`;

export const DELETE_TAG = gql`
    mutation Delete_Tag($id: String!) {
        delete_tag(data: { id: $id }) {
            acknowledged
            deleted_count
        }
    }
`;
