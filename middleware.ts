import { ServerError } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { NextResponse } from 'next/server'

import { AuthDocument } from './generated/graphql'
import { makeClient } from './plugins/apollo'

import type { NextRequest } from 'next/server'

/**
 * middleware
 *
 * nextjs middleware, used to verify the validity of the token in the cookie
 *
 * If the token is invalid or has expired, it will clear the token and redirect to the login page
 *
 * @param request - instance of NextRequest
 * @returns Promise<NextResponse>
 * @link https://nextjs.org/docs/middleware
 */
export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value
    if (!token) {
      return NextResponse.redirect(new URL('/signin', request.url))
    }

    // 判断用户 token 是否过期
    try {
      await makeClient().query({
        query: AuthDocument,
        fetchPolicy: 'no-cache',
        context: {
          headers: {
            Authorization: `Bearer ${token}`
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

      request.cookies.delete('token')
      return NextResponse.redirect(new URL('/signin', request.url))
    }

    // TODO: 用户菜单等
    // https://blog.openreplay.com/how-to--authentication-middleware-in-nextjs/

    return NextResponse.next()
  } catch (error) {
    console.error('Middleware Error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/assessments']
}
