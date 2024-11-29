/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { useMutation } from '@apollo/client'
import { ApolloError } from '@apollo/client/errors'
import { Signatory } from '@cakioe/kit.js'
import * as Form from '@radix-ui/react-form'
import * as Separator from '@radix-ui/react-separator'
import { Badge, Box, Button, Card, Container, Flex, Heading, Skeleton, Spinner, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { redirect, useSearchParams } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'

import { useStore } from '@/store'

import { appid, version } from '@config/index'
import { LoginDocument } from '@generated/graphql'

type FormProps = {
  email: string
  password: string
}

const Page = () => {
  const params = useSearchParams()
  const code = params.get('code') || ''
  const state = params.get('state') || ''

  const [method, setMethod] = useState<'sms' | 'password'>('sms')

  const signer = new Signatory(appid)
  const [fetch, { loading, data, error }] = useMutation(LoginDocument, {
    variables: { input: '' }
  })

  const login = useStore(state => state.login)

  useEffect(() => {
    const auth = async () => {
      const payload = signer.toBase64String({ app: 'gg', code: code, state: state })
      try {
        const res = await fetch({
          variables: { input: payload },
          context: {
            headers: {
              appid: appid
            }
          }
        })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    if (code && state) {
      auth().catch(console.error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code])

  const [formValues, setFormValues] = useState<FormProps>({
    email: 'cleveng@gmail.com',
    password: '123456'
  })
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({
    email: null,
    password: null
  })

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let newErrors = {}
    if (!formValues.email) {
      newErrors = { ...newErrors, email: '请输入邮箱地址' }
    } else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
      newErrors = { ...newErrors, email: '请输入正确的邮箱地址' }
    }

    if (!formValues.password) {
      newErrors = { ...newErrors, password: '请输入密码或验证码' }
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const payload = signer.toBase64String({ app: 'gg', ...formValues, method: 'password' })
    await fetch({
      variables: { input: payload },
      context: {
        headers: {
          appid: appid
        }
      }
    })
    // setFormValues({ email: '', password: '' })
    // setErrors({ email: null, password: null })
  }

  const onReset = (method: 'sms' | 'password' = 'sms') => {
    setMethod(method)
    // setFormValues({ email: '', password: '' })
    setErrors({ email: null, password: null })
  }

  if (loading) {
    return (
      <Flex justify='center' align='center' className='h-screen w-screen  bg-gray-50'>
        <Spinner size='3' />
        <Text color='gray' className='text-base font-bold ml-1'>
          正在处理...
        </Text>
      </Flex>
    )
  }

  if (error as ApolloError) {
    console.log(error?.message, '20092')
  }

  if (data) {
    toast.success('登录成功', { autoClose: 15000 })
    login(data.login)
    // NOTE: 获取用户信息
    return redirect('/')
  }

  return (
    <>
      <Flex justify='between' className='h-screen w-screen flex-col bg-gray-50'>
        <Flex className='invisible text-center'>TODO</Flex>
        <Box>
          <Container className='w-[90vw] mx-auto max-w-screen-sm rounded-md sm:w-11/12'>
            <Card size='3' variant='ghost' className='shadow bg-white'>
              <Flex justify='between' align='center' className='mb-2.5 border-b pb-2.5'>
                <Heading as='h2' className='text-lg text-gray-700 font-bold leading-none'>
                  登录账户畅享更多权益
                </Heading>
                <Link href='/' className='mx-0.5 text-gray-700 hover:underline text-sm '>
                  返回首页
                </Link>
              </Flex>
              <Flex justify='between' align='start' className='pt-2.5 text-gray-600'>
                <div className='flex-auto pr-4'>
                  <Heading as='h3' className='mb-4 text-base font-bold leading-none'>
                    {method === 'sms' ? '验证码登录 / 注册' : '密码登录'}
                  </Heading>
                  <Form.Root className='w-full space-y-2 text-sm' autoCapitalize='off' onSubmit={onSubmit}>
                    <Form.Field name='email'>
                      <Flex justify='between' align='center' className='text-base'>
                        <Form.Label className='mb-1.5'></Form.Label>
                      </Flex>
                      <Form.Control
                        asChild
                        onChange={e =>
                          setFormValues(prev => ({
                            ...prev,
                            email: e.target.value
                          }))
                        }
                      >
                        <input
                          className={`h-12 p-2 w-full rounded-sm border bg-white outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                          type='text'
                          value={formValues.email}
                          required
                        />
                      </Form.Control>
                      {errors.email && <Form.Message className='text-red-600'>{errors.email}</Form.Message>}
                    </Form.Field>
                    <Form.Field name='password'>
                      <Flex justify='between' align='center' className='text-base'>
                        <Form.Label className='mb-1.5'></Form.Label>
                      </Flex>
                      <Flex
                        justify='between'
                        align='center'
                        className={`text-base border bg-white outline-none focus-within:border-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                      >
                        <Form.Control
                          asChild
                          onChange={e =>
                            setFormValues(prev => ({
                              ...prev,
                              password: e.target.value
                            }))
                          }
                        >
                          <input
                            className='h-12 w-full rounded-sm border-none outline-none focus:outline-none p-2 flex-auto bg-transparent'
                            type='password'
                            required
                            value={formValues.password}
                          />
                        </Form.Control>
                        {method === 'sms' ? (
                          <Text className='flex-0 text-nowrap bg-transparent text-sm p-2 cursor-pointer text-blue-500'>
                            获取验证码
                          </Text>
                        ) : (
                          <Link href='/forgot' className='flex-0 text-nowrap bg-transparent text-sm p-2 cursor-pointer'>
                            忘记密码
                          </Link>
                        )}
                      </Flex>
                      {errors.password && <Form.Message className='text-red-600'>{errors.password}</Form.Message>}
                    </Form.Field>

                    {method === 'sms' ? (
                      <div className='pt-5'>
                        <Button size='3' color='blue' className='block w-full'>
                          登录 / 注册
                        </Button>
                      </div>
                    ) : (
                      <div className='grid grid-cols-2 gap-4 pt-5'>
                        <Button type='button' size='3' variant='outline' color='blue' onClick={() => onReset('sms')}>
                          注册
                        </Button>
                        <Button size='3' color='blue'>
                          登录
                        </Button>
                      </div>
                    )}
                  </Form.Root>
                  <Flex justify='between' align='center' className='pt-3 text-sm'>
                    <Flex align='center'>
                      <Text>其它登录：</Text>
                      <Link href='/auth/login?app=gg&name=google' target='_self' rel='noreferrer nofollow'>
                        <FcGoogle className='text-xl' />
                      </Link>
                    </Flex>
                    {method === 'sms' ? (
                      <Text className='cursor-pointer' onClick={() => onReset('password')}>
                        密码登录
                      </Text>
                    ) : (
                      <Text className='cursor-pointer' onClick={() => onReset('sms')}>
                        验证码登录
                      </Text>
                    )}
                  </Flex>
                </div>
                <div className='flex-0 md:w-[250px] border-l px-4 text-sm'>
                  <Flex className='text-base leading-none space-x-0.5' align='center' justify='start'>
                    <Heading as='h3' className='mb-0 text-base font-bold leading-none'>
                      扫码登录
                    </Heading>
                    <Badge radius='full' variant='solid' color='blue'>
                      仅支持微信
                    </Badge>
                  </Flex>
                  <Flex align='center' justify='start' className='my-2.5'>
                    <Skeleton className='h-[144px] w-[144px] border bg-gray-100'></Skeleton>
                  </Flex>
                  <div>
                    打开 <Text color='blue'>微信APP</Text>
                  </div>
                  <p>点击“发现-扫一扫”登录</p>
                </div>
              </Flex>
              <div className='pt-6 text-center text-sm text-gray-600 space-x-0.5'>
                <Text>注册登录即表示同意</Text>
                <Link href='/terms' className='text-blue-500 hover:underline'>
                  用户协议
                </Link>
                <Text>和</Text>
                <Link href='/privacy' className='text-blue-500 hover:underline'>
                  隐私政策
                </Link>
              </div>
            </Card>
          </Container>
        </Box>
        <Flex className='my-1 flex items-center justify-center text-sm text-gray-600'>
          <Link
            href='/'
            target='_blank'
            rel='noreferrer nofollow'
            className='mx-0.5 text-blue-500 underline hover:text-blue-700'
          >
            粤ICP备XXXX号
          </Link>
          <Separator.Root decorative orientation='vertical' className='mx-2 h-4 w-0.5 bg-gray-200' />
          <Link href='/' className='mx-0.5'>
            © All rights reserved. Blogs Powered by: blogs
          </Link>
          <Separator.Root decorative orientation='vertical' className='mx-2 h-4 w-0.5 bg-gray-200' />
          <Text>版本: v{version}</Text>
        </Flex>
      </Flex>
    </>
  )
}

export default Page
