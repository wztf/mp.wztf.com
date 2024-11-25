import { Button, Text } from '@radix-ui/themes'
import Link from 'next/link'

const UriHeader = () => {
  return (
    <>
      <nav id='nav' className='w-full border-b sticky top-0 z-50 bg-white'>
        <div className='py-5 md:py-0 container mx-auto px-6 flex items-center justify-between'>
          <Link href='/'>
            <Text>hello world</Text>
          </Link>
          <div>
            <button className='sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'>
              #
            </button>
            <div id='menu' className='md:block lg:block hidden'>
              <button className='block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6'>
                #
              </button>
              <ul className='flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20'>
                <li className='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0'>
                  <Link href='/signin'>Feature</Link>
                </li>
                <li className='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                  <Link href='/signin'>Marketplace</Link>
                </li>
                <li className='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                  <Link href='/signin'>Company</Link>
                </li>
                <li className='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                  <Link href='/signin'>Features</Link>
                </li>
                <li className='text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10'>
                  <Link href='/signin'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <Link href='/signin'>
            <Button size='3' color='blue'>
              登录
            </Button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default UriHeader
