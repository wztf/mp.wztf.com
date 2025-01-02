import { appid, version } from '../package.json'

const isDev = process.env.NODE_ENV === 'development'
const email = process.env.NEXT_PUBLIC_EMAIL || ''
const tel = process.env.NEXT_PUBLIC_TEL || ''
const graphqlUri = process.env.NEXT_PUBLIC_BASE_URL
const loginURL = process.env.NEXT_PUBLIC_LOGIN_URI

export { appid, email, graphqlUri, isDev, loginURL, tel, version }
