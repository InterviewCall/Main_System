import { z } from 'zod';

export const callbackFormZodSchema = z.object({
    selectExperience: z.string(),
    selectPrograms: z.string(),
    fullName: z.string(),
    email: z.string().email(),
    mobileNumber: z.string()
});

export type CallBackForm = z.infer<typeof callbackFormZodSchema>