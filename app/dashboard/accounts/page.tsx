'use client'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { AccountDrawer } from '@/components/app/accounts/account-drawer'
import { ServerError, useLazyQuery } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { AccountsDocument } from '@generated/graphql'

import { Flex, Spinner, Text } from '@radix-ui/themes'

import { Separator } from '@/components/ui/separator'

import { API } from '/#/api'

const Page = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [accounts, setAccounts] = useState<API.Account[]>([])

  const [fetch, { data, error, refetch }] = useLazyQuery(AccountsDocument, {
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
    if (data?.accounts) {
      setAccounts(data.accounts as API.Account[])
      setLoading(false)
    }
  }, [data])

  // Handle error state
  useEffect(() => {
    if (error) {
      toast.error('An error occurred while fetching accounts.')
    }
  }, [error])

  const [account, SetAccount] = useState<API.Account | null>(null)
  const [open, setOpen] = useState(false)
  const onSelect = (item: API.Account | null) => {
    SetAccount(item)
    setOpen(true)
  }

  return (
    <>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='space-y-0.5 flex justify-between items-center'>
          <div>
            <h2 className='text-xl font-bold tracking-tight'>公众号</h2>
            <p className='text-muted-foreground text-sm'>这里有你想知道的一切！</p>
          </div>
          <div className='space-x-1.5'>
            <Button variant='outline' size='sm' onClick={() => onSelect(null)}>
              <Plus />
              <Text>新 增</Text>
            </Button>
          </div>
        </div>
        <Separator />
        <div className='space-y-4'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>ID</TableHead>
                <TableHead>应用名</TableHead>
                <TableHead>应用名称</TableHead>
                <TableHead>Appid</TableHead>
                <TableHead>App Secret</TableHead>
                <TableHead>回调地址</TableHead>
                <TableHead className='text-right'>操 作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Flex justify='center' className='w-full py-10 mx-auto'>
                      <Spinner size='3' />
                    </Flex>
                  </TableCell>
                </TableRow>
              ) : accounts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className='bg-gray-50'>
                    <Flex justify='center' className='w-full py-44 mx-auto'>
                      暂无数据
                    </Flex>
                  </TableCell>
                </TableRow>
              ) : (
                accounts.map(account => (
                  <TableRow key={account.id}>
                    <TableCell className='font-medium'>{account.id}</TableCell>
                    <TableCell>{account.name}</TableCell>
                    <TableCell>{account.app}</TableCell>
                    <TableCell>{account.appid}</TableCell>
                    <TableCell>{account?.app_secret}</TableCell>
                    <TableCell>{account?.callback_url}</TableCell>
                    <TableCell className='text-right'>
                      <Button variant='outline' size='sm' onClick={() => onSelect(account)}>
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

      <AccountDrawer open={open} setOpen={setOpen} item={account} refetch={refetch} />
    </>
  )
}

export default Page
