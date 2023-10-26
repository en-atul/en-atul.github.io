/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['skillicons.dev'], // Add the domain name(s) from which your images are served
  },
}

module.exports = nextConfig
