import { z } from 'zod';

export const formSchema = z.object({
    elementsPerRow: z.number().min(1).default(4),
    horizontalPadding: z.number().min(0).default(80),
    sortName: z.boolean().default(true),
    verticalPadding: z.number().min(0).default(160),
});

export type FormSchema = z.infer<typeof formSchema>;
