'use client'

import github from '@/assets/logo-github.svg'
import google from '@/assets/logo-google.svg'
import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

export function LoginSocial() {
  function handleSignInWithProvider(provider: 'google' | 'github') {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="flex w-full justify-between space-x-4">
      <Button
        className="w-full"
        variant="outline"
        type="button"
        onClick={() => handleSignInWithProvider('google')}
      >
        <Image src={google} alt="logo" className="mr-2 h-4 w-4" />
        Google
      </Button>

      <Button
        className="w-full"
        variant="outline"
        type="button"
        onClick={() => handleSignInWithProvider('github')}
      >
        <Image src={github} alt="logo" className="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </div>
  )
}
