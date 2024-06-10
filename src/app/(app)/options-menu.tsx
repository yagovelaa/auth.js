'use client'

import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { Chrome, Home, Server, Shield, UserCog } from 'lucide-react'
import Link from 'next/link'

export function OptionsMenu() {
  return (
    <Menubar className="border-none">
      <MenubarMenu>
        <MenubarTrigger
          className="flex items-center gap-2 cursor-pointer font-normal text-muted-foreground"
          asChild
        >
          <Link href="/home">
            <Home className="h-4 w-4" />
            Home
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          className="flex items-center gap-2 cursor-pointer font-normal text-muted-foreground"
          asChild
        >
          <Link href="/server">
            <Server className="h-4 w-4" />
            Server
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          className="flex items-center gap-2 cursor-pointer font-normal text-muted-foreground"
          asChild
        >
          <Link href="/client">
            <Chrome className="h-4 w-4" />
            Client
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          className="flex items-center gap-2 cursor-pointer font-normal text-muted-foreground"
          asChild
        >
          <Link href="/admin">
            <Shield className="h-4 w-4" />
            Admin
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          className="flex items-center gap-2 cursor-pointer font-normal text-muted-foreground"
          asChild
        >
          <Link href="/settings">
            <UserCog className="h-4 w-4" />
            Settings
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}
