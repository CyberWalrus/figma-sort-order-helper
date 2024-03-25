import { z } from 'zod';

import { formSortElementSchema } from '$features/sort-element';

const TypeSchema = z.union([z.literal('sort-element'), z.literal('test')]);

export const SortElementSchema = z.object({
    options: formSortElementSchema,
    type: TypeSchema,
});
