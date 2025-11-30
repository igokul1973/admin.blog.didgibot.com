import { useSnackbar } from '@/hooks/use-snackbar';
import { paths } from '@/paths';
import { IRawTag } from '@/types/tag';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
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
import Grid from '@mui/material/Grid';
import { JSX, useEffect } from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { transformRawTag } from '../utils';
import { tagSchema } from './formSchema';
import { IProps, TTagFormInput, TTagFormOutput } from './types';

const CREATE_TAG = gql`
    mutation set_tag($input: TagCreateInputType!) {
        set_tag(data: $input) {
            id
            name
            created_at
            updated_at
        }
    }
`;

const UPDATE_TAG = gql`
    mutation update_tag($input: TagUpdateInputType!) {
        update_tag(data: $input) {
            id
            name
            created_at
            updated_at
        }
    }
`;

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
            label={capitalize('Tag name')}
            placeholder='Enter tag name...'
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

export function TagForm({
    isEdit,
    defaultValues,
    formType,
    closeDialog,
    handleNewTag,
    isNavigate = true
}: IProps): JSX.Element {
    const { openSnackbar } = useSnackbar();
    const [
        createTagFunction,
        { data: createTagData, error: createTagError, loading: createTagLoading }
    ] = useMutation<{ set_tag: IRawTag }>(CREATE_TAG, {
        update(cache, { data }) {
            if (!data?.set_tag) {
                return;
            }
            const tag = data.set_tag;
            cache.modify({
                fields: {
                    tags(existingTags = []) {
                        const newTagRef = cache.writeFragment({
                            data: tag,
                            fragment: gql`
                                fragment NewTag on Tag {
                                    id
                                    name
                                    created_at
                                    updated_at
                                }
                            `
                        });
                        return [newTagRef, ...existingTags];
                    },
                    count(existingCount) {
                        return existingCount.count + 1;
                    }
                }
            });
            if (handleNewTag) {
                const sanitizedTag = transformRawTag(tag);
                handleNewTag(sanitizedTag);
            }
        }
    });
    const [
        updateTagFunction,
        { data: updateTagData, error: updateTagError, loading: updateTagLoading }
    ] = useMutation(UPDATE_TAG);

    const navigate = useNavigate();

    useEffect(() => {
        if (createTagData) {
            openSnackbar(capitalize('successfully created tag'), 'success');
            if (isNavigate) {
                navigate(paths.dashboard.tags);
            }
        } else if (createTagError) {
            openSnackbar(createTagError.message, 'error');
        } else if (createTagLoading) {
            console.log('Creating tag...');
        }
    }, [createTagData, createTagError, createTagLoading, isNavigate, navigate, openSnackbar]);

    useEffect(() => {
        if (updateTagData) {
            openSnackbar(capitalize('successfully updated tag'), 'success');
            if (isNavigate) {
                navigate(paths.dashboard.tags);
            }
        } else if (updateTagError) {
            openSnackbar(updateTagError.message, 'error');
        } else if (updateTagLoading) {
            console.log('Updating tag...');
        }
    }, [isNavigate, navigate, openSnackbar, updateTagData, updateTagError, updateTagLoading]);

    const {
        // watch,
        register,
        handleSubmit,
        formState: { errors, dirtyFields }
    } = useForm<TTagFormInput, unknown, TTagFormOutput>({
        resolver: zodResolver(tagSchema),
        reValidateMode: 'onChange',
        defaultValues
    });

    useEffect(() => {
        if (errors) {
            console.log('Errors: ', errors);
        }
    }, [errors]);

    const createTag = (formData: TTagFormOutput) => {
        return createTagFunction({
            variables: {
                input: {
                    name: formData.name
                }
            }
        });
    };

    const updateTag = (formData: TTagFormOutput, df: typeof dirtyFields) => {
        if (!df.name) {
            return;
        }
        return updateTagFunction({
            variables: {
                input: {
                    id: formData.id,
                    name: formData.name
                }
            }
        });
    };

    const onSubmit = async (formData: TTagFormOutput) => {
        if (isEdit) {
            await updateTag(formData, dirtyFields);
        } else {
            await createTag(formData);
        }
    };

    return formType === 'dialog' ? (
        <form>
            <DialogTitle>Add a new tag</DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <DialogContentText>Missing the tag? Please, add it!</DialogContentText>
                <FormControl fullWidth>
                    <NameField register={register} errors={errors} />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>Cancel</Button>
                <Button type='button' onClick={handleSubmit(onSubmit)}>
                    Add tag
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
                                <NameField register={register} errors={errors} />
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
