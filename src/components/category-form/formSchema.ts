import { z } from 'zod';

export const categorySchema = z.object({
    id: z.string().optional(),
    name: z
        .string()
        .trim()
        .min(3, { message: 'must be at least 3 characters' })
        .max(40, { message: 'must be less than 41 characters' })
        .transform((val) => val.replace(/\s+/g, ' '))
});
