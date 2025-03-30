import { ArticleForm } from '@/components/article-form/ArticleForm';
import LanguageForm from '@/components/article-form/language-form/LanguageForm';
import { TArticleFormInput, TArticleFormOutput } from '@/components/article-form/types';
import EntitiesPageHeader from '@/components/page/EntitiesPageHeader';
import { getEmptyArticle, snakeCaseKeys, transformRawArticle } from '@/components/utils';
import { useSnackbar } from '@/contexts/snackbar/provider';
import { GET_ARTICLES, UPDATE_ARTICLE } from '@/operations';
import { paths } from '@/paths';
import { IRawArticle } from '@/types/article';
import { LanguageEnum } from '@/types/translation';
import { gql, useApolloClient, useLazyQuery, useMutation } from '@apollo/client';
import { Box, capitalize } from '@mui/material';
import Stack from '@mui/material/Stack';
import { JSX, useEffect, useState } from 'react';
import { FieldNamesMarkedBoolean, FieldValues } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

export default function ArticleUpdate(): JSX.Element {
    const { id } = useParams();
    const client = useApolloClient();
    const navigate = useNavigate();
    const { openSnackbar } = useSnackbar();

    const [
        getArticlesFn,
        { data: fetchedArticles, error: fetchedArticlesError, loading: fetchedArticlesLoading }
    ] = useLazyQuery(GET_ARTICLES);

    const rawArticleFragment = client.readFragment<IRawArticle>({
        id: `ArticleType:${id}`,
        fragment: gql`
            fragment Z on ArticleType {
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
                    category {
                        id
                        name
                    }
                    tags {
                        id
                        name
                    }
                    is_published
                }
            }
        `
    });

    const [rawArticle, setRawArticle] = useState<IRawArticle | null>(rawArticleFragment);
    const [article, setArticle] = useState<TArticleFormInput | null>(null);
    const [language, setLanguage] = useState(LanguageEnum.EN);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const fetchArticle = async () => {
            await getArticlesFn({
                variables: {
                    filterInput: { ids: [id] },
                    limit: 1,
                    skip: 0
                }
            });
        };
        if (rawArticle) {
            let article =
                rawArticle &&
                (transformRawArticle(
                    rawArticle,
                    ['__typename', 'publishedAt'],
                    true
                ) as TArticleFormInput);

            if (article.translations.length === 1) {
                const existingTranslation = article.translations.at(-1);
                const initialArticle = getEmptyArticle();
                const missingTranslation = initialArticle.translations.find((t) => {
                    return t.language !== existingTranslation?.language;
                });
                if (missingTranslation) {
                    article = {
                        ...article,
                        translations: article.translations
                            ? [...article.translations, missingTranslation]
                            : [missingTranslation]
                    };
                }
            }
            setArticle(article);
        } else {
            fetchArticle();
        }
    }, [rawArticle]);

    useEffect(() => {
        if (fetchedArticles && fetchedArticles.articles.length > 0) {
            setRawArticle(fetchedArticles.articles[0]);
        } else if (fetchedArticlesError) {
            console.error(fetchedArticlesError);
        }
    }, [fetchedArticles, fetchedArticlesError, fetchedArticlesLoading]);

    // TODO: probably need to update cache as just above
    const [
        updateArticleFunction,
        { data: updateArticleData, error: updateArticleError, loading: updateArticleLoading }
    ] = useMutation(UPDATE_ARTICLE);

    useEffect(() => {
        if (updateArticleData) {
            openSnackbar(capitalize('successfully updated article'), 'success');
            navigate(paths.dashboard.articles);
        } else if (updateArticleError) {
            openSnackbar(updateArticleError.message, 'error');
        } else if (updateArticleLoading) {
            console.log('Sending article update request...');
        }
    }, [updateArticleData, updateArticleError, updateArticleLoading]);

    useEffect(() => {
        if (article) {
            const i = article.translations.findIndex((t) => t.language === language);
            if (i !== index) {
                setIndex(i);
            }
        }
    }, [language, article]);

    const onSubmit = async (
        formData: TArticleFormOutput,
        dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<FieldValues>>>
    ): Promise<void> => {
        if (!dirtyFields.translations) {
            return openSnackbar('No form changes detected', 'warning');
        }

        const { id, translations } = snakeCaseKeys(formData);

        updateArticleFunction({
            variables: {
                input: {
                    id,
                    translations
                }
            }
        });
    };

    return (
        <Stack spacing={3}>
            <Stack spacing={3}>
                <EntitiesPageHeader
                    backPath={paths.dashboard.articles}
                    entityNamePlural='Update Article'
                    isDisplayImportExport={false}
                    isDisplayBackButton
                />
                <LanguageForm language={language} setLanguage={setLanguage} />
            </Stack>
            {article ? (
                <ArticleForm defaultValues={article} onSubmit={onSubmit} index={index} />
            ) : (
                <Box>Article not found</Box>
            )}
        </Stack>
    );
}
