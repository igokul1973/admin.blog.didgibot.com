import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { TagForm } from '@/components/tag-form/TagForm';
import { transformRawTag } from '@/components/utils';
import { GET_TAGS } from '@/operations';
import { paths } from '@/paths';
import { IRawTag, ITag } from '@/types/tag';
import { gql } from '@apollo/client';
import { useApolloClient, useLazyQuery } from '@apollo/client/react';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { JSX, useEffect, useMemo } from 'react';
import { useParams } from 'react-router';

export default function TagUpdate(): JSX.Element {
    const { id } = useParams();
    const client = useApolloClient();

    const [getTagsFn, { data: fetchedTags, error: fetchedTagsError }] = useLazyQuery<{
        tags: IRawTag[];
        count: { count: number };
    }>(GET_TAGS);

    // Fetch the cached tag
    const rawTagFragment = client.readFragment<IRawTag>({
        id: `TagType:${id}`, // The value of the to-do item's cache ID
        fragment: gql`
            fragment Z on TagType {
                id
                name
                created_at
                updated_at
            }
        `
    });

    const rawTag: IRawTag | null = fetchedTags?.tags?.[0] ?? rawTagFragment ?? null;
    const tag: ITag | null = useMemo(() => (rawTag ? transformRawTag(rawTag) : null), [rawTag]);

    useEffect(() => {
        const fetchTag = async () => {
            await getTagsFn({
                variables: {
                    filterInput: { ids: [id] }
                }
            });
        };
        fetchTag();
    }, [rawTag, getTagsFn, id]);

    useEffect(() => {
        if (fetchedTagsError) {
            console.error(fetchedTagsError);
        }
    }, [fetchedTagsError]);

    return (
        <Stack spacing={3}>
            <EntitiesPageHeader
                backPath={paths.dashboard.tags}
                entityNamePlural='Update Tag'
                isDisplayImportExport={false}
                isDisplayBackButton
            />
            {!tag ? <Box>Tag not found</Box> : <TagForm defaultValues={{ ...tag }} isEdit={true} />}
        </Stack>
    );
}
