import { createContext, JSX, ReactNode, useMemo, useState } from 'react';

export interface ISubmitEvent {
    isSubmit: boolean;
}

export interface IArticleFormContextValue {
    submitEvent: ISubmitEvent;
    setSubmitEvent: React.Dispatch<React.SetStateAction<ISubmitEvent>>;
    isRedirectOnArticleSubmit: boolean;
    setIsRedirectOnArticleSubmit: React.Dispatch<React.SetStateAction<boolean>>;
    isArticleFormDirty: boolean;
    setIsArticleFormDirty: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ArticleFormContext = createContext<IArticleFormContextValue>({
    submitEvent: { isSubmit: false },
    setSubmitEvent: () => {},
    isRedirectOnArticleSubmit: false,
    setIsRedirectOnArticleSubmit: () => {},
    isArticleFormDirty: false,
    setIsArticleFormDirty: () => {}
});

export interface ArticleFormProviderProps {
    readonly children: ReactNode;
}

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

export const UserConsumer = ArticleFormContext.Consumer;
