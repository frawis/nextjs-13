/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  poweredByHeader: false,
  assetPrefix: isProd ? 'https://gcp.fwnx.de' : undefined,
};

module.exports = nextConfig;
