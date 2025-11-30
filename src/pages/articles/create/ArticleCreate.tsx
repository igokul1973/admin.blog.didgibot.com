import { ArticleForm } from '@/components/article-form/ArticleForm';
import LanguageForm from '@/components/article-form/language-form/LanguageForm';
import { TArticleFormOutput } from '@/components/article-form/types';
import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { getEmptyArticle, snakeCaseKeys } from '@/components/utils';
import { useSnackbar } from '@/hooks/use-snackbar';
import { CREATE_ARTICLE } from '@/operations';
import { paths } from '@/paths';
import { IRawArticle } from '@/types/article';
import { LanguageEnum } from '@/types/translation';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
import { capitalize } from '@mui/material';
import Stack from '@mui/material/Stack';
import { JSX, useEffect, useState } from 'react';
import { FieldNamesMarkedBoolean, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router';

export default function ArticleCreate(): JSX.Element {
    const [language, setLanguage] = useState(LanguageEnum.EN);
    const { openSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [initialArticle] = useState(getEmptyArticle());

    const [
        createArticleFunction,
        { data: createArticleData, error: createArticleError, loading: createArticleLoading }
    ] = useMutation<{ set_article: IRawArticle }>(CREATE_ARTICLE, {
        update(cache, { data }) {
            if (!data?.set_article) {
                return;
            }
            const article = data.set_article;

            cache.modify({
                fields: {
                    articles(existingArticles = []) {
                        const newArticleRef = cache.writeFragment({
                            data: article,
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
    }, [createArticleData, createArticleError, createArticleLoading, navigate, openSnackbar]);

    const onSubmit = async (
        formData: TArticleFormOutput,
        dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<FieldValues>>>
    ): Promise<void> => {
        if (!dirtyFields.translations && !dirtyFields.slug && !dirtyFields.priority) {
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
                    translations: data.translations,
                    slug: data.slug,
                    priority: data.priority
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
            <ArticleForm defaultValues={initialArticle} onSubmit={onSubmit} language={language} />
        </Stack>
    );
}
