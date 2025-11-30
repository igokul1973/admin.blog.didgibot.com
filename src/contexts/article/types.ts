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

export interface ArticleFormProviderProps {
    readonly children: React.ReactNode;
}
