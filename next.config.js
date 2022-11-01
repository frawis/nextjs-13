/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  poweredByHeader: false,
  assetPrefix: '/reviews',
  rewrites() {
    return [
      {
        source: '/reviews/_next/:path*',
        destination: '/_next/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
