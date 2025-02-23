import ArticlesTable from '@/components/articles-table/ArticlesTable';
import Filter from '@/components/filter/Filter';
import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { useUser } from '@/hooks/use-user';
import { IRawArticle } from '@/types/article';
import { LanguageEnum } from '@/types/translation';
import { gql, useQuery } from '@apollo/client';
import Stack from '@mui/material/Stack';
import { JSX, useEffect, useState } from 'react';
import { DEFAULT_ROWS_PER_PAGE } from '../constants';

const GET_ARTICLES = gql`
    query articles(
        $userId: String
        $limit: Int
        $skip: Int
        $entityName: EntityEnum
        $filter: String
        $sort: [SortInputType!]
    ) {
        articles(
            filter_input: { search: $filter, user_id: $userId }
            limit: $limit
            skip: $skip
            sort_input: $sort
        ) {
            id
            translations {
                language
                header
                content
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

export default function Articles(): JSX.Element {
    // TODO: temp solution for the language
    const language = LanguageEnum.EN;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
    const [skip, setSkip] = useState(0);
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState<{ field: string; dir: string }[]>([
        { field: 'updated_at', dir: 'desc' }
    ]);
    const { user } = useUser();
    const userId = user?.id;
    const { data, error, loading } = useQuery(GET_ARTICLES, {
        variables: { userId, limit: rowsPerPage, skip, filter, sort }
    });

    let articles = data?.articles ?? [];

    useEffect(() => {
        setSkip(page * rowsPerPage);
    }, [page]);

    useEffect(() => {
        setPage(0);
    }, [filter]);

    articles = articles.map((article: IRawArticle) => {
        const { id, translations, created_at, updated_at } = article;
        const translation = translations.find((t) => t.language === language);
        return {
            translations: [translation],
            id,
            createdAt: new Date(created_at),
            updatedAt: new Date(updated_at)
        };
    });

    const count = data?.count.count ?? 0;

    return (
        <Stack spacing={3}>
            <EntitiesPageHeader entityNamePlural='Articles' isDisplayAddButton />
            <Filter
                placeholder='Search articles by header, content, category or tag'
                setFilter={setFilter}
            />
            <ArticlesTable
                count={count}
                page={page}
                rows={articles}
                rowsPerPage={rowsPerPage}
                loading={loading}
                setPage={setPage}
                setRowsPerPage={setRowsPerPage}
                error={error}
            />
        </Stack>
    );
}
