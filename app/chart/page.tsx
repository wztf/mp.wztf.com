/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { ServerError, useMutation } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { zodResolver } from '@hookform/resolvers/zod'
import { DatePicker, Select, Spin } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'

import { ChartInput, CreateChartDocument } from '@generated/graphql'

import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cities, provinces } from '@/lib/city'

import { API } from '/#/api'

const formSchema = z.object({
  birthday: z.custom<Dayjs>(val => dayjs.isDayjs(val), {
    message: '无效的日期'
  }),
  country: z.string().min(6, {
    message: '国家不能为空'
  }),
  city: z.string().min(6, {
    message: '城市不能为空'
  }),
  province: z.number().int()
})

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birthday: dayjs(),
      country: 'BEIJING',
      city: 'Beijing',
      province: 0
    }
  })

  const country = useWatch({
    control: form.control,
    name: 'country'
  })
  useEffect(() => {
    form.setValue('city', '')
  }, [country, form])

  const citiesOptions = cities.filter(item => item.state_code === country) as API.RegionOption[]

  const [loading, setLoading] = useState(false)

  const [fetch, { data }] = useMutation(CreateChartDocument, {
    variables: { input: {} as ChartInput },
    onError: ({ networkError }: ApolloError) => {
      const { result } = networkError as ServerError
      const { errors } = result as Record<string, { message: string }[]>
      if (errors) {
        console.log(errors[0].message)
        toast.error('获取人类图出错，请重试')
      }
      setLoading(false)
    }
  })

  const onSubmit = async () => {
    if (loading) return
    setLoading(true)

    const values = form.getValues()
    const payload: ChartInput = {
      birthday: values.birthday.format('YYYY-MM-DD HH:mm:ss'),
      country: values.country,
      city: values.city,
      province: values.province
    }

    await fetch({ variables: { input: payload } })
  }

  const [chart, setChart] = useState<API.Chart | null>({
    hd_authority: '荐骨型权威',
    hd_cross: '右角度交叉之渗透4 (54/53 | 57/51)',
    hd_definition: '一分人',
    hd_profile: '2/4',
    hd_profile_cht: '隐士/机会主义者',
    hd_strategy: '等待回应',
    hd_theme: '挫败感',
    hd_type: '生产者',
    birthday: '1990-01-07 12:30:00',
    country: 'Beijing',
    city: 'BEIJING',
    thumb: 'https://mp.wztf99.com/storage/images/1756807768494.jpg',
    province: 0
  })
  useEffect(() => {
    if (data) {
      setLoading(false)
      setChart(data.createChart as unknown as API.Chart)
    }
  }, [data])

  return (
    <div className='max-w-4xl mx-auto'>
      <h4 className='text-xl text-center mt-5'>你的专属人类图</h4>
      {chart ? (
        <div className='text-center space-y-5'>
          <div>
            <img src={chart?.thumb} alt='' className='text-center mx-auto' />
          </div>

          <div className='p-5'>
            <Table className='space-y-5'>
              <TableHeader>
                <TableRow className='bg-gray-700'>
                  <TableHead className='text-center text-white'>类型</TableHead>
                  <TableHead className='text-center text-white'>人生角色</TableHead>
                  <TableHead className='text-center text-white'>定义</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{chart?.hd_type}</TableCell>
                  <TableCell>{chart?.hd_profile}</TableCell>
                  <TableCell>{chart?.hd_definition}</TableCell>
                </TableRow>
                <TableRow className='bg-gray-700 text-white'>
                  <TableCell>内在权威</TableCell>
                  <TableCell>策略</TableCell>
                  <TableCell>非自已主题</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{chart?.hd_authority}</TableCell>
                  <TableCell>{chart?.hd_strategy}</TableCell>
                  <TableCell>{chart?.hd_theme}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3} className='bg-gray-700 text-white'>
                    轮回交叉
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3}>{chart?.hd_cross}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button size='lg' className='w-full h-12 mt-20' onClick={() => setChart(null)}>
              重新绘制
            </Button>
          </div>
        </div>
      ) : (
        <div className='p-5'>
          <Spin spinning={loading}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} autoComplete='off' className='space-y-5'>
                <FormField
                  control={form.control}
                  name='birthday'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='date-picker'>
                        <span className='text-red-500'>*</span>出生日期
                      </FormLabel>
                      <FormControl>
                        <div className=''>
                          <DatePicker
                            id='date-picker'
                            className='h-10 w-full'
                            value={field.value}
                            showTime
                            onChange={field.onChange}
                            format='YYYY-MM-DD HH:mm:ss'
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='country'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className='text-red-500'>*</span>省
                      </FormLabel>
                      <FormControl>
                        <Select
                          className='w-full'
                          value={field.value}
                          options={provinces}
                          onChange={field.onChange}
                          size='large'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='city'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className='text-red-500'>*</span>市
                      </FormLabel>
                      <FormControl>
                        <Select
                          className='w-full'
                          value={field.value}
                          options={citiesOptions}
                          onChange={field.onChange}
                          size='large'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='mt-20'>
                  <Button size='lg' disabled={loading} type='submit' className='w-full h-12'>
                    绘 制
                  </Button>
                </div>
              </form>
            </Form>
          </Spin>
        </div>
      )}
    </div>
  )
}

export default Page
