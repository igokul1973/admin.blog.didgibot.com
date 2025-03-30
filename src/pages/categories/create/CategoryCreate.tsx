import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { CategoryForm } from '@/components/category-form/CategoryForm';
import Stack from '@mui/material/Stack';
import { JSX } from 'react';
import { paths } from '@/paths';

export default function CategoryCreate(): JSX.Element {
    return (
        <Stack spacing={3}>
            <EntitiesPageHeader
                backPath={paths.dashboard.categories}
                entityNamePlural='Create Category'
                isDisplayImportExport={false}
                isDisplayBackButton
            />
            <CategoryForm defaultValues={{ name: '' }} isEdit={false} />
        </Stack>
    );
}
