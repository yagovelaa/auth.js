'use client'

import { admin } from '@/actions/admin'
import FormError from '@/components/form/form-error'
import FormSuccess from '@/components/form/form-success'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useCurrentRole } from '@/hooks/use-current-role'
import { UserRole } from '@prisma/client'
import { toast } from 'sonner'

export default function AdminPage() {
  const role = useCurrentRole()

  function handleApiRoute() {
    fetch('/api/admin').then((response) => {
      if (response.ok) {
        toast.success('Allowed API Route!')
      } else {
        toast.error('Forbidden API Route!')
      }
    })
  }

  function handleServerAction() {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success(data.success)
      }
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin</CardTitle>
        <CardDescription>
          Testing role-based permissions. Using server-side and client-side
          functions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {role !== UserRole.ADMIN ? (
          <FormError message="You do not have permission to view this content" />
        ) : (
          <FormSuccess message="You are allowed to see this content!" />
        )}

        <div className="flex flex-row items-center justify-between rounded-md border p-3">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={handleApiRoute}>Click to test</Button>
        </div>

        <div className="flex flex-row items-center justify-between rounded-md border p-3">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button onClick={handleServerAction}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  )
}
