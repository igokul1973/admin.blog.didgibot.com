import { CategoryForm } from '@/components/category-form/CategoryForm';
import { Editor } from '@/components/editor/Editor';
import { TagForm } from '@/components/tag-form/TagForm';
import { transformRawCategories, transformRawTags } from '@/components/utils';
import { useSnackbar } from '@/contexts/snackbar/provider';
import { GET_CATEGORIES, GET_TAGS } from '@/operations';
import { paths } from '@/paths';
import { ICategory } from '@/types/category';
import { ITag } from '@/types/tag';
import { useLazyQuery, useQuery } from '@apollo/client';
import EditorJS from '@editorjs/editorjs';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Autocomplete,
    Box,
    capitalize,
    Checkbox,
    createFilterOptions,
    debounce,
    Dialog,
    FormControlLabel,
    FormHelperText,
    Paper,
    Stack,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid2';
import { JSX, useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router';
import AnnotationPopover from '../annotation-popover/AnnotationPopover';
import { CategoryAdornment, TagAdornment } from './adornments';
import { articleSchema } from './formSchema';
import { IProps, TArticleFormInput, TArticleFormOutput } from './types';

const LIMIT = 10;
const OFFSET = 0;
const filterCategories = createFilterOptions<Omit<ICategory, 'createdAt' | 'updatedAt'>>();
const filterTags = createFilterOptions<Omit<ITag, 'createdAt' | 'updatedAt'> | undefined>();
const getInitialVariables = () => ({
    filterInput: { name: '' },
    sortInput: [{ field: 'name', dir: 'asc' }],
    limit: LIMIT,
    skip: OFFSET
});

export function ArticleForm({ onSubmit, defaultValues, index }: IProps): JSX.Element {
    const { openSnackbar } = useSnackbar();

    const {
        watch,
        control,
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, dirtyFields, isDirty }
    } = useForm<TArticleFormInput, unknown, TArticleFormOutput>({
        resolver: zodResolver(articleSchema),
        reValidateMode: 'onChange',
        defaultValues
    });

    const editor = useRef<EditorJS | null>(null);

    const {
        data: initialRawCategories,
        error: initialRawCategoriesError,
        loading: initialRawCategoriesLoading
    } = useQuery(GET_CATEGORIES, {
        variables: getInitialVariables()
    });

    const {
        data: initialRawTags,
        error: initialRawTagsError,
        loading: initialRawTagsLoading
    } = useQuery(GET_TAGS, {
        variables: getInitialVariables()
    });

    const [isShowPreview, setIsShowPreview] = useState<boolean>(false);
    const [categoryOptions, setCategoryOptions] = useState<ICategory[]>([]);
    const [tagOptions, setTagOptions] = useState<ITag[]>([]);

    useEffect(() => {
        if (initialRawCategories) {
            const categories = transformRawCategories(initialRawCategories.categories, true);
            setCategoryOptions(categories);
        } else if (initialRawCategoriesError) {
            openSnackbar(initialRawCategoriesError.message, 'error');
        }
    }, [initialRawCategories, initialRawCategoriesError]);

    useEffect(() => {
        if (initialRawTags) {
            const tags = transformRawTags(initialRawTags.tags, true);
            setTagOptions(tags);
        } else if (initialRawTagsError) {
            openSnackbar(initialRawTagsError.message, 'error');
        }
    }, [initialRawTags, initialRawTagsError]);

    // Lazily load categories
    const [
        getCategoriesFn,
        {
            data: filteredCategories,
            error: filteredCategoriesError,
            loading: filteredCategoriesLoading
        }
    ] = useLazyQuery(GET_CATEGORIES);

    // Lazily load tags
    const [
        getTagsFn,
        { data: filteredTags, error: filteredTagsError, loading: filteredTagsLoading }
    ] = useLazyQuery(GET_TAGS);

    useEffect(() => {
        if (filteredCategories) {
            const categories = transformRawCategories(filteredCategories.categories);
            setCategoryOptions(categories);
        } else if (filteredCategoriesError) {
            openSnackbar(filteredCategoriesError.message, 'error');
        }
    }, [filteredCategories, filteredCategoriesError]);

    useEffect(() => {
        if (filteredTags) {
            const tags = transformRawTags(filteredTags.tags);
            setTagOptions(tags);
        } else if (filteredTagsError) {
            openSnackbar(filteredTagsError.message, 'error');
        }
    }, [filteredTags, filteredTagsError]);

    const getCategories = async (value: string) => {
        await getCategoriesFn({
            variables: {
                filter_input: { name: value },
                sort_input: [{ field: 'name', dir: 'asc' }],
                limit: LIMIT,
                skip: OFFSET
            }
        });
    };

    const getTags = async (value: string) => {
        await getTagsFn({
            variables: {
                filter_input: { name: value },
                sort_input: [{ field: 'name', dir: 'asc' }],
                limit: LIMIT,
                skip: OFFSET
            }
        });
    };
    const watchedForm = watch();

    const [openAddCategoryDialog, setOpenAddCategoryDialog] = useState<boolean>(false);
    const [openAddTagDialog, setOpenAddTagDialog] = useState<boolean>(false);

    const [addCategoryDialogValue, setAddCategoryDialogValue] = useState({
        name: ''
    });

    const [addTagDialogValue, setAddTagDialogValue] = useState({
        name: ''
    });

    const handleAddTagDialogClose = () => {
        setAddTagDialogValue({
            name: ''
        });
        setOpenAddTagDialog(false);
    };

    const handleAddCategoryDialogClose = () => {
        setAddCategoryDialogValue({
            name: ''
        });
        setOpenAddCategoryDialog(false);
    };

    const debouncedHandleGetCategories = debounce((value: string): void => {
        getCategories(value);
    }, 400);

    const debouncedHandleGetTags = debounce((value: string): void => {
        getTags(value);
    }, 400);

    const headerError = errors.translations?.[index]?.header;
    const contentError = errors.translations?.[index]?.content;
    const categoryError = errors.translations?.[index]?.category;
    const tagsError = errors.translations?.[index]?.tags;

    const handleNewCategory = (newCategory: ICategory) => {
        setCategoryOptions(
            [...categoryOptions, newCategory].sort((a: ICategory, b: ICategory) =>
                a.name.localeCompare(b.name)
            )
        );
        setValue(`translations.${index}.category`, newCategory);
        handleAddCategoryDialogClose();
    };

    const handleNewTag = (newTag: ITag) => {
        setTagOptions(
            [...tagOptions, newTag].sort((a: ITag, b: ITag) => a.name.localeCompare(b.name))
        );
        const tags = watchedForm.translations[index].tags;
        setValue(`translations.${index}.tags`, tags?.length ? [...tags, newTag] : [newTag]);
        handleAddTagDialogClose();
    };

    return (
        <>
            <form
                onSubmit={handleSubmit((formData: TArticleFormOutput) =>
                    onSubmit(formData, dirtyFields)
                )}
                noValidate
            >
                <Card key={index}>
                    <Divider />
                    <CardContent>
                        <Grid size={{ md: 12, xs: 12 }}>
                            <Stack spacing={4}>
                                <FormControl>
                                    <TextField
                                        label={capitalize('Article header')}
                                        placeholder='Enter article header...'
                                        slotProps={{
                                            htmlInput: {
                                                type: 'text'
                                            }
                                        }}
                                        variant='outlined'
                                        required
                                        error={!!headerError}
                                        helperText={
                                            !!headerError?.message &&
                                            capitalize(headerError.message)
                                        }
                                        {...register(`translations.${index}.header`)}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Controller
                                        name={`translations.${index}.content`}
                                        control={control}
                                        render={({ field: { onChange, value, ref, ...field } }) => (
                                            <Editor
                                                key={index}
                                                index={index}
                                                editor={editor}
                                                initialValue={value}
                                                onChange={onChange}
                                                {...field}
                                            />
                                        )}
                                    />
                                    {contentError?.blocks && (
                                        <FormHelperText sx={{ color: 'error.main' }}>
                                            {contentError.blocks.message &&
                                                capitalize(contentError.blocks.message)}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <FormControl fullWidth>
                                    <Tooltip
                                        title={capitalize(
                                            'check the box if you want this article to be published'
                                        )}
                                    >
                                        <Controller
                                            name={`translations.${index}.isPublished`}
                                            control={control}
                                            render={({ field: { value, ...field } }) => {
                                                return (
                                                    <FormControlLabel
                                                        sx={{ alignSelf: 'flex-start' }}
                                                        label={capitalize('Is published') + '?'}
                                                        control={<Checkbox />}
                                                        checked={value}
                                                        {...field}
                                                    />
                                                );
                                            }}
                                        />
                                    </Tooltip>
                                </FormControl>
                                <FormControl fullWidth>
                                    <Controller
                                        name={`translations.${index}.category`}
                                        control={control}
                                        render={({ field: { onChange, ref, ...field } }) => {
                                            return (
                                                <Autocomplete
                                                    freeSolo
                                                    options={categoryOptions}
                                                    loading={
                                                        initialRawCategoriesLoading ||
                                                        filteredCategoriesLoading
                                                    }
                                                    filterOptions={(options, params) => {
                                                        const filteredOptions = filterCategories(
                                                            options,
                                                            params
                                                        );

                                                        if (
                                                            params.inputValue !== '' &&
                                                            !options.find(
                                                                (o) => o?.name === params.inputValue
                                                            )
                                                        ) {
                                                            filteredOptions.push({
                                                                id: '',
                                                                name: `Add "${params.inputValue}"`
                                                            });
                                                            if (
                                                                addCategoryDialogValue.name !==
                                                                params.inputValue
                                                            ) {
                                                                setAddCategoryDialogValue({
                                                                    name: params.inputValue
                                                                });
                                                            }
                                                        } else if (addCategoryDialogValue.name) {
                                                            setAddCategoryDialogValue({
                                                                name: ''
                                                            });
                                                        }

                                                        return filteredOptions;
                                                    }}
                                                    onInputChange={(_, value, reason) => {
                                                        if (reason === 'blur') {
                                                            debouncedHandleGetCategories('');
                                                        } else if (
                                                            reason !== 'reset' &&
                                                            !categoryOptions.find((c) =>
                                                                c.name.includes(value)
                                                            )
                                                        ) {
                                                            debouncedHandleGetCategories(value);
                                                        }
                                                    }}
                                                    getOptionLabel={(option) => {
                                                        if (!option) {
                                                            return '';
                                                        } else if (typeof option === 'string') {
                                                            return option;
                                                        }
                                                        return option.name;
                                                    }}
                                                    selectOnFocus
                                                    clearOnBlur
                                                    handleHomeEndKeys
                                                    onChange={(_, newValue) => {
                                                        if (
                                                            typeof newValue === 'string' ||
                                                            newValue?.name.includes('Add')
                                                        ) {
                                                            // timeout to avoid instant validation of the dialog's form.
                                                            setTimeout(() => {
                                                                setOpenAddCategoryDialog(true);
                                                            });
                                                        } else {
                                                            onChange(newValue);
                                                        }
                                                    }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            required
                                                            slotProps={{
                                                                input: {
                                                                    ...params.InputProps,
                                                                    startAdornment: (
                                                                        <>
                                                                            <CategoryAdornment />
                                                                            {
                                                                                params.InputProps
                                                                                    .startAdornment
                                                                            }
                                                                        </>
                                                                    )
                                                                }
                                                            }}
                                                            error={!!categoryError}
                                                            helperText={
                                                                !!categoryError &&
                                                                'message' in categoryError &&
                                                                categoryError.message &&
                                                                capitalize(categoryError.message)
                                                            }
                                                            label={capitalize('category')}
                                                            placeholder={capitalize(
                                                                'select category'
                                                            )}
                                                            inputRef={ref}
                                                        />
                                                    )}
                                                    {...field}
                                                />
                                            );
                                        }}
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <Controller
                                        name={`translations.${index}.tags`}
                                        control={control}
                                        render={({ field: { onChange, ref, ...field } }) => {
                                            return (
                                                <Autocomplete
                                                    multiple
                                                    freeSolo
                                                    options={tagOptions}
                                                    loading={
                                                        initialRawTagsLoading || filteredTagsLoading
                                                    }
                                                    filterOptions={(options, params) => {
                                                        const filteredOptions = filterTags(
                                                            options,
                                                            params
                                                        );

                                                        if (
                                                            params.inputValue !== '' &&
                                                            !options.find(
                                                                (o) => o?.name === params.inputValue
                                                            )
                                                        ) {
                                                            filteredOptions.push({
                                                                id: '',
                                                                name: `Add "${params.inputValue}"`
                                                            });
                                                            if (
                                                                addTagDialogValue.name !==
                                                                params.inputValue
                                                            ) {
                                                                setAddTagDialogValue({
                                                                    name: params.inputValue
                                                                });
                                                            }
                                                        } else if (addTagDialogValue.name) {
                                                            setAddTagDialogValue({
                                                                name: ''
                                                            });
                                                        }

                                                        return filteredOptions;
                                                    }}
                                                    onInputChange={(_, value) => {
                                                        if (
                                                            !tagOptions.find((c) =>
                                                                c.name.includes(value)
                                                            )
                                                        ) {
                                                            debouncedHandleGetTags(value);
                                                        }
                                                    }}
                                                    getOptionLabel={(option) => {
                                                        if (!option) {
                                                            return '';
                                                        } else if (typeof option === 'string') {
                                                            return option;
                                                        }
                                                        return option.name;
                                                    }}
                                                    selectOnFocus
                                                    clearOnBlur
                                                    handleHomeEndKeys
                                                    getOptionDisabled={(option) =>
                                                        !!watchedForm.translations[index].tags &&
                                                        !!watchedForm.translations[index].tags.find(
                                                            (t) => t?.name === option?.name
                                                        )
                                                    }
                                                    onChange={(event, newValue) => {
                                                        const clickedOptionText = (
                                                            event.target as HTMLElement
                                                        ).textContent;
                                                        if (
                                                            Array.isArray(newValue) &&
                                                            clickedOptionText?.includes('Add')
                                                        ) {
                                                            // timeout to avoid instant validation of the dialog's form.
                                                            setTimeout(() => {
                                                                setOpenAddTagDialog(true);
                                                            });
                                                        } else {
                                                            onChange(newValue);
                                                        }
                                                    }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            slotProps={{
                                                                input: {
                                                                    ...params.InputProps,
                                                                    startAdornment: (
                                                                        <>
                                                                            <TagAdornment />
                                                                            {
                                                                                params.InputProps
                                                                                    .startAdornment
                                                                            }
                                                                        </>
                                                                    )
                                                                }
                                                            }}
                                                            error={!!tagsError}
                                                            helperText={
                                                                !!tagsError &&
                                                                'message' in tagsError &&
                                                                tagsError.message &&
                                                                capitalize(tagsError.message)
                                                            }
                                                            label={capitalize('tag')}
                                                            placeholder={capitalize('select tag')}
                                                        />
                                                    )}
                                                    {...field}
                                                />
                                            );
                                        }}
                                    />
                                </FormControl>
                                <Dialog
                                    open={openAddCategoryDialog}
                                    onClose={handleAddCategoryDialogClose}
                                >
                                    <CategoryForm
                                        isEdit={false}
                                        defaultValues={addCategoryDialogValue}
                                        formType='dialog'
                                        closeDialog={handleAddCategoryDialogClose}
                                        handleNewCategory={handleNewCategory}
                                        isNavigate={false}
                                    />
                                </Dialog>
                                <Dialog open={openAddTagDialog} onClose={handleAddTagDialogClose}>
                                    <TagForm
                                        isEdit={false}
                                        defaultValues={addTagDialogValue}
                                        formType='dialog'
                                        closeDialog={handleAddTagDialogClose}
                                        handleNewTag={handleNewTag}
                                        isNavigate={false}
                                    />
                                </Dialog>
                            </Stack>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Button
                            type='button'
                            variant='contained'
                            color='warning'
                            onClick={() => reset()}
                        >
                            Reset
                        </Button>

                        <Button
                            variant='contained'
                            color='primary'
                            sx={{ mr: 'auto' }}
                            onClick={() => setIsShowPreview(!isShowPreview)}
                        >
                            {isShowPreview ? 'Hide Preview' : 'Show Preview'}
                        </Button>
                        <Button
                            component={Link}
                            to={paths.dashboard.articles}
                            variant='contained'
                            color='error'
                        >
                            Go back
                        </Button>
                        {/* <Button type='submit' variant='contained' disabled={!isDirty || !isValid}>
                            Save details
                        </Button> */}
                        <Button type='submit' variant='contained' disabled={!isDirty}>
                            Save details
                        </Button>
                    </CardActions>
                </Card>
            </form>
            {/* <Box>
                <pre>Is dirty: {JSON.stringify(isDirty, null, 2)}</pre>
                <pre>Is valid: {JSON.stringify(isValid, null, 2)}</pre>
                <pre>{JSON.stringify(watchedForm, null, 2)}</pre>
            </Box> */}

            {watchedForm.translations[index].content && isShowPreview && (
                <Paper sx={{ mt: 1, p: 2 }}>
                    <Typography variant='h5' sx={{ mb: 2 }} color='primary'>
                        Preview
                    </Typography>
                    <Box sx={{ border: '1px solid #ccc', p: 2, borderRadius: '4px' }}>
                        <AnnotationPopover translation={watchedForm['translations'][index]} />
                        {/* <pre>
                            {JSON.stringify(watchedForm.translations[index].content, null, 2)}
                        </pre> */}
                    </Box>
                </Paper>
            )}
        </>
    );
}
