/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'localhost'],
  },
  // Disable static generation for 404 page
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
