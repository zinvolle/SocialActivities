import {z} from 'zod';
import { requiredString } from '../util/util';

export const editProfileSchema = z.object({
    displayName: requiredString('displayname'),
    bio: z.string().optional()
})

export type EditProfileSchema = z.infer<typeof editProfileSchema>;