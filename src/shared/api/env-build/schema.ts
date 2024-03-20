import { z } from 'zod';

import { StringToBooleanSchema } from '../../lib/schemas';

const BrowserNameSchema = z.union([z.literal('chromium'), z.literal('firefox'), z.literal('webkit')]);

const BrowserViewportSchema = z.union([
    z.literal('mobile360'),
    z.literal('mobile450'),
    z.literal('mobile700'),
    z.literal('desktop720'),
    z.literal('desktop1080'),
    z.literal('desktop1440'),
]);

const TestTypeSchema = z.union([z.literal('unit'), z.literal('unit-isolate'), z.literal('screenshot')]);

export type BrowserName = z.infer<typeof BrowserNameSchema>;
export type BrowserViewport = z.infer<typeof BrowserViewportSchema>;

export const EnvBuildSchema = z.object({
    NODE_ENV: z.string().default('test'),
    VITE_TEST_SERVER_BUILD: z.boolean().or(StringToBooleanSchema),
    VITEST_TEST_TYPE: TestTypeSchema,
});
