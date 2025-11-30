import { JSX, useMemo, useState } from 'react';
import { ArticleFormContext } from './ArticleFormContext';
import { ArticleFormProviderProps, ISubmitEvent } from './types';

export function ArticleFormProvider({ children }: ArticleFormProviderProps): JSX.Element {
    const [submitEvent, setSubmitEvent] = useState<ISubmitEvent>({ isSubmit: false });
    const [isRedirectOnArticleSubmit, setIsRedirectOnArticleSubmit] = useState(false);
    const [isArticleFormDirty, setIsArticleFormDirty] = useState(false);

    const contextValue = useMemo(
        () => ({
            submitEvent,
            setSubmitEvent,
            isRedirectOnArticleSubmit,
            setIsRedirectOnArticleSubmit,
            isArticleFormDirty,
            setIsArticleFormDirty
        }),
        [
            submitEvent,
            setSubmitEvent,
            isRedirectOnArticleSubmit,
            setIsRedirectOnArticleSubmit,
            isArticleFormDirty,
            setIsArticleFormDirty
        ]
    );

    return (
        <ArticleFormContext.Provider value={contextValue}>{children}</ArticleFormContext.Provider>
    );
}
