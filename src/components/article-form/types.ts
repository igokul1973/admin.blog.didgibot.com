import { FieldNamesMarkedBoolean, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { articleSchema, editorJsSchema } from './formSchema';
import { ISubmitEvent } from '@/contexts/ArticleFormContext';

export interface IProps {
    readonly onSubmit: (
        formData: TArticleFormOutput,
        dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<FieldValues>>>
    ) => Promise<void>;
    readonly index: number;
    readonly defaultValues: TArticleFormInput;
    readonly submitEvent?: ISubmitEvent;
    readonly setIsArticleFormDirty?: (isDirty: boolean) => void;
}

export type TArticleFormInput = z.input<typeof articleSchema>;
export type TArticleFormOutput = z.output<typeof articleSchema>;
export type TArticleFormContent = z.infer<typeof editorJsSchema>;
