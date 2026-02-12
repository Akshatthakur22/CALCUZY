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
    // Optimize package imports for tree shaking
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    // Enable turbo compiler for faster builds
    turbo: {
      rules: {
        '*.svg': ['@svgr/webpack'],
      },
    },
  },
  // Webpack configuration for advanced optimization
  webpack: (config, { isServer }) => {
    // Tree shaking optimization
    config.optimization.usedExports = true
    config.optimization.sideEffects = false
    
    // Code splitting for better bundle management
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      }
    }
    
    // Minimize bundle size
    config.optimization.minimize = true
    
    return config
  },
  // Enable compression for static export
  compress: true,
}

module.exports = nextConfig
