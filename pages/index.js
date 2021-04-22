import { useUser } from '@auth0/nextjs-auth0'
import useSWR from 'swr'

export default function Index() {
  const { user, error, isLoading } = useUser()
  const { data, userError, isValidating } = useSWR(() => user ? '/api/user' : null)

  if (isLoading || isValidating) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    const greeting = data.useCustomGreeting ? `You're the one, ${user.name}!` : `Just an ordinary hello, ${user.name} :(`
    return (
      <div>
        {greeting} <a href="/api/auth/logout">Logout</a>
      </div>
    )
  }

  return <a href="/api/auth/login">Login</a>
}
