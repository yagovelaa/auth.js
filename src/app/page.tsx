import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1617896376265-28bcb35febf7?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">auth.js</h1>
        <p className="mt-4 text-lg md:text-2xl">
          application made to study the <br /> new version of the auth.js
          library
        </p>
        <div className="mt-8 flex space-x-4">
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/yagovelaa/auth.js"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://www.linkedin.com/in/yagovela"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <Linkedin className="w-4 h-4" />
              Linkedin
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
