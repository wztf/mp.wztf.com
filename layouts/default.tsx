import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: Readonly<Props>) => {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
        <Theme accentColor='violet' grayColor='mauve' panelBackground='translucent' radius='small'>
          {children}
        </Theme>
      </ThemeProvider>
    </>
  )
}

export default DefaultLayout
