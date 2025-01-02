import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  // TODO: 处理用户未激活 || 用户菜单等
  // https://blog.openreplay.com/how-to--authentication-middleware-in-nextjs/

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/assessments']
}
