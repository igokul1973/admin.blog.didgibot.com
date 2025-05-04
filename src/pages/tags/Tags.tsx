import Filter from '@/components/filter/Filter';
import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import TagsTable, { ITagTableRow } from '@/components/tags-table/TagsTable';
import { transformRawTags } from '@/components/utils';
import { GET_TAGS } from '@/operations';
import { paths } from '@/paths';
import { IRawTag } from '@/types/tag';
import { useQuery } from '@apollo/client';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { DEFAULT_ROWS_PER_PAGE } from '../constants';

export default function Tags(): React.JSX.Element {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
    const [skip, setSkip] = useState(0);
    const [filter, setFilter] = useState('');
    const [tags, setTags] = useState<ITagTableRow[]>([]);
    const [count, setCount] = useState<number>(0);

    const { data, error, loading } = useQuery<{
        tags: IRawTag[];
        count: { count: number };
    }>(GET_TAGS, {
        variables: {
            entityName: 'tag',
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
            const tags = transformRawTags(data.tags);
            setTags(tags);
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
                entityNamePlural='Tags'
                backPath={paths.dashboard.categories}
                isDisplayAddButton
            />
            <Filter entityToSearch='tags' setFilter={setFilter} />
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
