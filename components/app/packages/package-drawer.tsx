'use client'

import { ServerError, useMutation } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { toast } from 'react-toastify'
import { z } from 'zod'

import { Switch } from '@/components/ui/switch'
import { PermissionEnum } from '@/enums/permissionEnum'
import { usePermission } from '@/hooks/user-permission'

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
import { CreatePackageDocument, DeletePackageDocument, UpdatePackageDocument } from '@generated/graphql'

import type { PackageInput } from '@generated/graphql'

import { API } from '/#/api'

const formSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  thumb: z.string(),
  is_visible: z.boolean(),
  sort_id: z.number().int(),
  randomizable: z.boolean(),
  total: z.number().int(),
  avg: z.number().int()
})

type Props = {
  item: API.Package | null
  open: boolean
  setOpen: (open: boolean) => void
  refetch: () => void
}

const PackageDrawer = ({ item, open, setOpen, refetch }: Props) => {
  const { hasPermission } = usePermission()

  const defaultParams = () => ({
    id: 0,
    name: '',
    thumb: '',
    is_visible: true,
    sort_id: 0,
    randomizable: true,
    total: 0,
    avg: 0
  })

  const [fetch, { loading }] = useMutation(CreatePackageDocument, {
    variables: { input: {} as PackageInput },
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

  const [updator, { loading: updating }] = useMutation(UpdatePackageDocument, {
    variables: { id: 0, input: {} as PackageInput },
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

  const [deletor, { loading: deleting }] = useMutation(DeletePackageDocument, {
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
    defaultValues: defaultParams()
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!hasPermission([PermissionEnum.MENUS_ACTION_CREATE])) {
      toast.error('you have no permission')
      return
    }

    const params: PackageInput = {
      name: values.name,
      thumb: values.thumb,
      is_visible: values.is_visible,
      sort_id: values.sort_id,
      randomizable: values.randomizable,
      total: values.total,
      avg: values.avg
    }
    await fetch({ variables: { input: params } })
  }

  const onUpdate = async () => {
    if (item === null) return

    if (!hasPermission([PermissionEnum.MENUS_ACTION_UPDATE])) {
      toast.error('you have no permission')
      return
    }

    const values = form.getValues()
    const params: PackageInput = {
      name: values.name,
      thumb: values.thumb,
      is_visible: values.is_visible,
      sort_id: values.sort_id,
      randomizable: values.randomizable,
      total: values.total,
      avg: values.avg
    }
    await updator({
      variables: { id: item.id, input: params }
    })
  }

  const onDelete = async () => {
    if (item === null) return

    if (!hasPermission([PermissionEnum.MENUS_ACTION_DELETE])) {
      toast.error('you have no permission')
      return
    }

    await deletor({ variables: { id: item?.id } })
  }

  useEffect(() => {
    if (item) {
      form.reset({ ...(item as z.infer<typeof formSchema>) })
    } else {
      form.reset(defaultParams())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='max-w-(--breakpoint-md) w-full'>
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
                      套餐名称 <b className='text-red-500 ml-0.5'>*</b>
                    </FormLabel>
                    <FormControl>
                      <Input className='h-10 shadow-none' placeholder='请输入路由名称' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='thumb'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      套餐封面 <b className='text-red-500 ml-0.5'>*</b>
                    </FormLabel>
                    <FormControl>
                      <Input className='h-10 shadow-none' placeholder='请输入路由路径' {...field} />
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
                        className='h-10 shadow-none'
                        placeholder=''
                        {...field}
                        onChange={e => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='total'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      总题数 <b className='text-red-500 ml-0.5'>*</b>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        className='h-10 shadow-none'
                        placeholder=''
                        {...field}
                        onChange={e => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='avg'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      平均题数 <b className='text-red-500 ml-0.5'>*</b>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        className='h-10 shadow-none'
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
            <div className='grid grid-cols-2 gap-3'>
              <FormField
                control={form.control}
                name='is_visible'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>是否显示</FormLabel>
                    <FormControl>
                      <Switch className='block' checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='randomizable'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>随机选题</FormLabel>
                    <FormControl>
                      <Switch className='block' checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {item ? (
              <div className='flex justify-end items-center gap-5 pt-5'>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button disabled={deleting} type='button' variant='outline' size='lg'>
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
                <Button disabled={updating} size='lg' type='button' onClick={() => onUpdate()}>
                  更 新
                </Button>
              </div>
            ) : (
              <div className='flex justify-end items-center gap-5 pt-5'>
                <Button disabled={loading} type='button' variant='outline' size='lg' onClick={() => setOpen(false)}>
                  取 消
                </Button>
                <Button disabled={loading} size='lg' type='submit'>
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

export default PackageDrawer
