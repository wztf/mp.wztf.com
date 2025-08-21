'use client'

import { Text } from '@radix-ui/themes'

export default function Error() {
  return (
    <>
      <section className='bg-gray-50'>
        <div className='mx-auto max-w-(--breakpoint-xl) px-4 py-32 lg:flex lg:h-screen lg:items-center'>
          <div className='mx-auto max-w-xl text-center'>
            <h1 className='text-3xl font-extrabold sm:text-5xl'>
              Understand User Flow.
              <strong className='font-extrabold text-red-700 sm:block'> Increase Conversion. </strong>
            </h1>

            <Text className='mt-4 sm:text-xl/relaxed'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
            </Text>

            <div className='mt-8 flex flex-wrap justify-center gap-4'>
              <a
                className='block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-hidden focus:ring-3 active:bg-red-500 sm:w-auto'
                href='#'
              >
                Get Started
              </a>

              <a
                className='block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow-sm hover:text-red-700 focus:outline-hidden focus:ring-3 active:text-red-500 sm:w-auto'
                href='#'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
