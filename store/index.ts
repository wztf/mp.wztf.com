import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { version } from '@config/index'

export interface States {
  loggedIn: boolean
  token: string | null
  app: string | null
}

interface Actions {
  login: (token: string) => void
  logout: () => void
  profile: (payload?: unknown) => void
  setApp: (app: string) => void
}

export const useStore = create<States & Actions>()(
  persist(
    set => ({
      loggedIn: false,
      token: null,
      app: 'gg',
      login: (token: string) => {
        set({ loggedIn: true, token })
      },
      logout: () => {
        set({ loggedIn: false, token: null })
      },
      profile: (payload?: unknown) => {
        console.log(payload)
      },
      setApp: (app: string) => set({ app })
    }),
    {
      name: 'local-storage',
      version: parseInt(version.replaceAll('.', ''), 10),
      partialize: state => ({ loggedIn: state.loggedIn, token: state.token }),
      storage: createJSONStorage(() => localStorage)
    }
  )
)
