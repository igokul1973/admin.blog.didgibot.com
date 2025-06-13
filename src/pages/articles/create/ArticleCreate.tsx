import { ArticleForm } from '@/components/article-form/ArticleForm';
import LanguageForm from '@/components/article-form/language-form/LanguageForm';
import { TArticleFormOutput } from '@/components/article-form/types';
import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { getEmptyArticle, snakeCaseKeys } from '@/components/utils';
import { useSnackbar } from '@/contexts/snackbar/provider';
import { CREATE_ARTICLE } from '@/operations';
import { paths } from '@/paths';
import { LanguageEnum } from '@/types/translation';
import { gql, useMutation } from '@apollo/client';
import { capitalize } from '@mui/material';
import Stack from '@mui/material/Stack';
import { JSX, useEffect, useState } from 'react';
import { FieldNamesMarkedBoolean, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router';

export default function ArticleCreate(): JSX.Element {
    const [language, setLanguage] = useState(LanguageEnum.EN);
    const { openSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [index, setIndex] = useState<number>(0);
    const initialArticle = getEmptyArticle();

    useEffect(() => {
        const index = initialArticle.translations.findIndex((t) => t.language === language);
        setTimeout(() => {
            setIndex(index);
        }, 10);
    }, [language]);

    const [
        createArticleFunction,
        { data: createArticleData, error: createArticleError, loading: createArticleLoading }
    ] = useMutation(CREATE_ARTICLE, {
        update(cache, { data: { set_article: data } }) {
            cache.modify({
                fields: {
                    articles(existingArticles = []) {
                        const newArticleRef = cache.writeFragment({
                            data,
                            fragment: gql`
                                fragment NewArticle on Article {
                                    id
                                    translations {
                                        language
                                        header
                                        content {
                                            version
                                            time
                                            blocks {
                                                id
                                                type
                                                data
                                            }
                                        }
                                        is_published
                                        category {
                                            id
                                            name
                                        }
                                        tags {
                                            id
                                            name
                                        }
                                    }
                                    created_at
                                    updated_at
                                }
                            `
                        });
                        return [newArticleRef, ...existingArticles];
                    },
                    count(existingCount) {
                        return existingCount.count + 1;
                    }
                }
            });

            navigate(paths.dashboard.articles);
        }
    });

    useEffect(() => {
        if (createArticleData) {
            openSnackbar(capitalize('successfully created article'), 'success');
        }
        if (createArticleError) {
            openSnackbar(createArticleError.message, 'error');
        }
        if (createArticleLoading) {
            console.log('Sending article create request...');
        }
    }, [createArticleData, createArticleError, createArticleLoading]);

    const onSubmit = async (
        formData: TArticleFormOutput,
        dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<FieldValues>>>
    ): Promise<void> => {
        if (!dirtyFields.translations) {
            return openSnackbar('No form changes detected', 'warning');
        }

        let data = snakeCaseKeys(formData);

        // Due to MongoDB not accepting the 'language' field in case
        // the DB is text-indexed, renaming the 'language' field to 'lang'.
        data = {
            ...data,
            translations: data.translations.map(
                (translation: TArticleFormOutput['translations'][number]) => ({
                    ...translation,
                    content: {
                        ...translation.content,
                        blocks: translation.content.blocks.map((block) => {
                            if (block.type === 'code') {
                                const { data, ...rest } = block;
                                const { language, ...restData } = data;
                                return {
                                    ...rest,
                                    data: { ...restData, lang: language }
                                };
                            }
                            return block;
                        })
                    }
                })
            )
        };

        createArticleFunction({
            variables: {
                input: {
                    translations: data.translations
                }
            }
        });
    };

    return (
        <Stack spacing={3}>
            <Stack spacing={3}>
                <EntitiesPageHeader
                    backPath={paths.dashboard.articles}
                    entityNamePlural='Create Article'
                    isDisplayImportExport={false}
                    isDisplayBackButton
                />
                <LanguageForm language={language} setLanguage={setLanguage} />
            </Stack>
            <ArticleForm defaultValues={initialArticle} onSubmit={onSubmit} index={index} />
        </Stack>
    );
}
