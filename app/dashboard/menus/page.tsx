'use client'

import { ServerError, useLazyQuery } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { Text } from '@radix-ui/themes'

import type { TreeDataNode, TreeProps } from 'antd'

import { Tree } from 'antd'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { MenuDrawer } from '@/components/app/menus/menu-drawer'

import { Button } from '@components/ui/button'
import { Separator } from '@components/ui/separator'
import { MenusDocument } from '@generated/graphql'

import { API } from '/#/api'

const Page = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [menus, setMenus] = useState<TreeDataNode[]>([])

  const [fetch, { data, error, refetch }] = useLazyQuery(MenusDocument, {
    onError: ({ networkError }: ApolloError) => {
      const { result } = networkError as ServerError
      const { errors } = result as Record<string, { message: string }[]>
      toast.error(errors[0].message)
    }
  })

  useEffect(() => {
    setLoading(true)
    fetch().then()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update accounts once data is loaded
  useEffect(() => {
    if (data?.menus) {
      setMenus(data.menus as unknown as TreeDataNode[])
      setLoading(false)
    }
  }, [data])

  // Handle error state
  useEffect(() => {
    if (error) {
      toast.error('An error occurred while fetching accounts.')
    }
  }, [error])

  const [menu, setMenu] = useState<API.MenuItem | null>(null)
  const [open, setOpen] = useState(false)
  const onSelect2 = (item: API.MenuItem | null) => {
    setMenu(item)
    setOpen(true)
  }

  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['0-0-0', '0-0-1'])
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(['0-0-0'])
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([])
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true)

  const onExpand: TreeProps['onExpand'] = expandedKeysValue => {
    console.log('onExpand', expandedKeysValue)
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue)
    setAutoExpandParent(false)
  }

  const onCheck: TreeProps['onCheck'] = checkedKeysValue => {
    console.log('onCheck', checkedKeysValue)
    setCheckedKeys(checkedKeysValue as React.Key[])
  }

  const onSelect: TreeProps['onSelect'] = (selectedKeysValue, info) => {
    console.log('onSelect', info)
    setSelectedKeys(selectedKeysValue)
  }
  return (
    <>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='space-y-0.5 flex justify-between items-center'>
          <div>
            <h2 className='text-xl font-bold tracking-tight'>菜单管理</h2>
            <p className='text-muted-foreground text-sm'>从菜单列表选择一项后，进行编辑</p>
          </div>
          <Button variant='outline' size='sm' onClick={() => onSelect2(null)}>
            <Plus />
            <Text>新 增</Text>
          </Button>
        </div>
        <div className='space-y-4 lg:space-y-0'>
          {loading}
          {menus.length === 0}
          <div className='bg-background'>
            <div className='grid lg:grid-cols-5'>
              <div className='pb-12 hidden lg:block'>
                <div className='space-y-4 pb-4'>
                  <div className='px-3 py-2'>
                    <div className='flex justify-end mb-3'>
                      <Button variant='outline' className='shadow-none' size='sm' onClick={() => onSelect2(null)}>
                        <Plus />
                        <Text>创建分组</Text>
                      </Button>
                    </div>
                    <Separator />
                    <h2 className='my-2 px-4 text-lg font-bold tracking-tight'>所有菜单</h2>
                    <div className='space-y-1'>
                      <Tree
                        checkable
                        fieldNames={{
                          title: 'display_name',
                          key: 'id',
                          children: 'children'
                        }}
                        onExpand={onExpand}
                        expandedKeys={expandedKeys}
                        autoExpandParent={autoExpandParent}
                        onCheck={onCheck}
                        checkedKeys={checkedKeys}
                        onSelect={onSelect}
                        selectedKeys={selectedKeys}
                        treeData={menus}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-span-3 lg:col-span-4 lg:border-l'>
                <div className='h-full px-4 py-6 lg:px-6'>
                  <div className='flex-1 space-y-4'>
                    <div className='space-y-0.5 flex justify-between items-center'>
                      <div>
                        <h2 className='text-xl font-bold tracking-tight'>菜单管理</h2>
                        <p className='text-muted-foreground text-sm'>从菜单列表选择一项后，进行编辑</p>
                      </div>
                      <Button variant='outline' size='sm' onClick={() => onSelect2(null)}>
                        <Plus />
                        <Text>新 增</Text>
                      </Button>
                    </div>
                    <Separator />
                    <div className='space-y-4 lg:space-y-0'>
                      {loading}
                      {menus.length === 0}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MenuDrawer
        item={menu}
        open={open}
        menus={menus as unknown as API.MenuItem[]}
        setOpen={setOpen}
        refetch={refetch}
      />
    </>
  )
}

export default Page
