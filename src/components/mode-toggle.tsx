'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenuGroup>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setTheme('light')}
            >
              <Sun className="h-4 w-4" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setTheme('dark')}
            >
              <Moon className="h-4 w-4" />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2"
              onClick={() => setTheme('system')}
            >
              <Monitor className="h-4 w-4" />
              System
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    </DropdownMenuGroup>
  )
}
