'use client'

import { HttpLink } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import { ApolloClient, ApolloNextAppProvider, InMemoryCache } from '@apollo/experimental-nextjs-app-support'
import React from 'react'

import { appid, isDev } from '@config/index'

if (isDev) {
  loadDevMessages()
  loadErrorMessages()
}

// eslint-disable-next-line react-hooks/rules-of-hooks

// have a function to create a client for you
const makeClient = () => {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    defaultOptions: {
      query: {
        context: {
          fetchOptions: {
            next: {
              revalidate: 60 * 60 * 3 // 3 hours
            }
          }
        }
      }
    },
    headers: {
      Authorization: '',
      Appid: appid
    }
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
