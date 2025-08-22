'use client'

import { ServerError, useMutation } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { zodResolver } from '@hookform/resolvers/zod'
import { Upload } from 'antd'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

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
import { Button } from '@components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'
import { Input } from '@components/ui/input'
import { Switch } from '@components/ui/switch'
import { Textarea } from '@components/ui/textarea'

import { CreateBannerDocument, DeleteBannerDocument, UpdateBannerDocument } from '@generated/graphql'
import type { BannerInput } from '@generated/graphql'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { appid, baseUrl } from '@/config'
import { useStore } from '@/store'

import { API } from '/#/api'

import type { UploadFile, UploadProps } from 'antd'

const formSchema = z.object({
  id: z.number().int(),
  title: z.string().min(2, {
    message: 'title must be at least 2 characters.'
  }),
  status: z.number().int(),
  is_visible: z.boolean(),
  is_link: z.boolean(),
  link_url: z.string().min(3, {
    message: 'link_url must be at least 3 characters.'
  }),
  is_video: z.boolean(),
  video_url: z.string().min(3, {
    message: 'video_url must be at least 3 characters.'
  }),
  cover_image: z
    .string()
    .nonempty({ message: 'Cover image is required' })
    .refine(value => value.endsWith('.png') || value.endsWith('.jpg'), {
      message: 'Cover image must be a PNG or JPG file'
    }),
  sort_id: z.number().int(),
  hit_count: z.number().int(),
  views_count: z.number().int(),
  view_type: z.number().int()
})

type Props = {
  item: API.Banner | null
  open: boolean
  setOpen: (open: boolean) => void
  refetch: () => void
}

const BannerDrawer = ({ item, open, setOpen, refetch }: Props) => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const token = useStore(state => state.token)
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    Appid: appid
  }

  const [fetch, { loading }] = useMutation(CreateBannerDocument, {
    variables: { input: {} as BannerInput },
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

  const [updator, { loading: updating }] = useMutation(UpdateBannerDocument, {
    variables: { id: 0, input: {} as BannerInput },
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

  const [deletor, { loading: deleting }] = useMutation(DeleteBannerDocument, {
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
      title: '',
      status: 0,
      is_visible: true,
      is_link: false,
      link_url: '',
      is_video: false,
      video_url: '',
      cover_image: '',
      sort_id: 0,
      hit_count: 0,
      views_count: 0,
      view_type: 0
    }
  })

  const isLink = form.watch('is_link')

  const onSubmit = async () => {
    const { id, ...values } = form.getValues()
    if (!values.cover_image) {
      toast.error('封面必须上传')
      return
    }
    await fetch({ variables: { input: values } })
  }

  const onUpdate = async () => {
    if (item === null) return

    const { id, ...values } = form.getValues()
    if (!values.cover_image) {
      toast.error('封面必须上传')
      return
    }

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
      form.reset({ ...(item as unknown as z.infer<typeof formSchema>) })
      if (item.cover_image) {
        setFileList([
          {
            uid: '-1',
            name: 'image',
            status: 'done',
            url: item.cover_image
          }
        ])
      }
    } else {
      form.reset({
        id: 0,
        title: '',
        status: 0,
        is_visible: true,
        is_link: false,
        link_url: '',
        is_video: false,
        video_url: '',
        cover_image: '',
        sort_id: 0,
        hit_count: 0,
        views_count: 0,
        view_type: 0
      })
      setFileList([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, open])

  /**
   * Ant Design Upload component callback when a file is uploaded.
   *
   * It is called with an object containing the uploaded file and the list of files.
   * If the file was uploaded successfully, it will have a `status` of `'done'` and a `response` property with the response data.
   * If the file was not uploaded successfully, it will have a `status` of `'error'` and a `response` property with the error message.
   *
   * The callback updates the `fileList` state with the new list of files.
   * If the file was uploaded successfully, it will add the uploaded file to the list with the `uid`, `name`, `status`, and `url` properties.
   * If the file was not uploaded successfully, it will not modify the `fileList` state.
   * @param {{ file: UploadFile; fileList: UploadFile[]; }} param0 - The object containing the uploaded file and the list of files.
   */
  const onUpload: UploadProps['onChange'] = ({ file, fileList }) => {
    setFileList(fileList)
    if (file.status === 'done' && file.response) {
      const data = file.response as unknown as API.File
      setFileList([
        {
          uid: data.id.toString(),
          name: data.file_name,
          status: 'done',
          url: data.file_url
        }
      ])

      // 设置表单图片信息
      form.setValue('cover_image', data.file_url, {
        shouldValidate: true, // 触发验证
        shouldDirty: true // 标记为脏
      })
    }
  }

  const onRemove: UploadProps['onRemove'] = _file => {
    // 设置表单图片信息
    form.setValue('cover_image', '', {
      shouldValidate: true, // 触发验证
      shouldDirty: true // 标记为脏
    })
  }

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      <div style={{ marginTop: 8 }}>上传图片</div>
    </button>
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='md:max-w-(--breakpoint-sm) w-full'>
        <DialogHeader>
          <DialogTitle>{item ? '编辑表单' : '创建表单'}</DialogTitle>
          <DialogDescription>这里有你想知道的一切.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} autoComplete='off' className='space-y-3'>
            <Tabs defaultValue='tab_a' className='w-full'>
              <TabsList>
                <TabsTrigger value='tab_a'>图片上传</TabsTrigger>
                <TabsTrigger value='tab_b'>使用地址</TabsTrigger>
              </TabsList>
              <TabsContent value='tab_a'>
                <Upload
                  action={`${baseUrl}/api/v1/files`}
                  accept='image/png,image/jpeg,image/jpg'
                  listType='picture-card'
                  maxCount={1}
                  headers={headers}
                  fileList={fileList}
                  showUploadList={{ showPreviewIcon: false }}
                  onChange={onUpload}
                  onRemove={onRemove}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
              </TabsContent>
              <TabsContent value='tab_b'>
                <FormField
                  control={form.control}
                  name='cover_image'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>封面地址</FormLabel>
                      <FormControl>
                        <Input className='h-10 shadow-none' placeholder='' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

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
              name='is_link'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>是否链接</FormLabel>
                  <FormControl>
                    <Switch className='block' checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isLink && (
              <FormField
                control={form.control}
                name='link_url'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>链接地址</FormLabel>
                    <FormControl>
                      <Textarea rows={4} className='h-10 resize-none shadow-none' placeholder='请输入描述' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
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
                <Button disabled={loading} size='lg' type='button' onClick={() => onSubmit()}>
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

export default BannerDrawer
