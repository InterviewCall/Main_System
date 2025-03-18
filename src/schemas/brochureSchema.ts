import { z } from 'zod';

export const brochureZodSchema = z.object({
    fullName: z.string()
        .min(3, 'Full name must be at least 3 characters long')
        .max(50, 'Full name must not exceed 50 characters')
        .regex(/^[A-Za-z\s]+$/, 'Full name should contain only letters'),
    email: z.string().email(),
    mobileNumber: z.string().regex(/^[1-9]\d{1,14}$/, 'Invalid mobile number')
});

export type BrochureForm = z.infer<typeof brochureZodSchema>