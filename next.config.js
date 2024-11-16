/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hapus output: 'export' karena kita akan gunakan SSR
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig