import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Auth.js',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
