import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { TagForm } from '@/components/tag-form/TagForm';
import { gql, useApolloClient } from '@apollo/client';
import Stack from '@mui/material/Stack';
import { JSX } from 'react';
import { useParams } from 'react-router';

export default function TagUpdate(): JSX.Element {
    const { id } = useParams();
    const client = useApolloClient();

    // Fetch the cached tag
    const tag = client.readFragment({
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

    return (
        <Stack spacing={3}>
            <EntitiesPageHeader
                entityNamePlural='Update Tag'
                isDisplayImportExport={false}
                isDisplayBackButton
            />
            <TagForm defaultValues={{ ...tag }} isEdit={true} />
        </Stack>
    );
}
