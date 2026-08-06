/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Enable Next.js image optimization
  },
  // Enable standalone output for optimized deployment
  output: 'standalone',
  async headers() {
    return [
      {
        // /fade photos (not the /fade HTML page itself)
        source: '/fade/:file(.+\\.jpg)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/fade/sounds/:file*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
