import { Box, Button, Container, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Home() {
  return (
    <>
      <section className='relative bg-gray-900'>
        <div className='relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8'>
          <div className='space-y-5 max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl text-white font-extrabold mx-auto md:text-5xl'>
              Build and scale up your startup with the best tools
            </h2>
            <p className='max-w-2xl mx-auto text-gray-400'>
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae.
            </p>
            <form className='justify-center items-center gap-x-3 sm:flex'>
              <input
                type='text'
                placeholder='Enter your email'
                className='w-full px-3 py-2.5 text-gray-400 bg-gray-700 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto'
              />
              <Link href='/dashboard'>
                <Flex
                  gapX='2'
                  justify='center'
                  align='center'
                  className='py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto'
                >
                  <Text>Get started</Text>
                  <FaArrowRightLong />
                </Flex>
              </Link>
            </form>
            <div className='flex justify-center items-center gap-x-4 text-gray-400 text-sm'>
              <div className='flex'>
                <svg className='w-5 h-5' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z' />
                </svg>
                <svg className='w-5 h-5' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z' />
                </svg>
                <svg className='w-5 h-5' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z' />
                </svg>
                <svg className='w-5 h-5' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z' />
                </svg>
                <svg className='w-5 h-5' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z' />
                </svg>
              </div>
              <p>
                <span className='text-gray-100'>5.0</span> by over 200 users
              </p>
            </div>
          </div>
        </div>
        <div
          className='absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg'
          style={{
            background:
              'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)'
          }}
        ></div>
      </section>
      <Box className='bg-gray-100 mx-auto'>
        <Container className='py-12 sm:py-24'>
          <div className='w-11/12 mx-auto sm:w-2/3 mb-5 sm:mb-10'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10'>
              The Freedom to Create the
              <span className='text-indigo-700'>Websites</span>
              You Want
            </h1>
            <p className='mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg'>
              A professonal website drives sales. Create a beautiful website to impress and engage new customers and
              establish your business online
            </p>
          </div>
          <Flex gap='3' justify='center' align='center'>
            <Button size='3' color='blue'>
              Get Started
            </Button>
            <Button size='3' color='blue' variant='outline'>
              Live Demo
            </Button>
          </Flex>
        </Container>
      </Box>

      <div className='container mx-auto py-9 md:py-12 px-4 md:px-6'>
        <div className='flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8'>
          <div className='flex flex-col md:flex-row items-strech justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12'>
            <div className='flex flex-col justify-center md:w-1/2'>
              <h1 className='text-3xl lg:text-4xl font-semibold text-gray-800'>Best Deal</h1>
              <p className='text-base lg:text-xl text-gray-800 mt-2'>
                Save upto <span className='font-bold'>50%</span>
              </p>
            </div>
            <div className='md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end'>
              <img src='https://i.ibb.co/J2BtZdg/Rectangle-56-1.png' alt='' />
            </div>
          </div>
          <div className='md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative'>
            <div className='flex flex-col justify-center'>
              <h1 className='text-3xl lg:text-4xl font-semibold text-gray-800'>Game Console</h1>
              <p className='text-base lg:text-xl text-gray-800'>
                Save Upto <span className='font-bold'>30%</span>
              </p>
            </div>
            <div className='flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0'>
              <img
                src='https://i.ibb.co/rGfP7mp/Rectangle-59-1.png'
                alt=''
                className='md:w-20 md:h-20 lg:w-full lg:h-full'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='2xl:container 2xl:mx-auto'>
        <div className='lg:px-20 md:px-6 px-4 md:py-12 py-8'>
          <div>
            <h1 className='text-3xl lg:text-4xl font-semibold text-gray-800 text-center'>Top Selling</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10'>
            <div className='bg-gray-50 p-8'>
              <div className=''>
                <h2 className='text-xl text-gray-600'>Lounge Chair</h2>
                <p className='text-xl font-semibold text-gray-800 mt-2'>$1200</p>
              </div>
              <div className='flex justify-center items-center mt-8 md:mt-24'>
                <img
                  className=''
                  src='https://i.ibb.co/8403ZFZ/pexels-hormel-2762247-removebg-preview-2-1.png'
                  alt='A chair with designed back'
                />
              </div>
              <div className='flex justify-end items-center space-x-2 mt-16 md:mt-32'>
                <button
                  aria-label='show in red color'
                  className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded'
                >
                  <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='5' cy='5' r='4.75' fill='#DC2626' stroke='#6B7280' strokeWidth='0.5' />
                  </svg>
                </button>
                <button
                  aria-label='show in white color'
                  className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded'
                >
                  <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='5' cy='5' r='4.75' fill='white' stroke='#6B7280' strokeWidth='0.5' />
                  </svg>
                </button>
                <button
                  aria-label='show in black color'
                  className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded'
                >
                  <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='5' cy='5' r='4.75' fill='#111827' stroke='#6B7280' strokeWidth='0.5' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='bg-gray-50 p-8'>
              <div className=''>
                <h2 className='text-xl text-gray-600'>Lounge Chair</h2>
                <p className='text-xl font-semibold text-gray-800 mt-2'>$1200</p>
              </div>
              <div className='flex justify-center items-center mt-8 md:mt-24'>
                <img
                  className=''
                  src='https://i.ibb.co/WBdnRqb/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-2-1.png'
                  alt='A chair with wooden legs'
                />
              </div>
              <div className='flex justify-end items-center space-x-2 mt-8 md:mt-24'>
                <button
                  aria-label='show in white color'
                  className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded'
                >
                  <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='5' cy='5' r='4.75' fill='white' stroke='#6B7280' strokeWidth='0.5' />
                  </svg>
                </button>
                <button
                  aria-label='show in black color'
                  className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded'
                >
                  <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='5' cy='5' r='4.75' fill='#111827' stroke='#6B7280' strokeWidth='0.5' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='bg-gray-50 p-8'>
              <div className=''>
                <h2 className='text-xl text-gray-600'>Lounge Chair</h2>
                <p className='text-xl font-semibold text-gray-800 mt-2'>$1200</p>
              </div>
              <div className='flex justify-center items-center mt-8 md:mt-24'>
                <img
                  className=''
                  src='https://i.ibb.co/R2fbCvj/kari-shea-It-Mgg-D0-Egu-Y-unsplash-removebg-preview-2-1.png'
                  alt='A sofa chair with wooden legs'
                />
              </div>
              <div className='flex justify-end items-center space-x-2 mt-16 md:mt-32'>
                <button
                  aria-label='show in green color'
                  className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded'
                >
                  <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='5' cy='5' r='4.75' fill='#047857' stroke='#6B7280' strokeWidth='0.5' />
                  </svg>
                </button>
                <button
                  aria-label='show in brown color'
                  className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded'
                >
                  <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='5' cy='5' r='4.75' fill='#92400E' stroke='#6B7280' strokeWidth='0.5' />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8'>
            <div className='bg-gray-50 p-8'>
              <div>
                <h2 className='text-xl leading-tight text-gray-600'>Sectional Sofa</h2>
                <p className='text-xl font-semibold text-gray-800 mt-2'>$78900</p>
              </div>
              <div className='flex justify-center items-center mt-28 md:mt-3'>
                <img
                  src='https://i.ibb.co/CPdBFwZ/pexels-pixabay-276583-removebg-preview-1-1.png'
                  alt='A large sectional sofa'
                />
              </div>
              <div className='flex justify-end items-center space-x-2 mt-36 md:mt-12'>
                <button
                  aria-label='show in yellow color'
                  className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded'
                >
                  <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='5' cy='5' r='4.75' fill='#F59E0B' stroke='#6B7280' strokeWidth='0.5' />
                  </svg>
                </button>
                <button
                  aria-label='show in light gray color'
                  className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded'
                >
                  <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='5' cy='5' r='4.75' fill='#9CA3AF' stroke='#6B7280' strokeWidth='0.5' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='bg-gray-50 p-8'>
              <div>
                <h2 className='text-xl leading-tight text-gray-600'>Two Seater Sofa</h2>
                <p className='text-xl font-semibold text-gray-800 mt-2'>$2900</p>
              </div>
              <div className='flex justify-center items-center mt-28 md:mt-1'>
                <img
                  src='https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png'
                  alt='A beautiful two seater sofa'
                />
              </div>
              <div className='flex justify-end items-center space-x-2 mt-36 md:mt-12'>
                <button
                  aria-label='show in black color'
                  className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded'
                >
                  <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='5' cy='5' r='4.75' fill='#111827' stroke='#6B7280' strokeWidth='0.5' />
                  </svg>
                </button>
                <button
                  aria-label='show in green color'
                  className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded'
                >
                  <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='5' cy='5' r='4.75' fill='#047857' stroke='#6B7280' strokeWidth='0.5' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className='2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-semibold leading-9 text-center text-gray-800'>This Week Blogs</h1>
            <p className='text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12'>
              If you are looking for random paragraphs, you ave come to the right place. When a random word or a random
              sentence is not quite enough
            </p>
          </div>
          <div className='lg:flex items-stretch md:mt-12 mt-8'>
            <div className='lg:w-1/2'>
              <div className='sm:flex items-center justify-between xl:gap-x-8 gap-x-6'>
                <div className='sm:w-1/2 relative'>
                  <div>
                    <p className='p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>12 April 2021</p>
                    <div className='absolute bottom-0 left-0 p-6'>
                      <h2 className='text-xl font-semibold 5 text-white'>The Decorated Ways</h2>
                      <p className='text-base leading-4 text-white mt-2'>Dive into minimalism</p>
                      <div className='flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'>
                        <Link href='/articles' className='pr-2 text-sm font-medium leading-none'>
                          Read More
                        </Link>
                        <svg
                          className='fill-stroke'
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5.75 12.5L10.25 8L5.75 3.5'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <img src='https://i.ibb.co/DYxtCJq/img-1.png' className='w-full' alt='chair' />
                </div>
                <div className='sm:w-1/2 sm:mt-0 mt-4 relative'>
                  <div>
                    <p className='p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>12 April 2021</p>
                    <div className='absolute bottom-0 left-0 p-6'>
                      <h2 className='text-xl font-semibold 5 text-white'>The Decorated Ways</h2>
                      <p className='text-base leading-4 text-white mt-2'>Dive into minimalism</p>
                      <div className='flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'>
                        <Link href='/articles' className='pr-2 text-sm font-medium leading-none'>
                          Read More
                        </Link>
                        <svg
                          className='fill-stroke'
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5.75 12.5L10.25 8L5.75 3.5'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <img src='https://i.ibb.co/3C5HvxC/img-2.png' className='w-full' alt='wall design' />
                </div>
              </div>
              <div className='relative'>
                <div>
                  <p className='md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>
                    12 April 2021
                  </p>
                  <div className='absolute bottom-0 left-0 md:p-10 p-6'>
                    <h2 className='text-xl font-semibold 5 text-white'>The Decorated Ways</h2>
                    <p className='text-base leading-4 text-white mt-2'>Dive into minimalism</p>
                    <div className='flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'>
                      <Link href='/articles' className='pr-2 text-sm font-medium leading-none'>
                        Read More
                      </Link>
                      <svg
                        className='fill-stroke'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.75 12.5L10.25 8L5.75 3.5'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <img
                  src='https://i.ibb.co/Ms4qyXp/img-3.png'
                  alt='sitting place'
                  className='w-full mt-8 md:mt-6 hidden sm:block'
                />
                <img
                  className='w-full mt-4 sm:hidden'
                  src='https://i.ibb.co/6XYbN7f/Rectangle-29.png'
                  alt='sitting place'
                />
              </div>
            </div>
            <div className='lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between'>
              <div className='relative'>
                <div>
                  <p className='md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>
                    12 April 2021
                  </p>
                  <div className='absolute bottom-0 left-0 md:p-10 p-6'>
                    <h2 className='text-xl font-semibold 5 text-white'>The Decorated Ways</h2>
                    <p className='text-base leading-4 text-white mt-2'>Dive into minimalism</p>
                    <div className='flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'>
                      <Link href='/articles' className='pr-2 text-sm font-medium leading-none'>
                        Read More
                      </Link>
                      <svg
                        className='fill-stroke'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.75 12.5L10.25 8L5.75 3.5'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <img src='https://i.ibb.co/6Wfjf2w/img-4.png' alt='sitting place' className='w-full sm:block hidden' />
                <img className='w-full sm:hidden' src='https://i.ibb.co/dpXStJk/Rectangle-29.png' alt='sitting place' />
              </div>
              <div className='sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4'>
                <div className='relative w-full'>
                  <div>
                    <p className='p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>12 April 2021</p>
                    <div className='absolute bottom-0 left-0 p-6'>
                      <h2 className='text-xl font-semibold 5 text-white'>The Decorated Ways</h2>
                      <p className='text-base leading-4 text-white mt-2'>Dive into minimalism</p>
                      <div className='flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'>
                        <Link href='/articles' className='pr-2 text-sm font-medium leading-none'>
                          Read More
                        </Link>
                        <svg
                          className='fill-stroke'
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5.75 12.5L10.25 8L5.75 3.5'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <img src='https://i.ibb.co/3yvZBpm/img-5.png' className='w-full' alt='chair' />
                </div>
                <div className='relative w-full sm:mt-0 mt-4'>
                  <div>
                    <p className='p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>12 April 2021</p>
                    <div className='absolute bottom-0 left-0 p-6'>
                      <h2 className='text-xl font-semibold 5 text-white'>The Decorated Ways</h2>
                      <p className='text-base leading-4 text-white mt-2'>Dive into minimalism</p>
                      <div className='flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'>
                        <Link href='/articles' className='pr-2 text-sm font-medium leading-none'>
                          Read More
                        </Link>
                        <svg
                          className='fill-stroke'
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5.75 12.5L10.25 8L5.75 3.5'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <img src='https://i.ibb.co/gDdnJb5/img-6.png' className='w-full' alt='wall design' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='max-w-8xl mx-auto container bg-white pt-16'>
        <div>
          <div role='contentinfo' className='flex items-center flex-col px-4'>
            <p tabIndex={0} className='hidden focus:outline-none uppercase text-sm text-center text-gray-600 leading-4'>
              in few easy steps
            </p>
            <h2
              tabIndex={0}
              className='focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4'
            >
              Create Beautiful Landing Pages &amp; Web Apps in a Jiffy
            </h2>
          </div>
          <div
            tabIndex={0}
            aria-label='group of cards'
            className='focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4'
          >
            <div tabIndex={0} aria-label='card 1' className='focus:outline-none flex sm:w-full md:w-5/12 pb-20'>
              <div className='w-20 h-20 relative mr-5'>
                <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1' />
                <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                  <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg' alt='drawer' />
                </div>
              </div>
              <div className='w-10/12'>
                <h2 tabIndex={0} className='focus:outline-none text-lg font-bold leading-tight text-gray-800'>
                  Ready to use components
                </h2>
                <p tabIndex={0} className='focus:outline-none text-base text-gray-600 leading-normal pt-2'>
                  It provides a very simple start, no need to write a lot of code, you just import it and start the
                  primitive components and create the ones you need.
                </p>
              </div>
            </div>
            <div tabIndex={0} aria-label='card 2' className='focus:outline-none flex sm:w-full md:w-5/12 pb-20'>
              <div className='w-20 h-20 relative mr-5'>
                <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1' />
                <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                  <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg' alt='check' />
                </div>
              </div>
              <div className='w-10/12'>
                <h2 tabIndex={0} className='focus:outline-none text-lg font-semibold leading-tight text-gray-800'>
                  Hight Quality UI you can reply on
                </h2>
                <p tabIndex={0} className='focus:outline-none text-base text-gray-600 leading-normal pt-2'>
                  Modify the visual appearance of your site – including colors, fonts, margins and other style-related
                  properties – with a sophisticated style.
                </p>
              </div>
            </div>
            <div tabIndex={0} aria-label='card 3' className='focus:outline-none flex sm:w-full md:w-5/12 pb-20'>
              <div className='w-20 h-20 relative mr-5'>
                <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1' />
                <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                  <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg' alt='html tag' />
                </div>
              </div>
              <div className='w-10/12'>
                <h2 tabIndex={0} className='focus:outline-none text-lg font-semibold leading-tight text-gray-800'>
                  Coded by Developers for Developers
                </h2>
                <p tabIndex={0} className='focus:outline-none text-base text-gray-600 leading-normal pt-2'>
                  Instead of just giving you the tools to create your own site, they offer you a list of themes you can
                  choose from. Thus a handy product.
                </p>
              </div>
            </div>
            <div tabIndex={0} aria-label='card 4' className='focus:outline-none flex sm:w-full md:w-5/12 pb-20'>
              <div className='w-20 h-20 relative mr-5'>
                <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1' />
                <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                  <img src='https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg' alt='monitor' />
                </div>
              </div>
              <div className='w-10/12'>
                <h2 tabIndex={0} className='focus:outline-none text-lg font-semibold leading-tight text-gray-800'>
                  The Last UI kit you’ll ever need
                </h2>
                <p tabIndex={0} className='focus:outline-none text-base text-gray-600 leading-normal pt-2'>
                  We have chosen the bright color palettes that arouse the only positive emotions. The kit that simply
                  assures to be loved by everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='xl:mx-auto xl:container py-20 2xl:px-0 px-6'>
        <div className='lg:flex items-center justify-between'>
          <div className=' lg:w-1/2 w-full'>
            <p className='text-base leading-4 text-gray-600'>Choose your plan</p>
            <h1 role='heading' className='md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800'>
              Our pricing plan
            </h1>
            <p role='contentinfo' className='text-base leading-5 mt-5 text-gray-600'>
              We’re working on a suit of tools to make managing complex systems easier, for everyone for free. we can’t
              wait to hear what you think
            </p>
            <div className='w-56'>
              <div className='bg-gray-100 shadow rounded-full flex items-center mt-10'>
                <button
                  className='bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1'
                  id='monthly'
                >
                  Monthly
                </button>
                <button
                  className='bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6'
                  id='annually'
                >
                  Annually
                </button>
              </div>
            </div>
          </div>
          <div className='xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8' role='list'>
            <img
              src='https://i.ibb.co/0n6DSS3/bgimg.png'
              className='absolute w-full -ml-12 mt-24'
              alt='background circle images'
            />
            <div role='listitem' className='bg-white cursor-pointer shadow rounded-lg p-8 relative z-30'>
              <div className='md:flex items-center justify-between'>
                <h2 className='text-2xl font-semibold leading-6 text-gray-800'>Starter</h2>
                <p className='text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800'>FREE</p>
              </div>
              <p className='md:w-80 text-base leading-6 mt-4 text-gray-600'>
                Full access to all features and no credit card required
              </p>
            </div>
            <div role='listitem' className='bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30'>
              <div className='w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md' />
              <div className='w-full p-8'>
                <div className='md:flex items-center justify-between'>
                  <h2 className='text-2xl font-semibold leading-6 text-gray-800'>Personal</h2>
                  <p className='text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800'>
                    $18<span className='font-normal text-base'>/mo</span>
                  </p>
                </div>
                <p className='md:w-80 text-base leading-6 mt-4 text-gray-600'>
                  Unlimited products features and dedicated support channels
                </p>
              </div>
            </div>
            <div role='listitem' className='bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7'>
              <div className='md:flex items-center justify-between'>
                <h2 className='text-2xl font-semibold leading-6 text-gray-800'>Team</h2>
                <p className='text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800'>
                  $18<span className='font-normal text-base'>/mo</span>
                </p>
              </div>
              <p className='md:w-80 text-base leading-6 mt-4 text-gray-600'>
                Unlimited products features and dedicated support channels
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='xl:px-20 px-6 py-20 xl:mx-auto xl:container'>
        <h1 className='xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12'>
          More Than 10 Years We Provide Service <br className='md:block hidden' />
          in Real State Industry
        </h1>
        <div className='md:mt-14 mt-4 relative sm:flex items-center justify-center'>
          <img
            src='https://i.ibb.co/KjrPCyW/map.png'
            alt='world map image'
            className='w-full xl:h-full h-96 object-cover object-fill sm:block hidden'
          />
          <img
            src='https://i.ibb.co/SXKj9Mf/map-bg.png'
            alt='mobile-image'
            className='sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0'
          />
          <div className='shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12'>
            <p className='text-3xl font-semibold text-gray-800'>20K+</p>
            <p className='text-base leading-4 xl:mt-4 mt-2 text-gray-600'>Recently Property Listed</p>
          </div>
          <div className='shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12'>
            <p className='text-3xl font-semibold text-gray-800'>8K+</p>
            <p className='text-base leading-4 xl:mt-4 mt-2 text-gray-600'>Active Listening</p>
          </div>
          <div className='shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24'>
            <p className='text-3xl font-semibold text-gray-800'>15K+</p>
            <p className='text-base leading-4 xl:mt-4 mt-2 text-gray-600'>Recently Sold Lands</p>
          </div>
        </div>
      </div>

      <div className='container mx-auto pt-16'>
        <div className='w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16'>
          <h1 className=' xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4'>
            Partnerships with Coveted Brands
          </h1>
          <p className='text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto'>
            Our success has come from being committed to the property and investing in the development of the product to
            maximize sales. At the same time and maintaining the integrity.
          </p>
        </div>
        <div className='xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap'>
          <div className='w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center'>
            <img src='https://cdn.tuk.dev/assets/adidas-dark.png' alt='' />
          </div>
          <div className='w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center'>
            <img src='https://cdn.tuk.dev/assets/channel-dark.png' alt='' />
          </div>
          <div className='w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center'>
            <img src='https://cdn.tuk.dev/assets/nike-dark.png' alt='' />
          </div>
          <div className='w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center'>
            <img src='https://cdn.tuk.dev/assets/toyota-dark.png' alt='' />
          </div>
          <div className='w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center'>
            <img src='https://cdn.tuk.dev/assets/gs1-dark.png' alt='' />
          </div>
          <div className='w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center'>
            <img src='https://cdn.tuk.dev/assets/berry-dark.png' alt='' />
          </div>
          <div className='w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16'>
            <img src='https://cdn.tuk.dev/assets/min-dark.png' alt='' />
          </div>
          <div className='w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16'>
            <img src='https://cdn.tuk.dev/assets/honda-dark.png' alt='' />
          </div>
        </div>
      </div>

      <div className='mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0'>
        <div className='flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0'>
          <div className='w-80 sm:w-auto flex flex-col justify-start items-start'>
            <div>
              <p className='text-3xl xl:text-4xl font-semibold leading-9 text-gray-800'>Renovate your home</p>
            </div>
            <div className='mt-4 lg:w-4/5 xl:w-3/5'>
              <p className='text-base leading-6 text-gray-600'>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </div>
            <div className='mt-16 w-full'>
              <button className='px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700'>
                <p className='text-xl font-medium leading-5'>See More</p>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M6.66663 16H25.3333'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M20 21.3333L25.3333 16'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M20 10.6667L25.3333 16'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row justify-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0'>
            <div>
              <img
                className='hidden lg:block'
                src='https://i.ibb.co/61TfVVW/olena-sergienko-gx-KL334b-UK4-unsplash-1.png'
                alt='sofa'
              />
              <img
                className='w-80 sm:w-auto lg:hidden'
                src='https://i.ibb.co/QvxmJjB/olena-sergienko-gx-KL334b-UK4-unsplash-1-1.png'
                alt='sofa'
              />
            </div>
            <div className='flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8'>
              <div>
                <img
                  className='hidden lg:block'
                  src='https://i.ibb.co/1MY5P3y/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-1.png'
                  alt='chairs'
                />
                <img
                  className='w-80 sm:w-auto lg:hidden'
                  src='https://i.ibb.co/r0rvcCh/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png'
                  alt='chairs'
                />
              </div>
              <div>
                <img
                  className='hidden lg:block'
                  src='https://i.ibb.co/9N7ZX2C/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png'
                  alt='chairs'
                />
                <img
                  className='w-80 sm:w-auto lg:hidden'
                  src='https://i.ibb.co/0BFt400/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-2.png'
                  alt='chairs'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
