import { z } from 'zod';

import { StringToBooleanSchema } from '../../lib/schemas';

const TestTypeSchema = z.union([z.literal('unit'), z.literal('unit-isolate'), z.literal('screenshot')]);

export const EnvBuildSchema = z.object({
    NODE_ENV: z.string().default('test'),
    VITE_TEST_SERVER_BUILD: z.boolean().or(StringToBooleanSchema),
    VITEST_TEST_TYPE: TestTypeSchema,
});
