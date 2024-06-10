'use client'

import { reset } from '@/actions/reset'
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
import { resetForm, resetSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

export function ResetForm() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const form = useForm<resetForm>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: '',
    },
  })

  function handleSignIn(values: resetForm) {
    setError('')
    setSuccess('')

    startTransition(() => {
      reset(values).then((data) => {
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

        <FormError message={error} />
        <FormSuccess message={success} />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            <>Send reset email</>
          )}
        </Button>
      </form>
    </Form>
  )
}
