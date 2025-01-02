'use client'
import { RoleDrawer } from '@/components/app/roles/role-drawer'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { ServerError, useLazyQuery } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { RolesDocument } from '@generated/graphql'

import { Flex, Spinner, Text } from '@radix-ui/themes'

import { Button } from '@/components/ui/button'

import { Plus } from 'lucide-react'

import { API } from '/#/api'

const Page = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [roles, setRoles] = useState<API.Role[]>([])
  const [open, setOpen] = useState(false)
  const [role, setRole] = useState<API.Role | null>(null)
  const [fetch, { data, error, refetch }] = useLazyQuery(RolesDocument, {
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

  // Handle error state
  useEffect(() => {
    if (error) {
      toast.error('An error occurred while fetching roles.')
    }
  }, [error])

  // Update roles once data is loaded
  useEffect(() => {
    if (data?.roles) {
      setRoles(data.roles as API.Role[])
      setLoading(false)
    }
  }, [data])

  const onSelect = (item: API.Role | null) => {
    setRole(item)
    setOpen(true)
  }

  return (
    <>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='space-y-0.5 flex justify-between items-center'>
          <div>
            <h2 className='text-xl font-bold tracking-tight'>角色列表</h2>
            <p className='text-muted-foreground text-sm'>
              每个角色都有不同的访问权限和操作能力，以确保系统的安全性和数据的保护。
            </p>
          </div>
          <div className='space-x-1.5'>
            <Button variant='outline' size='sm' onClick={() => onSelect(null)}>
              <Plus />
              <Text>创建角色</Text>
            </Button>
          </div>
        </div>
        <Separator />
        <div className='space-y-4'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>ID</TableHead>
                <TableHead>角色名</TableHead>
                <TableHead>显示名称</TableHead>
                <TableHead>角色描述</TableHead>
                <TableHead>是否显示</TableHead>
                <TableHead>排序值</TableHead>
                <TableHead>权限设置</TableHead>
                <TableHead>菜单设置</TableHead>
                <TableHead className='text-right'>操 作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={9}>
                    <Flex justify='center' className='w-full py-10 mx-auto'>
                      <Spinner size='3' />
                    </Flex>
                  </TableCell>
                </TableRow>
              ) : roles.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className='bg-gray-50'>
                    <Flex justify='center' className='w-full py-44 mx-auto'>
                      暂无数据
                    </Flex>
                  </TableCell>
                </TableRow>
              ) : (
                roles.map(role => (
                  <TableRow key={role.id}>
                    <TableCell className='font-medium'>{role.id}</TableCell>
                    <TableCell>{role.name}</TableCell>
                    <TableCell>{role.display_name}</TableCell>
                    <TableCell>{role.description}</TableCell>
                    <TableCell>
                      <Switch checked={role.is_visible} aria-readonly='true' />
                    </TableCell>
                    <TableCell>{role.sort_id}</TableCell>
                    <TableCell>
                      <Button variant='outline' size='sm'>
                        查看权限
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant='outline' size='sm'>
                        查看菜单
                      </Button>
                    </TableCell>
                    <TableCell className='text-right'>
                      <Button variant='outline' size='sm' onClick={() => onSelect(role)}>
                        编 辑
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <RoleDrawer open={open} setOpen={setOpen} item={role} refetch={refetch} />
    </>
  )
}

export default Page
