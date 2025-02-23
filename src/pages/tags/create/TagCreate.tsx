import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { TagForm } from '@/components/tag-form/TagForm';
import Stack from '@mui/material/Stack';
import { JSX } from 'react';

export default function TagCreate(): JSX.Element {
    return (
        <Stack spacing={3}>
            <EntitiesPageHeader
                entityNamePlural='Create Tag'
                isDisplayImportExport={false}
                isDisplayBackButton
            />
            <TagForm defaultValues={{ name: '' }} isEdit={false} />
        </Stack>
    );
}
