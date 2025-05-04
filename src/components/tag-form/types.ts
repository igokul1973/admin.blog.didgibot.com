import { ITag } from '@/types/tag';
import { Control, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { tagSchema } from './formSchema';

export interface IProps {
    readonly defaultValues: TTagFormInput;
    readonly isEdit: boolean;
    readonly isNavigate?: boolean;
    readonly formType?: 'dialog' | 'card';
    readonly closeDialog?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    readonly handleNewTag?: (newTag: ITag) => void;
}

export type TTagFormInput = z.input<typeof tagSchema>;
export type TTagFormOutput = z.output<typeof tagSchema>;
export type TTagFormControl = Control<TTagFormInput> & Control<FieldValues>;
