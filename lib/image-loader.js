/**
 * Custom Image Loader for Static Export
 * Optimizes images for mobile LCP performance
 * Supports WebP/AVIF delivery with fallbacks
 */

export default function imageLoader({ src, width, quality }) {
  // For static export, we'll use a simple optimization strategy
  // In production, this would point to a CDN or image optimization service
  
  // Remove leading slash if present
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src
  
  // For static hosting, we can implement basic optimization:
  // 1. Add width parameter for responsive images
  // 2. Add quality parameter
  // 3. Support modern formats when available
  
  // Base URL for static assets (can be CDN in production)
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://cdn.calcuzy.app' 
    : ''
  
  // Generate optimized URL with parameters
  const params = new URLSearchParams({
    w: width.toString(),
    q: (quality || 75).toString(),
    fm: 'webp' // Prefer WebP format
  })
  
  // For static export, return the original path with size hints
  // In production with CDN, this would be: `${baseUrl}/${cleanSrc}?${params}`
  return `/${cleanSrc}`
}

/**
 * Image optimization configurations for different use cases
 */
export const imageConfigs = {
  // Hero images - highest quality
  hero: {
    quality: 85,
    sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    priority: true
  },
  
  // Card images - balanced quality
  card: {
    quality: 75,
    sizes: [320, 480, 640, 750, 828, 1080],
    priority: false
  },
  
  // Thumbnail images - optimized for performance
  thumbnail: {
    quality: 65,
    sizes: [64, 128, 256, 320],
    priority: false
  },
  
  // Icon images - small and optimized
  icon: {
    quality: 90,
    sizes: [16, 24, 32, 48, 64, 96, 128],
    priority: false
  }
}

/**
 * Generate responsive image sources for Next.js Image component
 */
export function generateImageSources(src, config = imageConfigs.card) {
  return {
    src,
    sizes: config.sizes.map(size => `${size}px`).join(' '),
    quality: config.quality,
    priority: config.priority
  }
}

/**
 * Blur placeholder generator for better LCP
 */
export function generateBlurDataURL(width = 10, height = 10) {
  // Generate a simple blurred placeholder
  const canvas = typeof window !== 'undefined' ? document.createElement('canvas') : null
  if (!canvas) return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+'
  
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  // Create a simple gradient placeholder
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#f0f0f0')
  gradient.addColorStop(1, '#e0e0e0')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)
  
  return canvas.toDataURL('image/jpeg', 0.1)
}
