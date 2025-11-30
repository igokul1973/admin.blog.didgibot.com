import { useSnackbar } from '@/hooks/use-snackbar';
import { GET_CATEGORIES, GET_TAGS } from '@/operations';
import { ICategory, IRawCategory } from '@/types/category';
import { IRawTag, ITag } from '@/types/tag';
import { LanguageEnum } from '@/types/translation';
import { useLazyQuery, useQuery } from '@apollo/client/react';
import EditorJS from '@editorjs/editorjs';
import {
    Autocomplete,
    capitalize,
    Checkbox,
    createFilterOptions,
    debounce,
    Dialog,
    FormControl,
    FormControlLabel,
    FormHelperText,
    TextField,
    Tooltip
} from '@mui/material';
import { FocusEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CategoryForm } from '../category-form/CategoryForm';
import { Editor } from '../editor/Editor';
import { TagForm } from '../tag-form/TagForm';
import { generateSlug, transformRawCategories, transformRawTags } from '../utils';
import { CategoryAdornment, TagAdornment } from './adornments';
import { TArticleFormInput, TArticleFormOutput } from './types';

const LIMIT = 10;
const OFFSET = 0;

const getInitialVariables = () => ({
    filterInput: { name: '' },
    sortInput: [{ field: 'name', dir: 'asc' }],
    limit: LIMIT,
    skip: OFFSET
});

export function TranslationForm({
    language,
    languageIndex
}: {
    language: LanguageEnum;
    languageIndex: number;
}) {
    const { openSnackbar } = useSnackbar();
    const editor = useRef<EditorJS | null>(null);

    const filterCategories = createFilterOptions<Omit<ICategory, 'createdAt' | 'updatedAt'>>();
    const filterTags = createFilterOptions<Omit<ITag, 'createdAt' | 'updatedAt'> | undefined>();

    const {
        watch,
        control,
        register,
        setValue,
        formState: { errors }
    } = useFormContext<TArticleFormInput, unknown, TArticleFormOutput>();

    const {
        data: initialRawCategories,
        error: initialRawCategoriesError,
        loading: initialRawCategoriesLoading
    } = useQuery<{ categories: IRawCategory[]; count: { count: number } }>(GET_CATEGORIES, {
        variables: getInitialVariables()
    });

    const {
        data: initialRawTags,
        error: initialRawTagsError,
        loading: initialRawTagsLoading
    } = useQuery<{ tags: IRawTag[]; count: { count: number } }>(GET_TAGS, {
        variables: getInitialVariables()
    });

    const watchedForm = watch();

    // Lazily load categories
    const [
        getCategoriesFn,
        {
            data: filteredCategories,
            error: filteredCategoriesError,
            loading: filteredCategoriesLoading
        }
    ] = useLazyQuery<{ categories: IRawCategory[]; count: { count: number } }>(GET_CATEGORIES);

    // Lazily load tags
    const [
        getTagsFn,
        { data: filteredTags, error: filteredTagsError, loading: filteredTagsLoading }
    ] = useLazyQuery<{ tags: IRawTag[]; count: { count: number } }>(GET_TAGS);

    const categoryOptions = filteredCategories
        ? transformRawCategories(filteredCategories.categories)
        : initialRawCategories
          ? transformRawCategories(initialRawCategories.categories, true)
          : [];

    const tagOptions = filteredTags
        ? transformRawTags(filteredTags.tags)
        : initialRawTags
          ? transformRawTags(initialRawTags.tags, true)
          : [];

    useEffect(() => {
        if (initialRawCategoriesError) {
            openSnackbar(initialRawCategoriesError.message, 'error');
        }
    }, [initialRawCategoriesError, openSnackbar]);

    useEffect(() => {
        if (initialRawTagsError) {
            openSnackbar(initialRawTagsError.message, 'error');
        }
    }, [initialRawTagsError, openSnackbar]);

    useEffect(() => {
        if (filteredCategoriesError) {
            openSnackbar(filteredCategoriesError.message, 'error');
        }
    }, [filteredCategoriesError, openSnackbar]);

    useEffect(() => {
        if (filteredTagsError) {
            openSnackbar(filteredTagsError.message, 'error');
        }
    }, [filteredTagsError, openSnackbar]);

    const getCategories = useCallback(
        async (value: string) => {
            await getCategoriesFn({
                variables: {
                    filterInput: { name: value },
                    sortInput: [{ field: 'name', dir: 'asc' }],
                    limit: LIMIT,
                    skip: OFFSET
                }
            });
        },
        [getCategoriesFn]
    );

    const getTags = useCallback(
        async (value: string) => {
            await getTagsFn({
                variables: {
                    filterInput: { name: value },
                    sortInput: [{ field: 'name', dir: 'asc' }],
                    limit: LIMIT,
                    skip: OFFSET
                }
            });
        },
        [getTagsFn]
    );

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

    const debouncedHandleGetCategories = useMemo(
        () =>
            debounce((value: string): void => {
                getCategories(value);
            }, 400),
        [getCategories]
    );

    const debouncedHandleGetTags = useMemo(
        () =>
            debounce((value: string): void => {
                getTags(value);
            }, 400),
        [getTags]
    );

    const debouncedHandleUpdateSlug = useMemo(
        () =>
            debounce((value: string): void => {
                if (language === LanguageEnum.EN) {
                    const newSlug = generateSlug(value);

                    setValue('slug', newSlug, {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true
                    });
                }
            }),
        [language, setValue]
    );

    const headerError = errors.translations?.[languageIndex]?.header;
    const contentError = errors.translations?.[languageIndex]?.content;
    const categoryError = errors.translations?.[languageIndex]?.category;
    const tagsError = errors.translations?.[languageIndex]?.tags;

    const handleNewCategory = (newCategory: ICategory) => {
        setValue(`translations.${languageIndex}.category`, newCategory);
        handleAddCategoryDialogClose();
    };

    const handleNewTag = (newTag: ITag) => {
        const tags = watchedForm.translations[languageIndex].tags;
        setValue(`translations.${languageIndex}.tags`, tags?.length ? [...tags, newTag] : [newTag]);
        handleAddTagDialogClose();
    };

    const handleCategoryFieldClear = async (
        event: FocusEvent<HTMLDivElement, Element>
    ): Promise<void> => {
        console.log('Clearing occurred and here is the event: ', event);
        await getTags('');
    };

    const handleTagFieldClear = async (
        event: FocusEvent<HTMLDivElement, Element>
    ): Promise<void> => {
        console.log('Clearing occurred and here is the event: ', event);
        await getTags('');
    };

    return (
        <>
            <FormControl>
                <TextField
                    label={capitalize('Article header')}
                    placeholder='Enter article header...'
                    slotProps={{
                        htmlInput: {
                            type: 'text'
                        }
                    }}
                    {...register(`translations.${languageIndex}.header`)}
                    onChange={(e) => {
                        register(`translations.${languageIndex}.header`).onChange(e);
                        debouncedHandleUpdateSlug(e.target.value);
                    }}
                    variant='outlined'
                    required
                    error={!!headerError}
                    helperText={!!headerError?.message && capitalize(headerError.message)}
                />
            </FormControl>
            <FormControl>
                <Controller
                    name={`translations.${languageIndex}.content`}
                    control={control}
                    render={({ field: { onChange, value, ...field } }) => (
                        <Editor
                            key={languageIndex}
                            index={languageIndex}
                            editor={editor}
                            initialValue={value}
                            onChange={onChange}
                            {...field}
                        />
                    )}
                />
                {contentError?.blocks && (
                    <FormHelperText sx={{ color: 'error.main' }}>
                        {contentError.blocks.message && capitalize(contentError.blocks.message)}
                    </FormHelperText>
                )}
            </FormControl>
            <FormControl fullWidth>
                <Tooltip
                    title={capitalize('check the box if you want this article to be published')}
                >
                    <Controller
                        name={`translations.${languageIndex}.isPublished`}
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
                    name={`translations.${languageIndex}.category`}
                    control={control}
                    render={({ field: { onChange, onBlur, ref, ...field } }) => {
                        return (
                            <Autocomplete
                                freeSolo
                                options={categoryOptions}
                                loading={initialRawCategoriesLoading || filteredCategoriesLoading}
                                filterOptions={(options, params) => {
                                    const filteredOptions = filterCategories(options, params);

                                    if (
                                        params.inputValue !== '' &&
                                        !options.find((o) => o?.name === params.inputValue)
                                    ) {
                                        filteredOptions.push({
                                            id: '',
                                            name: `Add "${params.inputValue}"`
                                        });
                                        if (addCategoryDialogValue.name !== params.inputValue) {
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
                                        !categoryOptions.find((c) => c.name.includes(value))
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
                                onBlur={(event) => {
                                    onBlur();
                                    handleCategoryFieldClear(event);
                                }}
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
                                                        {params.InputProps.startAdornment}
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
                                        placeholder={capitalize('select category')}
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
                    name={`translations.${languageIndex}.tags`}
                    control={control}
                    render={({ field: { onChange, onBlur, ...field } }) => {
                        return (
                            <Autocomplete
                                multiple
                                freeSolo
                                options={tagOptions}
                                loading={initialRawTagsLoading || filteredTagsLoading}
                                filterOptions={(options, params) => {
                                    const filteredOptions = filterTags(options, params);

                                    if (
                                        params.inputValue !== '' &&
                                        !options.find((o) => o?.name === params.inputValue)
                                    ) {
                                        filteredOptions.push({
                                            id: '',
                                            name: `Add "${params.inputValue}"`
                                        });
                                        if (addTagDialogValue.name !== params.inputValue) {
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
                                    if (!tagOptions.find((c) => c.name.includes(value))) {
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
                                onBlur={(event) => {
                                    onBlur();
                                    handleTagFieldClear(event);
                                }}
                                clearOnBlur
                                handleHomeEndKeys
                                getOptionDisabled={(option) =>
                                    !!watchedForm.translations[languageIndex].tags &&
                                    !!watchedForm.translations[languageIndex].tags.find(
                                        (t) => t?.name === option?.name
                                    )
                                }
                                onChange={(event, newValue) => {
                                    const clickedOptionText = (event.target as HTMLElement)
                                        .textContent;
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
                                                        {params.InputProps.startAdornment}
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
            <Dialog open={openAddCategoryDialog} onClose={handleAddCategoryDialogClose}>
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
        </>
    );
}
