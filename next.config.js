/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Enable Next.js image optimization
  },
  // Enable standalone output for optimized deployment
  output: 'standalone',
}

module.exports = nextConfig
