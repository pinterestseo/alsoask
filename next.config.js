/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Ubah ke 'export' untuk static site generation
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