'use client'

import { ServerError, useLazyQuery, useMutation } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { zodResolver } from '@hookform/resolvers/zod'
import { Flex, Spinner, Text } from '@radix-ui/themes'
import { useAsyncEffect } from 'ahooks'
import { Tree, TreeDataNode, TreeProps, TreeSelect } from 'antd'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'
import { Input } from '@components/ui/input'
import { Switch } from '@components/ui/switch'
import { Textarea } from '@components/ui/textarea'
import {
  CategoriesDocument,
  CategoryInput,
  CreateCategoryDocument,
  DeleteCategoryDocument,
  UpdateCategoryDocument
} from '@generated/graphql'

import { API } from '/#/api'

const formSchema = z.object({
  id: z.number().int(),
  title: z.string().min(2, {
    message: 'title must be at least 2 characters.'
  }),
  keywords: z.string().min(2, {
    message: 'keywords must be at least 2 characters.'
  }),
  description: z.string().min(3, {
    message: 'description must be at least 3 characters.'
  }),
  is_visible: z.boolean(),
  parent_id: z.number().int(),
  slug: z.string(),
  sort_id: z.number().int(),
  thumb: z.string(),
  core_id: z.number().int()
})

const Page = () => {
  const defaultParams = () => ({
    id: 0,
    title: '',
    keywords: '',
    description: '',
    thumb: '',
    sort_id: 0,
    slug: '',
    parent_id: 0,
    is_visible: true,
    core_id: 1
  })

  const [fetch, { loading, data, refetch }] = useLazyQuery(CategoriesDocument, {
    variables: { input: '' },
    onError: ({ networkError }: ApolloError) => {
      const { result } = networkError as ServerError
      const { errors } = result as Record<string, { message: string }[]>
      if (errors) {
        toast.error(errors[0].message)
      }
    }
  })

  useAsyncEffect(async () => {
    await fetch()
  }, [])

  const root = {
    id: 0,
    title: '一级栏目',
    children: []
  } as unknown as TreeDataNode
  const [parent, setParent] = useState<TreeDataNode[]>([])

  const filter = (items: TreeDataNode[], depth = 0): TreeDataNode[] => {
    if (depth >= 2) {
      return []
    }

    return items.map(item => {
      const children: TreeDataNode[] = filter(item?.children || [], depth + 1)
      return {
        ...item,
        children: children
      }
    })
  }

  const [categories, setCategories] = useState<API.Category[]>([])
  useEffect(() => {
    const _categories = (data?.categories as unknown as API.Category[]) ?? []
    setCategories(_categories)
    if (_categories.length > 0) {
      const items = JSON.parse(JSON.stringify(_categories))
      items.unshift(root)
      setParent(filter(items))
    } else {
      setParent([root])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [current, setCurrent] = useState<API.Category | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultParams()
  })

  const onOpenForm = () => {
    setCurrent(null)
    setIsVisible(!isVisible)
    form.reset(defaultParams())
  }

  const [creator] = useMutation(CreateCategoryDocument, {
    variables: { input: {} as CategoryInput },
    onError: ({ networkError }: ApolloError) => {
      const { result } = networkError as ServerError
      const { errors } = result as Record<string, { message: string }[]>
      toast.error(errors[0].message)
    },
    onCompleted: async () => {
      toast.success('新增成功')
      onOpenForm()
      await refetch()
    }
  })

  const onChange = (category_id: number) => {
    if (current?.id && current?.id === category_id) {
      toast.error('栏目id不能选择自己')
      return
    }

    form.setValue('parent_id', category_id)
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const params: CategoryInput = {
      title: values.title,
      keywords: values.keywords,
      description: values.description,
      thumb: values.thumb,
      sort_id: values.sort_id,
      slug: values.slug,
      parent_id: values.parent_id,
      is_visible: values.is_visible,
      core_id: values.core_id
    }
    await creator({ variables: { input: params } })
  }

  const [updator] = useMutation(UpdateCategoryDocument, {
    variables: { id: 0, input: {} as CategoryInput },
    onError: ({ networkError }: ApolloError) => {
      const { result } = networkError as ServerError
      const { errors } = result as Record<string, { message: string }[]>
      toast.error(errors[0].message)
    },
    onCompleted: async () => {
      toast.success('更新成功')
      onOpenForm()
      await refetch()
    }
  })

  const onUpdate = async () => {
    const values = form.getValues()
    const params: CategoryInput = {
      title: values.title,
      thumb: values.thumb,
      sort_id: values.sort_id,
      slug: values.slug,
      parent_id: values.parent_id,
      keywords: values.keywords,
      is_visible: values.is_visible,
      description: values.description,
      core_id: values.core_id
    }
    await updator({ variables: { id: current?.id as number, input: params } })
  }

  const [deletor] = useMutation(DeleteCategoryDocument, {
    variables: { id: 0 },
    onError: ({ networkError }: ApolloError) => {
      const { result } = networkError as ServerError
      const { errors } = result as Record<string, { message: string }[]>
      toast.error(errors[0].message)
    },
    onCompleted: async () => {
      toast.success('删除成功')
      onOpenForm()
      await refetch()
    }
  })
  const onDelete = async () => {
    await deletor({ variables: { id: current?.id as number } })
  }

  const onSelect: TreeProps['onSelect'] = (_, { node }) => {
    setCurrent(node as unknown as API.Category)
    form.reset({ ...(node as unknown as z.infer<typeof formSchema>) })
    setIsVisible(true)
  }
  return (
    <>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='space-y-0.5 flex justify-between items-center'>
          <div>
            <h2 className='text-xl font-bold tracking-tight'>栏目管理</h2>
            <p className='text-muted-foreground text-sm'>从栏目列表选择一项后，进行编辑</p>
          </div>
          <Button variant='outline' size='sm' onClick={() => onOpenForm()}>
            <Plus />
            <Text>新 增</Text>
          </Button>
        </div>
        <div className='space-y-4 lg:space-y-0'>
          {loading ? (
            <Flex justify='center' className='w-full py-10 mx-auto'>
              <Spinner size='3' />
            </Flex>
          ) : (
            <div className='bg-background'>
              <div className='grid lg:grid-cols-5'>
                <div className='pb-12 hidden lg:block'>
                  <div className='space-y-4 pb-4'>
                    <div className='px-3 py-2'>
                      <h2 className='my-2 px-4 text-lg font-bold tracking-tight'>所有栏目</h2>
                      <div className='space-y-1'>
                        <Tree
                          showLine
                          fieldNames={{
                            title: 'title',
                            key: 'id',
                            children: 'children'
                          }}
                          defaultExpandAll
                          autoExpandParent
                          onSelect={onSelect}
                          treeData={categories as unknown as TreeDataNode[]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-3 lg:col-span-4'>
                  {isVisible ? (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} autoComplete='off' className='space-y-3'>
                        <FormField
                          control={form.control}
                          name='title'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                名称 <b className='text-red-500 ml-0.5'>*</b>
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
                          name='keywords'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                关键词 <b className='text-red-500 ml-0.5'>*</b>
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
                          name='description'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                描述 <b className='text-red-500 ml-0.5'>*</b>
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  rows={4}
                                  className='h-10 resize-none shadow-none'
                                  placeholder='请输入描述'
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name='parent_id'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                父类id <b className='text-red-500 ml-0.5'>*</b>
                              </FormLabel>
                              <FormControl>
                                {parent && (
                                  <TreeSelect
                                    value={field.value}
                                    className='block'
                                    treeDefaultExpandAll={true}
                                    size='large'
                                    style={{ width: '30%' }}
                                    fieldNames={{
                                      label: 'title',
                                      value: 'id',
                                      children: 'children'
                                    }}
                                    treeData={parent}
                                    onChange={value => onChange(value)}
                                  />
                                )}
                              </FormControl>
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
                                  className='h-10 shadow-none w-30'
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
                        {current ? (
                          <div className='flex justify-start items-center gap-5 pt-5'>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button type='button' variant='outline' size='lg'>
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
                                  <AlertDialogAction onClick={() => onDelete()}>确 认</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                            <Button size='lg' type='button' onClick={() => onUpdate()}>
                              更 新
                            </Button>
                          </div>
                        ) : (
                          <div className='flex justify-start items-center gap-5 pt-5'>
                            <Button
                              disabled={loading}
                              type='button'
                              variant='outline'
                              size='lg'
                              onClick={() => setIsVisible(false)}
                            >
                              取 消
                            </Button>
                            <Button disabled={loading} size='lg' type='submit'>
                              提 交
                            </Button>
                          </div>
                        )}
                      </form>
                    </Form>
                  ) : (
                    <div className='flex justify-center items-center min-h-96 border-l'>请选择栏目/创建栏目</div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Page
