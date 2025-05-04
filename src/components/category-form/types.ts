import { ICategory } from '@/types/category';
import { Control, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { categorySchema } from './formSchema';

export interface IProps {
    readonly defaultValues: TCategoryFormInput;
    readonly isEdit: boolean;
    readonly isNavigate?: boolean;
    readonly formType?: 'dialog' | 'card';
    readonly closeDialog?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    readonly handleNewCategory?: (newCategory: ICategory) => void;
}

export type TCategoryFormInput = z.input<typeof categorySchema>;
export type TCategoryFormOutput = z.output<typeof categorySchema>;
export type TCategoryFormControl = Control<TCategoryFormInput> & Control<FieldValues>;
