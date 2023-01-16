/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  poweredByHeader: false,
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
}

module.exports = nextConfig
