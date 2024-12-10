export declare namespace API {
  // 用户资料
  export interface Profile {
    id: number
    name: string
    email: string
    email_verified_at: string
    created_at: string
    updated_at: string
    profile_url: string
  }

  // 系统设置
  export interface Setting {
    title: string
    keywords: string
    description: string
    host: string
    registrable: boolean
  }
}
