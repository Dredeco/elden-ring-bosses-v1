/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['eldenring.fanapis.com'],
    unoptimized: true
  }
}

module.exports = nextConfig
