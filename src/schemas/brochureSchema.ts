import { z } from 'zod';

export const brochureZodSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    mobileNumber: z.string()
});

export type BrochureForm = z.infer<typeof brochureZodSchema>