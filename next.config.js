/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  swcMinify: true,
  // Optimize package imports
  experimental: {
    optimizePackageImports: ['@vercel/analytics']
  },
  // Reduce unused JavaScript and optimize splitting
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
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
          },
        },
      }
      // Tree shaking unused code
      config.optimization.usedExports = true
      config.optimization.sideEffects = false
    }
    return config
  }
}

module.exports = nextConfig
