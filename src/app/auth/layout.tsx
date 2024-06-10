import logo from '@/assets/logo.png'
import Image from 'next/image'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 antialiased">
      <div className="hidden md:flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Image src={logo} alt="logo" className="size-6" />
          <span className="font-semibold">auth.js</span>
        </div>
        <footer className="text-sm">
          study project developed by{' '}
          <a
            href="https://www.linkedin.com/in/yagovela"
            target="_blank"
            className="text-primary"
          >
            @yagovela
          </a>{' '}
          - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="p-8">
          <div className="flex w-[350px] flex-col justify-center gap-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
