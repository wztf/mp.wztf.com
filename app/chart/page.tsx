/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { ServerError, useMutation } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { zodResolver } from '@hookform/resolvers/zod'
import { Spin } from 'antd'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { DataItem, pcTextArr } from 'element-china-area-data'
import { pinyin } from 'pinyin-pro'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Cascader } from 'rsuite'
import { ItemDataType } from 'rsuite/esm/internals/types'
import { z } from 'zod'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'

import { ChartInput, CreateChartDocument } from '@generated/graphql'

import { Button } from '@/components/ui/button'
import { DateTimeInput } from '@/components/ui/datetime-input'
import { DateTimePicker } from '@/components/ui/datetime-picker'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { API } from '/#/api'

const formSchema = z.object({
  birthday: z.date(),
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
      birthday: new Date(),
      country: 'BEIJING',
      city: 'Beijing',
      province: 0
    }
  })

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

  /**
   * Form submission handler.
   *
   * Gets the form values, formats the birthday and
   * constructs the payload. Then, calls the fetch
   * function with the payload.
   *
   * @returns {Promise<void>}
   */
  const onSubmit = async () => {
    if (loading) return
    setLoading(true)

    const values = form.getValues()
    const payload: ChartInput = {
      birthday: format(values.birthday, 'yyyy-MM-dd HH:mm:ss'),
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

  /**
   * Recursively transforms the `data` array of `DataItem` objects
   * into a new array of objects with the required shape for the
   * `areaData` property.
   *
   * @param {DataItem[]} data - The array of `DataItem` objects to transform.
   *
   * @returns {ItemDataType<string>[]} The transformed array of objects.
   */
  const transformData = (data: DataItem[]): ItemDataType<string>[] => {
    return data.map((item: DataItem) => ({
      label: item.label,
      value: item.value,
      children: item.children ? transformData(item.children) : undefined
    }))
  }

  const areaData = transformData(pcTextArr as unknown as DataItem[])

  const city = form.watch('city')

  /**
   * Converts a Chinese name to its pinyin format.
   *
   * @param {string} name - The Chinese name.
   * @param {object} [options] - The options.
   * @param {boolean} [options.upper] - Whether to convert the result to upper case.
   * @param {boolean} [options.capitalize] - Whether to capitalize the result.
   * @returns {string} The pinyin name.
   */
  const formatPinyinName = (name: string, options?: { upper?: boolean; capitalize?: boolean }): string => {
    const clean = name.replace(/(省|市|区)$/, '')

    // 转拼音（去掉空格）
    let result = pinyin(clean, { toneType: 'none' }).replace(/\s+/g, '')

    if (options?.upper) {
      result = result.toUpperCase()
    } else if (options?.capitalize) {
      result = result.charAt(0).toUpperCase() + result.slice(1)
    }

    return result
  }

  /**
   * Called when an item in the chart is selected.
   *
   * @param {ItemDataType<string>} item - The selected item.
   * @param {ItemDataType<string>[]} selectedPaths - The selected paths.
   */
  const onSelect = (item: ItemDataType, selectedPaths: ItemDataType[]) => {
    const city = formatPinyinName(item.label as string, { capitalize: true })
    form.setValue('city', city)
    if (selectedPaths.length > 1) {
      const country = formatPinyinName(selectedPaths[0].label as string, { upper: true })
      form.setValue('country', country)
    }
  }

  return (
    <div className='max-w-(--breakpoint-xl) mx-auto'>
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
              <form
                onSubmit={e => {
                  e.preventDefault()
                }}
                autoComplete='off'
                className='space-y-5'
              >
                <FormField
                  control={form.control}
                  name='birthday'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='date-picker'>
                        <span className='text-red-500'>*</span>出生日期
                      </FormLabel>
                      <FormControl>
                        <DateTimePicker
                          clearable
                          locale={zhCN}
                          value={field.value}
                          onChange={field.onChange}
                          max={new Date()}
                          timePicker={{ hour: true, minute: true, second: true }}
                          renderTrigger={({ open, value, setOpen }) => (
                            <DateTimeInput
                              value={value}
                              onChange={x => !open && field.onChange(x)}
                              format='yyyy-MM-dd hh:mm:ss'
                              disabled={open}
                              onCalendarClick={() => setOpen(!open)}
                            />
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='country'
                  render={() => (
                    <FormItem>
                      <FormLabel>
                        <span className='text-red-500'>*</span>出生所在地
                      </FormLabel>
                      <FormControl>
                        <Cascader
                          block
                          loading={loading}
                          data={areaData}
                          size='lg'
                          defaultValue={city}
                          onSelect={onSelect}
                          searchable={false}
                          placeholder='请选择出生所在地'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='mt-20'>
                  <Button size='lg' disabled={loading} type='button' className='w-full h-12' onClick={onSubmit}>
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
