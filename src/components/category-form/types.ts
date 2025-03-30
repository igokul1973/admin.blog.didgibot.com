import { Control, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { categoryUpdateSchema, categoryCreateSchema } from './formSchema';
import { ICategory } from '@/types/category';

export interface IProps {
    readonly defaultValues: TCategoryForm;
    readonly isEdit: boolean;
    readonly isNavigate?: boolean;
    readonly formType?: 'dialog' | 'card';
    readonly closeDialog?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    readonly handleNewCategory?: (newCategory: ICategory) => void;
}

export type TCategoryForm = z.input<typeof categoryCreateSchema>;
export type TCategoryFormOutput = z.output<typeof categoryUpdateSchema>;
export type TCategoryFormControl = Control<TCategoryForm> & Control<FieldValues>;
