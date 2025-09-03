'use client'

import { useAsyncEffect } from 'ahooks'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Middleware } from '/#/types'

import { runMiddlewares } from '../middlewares/runner'

/**
 * This hook is used to guard a component from unauthenticated users.
 * It takes a store and middlewares as arguments and runs the middlewares.
 * If the middlewares throw an error with the message 'UNAUTHORIZED',
 * the hook redirects the user to the login page.
 * @param store The store object.
 * @param middlewares The array of middlewares to run.
 * @returns A boolean indicating whether the user is ready.
 */
export function useAuthGuard<T>(store: T, middlewares: Middleware<T>[]) {
  const [ready, setReady] = useState(false)
  const router = useRouter()

  useAsyncEffect(async () => {
    try {
      await runMiddlewares(store, middlewares, 'client')
      setReady(true)
    } catch (err) {
      if (err instanceof Error && err.message === 'UNAUTHORIZED') {
        router.push('/signin')
      }
    }
  }, [store, middlewares, router])

  return ready
}
