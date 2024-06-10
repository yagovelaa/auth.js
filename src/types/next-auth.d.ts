import { UserRole } from '@prisma/client'
import { type DefaultSession } from 'next-auth'

import 'next-auth/jwt'

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole
  isTwoFactorEnabled: boolean
  isOAuth: boolean
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser
  }
}
