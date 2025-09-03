import withBundleAnalyzer from '@next/bundle-analyzer'

const isDev = process.env.NODE_ENV === 'development'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = false
    }

    return config
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: '*.svgrepo.com'
      }
    ]
  },
  productionBrowserSourceMaps: true, // 开启生产环境的浏览器源映射
  swcMinify: !isDev // 关闭swc压缩
}

export default bundleAnalyzer(nextConfig)
