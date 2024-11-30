'use client'

import { useLazyQuery } from '@apollo/client'
import Link from 'next/link'
import { useEffect } from 'react'
import { GiBugleCall } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

import { useStore } from '@/store'

import { appid } from '@config/index'
import { ProfileDocument, ProfileQuery } from '@generated/graphql'

const Page = () => {
  const token = useStore(state => state.token)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment
  const [fetch, { loading, data }] = useLazyQuery(ProfileDocument, {
    context: {
      headers: {
        appid,
        Authorization: `Bearer ${token}`
      }
    }
  })

  useEffect(() => {
    fetch().catch(console.error)
  }, [])

  if (loading) {
    return <>loading</>
  }

  if (data as ProfileQuery) {
    console.log(data)
  }

  return (
    <div>
      <div className='bg-indigo-600'>
        <div className='max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white md:px-8'>
          <div className='flex gap-x-4'>
            <div className='w-10 h-10 flex-none rounded-lg bg-indigo-800 flex items-center justify-center'>
              <GiBugleCall />
            </div>
            <p className='py-2 font-medium'>
              2024年淘宝双12/年终好价节即将开启！情侣小站小编会第一时间更新！
              <Link href='/articles' className='font-semibold underline duration-150 hover:text-indigo-100'>
                查看优惠
              </Link>
            </p>
          </div>
          <button className='p-2 rounded-lg duration-150 hover:bg-indigo-500 ring-offset-2 focus:ring'>
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
