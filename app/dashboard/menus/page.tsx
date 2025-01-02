'use client'

import { Text } from '@radix-ui/themes'
import { FolderPlus } from 'lucide-react'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

import { Button } from '@components/ui/button'
import { Separator } from '@components/ui/separator'

const Page = () => {
  return (
    <>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='space-y-0.5 flex justify-between items-center'>
          <div>
            <h2 className='text-xl font-bold tracking-tight'>菜单管理</h2>
            <p className='text-muted-foreground text-sm'>从菜单列表选择一项后，进行编辑</p>
          </div>
          <div className='space-x-1.5'>
            <Button variant='outline' size='sm'>
              <FolderPlus />
              <Text>添加菜单</Text>
            </Button>
          </div>
        </div>
        <Separator />
        <div className='space-y-4 lg:space-y-0'>
          <div className='min-h-[600px]'></div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#' isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  )
}

export default Page
