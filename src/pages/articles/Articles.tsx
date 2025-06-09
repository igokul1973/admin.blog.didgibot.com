import ArticlesTable, { IArticlesTableRow } from '@/components/articles-table/ArticlesTable';
import Filter from '@/components/filter/Filter';
import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { transformRawArticles } from '@/components/utils';
import { useUser } from '@/hooks/use-user';
import { GET_ARTICLES } from '@/operations';
import { DEFAULT_ROWS_PER_PAGE } from '@/pages/constants';
import { paths } from '@/paths';
import { IRawArticle } from '@/types/article';
import { useQuery } from '@apollo/client';
import { Stack } from '@mui/material';
import { JSX, useEffect, useState } from 'react';

export default function Articles(): JSX.Element {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
    const [skip, setSkip] = useState(0);
    const [filter, setFilter] = useState('');
    const [sort] = useState<{ field: string; dir: string }[]>([
        { field: 'updated_at', dir: 'desc' }
    ]);
    const { user } = useUser();
    const userId = user?.id;
    const [articles, setArticles] = useState<IArticlesTableRow[]>([]);
    const [count, setCount] = useState<number>(0);
    const { data, error, loading } = useQuery<{
        articles: IRawArticle[];
        count: { count: number };
    }>(GET_ARTICLES, {
        variables: {
            entityName: 'article',
            filterInput: { user_id: userId, search: filter },
            sortInput: sort,
            limit: rowsPerPage,
            skip
        }
    });

    useEffect(() => {
        setSkip(page * rowsPerPage);
    }, [page]);

    useEffect(() => {
        setPage(0);
    }, [filter]);

    useEffect(() => {
        if (data) {
            const articles = transformRawArticles(data.articles);
            setArticles(articles as IArticlesTableRow[]);
            setCount(data.count.count);
        } else if (error) {
            console.error(
                'Error occurred while fetching Articles. Please contact application administrator.'
            );
        }
    }, [data, error]);

    return (
        <Stack spacing={3}>
            <EntitiesPageHeader
                entityNamePlural='Articles'
                backPath={paths.dashboard.articles}
                isDisplayAddButton
            />
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
