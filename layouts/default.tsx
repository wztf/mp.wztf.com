'use client'

import { Theme } from '@radix-ui/themes'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'next-themes'
import React from 'react'

import { RuiFooter, RuiHeader } from '@components/templates'

import { useStore } from '@/store'

import LockScreen from './lockscreen'

type Props = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: Readonly<Props>) => {
  const pathname = usePathname()
  // 是否显示 Header & Footer
  const isVisible = !['/signin', '/forgot', '/chart'].includes(pathname) && !pathname.startsWith('/dashboard')

  const isLock = useStore(state => state.lockScreen)
  if (isLock) {
    return <LockScreen />
  }

  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
        <Theme accentColor='violet' grayColor='mauve' panelBackground='translucent' radius='small'>
          {isVisible && <RuiHeader />}
          <div className='pb-18 md:pb-0'>{children}</div>
          {isVisible && <RuiFooter />}
        </Theme>
      </ThemeProvider>
    </>
  )
}

export default DefaultLayout
