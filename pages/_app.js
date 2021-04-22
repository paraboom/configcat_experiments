import React from 'react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { SWRConfig } from 'swr'
import fetcher from '../utils/fetcher'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SWRConfig>
  )
}