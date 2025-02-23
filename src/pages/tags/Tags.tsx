import Filter from '@/components/filter/Filter';
import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import TagsTable from '@/components/tags-table/TagsTable';
import { IRawTag } from '@/types/tag';
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { DEFAULT_ROWS_PER_PAGE } from '../constants';

const GET_TAGS = gql`
    query tags($filter: String, $limit: Int, $skip: Int, $entityName: EntityEnum) {
        tags(filter_input: { name: $filter }, limit: $limit, skip: $skip) {
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

export default function Tags(): React.JSX.Element {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
    const [skip, setSkip] = useState(0);
    const [filter, setFilter] = useState('');

    const { data, error, loading } = useQuery(GET_TAGS, {
        variables: { limit: rowsPerPage, skip, entityName: 'tag', filter }
    });

    const client = useApolloClient();
    console.log('Client: ', client);

    useEffect(() => {
        setSkip(page * rowsPerPage);
    }, [page]);

    useEffect(() => {
        setPage(0);
    }, [filter]);

    let tags = data?.tags ?? [];
    if (tags.length > 0) {
        tags = tags.map((tag: IRawTag) => {
            return {
                id: tag.id,
                name: tag.name,
                createdAt: new Date(tag.created_at),
                updatedAt: new Date(tag.updated_at)
            };
        });
    }

    const count = data?.count.count ?? 0;

    return (
        <Stack spacing={3}>
            <EntitiesPageHeader entityNamePlural='Tags' isDisplayAddButton />
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
