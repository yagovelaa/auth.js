import { register } from '@/actions/register'
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
import { registerForm, registerSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

export function FormRegister() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const form = useForm<registerForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  })

  function handleSignUp(values: registerForm) {
    setError('')
    setSuccess('')

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(handleSignUp)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Your name"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Your email"
                  {...field}
                  disabled={isPending}
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
                  placeholder="Your password"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={error} />
        <FormSuccess message={success} />

        <Button className="w-full" type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            <>Create an account</>
          )}
        </Button>
      </form>
    </Form>
  )
}
