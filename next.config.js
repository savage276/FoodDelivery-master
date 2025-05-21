/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true
  },
  swcMinify: false // Disable SWC minification
}

module.exports = nextConfig