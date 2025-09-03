import axios from 'axios'
import Cookies from 'js-cookie'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { isDev, version } from '@config/index'

import {
  LoginDocument,
  LogoutDocument,
  MenusDocument,
  ProfileDocument,
  SettingDocument,
  SigninDocument
} from '@generated/graphql'

import { signer } from '@/lib/signer'
import { makeClient } from '@/plugins/apollo'

import { API } from '/#/api'

const SCREEN_COOKIE_NAME = 'screen:state'

export interface States {
  loggedIn: boolean
  token: string | null
  app: string | null
  profile: API.Profile | null
  setting: API.Setting | null
  lockScreen: boolean
  menus: API.Menu[]
  client: string | null
}

interface Actions {
  signin: (payload: Record<string, any>) => Promise<void>
  login: (payload: Record<string, any>) => Promise<void>
  logout: () => Promise<void>
  getProfile: () => Promise<void>
  getPermissions: () => string[]
  setApp: (app: string) => void
  getSetting: () => Promise<API.Setting>
  toggleLockScreen: (status?: boolean) => void
  getMenus: () => Promise<API.Menu[]>
  initClient: () => Promise<void>
  toDestroy(): void
}

export type Store = States & Actions

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      loggedIn: false,
      token: Cookies.get('token') ?? null,
      app: 'gg',
      profile: null,
      setting: null,
      lockScreen: false,
      menus: [],
      client: signer.toBase64String({ version: version }),
      /**
       * Login a user. If the user is authenticated successfully, a JWT token is generated and stored in the cookie.
       * @param {Record<string, any>} payload - The parameters to verify the user.
       * @returns {Promise<void>}
       */
      login: async (payload: Record<string, any>) => {
        try {
          const params = signer.toBase64String({
            ...payload,
            app: get().app,
            client: get().client
          })
          const { data } = await makeClient().mutate({
            mutation: LoginDocument,
            variables: {
              input: params
            }
          })
          if (data?.login) {
            Cookies.set('token', data?.login, { path: '/' })
            set({ token: data.login, loggedIn: true })
          }
        } catch (error) {
          set({ profile: null, loggedIn: false, token: null })
          throw error
        } finally {
          if (get().loggedIn) {
            await get().getProfile()
          }
        }
      },
      /**
       * signin
       * @description Sign up or log in a user. If the user is authenticated successfully, a JWT token is generated and stored in the cookie.
       * @param {Record<string, any>} payload - The parameters to verify the user.
       * @returns {Promise<void>}
       */
      signin: async (payload: Record<string, any>) => {
        try {
          const params = signer.toBase64String({
            ...payload,
            app: get().app,
            client: get().client
          })
          const { data } = await makeClient().mutate({
            mutation: SigninDocument,
            variables: {
              input: params
            }
          })
          if (data?.signin) {
            Cookies.set('token', data?.signin, { path: '/' })
            set({ token: data.signin, loggedIn: true })
          }
        } catch (error) {
          set({ profile: null, loggedIn: false, token: null })
          throw error
        } finally {
          if (get().loggedIn) {
            await get().getProfile()
          }
        }
      },
      /**
       * Log out the current user.
       *
       * This method sends a GraphQL query to the server to log out the current
       * user. If the query is successful, the store is cleared. If the query fails,
       * the error is re-thrown.
       *
       * @returns {Promise<void>}
       */
      logout: async () => {
        try {
          await makeClient().query({
            query: LogoutDocument,
            variables: {
              input: ''
            },
            fetchPolicy: 'no-cache'
          })
        } catch (error) {
          console.log(error)
        } finally {
          get().toDestroy()
        }
      },
      /**
       * Retrieve the profile of the current user.
       *
       * If the user is logged in, this method sends a GraphQL query to the server
       * to retrieve the user's profile. If the query is successful, the profile is
       * stored in the store. If the query fails, the store is set to an empty profile,
       * and the error is re-thrown.
       *
       * @returns {Promise<void>}
       */
      getProfile: async () => {
        try {
          const { data } = await makeClient().query({
            query: ProfileDocument,
            variables: {},
            context: { headers: { Authorization: `Bearer ${get().token}` } }
          })
          if (data && data.profile) {
            set({ profile: data.profile as unknown as API.Profile })
          }
        } catch (error) {
          set({ profile: null, loggedIn: false, token: null })
          throw error
        }
      },
      /**
       * Return the permissions of the current user, or an empty array if no user is logged in.
       * @returns {string[]}
       */
      getPermissions: () => {
        return get().profile?.permissions || []
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
      setApp: (app: string) => set({ app }),
      toggleLockScreen: (status: boolean = true) => {
        document.cookie = `${SCREEN_COOKIE_NAME}=${status ? 'true' : 'false'}; path=/`
        set({ lockScreen: status })
      },
      getMenus: async () => {
        if (get().menus.length === 0) {
          const { data } = await makeClient().query({ query: MenusDocument, variables: { input: '' } })
          if (data && data.menus) {
            if (isDev) console.log(data.menus)
            set({ menus: data.menus as unknown as API.Menu[] })
          }
        }

        return get().menus
      },
      /**
       * Initialize the client by fetching the current user's IP address and its
       * geolocation information from the `ipinfo.io` API. If the API call is
       * successful, the IP address and geolocation information are stored
       * encrypted in the local storage. If the API call fails, the error is logged
       * to the console.
       *
       * @returns {Promise<void>}
       */
      initClient: async () => {
        try {
          const { data } = await axios.get('https://ipinfo.io/', {
            headers: {
              accept: 'application/json',
              'Cache-Control': 'no-cache',
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })

          const params = signer.toBase64String(data ?? { version: version })
          if (isDev) {
            console.log(params)
          }
          set({ client: params })
        } catch (e) {
          console.error(e)
        }
      },
      /**
       * Clear all local storage and reset all state to the initial value
       */
      toDestroy() {
        Cookies.remove('token')
        set({ loggedIn: false, token: null, profile: null, lockScreen: false })
      }
    }),
    {
      name: 'local-storage',
      version: parseInt(version.replaceAll('.', ''), 10),
      partialize: state => ({
        loggedIn: state.loggedIn,
        token: state.token,
        app: state.app,
        profile: state.profile,
        setting: state.setting,
        lockScreen: state.lockScreen
      }),
      storage: createJSONStorage(() => localStorage)
    }
  )
)
