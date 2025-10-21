import CategoriesTable from '@/components/categories-table/CategoriesTable';
import Filter from '@/components/filter/Filter';
import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { transformRawCategories } from '@/components/utils';
import { GET_CATEGORIES } from '@/operations';
import { paths } from '@/paths';
import { ICategory, IRawCategory } from '@/types/category';
import { useQuery } from '@apollo/client';
import { Stack } from '@mui/material';
import { JSX, useEffect, useState } from 'react';
import { DEFAULT_ROWS_PER_PAGE } from '../constants';

export default function Categories(): JSX.Element {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
    const [skip, setSkip] = useState(0);
    const [filter, setFilter] = useState('');
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [count, setCount] = useState<number>(0);

    const { data, error, loading } = useQuery<{
        categories: IRawCategory[];
        count: { count: number };
    }>(GET_CATEGORIES, {
        variables: {
            entityName: 'category',
            filterInput: { name: filter },
            sortInput: [{ field: 'name', dir: 'asc' }],
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
            const categories = transformRawCategories(data.categories);
            setCategories(categories);
            setCount(data.count.count);
        } else if (error) {
            console.error(
                'Error occurred while fetching Categories. Please contact application administrator.'
            );
        }
    }, [data, error]);

    return (
        <Stack spacing={3}>
            <EntitiesPageHeader
                entityNamePlural='Categories'
                backPath={paths.dashboard.categories}
                isDisplayAddButton
            />
            <Filter entityToSearch='categories' setFilter={setFilter} />
            <CategoriesTable
                count={count}
                page={page}
                rows={categories}
                rowsPerPage={rowsPerPage}
                setPage={setPage}
                setRowsPerPage={setRowsPerPage}
                loading={loading}
                error={error}
            />
        </Stack>
    );
}
