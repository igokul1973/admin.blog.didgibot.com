import { CategoryForm } from '@/components/category-form/CategoryForm';
import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { transformRawCategory } from '@/components/utils';
import { GET_CATEGORIES } from '@/operations';
import { paths } from '@/paths';
import { ICategory, IRawCategory } from '@/types/category';
import { gql, useApolloClient, useLazyQuery } from '@apollo/client';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { JSX, useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function CategoryUpdate(): JSX.Element {
    const { id } = useParams();
    const client = useApolloClient();

    const [
        getCategoriesFn,
        {
            data: fetchedCategories,
            error: fetchedCategoriesError,
            loading: fetchedCategoriesLoading
        }
    ] = useLazyQuery(GET_CATEGORIES);

    // Fetch the cached category
    const rawCategoryFragment = client.readFragment({
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

    const [rawCategory, setRawCategory] = useState<IRawCategory | null>(rawCategoryFragment);
    const [category, setCategory] = useState<ICategory | null>(null);

    useEffect(() => {
        const fetchCategory = async () => {
            await getCategoriesFn({
                variables: {
                    filterInput: { ids: [id] }
                }
            });
        };
        if (rawCategory) {
            const category = rawCategory && transformRawCategory(rawCategory);
            setCategory(category);
        } else {
            fetchCategory();
        }
    }, [rawCategory]);

    useEffect(() => {
        if (fetchedCategories && fetchedCategories.categories.length > 0) {
            setRawCategory(fetchedCategories.categories[0]);
        } else if (fetchedCategoriesError) {
            console.error(fetchedCategoriesError);
        }
    }, [fetchedCategories, fetchedCategoriesError, fetchedCategoriesLoading]);

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
