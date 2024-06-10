import { currentUser } from '@/lib/auth'

export default async function HomePage() {
  const user = await currentUser()

  return (
    <div>
      <h1 className="text-lg font-medium">Hi, {user?.name}</h1>

      <span className="text-muted-foreground">
        This project was made with the aim of studying the new version of lib
        auth, if you have any questions please get in touch{' '}
        <a
          href="https://www.linkedin.com/in/yagovela"
          target="_blank"
          className="text-primary"
        >
          @yagovela
        </a>
      </span>
    </div>
  )
}
