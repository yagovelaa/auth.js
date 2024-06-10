'use client'

import { newVerification } from '@/actions/new-verification'
import FormError from '@/components/form/form-error'

import FormSuccess from '@/components/form/form-success'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export default function NewVerificationPage() {
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const token = searchParams.get('token')

  const checkUserToken = useCallback(() => {
    if (success || error) return

    if (!token) {
      setError('Missing token!')
      return
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch(() => {
        setError('Something went wrong')
      })
  }, [token, success, error])

  useEffect(() => {
    checkUserToken()
  }, [checkUserToken])

  return (
    <>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Confirm your verification
        </h1>
        <p className="text-sm text-muted-foreground">
          Track your sales through the partner panel!
        </p>
      </div>

      {!success && !error && (
        <div className="flex w-full text-center items-center justify-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </div>
      )}

      <FormSuccess message={success} />
      {!success && <FormError message={error} />}

      <Button asChild>
        <Link href="/auth/login">Back to login</Link>
      </Button>
    </>
  )
}
