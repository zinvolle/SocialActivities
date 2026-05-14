import { requiredString } from "../util/util";
import {z} from "zod";

export const resetPasswordSchema = z.object({
    newPassword: requiredString('newPassword'),
    confirmPassword: requiredString('confirmPassword')
})
.refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword']
})

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;