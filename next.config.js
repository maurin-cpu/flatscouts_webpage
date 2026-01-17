/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/glossar',
        destination: '/wissen/glossar',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

