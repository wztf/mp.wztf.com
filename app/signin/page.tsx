/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import * as Separator from '@radix-ui/react-separator'
import { Box, Card, Container, Flex, Heading, Text } from '@radix-ui/themes'
import { useAsyncEffect } from 'ahooks'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaWeixin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { RuiLogin, RuiRegister, RuiWechat } from '@/components/account'
import { company, icp, version } from '@/config'
import { useStore } from '@/store'

const Page = () => {
  const router = useRouter()
  const params = useSearchParams()

  const code = params.get('code') || ''
  const state = params.get('state') || ''

  const { login, loggedIn, token, setApp, client, initClient } = useStore(state => ({
    login: state.login,
    loggedIn: state.loggedIn,
    token: state.token,
    setApp: state.setApp,
    client: state.client,
    initClient: state.initClient
  }))

  // 获取登录信息
  useAsyncEffect(async () => {
    if (client === null) {
      await initClient()
    }
  }, [client])

  const [method, setMethod] = useState<'sms' | 'password'>('sms')
  const app = params.get('app') || 'gg'
  useAsyncEffect(async () => {
    setApp(app)
    if (code === '') {
      return
    }

    try {
      await login({ app: app, code: code, state: state })
    } catch (error) {
      console.log(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, app])

  useEffect(() => {
    if (token) {
      Cookies.set('token', token, { path: '/' })
    }
  }, [token])

  const onReset = (method: 'sms' | 'password' = 'sms') => {
    setMethod(method)
  }

  // 登录后跳转
  useEffect(() => {
    if (loggedIn) {
      router.replace('/dashboard')
    }
  }, [loggedIn, router])

  return (
    <>
      <Flex justify='between' className='h-screen w-screen flex-col bg-gray-50'>
        <Flex className='invisible text-center'>TODO</Flex>
        <Box>
          <Container className='w-[90vw] mx-auto md:max-w-(--breakpoint-sm) rounded-md sm:w-11/12'>
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
                  {method === 'sms' ? <RuiRegister /> : <RuiLogin onReset={onReset} />}
                  <Flex justify='between' align='center' className='pt-3 text-sm'>
                    <Flex align='center'>
                      <Text>其它登录：</Text>
                      <Link
                        className='mr-2'
                        href='/auth/login?app=gg&name=google'
                        target='_self'
                        rel='noreferrer nofollow'
                        onClick={() => setApp('gg')}
                        prefetch={false}
                      >
                        <FcGoogle className='text-xl' />
                      </Link>
                      <Link
                        href='/auth/login?app=wechat&name=wechat'
                        target='_self'
                        rel='noreferrer nofollow'
                        onClick={() => setApp('wechat')}
                        prefetch={false}
                      >
                        <FaWeixin className='text-xl text-green-500' />
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
                  <RuiWechat />
                </div>
              </Flex>
              <div className='pt-6 text-center text-sm text-gray-600 space-x-0.5'>
                <Text>注册/登录即表示同意</Text>
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
            href='http://beian.miit.gov.cn/'
            target='_blank'
            rel='noreferrer nofollow'
            className='mx-0.5 text-blue-500 underline hover:text-blue-700'
          >
            {icp}
          </Link>
          <Separator.Root decorative orientation='vertical' className='mx-2 h-4 w-0.5 bg-gray-200' />
          <Link href='/' className='mx-0.5'>
            &copy; 2024 All rights reserved. King Talent Powered by: {company}
          </Link>
          <Separator.Root decorative orientation='vertical' className='mx-2 h-4 w-0.5 bg-gray-200' />
          <Text>版本: v{version}</Text>
        </Flex>
      </Flex>
    </>
  )
}

export default Page
