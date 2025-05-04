import { useSnackbar } from '@/contexts/snackbar/provider';
import {
    CREATE_category as CREATE_CATEGORY,
    UPDATE_category as UPDATE_CATEGORY
} from '@/operations';
import { paths } from '@/paths';
import { gql, useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    capitalize,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid2';
import { JSX, useEffect } from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { transformRawCategory } from '../utils';
import { categorySchema } from './formSchema';
import { IProps, TCategoryFormInput, TCategoryFormOutput } from './types';

interface IFieldProps {
    register: UseFormRegister<{
        name: string;
    }>;
    errors: FieldErrors<{
        name: string;
    }>;
}

function NameField({ register, errors }: IFieldProps): JSX.Element {
    return (
        <TextField
            label={capitalize('Category name')}
            placeholder='Enter category name...'
            slotProps={{
                htmlInput: {
                    type: 'text'
                }
            }}
            variant='outlined'
            required
            error={!!errors.name}
            helperText={errors.name?.message && capitalize(errors.name.message)}
            {...register('name')}
        />
    );
}

export function CategoryForm({
    isEdit,
    defaultValues,
    formType,
    closeDialog,
    handleNewCategory,
    isNavigate = true
}: IProps): JSX.Element {
    const { openSnackbar } = useSnackbar();
    const [
        createCategoryFunction,
        { data: createCategoryData, error: createCategoryError, loading: createCategoryLoading }
    ] = useMutation(CREATE_CATEGORY, {
        update(cache, { data: { set_category: data } }) {
            cache.modify({
                fields: {
                    categories(existingCategories = []) {
                        const newCategoryRef = cache.writeFragment({
                            data,
                            fragment: gql`
                                fragment NewCategory on Category {
                                    id
                                    name
                                    created_at
                                    updated_at
                                }
                            `
                        });
                        return [newCategoryRef, ...existingCategories];
                    },
                    count(existingCount) {
                        return existingCount.count + 1;
                    }
                }
            });
            if (data && handleNewCategory) {
                const sanitizedCategory = transformRawCategory(data);
                handleNewCategory(sanitizedCategory);
            }
        }
    });
    const [
        updateCategoryFunction,
        { data: updateCategoryData, error: updateCategoryError, loading: updateCategoryLoading }
    ] = useMutation(UPDATE_CATEGORY);

    const navigate = useNavigate();

    useEffect(() => {
        if (createCategoryData) {
            openSnackbar(capitalize('successfully created category'), 'success');
            if (isNavigate) {
                navigate(paths.dashboard.categories);
            }
        } else if (createCategoryError) {
            openSnackbar(createCategoryError.message, 'error');
        } else if (createCategoryLoading) {
            console.log('Loading...');
        }
    }, [createCategoryData, createCategoryError, createCategoryLoading]);

    useEffect(() => {
        if (updateCategoryData) {
            openSnackbar(capitalize('successfully updated category'), 'success');
            if (isNavigate) {
                navigate(paths.dashboard.categories);
            }
        } else if (updateCategoryError) {
            openSnackbar(updateCategoryError.message, 'error');
        } else if (updateCategoryLoading) {
            console.log('Loading...');
        }
    }, [updateCategoryData, updateCategoryError, updateCategoryLoading]);

    const {
        // watch,
        register,
        handleSubmit,
        formState: { errors, dirtyFields }
    } = useForm<TCategoryFormInput, unknown, TCategoryFormOutput>({
        resolver: zodResolver(categorySchema),
        reValidateMode: 'onChange',
        defaultValues
    });

    const createCategory = (formData: TCategoryFormOutput) => {
        return createCategoryFunction({
            variables: {
                input: {
                    name: formData.name
                }
            }
        });
    };

    const updateCategory = (formData: TCategoryFormOutput, df: typeof dirtyFields) => {
        if (!df.name) {
            return;
        }
        return updateCategoryFunction({
            variables: {
                input: {
                    id: formData.id,
                    name: formData.name
                }
            }
        });
    };

    const onSubmit = async (formData: TCategoryFormOutput) => {
        if (isEdit) {
            await updateCategory(formData, dirtyFields);
        } else {
            await createCategory(formData);
        }
    };

    // useEffect(() => {
    //     console.log('Dirty fields: ', dirtyFields);
    //     console.log('Errors: ', errors);
    // }, [dirtyFields, errors]);

    return formType === 'dialog' ? (
        <form>
            <DialogTitle>Add a new category</DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <DialogContentText>Missing the category? Please, add it!</DialogContentText>
                <FormControl fullWidth>
                    <NameField register={register} errors={errors} />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>Cancel</Button>
                <Button type='button' onClick={handleSubmit(onSubmit)}>
                    Add category
                </Button>
            </DialogActions>
        </form>
    ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
                <Divider />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid size={{ md: 12, xs: 12 }}>
                            <FormControl fullWidth>
                                <TextField
                                    label={capitalize('Category name')}
                                    placeholder='Enter category name...'
                                    slotProps={{
                                        htmlInput: {
                                            type: 'text'
                                        }
                                    }}
                                    variant='outlined'
                                    required
                                    error={!!errors.name}
                                    helperText={
                                        errors.name?.message && capitalize(errors.name.message)
                                    }
                                    {...register('name')}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button type='submit' variant='contained'>
                        Save details
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
}
