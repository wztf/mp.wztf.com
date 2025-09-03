import { ServerError } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'

import { isDev } from '@/config'
import { AuthDocument } from '@/generated/graphql'
import { makeClient } from '@/plugins/apollo'

import { Middleware } from '/#/types'

/**
 * 中间件，检测 store 中是否存在 token
 * 如果没有 token，将抛出 UNAUTHORIZED 异常
 * @param {MiddlewareContext} ctx - 中间件上下文
 * @param {NextFunction} next - 下一个中间件
 */
export const authCheck: Middleware = async ({ store }, next) => {
  if (!store.token) {
    // 不直接跳转，抛出异常
    throw new Error('UNAUTHORIZED')
  }

  await next()
}

/**
 * 中间件，打印当前 token，判断 token 是否过期
 * 如果 token 过期，抛出 UNAUTHORIZED 异常
 * @param {MiddlewareContext} ctx - 中间件上下文
 * @param {NextFunction} next - 下一个中间件
 */
export const logAccess: Middleware = async ({ store }, next) => {
  if (store.token) {
    if (isDev) {
      console.log('当前 token:', store.token)
    }

    // 判断用户 token 是否过期
    try {
      await makeClient().query({
        query: AuthDocument,
        fetchPolicy: 'no-cache',
        context: {
          headers: {
            Authorization: `Bearer ${store.token}`
          }
        }
      })
    } catch (error) {
      const { networkError } = error as ApolloError
      const { result } = networkError as ServerError
      const { errors } = result as Record<string, { message: string }[]>
      if (errors) {
        console.log(errors[0].message)
      }
      // 清空 token
    }
  }

  await next()
}
