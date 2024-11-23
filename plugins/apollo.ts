import { HttpLink } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import { ApolloClient, InMemoryCache, registerApolloClient } from '@apollo/experimental-nextjs-app-support'

import { useStore } from '@/store'

import { appid } from '@config/index'

if (process.env.NODE_ENV !== 'production') {
  loadDevMessages()
  loadErrorMessages()
}

export const { getClient, query, PreloadQuery } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`
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
