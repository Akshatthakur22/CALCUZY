/** Open Graph image paths (PNG preferred for social crawlers; SVG fallbacks in /public/og/) */
export const OG_IMAGES = {
  default: '/og/og-default.png',
  tools: '/og/og-tools.png',
  finance: '/og/og-finance.png',
  health: '/og/og-health.png',
  legal: '/og/og-legal.png',
  home: '/og/og-home.png',
  quotes: '/og/og-quotes.png',
  names: '/og/og-names.png',
  countdowns: '/og/og-countdowns.png',
} as const

export function getOpenGraphImageType(imagePath: string): string {
  return imagePath.endsWith('.svg') ? 'image/svg+xml' : 'image/png'
}
