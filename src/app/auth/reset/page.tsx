import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ResetForm } from './form'

export default function ResetPage() {
  return (
    <>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Reset password
        </h1>
        <p className="text-sm text-muted-foreground">
          Track your sales through the partner panel!
        </p>
      </div>

      <ResetForm />

      <Button size="sm" variant="link" asChild className="px-0 font-normal">
        <Link href="/auth/login">Back to login</Link>
      </Button>
    </>
  )
}
