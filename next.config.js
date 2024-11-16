/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    domains: ['images.unsplash.com'],
    unoptimized: true 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  swcMinify: false
};

module.exports = nextConfig;