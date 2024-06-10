import { auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'
import { HeaderApp } from './header'
import { OptionsMenu } from './options-menu'

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <div className="flex flex-col px-32 pt-4 border-b border-border/40 gap-2">
        <HeaderApp />

        <OptionsMenu />
      </div>

      <div className="px-32 pt-8">
        <div className="flex flex-col gap-8 mb-16">{children}</div>
      </div>
    </SessionProvider>
  )
}
