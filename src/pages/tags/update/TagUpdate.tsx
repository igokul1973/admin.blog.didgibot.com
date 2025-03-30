import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { TagForm } from '@/components/tag-form/TagForm';
import { transformRawTag } from '@/components/utils';
import { GET_TAGS } from '@/operations';
import { paths } from '@/paths';
import { IRawTag, ITag } from '@/types/tag';
import { gql, useApolloClient, useLazyQuery } from '@apollo/client';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { JSX, useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function TagUpdate(): JSX.Element {
    const { id } = useParams();
    const client = useApolloClient();

    const [getTagsFn, { data: fetchedTags, error: fetchedTagsError, loading: fetchedTagsLoading }] =
        useLazyQuery(GET_TAGS);

    // Fetch the cached tag
    const rawTagFragment = client.readFragment({
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

    const [rawTag, setRawTag] = useState<IRawTag | null>(rawTagFragment);
    const [tag, setTag] = useState<ITag | null>(null);

    useEffect(() => {
        const fetchTag = async () => {
            await getTagsFn({
                variables: {
                    filterInput: { ids: [id] }
                }
            });
        };
        if (rawTag) {
            const tag = rawTag && transformRawTag(rawTag);
            setTag(tag);
        } else {
            fetchTag();
        }
    }, [rawTag]);

    useEffect(() => {
        if (fetchedTags && fetchedTags.tags.length > 0) {
            setRawTag(fetchedTags.tags[0]);
        } else if (fetchedTagsError) {
            console.error(fetchedTagsError);
        }
    }, [fetchedTags, fetchedTagsError, fetchedTagsLoading]);

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
