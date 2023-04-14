/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['https://example.com', 'https://cdn.example.com'],
  },
}

module.exports = nextConfig
