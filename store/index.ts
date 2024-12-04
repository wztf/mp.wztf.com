import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { version } from '@config/index'

import { API } from '/#/api'

export interface States {
  loggedIn: boolean
  token: string | null
  app: string | null
  profile: API.Profile | null
}

interface Actions {
  login: (token: string) => void //Promise<void>
  logout: () => void
  setProfile: (profile: API.Profile) => void
  setApp: (app: string) => void
}

export type Store = States & Actions

export const useStore = create<Store>()(
  persist(
    set => ({
      loggedIn: false,
      token: null,
      app: 'gg',
      profile: null,
      login: (token: string) => {
        set({ loggedIn: true, token })
      },
      logout: () => {
        set({ loggedIn: false, token: null, profile: null })
      },
      setProfile: (profile: API.Profile) => {
        set({ profile })
      },
      setApp: (app: string) => set({ app })
    }),
    {
      name: 'local-storage',
      version: parseInt(version.replaceAll('.', ''), 10),
      partialize: state => ({
        loggedIn: state.loggedIn,
        token: state.token,
        app: state.app,
        profile: state.profile
      }),
      storage: createJSONStorage(() => localStorage)
    }
  )
)
