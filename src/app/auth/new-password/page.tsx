import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { NewPasswordForm } from './form'

export default function NewPasswordPage() {
  return (
    <>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Enter a new password
        </h1>
        <p className="text-sm text-muted-foreground">
          Track your sales through the partner panel!
        </p>
      </div>

      <NewPasswordForm />

      <Button size="sm" variant="link" asChild className="px-0 font-normal">
        <Link href="/auth/login">Back to login</Link>
      </Button>
    </>
  )
}
