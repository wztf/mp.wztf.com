'use client'

import { ServerError, useLazyQuery } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { Flex, Spinner, Text } from '@radix-ui/themes'
import { useAsyncEffect } from 'ahooks'
import { Image } from 'antd'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { BannerDrawer } from '@components/app/banners'
import { Button } from '@components/ui/button'
import { Separator } from '@components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui/table'

import { BannersDocument } from '@generated/graphql'

import { API } from '/#/api'

const Page = () => {
  const [fetch, { loading, data, refetch }] = useLazyQuery(BannersDocument, {
    variables: { input: '' },
    onError: ({ networkError }: ApolloError) => {
      const { result } = networkError as ServerError
      const { errors } = result as Record<string, { message: string }[]>
      toast.error(errors[0].message)
    }
  })

  useAsyncEffect(async () => {
    await fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [banners, setBanners] = useState<API.Banner[]>([])
  useEffect(() => {
    setBanners((data?.banners as unknown as API.Banner[]) ?? [])
  }, [data])

  const [current, setCurrent] = useState<API.Banner | null>(null)
  const [open, setOpen] = useState(false)
  const openBannerDrawer = (item: API.Banner | null) => {
    setCurrent(item)
    setOpen(true)
  }

  return (
    <>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='space-y-0.5 flex justify-between items-center'>
          <div>
            <h2 className='text-xl font-bold tracking-tight'>应用中心</h2>
            <p className='text-muted-foreground text-sm'>这里有你想知道的一切！</p>
          </div>
          <Button variant='outline' size='sm' onClick={() => openBannerDrawer(null)}>
            <Plus />
            <Text>新 增</Text>
          </Button>
        </div>
        <Separator />
        <div className='space-y-4'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>ID</TableHead>
                <TableHead>封面</TableHead>
                <TableHead>是否连接</TableHead>
                <TableHead>是否显示</TableHead>
                <TableHead>点击数</TableHead>
                <TableHead>曝光数</TableHead>
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
              ) : banners.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className='bg-gray-50'>
                    <Flex justify='center' className='w-full py-44 mx-auto'>
                      暂无数据
                    </Flex>
                  </TableCell>
                </TableRow>
              ) : (
                banners.map(banner => (
                  <TableRow key={banner.id}>
                    <TableCell className='font-medium'>{banner.id}</TableCell>
                    <TableCell>
                      {banner.cover_image ? <Image width={144} src={banner.cover_image} alt='' /> : <span>-</span>}
                    </TableCell>
                    <TableCell>{banner.is_link ? 'Y' : 'N'}</TableCell>
                    <TableCell>{banner.is_visible ? 'Y' : 'N'}</TableCell>
                    <TableCell>{banner.hit_count}</TableCell>
                    <TableCell>{banner.views_count}</TableCell>
                    <TableCell className='text-right'>
                      <Button variant='outline' size='sm' onClick={() => openBannerDrawer(banner)}>
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

      <BannerDrawer open={open} setOpen={setOpen} item={current} refetch={refetch} />
    </>
  )
}

export default Page
