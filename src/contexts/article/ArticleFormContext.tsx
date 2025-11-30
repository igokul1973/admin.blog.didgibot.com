import { IArticleFormContextValue } from '@/contexts/article/types';
import { createContext } from 'react';

export const ArticleFormContext = createContext<IArticleFormContextValue>({
    submitEvent: { isSubmit: false },
    setSubmitEvent: () => {},
    isRedirectOnArticleSubmit: false,
    setIsRedirectOnArticleSubmit: () => {},
    isArticleFormDirty: false,
    setIsArticleFormDirty: () => {}
});
