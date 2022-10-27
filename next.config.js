/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: false,
  trailingSlash: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false
  }
}

module.exports = nextConfig