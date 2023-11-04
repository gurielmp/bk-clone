/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media-order.bkdelivery.co.id",
      },
      {
        hostname: "bkdelivery.co.id",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
