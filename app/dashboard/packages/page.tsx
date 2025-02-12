'use client'
import { PackageDrawer } from '@/components/app/packages'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { ServerError, useLazyQuery } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { PackagesDocument } from '@generated/graphql'

import { Flex, Spinner, Text } from '@radix-ui/themes'

import { Button } from '@/components/ui/button'

import { Plus } from 'lucide-react'

import { PermissionEnum } from '@/enums/permissionEnum'
import { usePermission } from '@/hooks/user-permission'

import { API } from '/#/api'

const Page = () => {
  const { hasPermission } = usePermission()

  const [loading, setLoading] = useState<boolean>(true)
  const [packages, setPackages] = useState<API.Package[]>([])
  const [fetch, { data, refetch }] = useLazyQuery(PackagesDocument, {
    variables: {},
    onError: ({ networkError }: ApolloError) => {
      const { result } = networkError as ServerError
      const { errors } = result as Record<string, { message: string }[]>
      toast.error(errors[0].message)
      setLoading(false)
    }
  })

  useEffect(() => {
    setLoading(true)
    fetch({ variables: {} }).then()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [packageDrawerIsVisible, setPackageDrawerIsVisible] = useState(false)
  const [current, setCurrent] = useState<API.Package | null>(null)

  useEffect(() => {
    setPackages((data?.packages as API.Package[]) ?? [])
    setLoading(false)
  }, [data])

  const openPackageDrawer = (item: API.Package | null) => {
    setCurrent(item)
    setPackageDrawerIsVisible(true)
  }

  return (
    <>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='space-y-0.5 flex justify-between items-center'>
          <div>
            <h2 className='text-xl font-bold tracking-tight'>套餐列表</h2>
            <p className='text-muted-foreground text-sm'>九型人格套餐列表</p>
          </div>
          {hasPermission([PermissionEnum.ROLES_ACTION_CREATE]) && (
            <Button variant='outline' size='sm' onClick={() => openPackageDrawer(null)}>
              <Plus />
              <Text>创建</Text>
            </Button>
          )}
        </div>
        <Separator />
        <div className='space-y-4'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>ID</TableHead>
                <TableHead>套餐名称</TableHead>
                <TableHead>套餐封面</TableHead>
                <TableHead>是否显示</TableHead>
                <TableHead>排序值</TableHead>
                <TableHead>总题数</TableHead>
                <TableHead className='text-right'>操 作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={8}>
                    <Flex justify='center' className='w-full py-10 mx-auto'>
                      <Spinner size='3' />
                    </Flex>
                  </TableCell>
                </TableRow>
              ) : packages.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className='bg-gray-50'>
                    <Flex justify='center' className='w-full py-44 mx-auto'>
                      暂无数据
                    </Flex>
                  </TableCell>
                </TableRow>
              ) : (
                packages.map(item => (
                  <TableRow key={item.id}>
                    <TableCell className='font-medium'>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.thumb}</TableCell>
                    <TableCell>
                      <Switch checked={item.is_visible} aria-readonly='true' />
                    </TableCell>
                    <TableCell>{item.sort_id}</TableCell>
                    <TableCell>{item.total}</TableCell>
                    <TableCell className='text-right'>
                      {hasPermission([PermissionEnum.ROLES_ACTION_UPDATE]) && (
                        <Button variant='outline' size='sm' onClick={() => openPackageDrawer(item)}>
                          编 辑
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <PackageDrawer
        open={packageDrawerIsVisible}
        setOpen={setPackageDrawerIsVisible}
        item={current}
        refetch={refetch}
      />
    </>
  )
}

export default Page
