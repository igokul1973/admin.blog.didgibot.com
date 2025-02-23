import { z } from 'zod';

const baseTagFormSchema = z.object({
    id: z.string(),
    name: z
        .string({
            required_error: "please enter tag's name",
            invalid_type_error: "please enter the tag's name"
        })
        .min(4, { message: 'must be at least 4 characters' })
        .max(40, { message: 'must be less than 40 characters' }),
    createdBy: z.string(),
    updatedBy: z.string()
});

export const tagCreateSchema = baseTagFormSchema.omit({
    id: true,
    createdBy: true,
    updatedBy: true
});

export const tagUpdateSchema = baseTagFormSchema.omit({
    id: true,
    updatedBy: true
});
