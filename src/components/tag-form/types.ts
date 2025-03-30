import { ITag } from '@/types/tag';
import { Control, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { tagCreateSchema, tagUpdateSchema } from './formSchema';

export interface IProps {
    readonly defaultValues: TTagForm;
    readonly isEdit: boolean;
    readonly isNavigate?: boolean;
    readonly formType?: 'dialog' | 'card';
    readonly closeDialog?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    readonly handleNewTag?: (newTag: ITag) => void;
}

export type TTagForm = z.input<typeof tagCreateSchema>;
export type TTagFormOutput = z.output<typeof tagUpdateSchema>;
export type TTagFormControl = Control<TTagForm> & Control<FieldValues>;
