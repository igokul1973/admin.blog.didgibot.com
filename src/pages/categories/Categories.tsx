import CategoriesTable from '@/components/categories-table/CategoriesTable';
import Filter from '@/components/filter/Filter';
import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { IRawCategory } from '@/types/category';
import { gql, useQuery } from '@apollo/client';
import { Stack } from '@mui/material';
import { JSX, useEffect, useState } from 'react';
import { DEFAULT_ROWS_PER_PAGE } from '../constants';

const GET_CATEGORIES = gql`
    query categories($filter: String, $limit: Int, $skip: Int, $entityName: EntityEnum) {
        categories(filter_input: { name: $filter }, limit: $limit, skip: $skip) {
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

export default function Categories(): JSX.Element {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
    const [skip, setSkip] = useState(0);
    const [filter, setFilter] = useState('');

    const { data, error, loading } = useQuery(GET_CATEGORIES, {
        variables: { limit: rowsPerPage, skip, entityName: 'category', filter }
    });

    useEffect(() => {
        setSkip(page * rowsPerPage);
    }, [page]);

    useEffect(() => {
        setPage(0);
    }, [filter]);

    let categories = data?.categories ?? [];
    if (categories.length > 0) {
        categories = categories.map((category: IRawCategory) => {
            return {
                id: category.id,
                name: category.name,
                createdAt: new Date(category.created_at),
                updatedAt: new Date(category.updated_at)
            };
        });
    }

    const count = data?.count.count ?? 0;

    return (
        <Stack spacing={3}>
            <EntitiesPageHeader entityNamePlural='Categories' isDisplayAddButton />
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
