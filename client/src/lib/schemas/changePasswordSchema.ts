import { requiredString } from "../util/util";
import {z} from "zod";

export const changePasswordSchema = z.object({
    currentPassword: requiredString('currentPassword'),
    newPassword: requiredString('newPassword'),
    confirmPassword: requiredString('confirmPassword')
})
.refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword']
})

export type changePasswordSchema = z.infer<typeof changePasswordSchema>;