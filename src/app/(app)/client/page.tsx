'use client'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useCurrentUser } from '@/hooks/use-current-user'
export default function ClientPage() {
  const user = useCurrentUser()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client component</CardTitle>
        <CardDescription>This component is created client-side</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-md border p-3">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-primary rounded-md">
            {user?.id}
          </p>
        </div>

        <div className="flex flex-row items-center justify-between rounded-md border p-3">
          <p className="text-sm font-medium">Name</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-primary rounded-md">
            {user?.name}
          </p>
        </div>

        <div className="flex flex-row items-center justify-between rounded-md border p-3">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-primary rounded-md">
            {user?.email}
          </p>
        </div>

        <div className="flex flex-row items-center justify-between rounded-md border p-3">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-primary rounded-md">
            {user?.role}
          </p>
        </div>

        <div className="flex flex-row items-center justify-between rounded-md border p-3">
          <p className="text-sm font-medium">Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? 'success' : 'destructive'}>
            {user?.isTwoFactorEnabled ? 'ON' : 'OFF'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
