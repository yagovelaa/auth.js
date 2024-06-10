'use client'

import { newPassword } from '@/actions/new-password'
import FormError from '@/components/form/form-error'
import FormSuccess from '@/components/form/form-success'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { newPasswordForm, newPasswordSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

export function NewPasswordForm() {
  const searchParams = useSearchParams()

  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const token = searchParams.get('token')

  const form = useForm<newPasswordForm>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: '',
    },
  })

  function handleSignIn(values: newPasswordForm) {
    setError('')
    setSuccess('')

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(handleSignIn)}>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="password"
                  placeholder="Your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={error} />
        <FormSuccess message={success} />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            <> Reset password</>
          )}
        </Button>
      </form>
    </Form>
  )
}
