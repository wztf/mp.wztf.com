'use client'

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support'
import React from 'react'

import { makeClient } from '@plugins/apollo'

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
