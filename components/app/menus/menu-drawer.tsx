'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import { ServerError, useMutation } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@components/ui/alert-dialog'

import type { MenuInput } from '@generated/graphql'

import { CreateMenuDocument, DeleteMenuDocument, UpdateMenuDocument } from '@generated/graphql'

import { API } from '/#/api'

const formSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  display_name: z.string(),
  description: z.string(),
  path: z.string(),
  component: z.string(),
  redirect: z.string(),
  meta: z.string(),
  parent_id: z.number().int(),
  sort_id: z.number().int()
})

type Props = {
  item: API.MenuItem | null
  open: boolean
  setOpen: (open: boolean) => void
  refetch: () => void
  menus: API.MenuItem[]
}

export function MenuDrawer({ item, open, menus, setOpen, refetch }: Props) {
  const [fetch, { loading }] = useMutation(CreateMenuDocument, {
    variables: { input: {} as MenuInput },
    onError: ({ networkError }: ApolloError) => {
      const { result } = networkError as ServerError
      const { errors } = result as Record<string, { message: string }[]>
      toast.error(errors[0].message)
    },
    onCompleted: () => {
      toast.success('新增成功')
      setOpen(false)
      refetch()
    }
  })

  const [updator, { loading: updating }] = useMutation(UpdateMenuDocument, {
    variables: { id: 0, input: {} as MenuInput },
    onError: ({ networkError }: ApolloError) => {
      const { result } = networkError as ServerError
      const { errors } = result as Record<string, { message: string }[]>
      toast.error(errors[0].message)
    },
    onCompleted: () => {
      toast.success('更新成功')
      setOpen(false)
      refetch()
    }
  })

  const [deletor, { loading: deleting }] = useMutation(DeleteMenuDocument, {
    variables: { id: 0 },
    onError: ({ networkError }: ApolloError) => {
      const { result } = networkError as ServerError
      const { errors } = result as Record<string, { message: string }[]>
      toast.error(errors[0].message)
    },
    onCompleted: () => {
      toast.success('删除成功')
      setOpen(false)
      refetch()
    }
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: 0,
      name: '',
      display_name: '',
      description: '',
      path: '',
      component: '',
      redirect: '',
      meta: '',
      parent_id: 0,
      sort_id: 0
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { id, ...params } = values
    await fetch({ variables: { input: params } })
  }

  const onUpdate = async () => {
    if (item === null) return
    const { id, ...values } = form.getValues()
    await updator({
      variables: { id: item.id, input: values }
    })
  }

  const onDelete = async () => {
    if (item === null) return
    await deletor({ variables: { id: item?.id } })
  }

  useEffect(() => {
    if (item) {
      form.reset({ ...(item as z.infer<typeof formSchema>) })
    } else {
      form.reset({
        id: 0,
        name: '',
        display_name: '',
        description: '',
        path: '',
        component: '',
        redirect: '',
        meta: '',
        parent_id: 0,
        sort_id: 1
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='max-w-screen-md w-full'>
        <DialogHeader>
          <DialogTitle>{item ? '编辑表单' : '创建表单'}</DialogTitle>
          <DialogDescription>这里有你想知道的一切.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} autoComplete='off' className='space-y-3'>
            <div className='grid grid-cols-2 gap-3'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      路由名称 <b className='text-red-500 ml-0.5'>*</b>
                    </FormLabel>
                    <FormControl>
                      <Input className='h-10' placeholder='请输入路由名称' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='path'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      路由路径 <b className='text-red-500 ml-0.5'>*</b>
                    </FormLabel>
                    <FormControl>
                      <Input className='h-10' placeholder='请输入路由路径' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='display_name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      菜单名称 <b className='text-red-500 ml-0.5'>*</b>
                    </FormLabel>
                    <FormControl>
                      <Input className='h-10' placeholder='请输入菜单名称' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      菜单描述 <b className='text-red-500 ml-0.5'>*</b>
                    </FormLabel>
                    <FormControl>
                      <Input className='h-10' placeholder='请输入菜单描述' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='parent_id'
                render={({ field }) => (
                  <>
                    <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 col-span-2'>
                      <div className='space-y-0.5'>
                        <FormLabel>
                          菜单类型 <b className='text-red-500 ml-0.5'>*</b>
                        </FormLabel>
                        <FormDescription>对应类型</FormDescription>
                      </div>
                      <FormControl>
                        <Select onValueChange={e => field.onChange(Number(e))} defaultValue={String(field.value)}>
                          <SelectTrigger className='h-10 w-1/2 shadow-none'>
                            <SelectValue placeholder='请选择菜单类型' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='0'>顶级菜单</SelectItem>
                            {menus.map(menu => (
                              <SelectItem key={menu.id} value={String(menu.id)}>
                                {menu.display_name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                    <FormMessage />
                  </>
                )}
              />
              <FormField
                control={form.control}
                name='redirect'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>重定向地址</FormLabel>
                    <FormControl>
                      <Input className='h-10' placeholder='请输入重定向地址' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='sort_id'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      排序 <b className='text-red-500 ml-0.5'>*</b>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        className='h-10'
                        placeholder=''
                        {...field}
                        onChange={e => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {item ? (
              <div className='grid grid-cols-2 gap-5 pt-5'>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button disabled={deleting} type='button' variant='outline' className='w-full' size='lg'>
                      删 除
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className='w-96'>
                    <AlertDialogHeader>
                      <AlertDialogTitle className='text-red-500'>是否删除?</AlertDialogTitle>
                      <AlertDialogDescription>删除后无法恢复，请谨慎操作.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>取 消</AlertDialogCancel>
                      <AlertDialogAction disabled={deleting} onClick={() => onDelete()}>
                        确 认
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Button disabled={updating} size='lg' type='button' onClick={() => onUpdate()} className='w-full'>
                  更 新
                </Button>
              </div>
            ) : (
              <div className='grid grid-cols-2 gap-5 pt-5'>
                <Button
                  disabled={loading}
                  type='button'
                  variant='outline'
                  className='w-full'
                  size='lg'
                  onClick={() => setOpen(false)}
                >
                  取 消
                </Button>
                <Button disabled={loading} size='lg' type='submit' className='w-full'>
                  提 交
                </Button>
              </div>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
