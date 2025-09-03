'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useAuthGuard } from '@/hooks/use-auth-guard'
import { authCheck, logAccess } from '@/middlewares/auth'
import { useStore } from '@/store'

const Page = () => {
  const router = useRouter()
  useAuthGuard(useStore(), [authCheck, logAccess])

  const { loggedIn } = useStore(state => ({
    loggedIn: state.loggedIn
  }))

  useEffect(() => {
    if (!loggedIn) {
      router.push('/signin')
    }
  }, [loggedIn, router])

  return (
    <div>
      <h1>Assessments</h1>
    </div>
  )
}

export default Page
