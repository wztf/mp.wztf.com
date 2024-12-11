import { isDev, version } from '@config/index'

import { makeClient } from '@/plugins/apollo'

import { ProfileDocument, SettingDocument } from '@generated/graphql'

import Cookies from 'js-cookie'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { API } from '/#/api'
export interface States {
  loggedIn: boolean
  token: string | null
  app: string | null
  profile: API.Profile | null
  setting: API.Setting | null
}

interface Actions {
  login: (token: string) => Promise<void>
  logout: () => void
  getProfile: () => Promise<void>
  setApp: (app: string) => void
  getSetting: () => Promise<API.Setting>
}

export type Store = States & Actions

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      loggedIn: false,
      token: null,
      app: 'gg',
      profile: null,
      setting: null,
      login: async (token: string) => {
        set({ loggedIn: true, token })
        Cookies.set('token', token)
        await get().getProfile()
      },
      logout: () => {
        set({ loggedIn: false, token: null, profile: null })
        Cookies.remove('token')
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
      getSetting: async () => {
        if (get().setting === null) {
          const { data } = await makeClient().query({ query: SettingDocument })
          if (data && data.setting) {
            if (isDev) console.log(data.setting)
            set({ setting: data.setting as unknown as API.Setting })
          }
        }

        return get().setting as API.Setting
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
        profile: state.profile,
        setting: state.setting
      }),
      storage: createJSONStorage(() => localStorage)
    }
  )
)
