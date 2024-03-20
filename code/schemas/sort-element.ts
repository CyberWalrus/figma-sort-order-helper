import { z } from 'zod';

const TypeSchema = z.union([z.literal('sort-elements'), z.literal('test')]);
const OptionsSchema = z.object({
    elementsPerRow: z.number(),
    horizontalPadding: z.number(),
    verticalPadding: z.number(),
});

export const SortElementSchema = z.object({
    options: OptionsSchema,
    type: TypeSchema,
});
