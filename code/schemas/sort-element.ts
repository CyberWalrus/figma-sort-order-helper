import { z } from 'zod';

import { FormSortElementSchema } from '$features/sort-element';

const TypeSchema = z.union([z.literal('sort-elements'), z.literal('test')]);

export const SortElementSchema = z.object({
    options: FormSortElementSchema,
    type: TypeSchema,
});
