export type MiddlewareContext<T = any> = {
  store: T
  env?: 'server' | 'client' // 可选标记执行环境
}

export type MiddlewareResult = 'OK' | 'REDIRECT'

export type Middleware<T = any> = (ctx: MiddlewareContext<T>, next: () => Promise<void>) => Promise<void> | void
