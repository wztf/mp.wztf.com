import type { LucideIcon } from 'lucide-react'

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

  export interface Account {
    id: number
    name: string
    app: string
    appid: string
    app_secret?: string | null
    callback_url?: string | null
    platform_type: number
  }

  export interface NavLink {
    title: string
    url: string
  }

  export interface NavItem {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: NavLink[]
  }

  export interface Role {
    id: number
    name: string
    display_name: string
    description: string
    is_visible: boolean
    sort_id: number
  }

  export interface PermissionType {
    id: number
    name: string
    display_name: string
    sort_id: number
    permissions?: Permission[]
  }

  export interface Permission {
    id: number
    name: string
    display_name: string
    description: string
    is_visible: boolean
    sort_id: number
    type_id?: number
  }
}
