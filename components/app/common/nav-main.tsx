'use client'

import { useAsyncEffect } from 'ahooks'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '@components/ui/sidebar'

import { constantRouterIcon } from '@/lib/icons'
import { useStore } from '@/store'

import { API } from '/#/api'

export function NavMain() {
  const [menus, setMenus] = useState<API.Menu[]>([])
  const getMenus = useStore(state => state.getMenus)

  useAsyncEffect(async () => {
    const data = await getMenus()
    setMenus(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * Filters out menus that are marked as hidden and recursively applies the same logic to submenus.
   * @param menus The menus to filter.
   * @returns The filtered menus.
   */
  const filterVisibleMenus = (menus: API.Menu[]): API.Menu[] => {
    return menus
      .filter(menu => !menu.meta?.hidden)
      .map(menu => ({
        ...menu,
        children: menu.children ? filterVisibleMenus(menu.children) : undefined
      }))
  }

  const filteredMenus = filterVisibleMenus(menus)

  return (
    <SidebarGroup>
      <SidebarGroupLabel>控制台</SidebarGroupLabel>
      <SidebarMenu>
        {filteredMenus.map(item => (
          <Collapsible key={item.id} asChild defaultOpen={false} className='group/collapsible'>
            <SidebarMenuItem>
              {!item?.children || item?.children?.length == 0 ? (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={item?.path ?? ''}>
                      {constantRouterIcon[item?.meta?.icon as keyof typeof constantRouterIcon]}
                      <span>{item.display_name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.display_name}>
                      {constantRouterIcon[item?.meta?.icon as keyof typeof constantRouterIcon]}
                      <span>{item.display_name}</span>
                      <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children?.map(children => (
                        <SidebarMenuSubItem key={children.id}>
                          <SidebarMenuSubButton asChild>
                            <Link href={`${item?.path}/${children?.path === 'index' ? '' : children?.path}`}>
                              <span>{children.display_name}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
