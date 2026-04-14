import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // microCMS の画像CDNドメインを許可
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
}

export default nextConfig
