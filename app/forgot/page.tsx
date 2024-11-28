import * as Form from '@radix-ui/react-form'
import * as Separator from '@radix-ui/react-separator'
import { Box, Button, Card, Container, Flex, Heading, Text } from '@radix-ui/themes'
import Link from 'next/link'

import { version } from '@config/index'

const Page = () => {
  return (
    <>
      <Flex justify='between' className='h-screen w-screen flex-col bg-gray-50'>
        <Flex className='invisible text-center'>TODO</Flex>
        <Box>
          <Container size='1' className='mx-auto max-w-screen-sm rounded-md sm:w-11/12'>
            <Card size='3' variant='ghost' className='shadow bg-white'>
              <Flex justify='between' align='center' className='mb-2.5 border-b pb-2.5'>
                <Heading as='h2' className='text-lg text-gray-700 font-bold leading-none'>
                  忘记密码
                </Heading>
                <Link href='/signin' className='mx-0.5 text-gray-700 hover:underline text-sm '>
                  返回登录
                </Link>
              </Flex>
              <div className='pt-2.5 text-gray-600'>
                <Heading as='h3' className='mb-4 text-base font-bold leading-none'>
                  验证码登录 / 注册
                </Heading>
                <Form.Root className='w-full space-y-2 text-sm' autoCapitalize='off'>
                  <Form.Field name='email'>
                    <Flex justify='between' align='center' className='text-base'>
                      <Form.Label className='mb-1.5'></Form.Label>
                    </Flex>
                    <Form.Control asChild>
                      <input
                        className='h-12 p-2 w-full rounded-sm border bg-white outline-none focus:border-blue-500 '
                        type='text'
                        required
                      />
                    </Form.Control>
                  </Form.Field>
                  <Form.Field name='password'>
                    <Flex justify='between' align='center' className='text-base'>
                      <Form.Label className='mb-1.5'></Form.Label>
                    </Flex>
                    <Flex
                      justify='between'
                      align='center'
                      className='text-base border bg-white outline-none focus-within:border-blue-500'
                    >
                      <Form.Control asChild>
                        <input
                          className='h-12 w-full rounded-sm border-none outline-none focus:outline-none p-2 flex-auto bg-transparent'
                          type='password'
                          required
                        />
                      </Form.Control>
                      <Text className='flex-0 text-nowrap bg-transparent text-sm p-2 cursor-pointer text-blue-500'>
                        获取验证码
                      </Text>
                    </Flex>
                  </Form.Field>

                  <div className='pt-5'>
                    <Button size='3' color='blue' className='block w-full'>
                      提交
                    </Button>
                  </div>
                </Form.Root>
              </div>
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
