'use client'

import { ChevronRight } from 'lucide-react'

import { useStore } from '@/store'

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

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { API } from '/#/api'

export function NavMain() {
  const [menus, setMenus] = useState<API.Menu[]>([])
  const getMenus = useStore(state => state.getMenus)
  useEffect(() => {
    try {
      getMenus().then(menus => {
        setMenus(menus)
      })
    } catch (error) {
      console.log(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {menus.map(item => (
          <Collapsible key={item.id} asChild defaultOpen={false} className='group/collapsible'>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.display_name}>
                  {/* {item?.meta?.icon && constantRouterIcon[item?.meta?.icon]} */}
                  <span>{item.display_name}</span>
                  <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.children?.map(children => (
                    <SidebarMenuSubItem key={children.id}>
                      <SidebarMenuSubButton asChild>
                        <Link href={children?.path ?? ''}>
                          <span>{children.display_name}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
