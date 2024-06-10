'use client'

import { login } from '@/actions/login'
import FormError from '@/components/form/form-error'
import { FormLoad } from '@/components/form/form-load'
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
import { loginForm, loginSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

export function LoginForm() {
  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email already in use with different provider'
      : ''

  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const form = useForm<loginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function handleSignIn(values: loginForm) {
    setError('')
    setSuccess('')

    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset()
            setError(data.error)
          }

          if (data?.success) {
            form.reset()
            setSuccess(data.success)
          }

          if (data?.twoFactorToken) {
            setShowTwoFactor(true)
          }
        })
        .catch(() => setError('Something went wrong'))
    })
  }

  const renderButtonText = showTwoFactor ? 'Confirm' : 'Login'

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(handleSignIn)}>
        {showTwoFactor && (
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Two Factor Code</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Your code"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {!showTwoFactor && (
          <>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="email"
                      placeholder="Your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      disabled={isPending}
                      placeholder="Your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <FormError message={error || urlError} />
        <FormSuccess message={success} />

        <Button size="sm" variant="link" asChild className="px-0 font-normal">
          <Link href="/auth/reset">Forgot password?</Link>
        </Button>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? <FormLoad /> : renderButtonText}
        </Button>
      </form>
    </Form>
  )
}
