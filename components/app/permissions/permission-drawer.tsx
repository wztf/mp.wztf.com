'use client'
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
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'

import { ServerError, useMutation } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

import type { PermissionInput } from '@generated/graphql'

import { CreatePermissionDocument, DeletePermissionDocument, UpdatePermissionDocument } from '@generated/graphql'

import { useEffect } from 'react'

import { API } from '/#/api'

const formSchema = z.object({
  id: z.number().int(),
  name: z.string().min(2, {
    message: '权限名至少2位'
  }),
  display_name: z.string().min(2, {
    message: '权限标识至少2位'
  }),
  description: z.string().min(3, {
    message: '权限描述至少3位'
  }),
  is_visible: z.boolean(),
  sort_id: z.number().int().gt(0, {
    message: '排序必须大于0'
  }),
  type_id: z.number().int().gt(0, {
    message: '请选择类型'
  })
})

type Props = {
  permission: API.Permission | null
  open: boolean
  types: API.PermissionType[]
  setOpen: (open: boolean) => void
  refetch: () => void
}

const PermissionDrawer = ({ permission, open, setOpen, refetch, types }: Props) => {
  const [fetch, { loading }] = useMutation(CreatePermissionDocument, {
    variables: { input: {} as PermissionInput },
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

  const [updator, { loading: updating }] = useMutation(UpdatePermissionDocument, {
    variables: { id: 0, input: {} as PermissionInput },
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

  const [deletor, { loading: deleting }] = useMutation(DeletePermissionDocument, {
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
      is_visible: true,
      sort_id: 1,
      type_id: 0
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { id, ...params } = values
    await fetch({ variables: { input: params } })
  }

  const onUpdate = async () => {
    if (permission === null) return
    const { id, ...values } = form.getValues()
    await updator({
      variables: { id: permission.id, input: values }
    })
  }

  const onDelete = async () => {
    if (permission === null) return
    await deletor({ variables: { id: permission.id } })
  }

  useEffect(() => {
    if (permission) {
      form.reset({ ...(permission as z.infer<typeof formSchema>) })
    } else {
      form.reset({
        id: 0,
        name: '',
        display_name: '',
        description: '',
        is_visible: true,
        sort_id: 1,
        type_id: 0
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permission, open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='max-w-screen-sm w-full'>
        <DialogHeader>
          <DialogTitle>{permission ? '编辑权限' : '创建权限'}</DialogTitle>
          <DialogDescription>新增加的权限需要重新赋予权限跟菜单，才能生效.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} autoComplete='off' className='space-y-3'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>权限名</FormLabel>
                  <FormControl>
                    <Input className='h-10' placeholder='请输入权限名' {...field} />
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
                  <FormLabel>权限标识</FormLabel>
                  <FormControl>
                    <Input className='h-10' placeholder='请输入权限标识' {...field} />
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
                  <FormLabel>权限描述</FormLabel>
                  <FormControl>
                    <Textarea className='resize-none' placeholder='请输入权限描述' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='md:grid md:gap-5 grid-cols-2 my-5 space-y-5 md:space-y-0'>
              <FormField
                control={form.control}
                name='is_visible'
                render={({ field }) => (
                  <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3'>
                    <div className='space-y-0.5'>
                      <FormLabel>是否显示</FormLabel>
                      <FormDescription>隐藏的话不会显示</FormDescription>
                    </div>
                    <FormControl>
                      <Switch className='block' checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='sort_id'
                render={({ field }) => (
                  <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3'>
                    <div className='space-y-0.5'>
                      <FormLabel>排序值</FormLabel>
                      <FormDescription>越小优先展示</FormDescription>
                    </div>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='请输入'
                        {...field}
                        className='w-20 h-10'
                        onChange={e => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='type_id'
                render={({ field }) => (
                  <>
                    <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 col-span-2'>
                      <div className='space-y-0.5'>
                        <FormLabel>所属类型</FormLabel>
                        <FormDescription>对应类型</FormDescription>
                      </div>
                      <FormControl>
                        <Select onValueChange={e => field.onChange(Number(e))} defaultValue={String(field.value)}>
                          <SelectTrigger className='h-10 w-1/2 shadow-none'>
                            <SelectValue placeholder='请选择类型' />
                          </SelectTrigger>
                          <SelectContent>
                            {types.map(type => (
                              <SelectItem key={type.id} value={String(type.id)}>
                                {type.name}
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
            </div>
            {permission ? (
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

export default PermissionDrawer
