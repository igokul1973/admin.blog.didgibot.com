import { paths } from '@/paths';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Box,
    Button,
    capitalize,
    Card,
    CardActions,
    CardContent,
    Divider,
    FormControl,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import { JSX, useEffect, useMemo, useRef, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { Link } from 'react-router';
import AnnotationPopover from '../annotation-popover/AnnotationPopover';
import { articleSchema } from './formSchema';
import { TranslationForm } from './TranslationForm';
import { IProps, TArticleFormInput, TArticleFormOutput } from './types';

export function ArticleForm({
    onSubmit,
    defaultValues,
    language,
    submitEvent = { isSubmit: false },
    setIsArticleFormDirty
}: IProps): JSX.Element {
    const submitButtonRef = useRef<HTMLButtonElement>(null);
    const languageIndex = useMemo(() => {
        if (!defaultValues) {
            return 0;
        }
        const index = defaultValues.translations.findIndex((t) => t.language === language);
        return index >= 0 ? index : 0;
    }, [defaultValues, language]);

    const {
        watch,
        reset,
        register,
        handleSubmit,
        control,
        formState: { errors, dirtyFields, isDirty, ...formState },
        ...methods
    } = useForm<TArticleFormInput, unknown, TArticleFormOutput>({
        resolver: zodResolver(articleSchema),
        reValidateMode: 'onChange',
        defaultValues
    });

    const [isShowPreview, setIsShowPreview] = useState<boolean>(false);

    useEffect(() => {
        if (setIsArticleFormDirty) setIsArticleFormDirty(isDirty);
    }, [isDirty, setIsArticleFormDirty]);

    useEffect(() => {
        if (submitEvent.isSubmit) {
            submitButtonRef.current?.click();
        }
    }, [submitEvent, reset]);

    useEffect(() => {
        // The default values may change if the user submitted
        // the article changes and stayed on the same page.
        // When default values change, we must reset the form.
        // This way the Save button will be disabled until the form
        // is changed again.
        reset(defaultValues);
    }, [defaultValues, reset]);

    const watchedForm = useWatch({ control });
    const currentTranslation = watchedForm?.translations?.[languageIndex];

    const slugError = errors.slug;
    const priorityError = errors.priority;

    return (
        <FormProvider
            watch={watch}
            register={register}
            control={control}
            reset={reset}
            handleSubmit={handleSubmit}
            formState={{ errors, dirtyFields, isDirty, ...formState }}
            {...methods}
        >
            <form
                onSubmit={handleSubmit((formData: TArticleFormOutput) =>
                    onSubmit(formData, dirtyFields)
                )}
                noValidate
            >
                <Card key={languageIndex}>
                    <Divider />
                    <CardContent>
                        <Grid size={{ md: 12, xs: 12 }}>
                            <Stack spacing={4}>
                                <TranslationForm
                                    language={language}
                                    languageIndex={languageIndex}
                                />
                                <FormControl>
                                    <TextField
                                        label={capitalize('Article slug')}
                                        placeholder='Enter article slug - small letters and hyphens in-between. It must be unique. Else it will be generated.'
                                        slotProps={{
                                            htmlInput: {
                                                type: 'text'
                                            },
                                            inputLabel: {
                                                shrink: !!watchedForm.slug || undefined
                                            }
                                        }}
                                        variant='outlined'
                                        error={!!slugError}
                                        helperText={
                                            !!slugError?.message && capitalize(slugError.message)
                                        }
                                        {...register('slug')}
                                    />
                                </FormControl>
                                <FormControl>
                                    <TextField
                                        label={capitalize('Article priority')}
                                        placeholder='Enter article priority between 0 and 1, one decimal place. Else it will be default - 0.8'
                                        slotProps={{
                                            htmlInput: {
                                                type: 'number',
                                                step: '0.1',
                                                min: '0',
                                                max: '1'
                                            },
                                            inputLabel: {
                                                shrink: !!watchedForm.slug || undefined
                                            }
                                        }}
                                        variant='outlined'
                                        error={!!priorityError}
                                        helperText={
                                            !!priorityError?.message &&
                                            capitalize(priorityError.message)
                                        }
                                        {...register('priority', { valueAsNumber: true })}
                                    />
                                </FormControl>
                                {/* <Box>
                                    <pre>Is dirty: {JSON.stringify(isDirty, null, 2)}</pre>
                                    <pre>Is valid: {JSON.stringify(isValid, null, 2)}</pre>
                                    <pre>{JSON.stringify(watchedForm, null, 2)}</pre>
                                </Box> */}
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
                        <Button
                            type='submit'
                            variant='contained'
                            disabled={!isDirty}
                            ref={submitButtonRef}
                        >
                            Save
                        </Button>
                    </CardActions>
                </Card>
            </form>

            {currentTranslation?.content && isShowPreview && (
                <Paper sx={{ mt: 1, p: 2 }}>
                    <Typography variant='h5' sx={{ mb: 2 }} color='primary'>
                        Preview
                    </Typography>
                    <Box sx={{ border: '1px solid #ccc', p: 2, borderRadius: '4px' }}>
                        <AnnotationPopover
                            translation={
                                currentTranslation as TArticleFormInput['translations'][number]
                            }
                        />
                        {/* <pre>
                            {JSON.stringify(watchedForm.translations[index].content, null, 2)}
                        </pre> */}
                    </Box>
                </Paper>
            )}
        </FormProvider>
    );
}
