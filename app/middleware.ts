import { NextRequest, NextResponse } from 'next/server'

import { useStore } from '@/store'

export function middleware(request: NextRequest) {
  const token = useStore.getState().token
  const loggedIn = useStore.getState().loggedIn
  if (!token && !loggedIn) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  // TODO: 处理用户未激活 || 用户菜单等
  // https://blog.openreplay.com/how-to--authentication-middleware-in-nextjs/

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/*']
}
