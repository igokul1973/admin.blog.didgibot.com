import { z } from 'zod';

export const categoryUpdateSchema = z.object({
    id: z.string(),
    name: z
        .string({
            required_error: "please enter tag's name",
            invalid_type_error: "please enter the tag's name"
        })
        .min(3, { message: 'must be at least 3 characters' })
        .max(40, { message: 'must be less than 40 characters' })
});

export const categoryCreateSchema = categoryUpdateSchema.omit({
    id: true
});
