/* eslint-disable import/no-absolute-path */
import { Middleware, MiddlewareContext } from '/#/types'

/**
 * Runs an array of middlewares in sequence.
 *
 * Each middleware is called with two arguments: `ctx` and `next`. `ctx` is an
 * object with two properties: `store`, which is the store object passed to
 * `runMiddlewares`, and `env`, which is the environment string ('server' or
 * 'client'). `next` is a function that can be called to continue the
 * middleware chain.
 *
 * If a middleware returns a promise, the next middleware will not be called
 * until the promise is resolved. If a middleware throws an error, the error
 * will be propagated to the caller of `runMiddlewares`.
 *
 * @param {T} store The store object.
 * @param {Middleware<T>[]} middlewares The array of middlewares to run.
 * @param {'server'|'client'} [env='client'] The environment string.
 */
export async function runMiddlewares<T>(
  store: T,
  middlewares: Middleware<T>[],
  env: 'server' | 'client' = 'client'
): Promise<void> {
  const ctx: MiddlewareContext<T> = { store, env }
  let index = 0

  async function next(): Promise<void> {
    const middleware = middlewares[index++]
    if (middleware) {
      await middleware(ctx, next)
    }
  }

  await next()
}
