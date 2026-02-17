/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  // Force client-side rendering for all pages
  output: 'standalone',
  // Disable static optimization
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  // Ensure all pages are dynamic
  serverRuntimeConfig: {
    dynamic: true,
  },
}

module.exports = nextConfig
