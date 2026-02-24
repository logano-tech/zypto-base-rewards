import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'viem',
    'wagmi',
    '@wagmi/core',
    '@farcaster/core',
    '@farcaster/frame-sdk',
    'ox'  // sageli see Encodable map funktsioon siit tuleb
  ],
  experimental: {
      },
  images: {
    domains: ['zypto.com', 'ref.zypto.com'],
  },
}

export default nextConfig
