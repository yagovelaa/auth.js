import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error() {
  return (
    <>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Error</h1>
        <p className="text-sm text-muted-foreground">
          Track your sales through the partner panel!
        </p>
      </div>

      <Button asChild>
        <Link href="/auth/login">Back to login</Link>
      </Button>
    </>
  )
}
