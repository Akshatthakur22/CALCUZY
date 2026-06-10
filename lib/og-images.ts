/** Open Graph image paths (SVG assets in /public/og/) */
export const OG_IMAGES = {
  default: '/og/og-default.svg',
  tools: '/og/og-tools.svg',
  finance: '/og/og-finance.svg',
  health: '/og/og-health.svg',
  legal: '/og/og-legal.svg',
  home: '/og/og-home.svg',
  quotes: '/og/og-quotes.svg',
  names: '/og/og-names.svg',
  countdowns: '/og/og-countdowns.svg',
} as const

export function getOpenGraphImageType(imagePath: string): string {
  return imagePath.endsWith('.svg') ? 'image/svg+xml' : 'image/png'
}
