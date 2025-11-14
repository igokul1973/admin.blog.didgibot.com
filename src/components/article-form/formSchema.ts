import { LanguageEnum } from '@/types/translation';
import { z } from 'zod';

export const editorJsSchema = z.object({
    /**
     * Editor's version
     */
    version: z.string().optional(),
    /**
     * Timestamp of saving in milliseconds
     */
    time: z.number().optional(),
    /**
     * Saved Blocks
     */
    blocks: z
        .array(
            z.object({
                /**
                 * Unique Id of the block
                 */
                id: z.string().optional(),
                /**
                 * Tool type
                 */
                type: z.string(),
                /**
                 * Saved Block data
                 */
                data: z.record(z.string(), z.any()),
                /**
                 * Block Tunes data
                 */
                tunes: z.object({}).optional()
            })
        )
        .min(1, 'please enter at least one block')
});

export const articleSchema = z.object({
    id: z.string().nullable(),
    translations: z
        .array(
            z.object({
                language: z.nativeEnum(LanguageEnum),
                header: z
                    .string({
                        required_error: "please enter tag's name",
                        invalid_type_error: "please enter the tag's name"
                    })
                    .min(3, { message: 'must be at least 3 characters' })
                    .max(80, { message: 'must be less than 81 characters' }),
                content: editorJsSchema,
                isPublished: z.boolean(),
                category: z
                    .object({
                        id: z.string(),
                        name: z.string({
                            required_error: 'please select the category name'
                        })
                    })
                    .nullable()
                    .transform((val, ctx) => {
                        if (val === null) {
                            ctx.addIssue({
                                code: 'invalid_type',
                                expected: 'object',
                                received: 'null'
                            });
                        }
                        return val || z.NEVER;
                    }),
                tags: z
                    .array(
                        z
                            .object(
                                {
                                    id: z.string(),
                                    name: z.string({
                                        required_error: 'please select the inventory item name'
                                    })
                                },
                                {
                                    required_error: 'please enter the inventory item name',
                                    invalid_type_error: 'please enter the inventory item name'
                                }
                            )
                            .optional()
                    )
                    .optional()
            })
        )
        .min(2, 'please enter at least two translations'),
    slug: z
        .string({
            required_error: 'please enter the slug name',
            invalid_type_error: 'slug must be a string'
        })
        .min(3, { message: 'must be at least 3 characters' })
        .max(60, { message: 'must be less than 61 characters' })
        .optional(),
    priority: z.preprocess(
        (val) => (val === '' || val === undefined ? undefined : val),
        z
            .number()
            .min(0)
            .max(1)
            .refine((val) => {
                const decimalPart = val.toString().split('.')[1];
                return !decimalPart || decimalPart.length <= 1;
            }, 'Priority can have at most one decimal place')
            .optional()
    )
});
