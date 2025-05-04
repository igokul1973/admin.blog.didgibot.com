import { z } from 'zod';

export const tagSchema = z.object({
    id: z.string().optional(),
    name: z
        .string({
            required_error: "please enter tag's name",
            invalid_type_error: "please enter the tag's name"
        })
        .min(3, { message: 'must be at least 3 characters' })
        .max(40, { message: 'must be less than 40 characters' })
});
