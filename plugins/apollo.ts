import { HttpLink } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import { ApolloClient, InMemoryCache, registerApolloClient } from '@apollo/experimental-nextjs-app-support'

import { useStore } from '@/store'

import { appid } from '@config/index'

if (process.env.NODE_ENV !== 'production') {
  loadDevMessages()
  loadErrorMessages()
}

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`

export const { getClient, query, PreloadQuery } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: BASE_URL
      }),
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
        Authorization: useStore().token ?? '',
        Appid: appid
      }
    })
)
