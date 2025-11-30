import Filter from '@/components/filter/Filter';
import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import TagsTable from '@/components/tags-table/TagsTable';
import { transformRawTags } from '@/components/utils';
import { GET_TAGS } from '@/operations';
import { paths } from '@/paths';
import { IRawTag, ITag } from '@/types/tag';
import { useQuery } from '@apollo/client/react';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { DEFAULT_ROWS_PER_PAGE } from '../constants';

export default function Tags(): React.JSX.Element {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
    const [filter, setFilter] = useState('');

    const handleFilterChange = (value: string) => {
        setFilter(value);
        setPage(0);
    };

    const { data, error, loading } = useQuery<{
        tags: IRawTag[];
        count: { count: number };
    }>(GET_TAGS, {
        variables: {
            entityName: 'tag',
            filterInput: { name: filter },
            sortInput: [{ field: 'name', dir: 'asc' }],
            limit: rowsPerPage,
            skip: page * rowsPerPage
        }
    });

    const tags: ITag[] = data ? transformRawTags(data.tags) : [];
    const count: number = data ? data.count.count : 0;

    useEffect(() => {
        if (error) {
            console.error(
                'Error occurred while fetching Categories. Please contact application administrator.'
            );
        }
    }, [error]);

    return (
        <Stack spacing={3}>
            <EntitiesPageHeader
                entityNamePlural='Tags'
                backPath={paths.dashboard.categories}
                isDisplayAddButton
            />
            <Filter entityToSearch='tags' setFilter={handleFilterChange} />
            <TagsTable
                count={count}
                page={page}
                rows={tags}
                rowsPerPage={rowsPerPage}
                setPage={setPage}
                setRowsPerPage={setRowsPerPage}
                loading={loading}
                error={error}
            />
        </Stack>
    );
}
