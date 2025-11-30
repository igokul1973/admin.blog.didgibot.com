import { CategoryForm } from '@/components/category-form/CategoryForm';
import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { transformRawCategory } from '@/components/utils';
import { GET_CATEGORIES } from '@/operations';
import { paths } from '@/paths';
import { ICategory, IRawCategory } from '@/types/category';
import { gql } from '@apollo/client';
import { useApolloClient, useLazyQuery } from '@apollo/client/react';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { JSX, useEffect, useMemo } from 'react';
import { useParams } from 'react-router';

export default function CategoryUpdate(): JSX.Element {
    const { id } = useParams();
    const client = useApolloClient();

    const [getCategoriesFn, { data: fetchedCategories, error: fetchedCategoriesError }] =
        useLazyQuery<{ categories: IRawCategory[]; count: { count: number } }>(GET_CATEGORIES);

    // Fetch the cached category
    const rawCategoryFragment = client.readFragment<IRawCategory>({
        id: `CategoryType:${id}`, // The value of the to-do item's cache ID
        fragment: gql`
            fragment Z on CategoryType {
                id
                name
                created_at
                updated_at
            }
        `
    });

    const rawCategory: IRawCategory | null =
        fetchedCategories?.categories?.[0] ?? rawCategoryFragment ?? null;

    const category: ICategory | null = useMemo(
        () => (rawCategory ? transformRawCategory(rawCategory) : null),
        [rawCategory]
    );

    useEffect(() => {
        if (!rawCategory) {
            const fetchCategory = async () => {
                await getCategoriesFn({
                    variables: {
                        filterInput: { ids: [id] }
                    }
                });
            };
            fetchCategory();
        }
    }, [getCategoriesFn, id, rawCategory]);

    useEffect(() => {
        if (fetchedCategoriesError) {
            console.error(fetchedCategoriesError);
        }
    }, [fetchedCategoriesError]);

    return (
        <Stack spacing={3}>
            <EntitiesPageHeader
                backPath={paths.dashboard.categories}
                entityNamePlural='Update Category'
                isDisplayImportExport={false}
                isDisplayBackButton
            />
            {!category ? (
                <Box>Category not found</Box>
            ) : (
                <CategoryForm defaultValues={{ ...category }} isEdit={true} />
            )}
        </Stack>
    );
}
