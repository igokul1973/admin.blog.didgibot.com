import { Control, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { tagCreateSchema, tagUpdateSchema } from './formSchema';

export interface IProps {
    readonly defaultValues: TTagForm;
    readonly isEdit: boolean;
}

export type TTagForm = z.input<typeof tagCreateSchema>;
export type TTagFormOutput = z.output<typeof tagUpdateSchema>;
export type TTagFormControl = Control<TTagForm> & Control<FieldValues>;
