import logo from '@/assets/logo.png'
import { Badge } from '@/components/ui/badge'

import Image from 'next/image'
import { UserButton } from './user-button'

export function HeaderApp() {
  return (
    <header className="flex justify-between">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" className="h-8 w-8" />

        <div className="flex flex-col items-start">
          <div className="flex gap-2 items-center">
            <span className="text-base">auth.js</span>
            <Badge className="h-4">DEV</Badge>
          </div>
          <span className="text-sm text-muted-foreground">study-project</span>
        </div>
      </div>

      <UserButton />
    </header>
  )
}
