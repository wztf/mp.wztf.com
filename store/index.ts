import { version } from '@config/index'

import { makeClient } from '@/plugins/apollo'

import { ProfileDocument } from '@generated/graphql'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { API } from '/#/api'
export interface States {
  loggedIn: boolean
  token: string | null
  app: string | null
  profile: API.Profile | null
}

interface Actions {
  login: (token: string) => Promise<void>
  logout: () => void
  getProfile: () => Promise<void>
  setApp: (app: string) => void
}

export type Store = States & Actions

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      loggedIn: false,
      token: null,
      app: 'gg',
      profile: null,
      login: async (token: string) => {
        set({ loggedIn: true, token })
        await get().getProfile()
      },
      logout: () => {
        set({ loggedIn: false, token: null, profile: null })
      },
      getProfile: async () => {
        const { data } = await makeClient().query({
          query: ProfileDocument,
          variables: {},
          context: { headers: { Authorization: `Bearer ${get().token}` } }
        })
        if (data && data.profile) {
          set({ profile: data.profile as unknown as API.Profile })
        }
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
