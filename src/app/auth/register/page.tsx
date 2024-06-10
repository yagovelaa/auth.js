'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { FormRegister } from './form'

export default function RegisterPage() {
  return (
    <>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Track your sales through the partner panel!
        </p>
      </div>

      <FormRegister />

      <Button size="sm" variant="link" asChild className="px-0 font-normal">
        <Link href="/auth/login">Already have an account?</Link>
      </Button>
    </>
  )
}
