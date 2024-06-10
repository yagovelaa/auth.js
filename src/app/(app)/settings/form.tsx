'use client'

import { settings } from '@/actions/settings'
import FormError from '@/components/form/form-error'

import { FormLoad } from '@/components/form/form-load'
import FormSuccess from '@/components/form/form-success'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { useCurrentUser } from '@/hooks/use-current-user'
import { settingsForm, settingsSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserRole } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

export function FormSettings() {
  const user = useCurrentUser()
  const { update } = useSession()

  const [isPending, startTransition] = useTransition()

  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const form = useForm<settingsForm>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  })

  function handleUpdateSettings(values: settingsForm) {
    setError('')
    setSuccess('')

    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error)
          }

          if (data.success) {
            update()
            setSuccess(data.success)
          }
        })
        .catch(() => {
          setError('Something went wrong!')
        })
    })
  }
  return (
    <Form {...form}>
      <form
        className="space-y-4"
        onSubmit={form.handleSubmit(handleUpdateSettings)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="Your name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {user?.isOAuth === false && (
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
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="password"
                      placeholder="Your new password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select
                disabled={isPending}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                  <SelectItem value={UserRole.USER}>User</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        {user?.isOAuth === false && (
          <FormField
            control={form.control}
            name="isTwoFactorEnabled"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-md border p-3">
                <div className="space-y-0.5">
                  <FormLabel>Two Factor Authentication</FormLabel>

                  <FormDescription>
                    Enabled two factor authentication for your account
                  </FormDescription>
                </div>

                <FormControl>
                  <Switch
                    disabled={isPending}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormError message={error} />
        <FormSuccess message={success} />

        <div className="flex w-full justify-end items-end">
          <Button type="submit" disabled={isPending}>
            {isPending ? <FormLoad /> : 'Save'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
