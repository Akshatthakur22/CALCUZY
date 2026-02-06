/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    // Custom loader for static export with optimization
    loader: 'custom',
    loaderFile: './lib/image-loader.js',
    // Enable image optimization for static export
    unoptimized: false,
    // Configure image domains for CDN support
    domains: ['cdn.calcuzy.app'],
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],
    // Enable device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache TTL (in seconds)
    minimumCacheTTL: 60,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
}

module.exports = nextConfig
