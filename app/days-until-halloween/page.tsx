import CountdownHalloween from '@/components/client/CountdownHalloween'
import CountdownPageShell from '@/components/CountdownPageShell'
import { createMetadata } from '@/lib/metadata'
import { halloweenCountdown } from '@/lib/countdown-page-content'

export const metadata = createMetadata({
  noIndex: true,
  title: halloweenCountdown.title,
  description: halloweenCountdown.description,
  keywords: halloweenCountdown.keywords,
  url: `https://calcuzy.app${halloweenCountdown.slug}`,
  image: '/og/og-countdowns.png',
})

export default function HalloweenCountdown() {
  return (
    <CountdownPageShell config={halloweenCountdown}>
      <CountdownHalloween />
    </CountdownPageShell>
  )
}
