import { Resend } from 'resend'
import { generatePasswordResetEmail } from './emails-template/password-reset'
import { generateTwoFactorEmail } from './emails-template/two-factor'
import { generateVerificationEmail } from './emails-template/verification-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string,
  name: string,
) => {
  const htmlContent = generateTwoFactorEmail(name, token)

  await resend.emails.send({
    from: 'onbording@resend.dev',
    to: email,
    subject: '2FA Code',
    html: htmlContent,
  })
}

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
  name: string,
) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`
  const htmlContent = generatePasswordResetEmail(name, resetLink)

  await resend.emails.send({
    from: 'onbording@resend.dev',
    to: email,
    subject: 'Reset your password',
    html: htmlContent,
  })
}

export const sendVerificationEmail = async (
  email: string,
  token: string,
  name: string,
) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`
  const htmlContent = generateVerificationEmail(name, confirmLink)

  await resend.emails.send({
    from: 'onbording@resend.dev',
    to: email,
    subject: 'Confirm your email',
    html: htmlContent,
  })
}
