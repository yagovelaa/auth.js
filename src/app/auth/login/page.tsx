import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { LoginForm } from './form'
import { LoginSocial } from './login-social'

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Access dashboard
        </h1>
        <p className="text-sm text-muted-foreground">
          Track your sales through the partner panel!
        </p>
      </div>

      <LoginForm />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <LoginSocial />

      <Button size="sm" variant="link" asChild className="px-0 font-normal">
        <Link href="/auth/register">Dont have an account?</Link>
      </Button>
    </>
  )
}
