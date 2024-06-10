'use client'

import { logout } from '@/actions/logout'
import { ModeToggle } from '@/components/mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useCurrentUser } from '@/hooks/use-current-user'
import { LogOut } from 'lucide-react'

export function UserButton() {
  const user = useCurrentUser()

  function initialOfName() {
    if (!user?.name) {
      return ''
    }

    const names = user.name.trim().split(' ')

    if (names.length >= 2) {
      return names[0][0].toUpperCase() + names[1][0].toUpperCase()
    } else {
      return names[0].slice(0, 2).toUpperCase()
    }
  }

  function handleSignOut() {
    logout()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-10 w-10 cursor-pointer">
          <AvatarImage src={user?.image || ''} alt="avatar" />
          <AvatarFallback>{initialOfName()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <ModeToggle />
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="w-4 h-4 mr-1" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
