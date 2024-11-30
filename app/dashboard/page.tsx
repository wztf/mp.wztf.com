import Link from 'next/link'
import { GiBugleCall } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

const Page = () => {
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
