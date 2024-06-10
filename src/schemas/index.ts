import { UserRole } from '@prisma/client'
import { z } from 'zod'

export const settingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false
      }

      return true
    },
    {
      message: 'New password is required!',
      path: ['newPassword'],
    },
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false
      }

      return true
    },
    {
      message: 'New password is required!',
      path: ['password'],
    },
  )
export type settingsForm = z.infer<typeof settingsSchema>

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, { message: 'Password is required' }),
  code: z.optional(z.string()),
})
export type loginForm = z.infer<typeof loginSchema>

export const registerSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(6, { message: 'Minimum 6 characters required' }),
})
export type registerForm = z.infer<typeof registerSchema>

export const resetSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
})
export type resetForm = z.infer<typeof resetSchema>

export const newPasswordSchema = z.object({
  password: z.string().min(6, { message: 'Minimum 6 characters required' }),
})
export type newPasswordForm = z.infer<typeof newPasswordSchema>
