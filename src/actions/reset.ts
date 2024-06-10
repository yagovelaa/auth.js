'use server'

import { getUserByEmail } from '@/data/user'
import { sendPasswordResetEmail } from '@/lib/mail'
import { generatePasswordResetToken } from '@/lib/tokens'
import { resetForm, resetSchema } from '@/schemas'

export const reset = async (values: resetForm) => {
  const validatedFields = resetSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid email!' }
  }

  const { email } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return { error: 'Email not found' }
  }

  const passwordResetToken = await generatePasswordResetToken(email)

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token,
    existingUser.name!,
  )

  return { success: 'Reset email sent!' }
}
