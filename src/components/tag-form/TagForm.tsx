import { useSnackbar } from '@/contexts/snackbar/provider';
import { paths } from '@/paths';
import { gql, useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { capitalize, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid2';
import { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { tagCreateSchema, tagUpdateSchema } from './formSchema';
import { IProps, TTagForm, TTagFormOutput } from './types';

const CREATE_TAG = gql`
    mutation set_tag($input: TagInputType!) {
        set_tag(data: $input) {
            id
            name
        }
    }
`;

export function TagForm({ isEdit, defaultValues }: IProps): JSX.Element {
    const { openSnackbar } = useSnackbar();
    const [
        createTagFunction,
        { data: createTagData, error: createTagError, loading: createTagLoading }
    ] = useMutation(CREATE_TAG);
    const [
        updateTagFunction,
        { data: updateTagData, error: updateTagError, loading: updateTagLoading }
    ] = useMutation(CREATE_TAG);

    const navigate = useNavigate();

    const {
        // watch,
        register,
        handleSubmit,
        formState: { errors, dirtyFields }
    } = useForm<TTagForm, unknown, TTagFormOutput>({
        resolver: zodResolver(isEdit ? tagUpdateSchema : tagCreateSchema),
        reValidateMode: 'onChange',
        defaultValues
    });

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
        return updateTagFunction({
            variables: {
                input: {
                    name: formData.name
                }
            }
        });
    };

    const onSubmit = async (formData: TTagFormOutput) => {
        if (isEdit) {
            const res = await updateTag(formData, dirtyFields);
            if (res.errors) {
                openSnackbar(capitalize('could not update user'), 'error');
            } else {
                openSnackbar(capitalize('successfully updated user'));
                navigate(paths.dashboard.tags);
            }
        } else {
            const res = await createTag(formData);
            if (res.errors) {
                openSnackbar(capitalize(res.errors[0].message), 'error');
            } else {
                openSnackbar(capitalize('successfully created user'));
                navigate(paths.dashboard.tags);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
                <Divider />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid size={{ md: 12, xs: 12 }}>
                            <FormControl fullWidth>
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
