import CountdownChristmas from '@/components/client/CountdownChristmas'
import CountdownPageShell from '@/components/CountdownPageShell'
import { createMetadata } from '@/lib/metadata'
import { christmasCountdown } from '@/lib/countdown-page-content'

export const metadata = createMetadata({
  title: christmasCountdown.title,
  description: christmasCountdown.description,
  keywords: christmasCountdown.keywords,
  url: `https://calcuzy.app${christmasCountdown.slug}`,
  image: '/og/og-countdowns.svg',
})

export default function ChristmasCountdown() {
  return (
    <CountdownPageShell config={christmasCountdown}>
      <CountdownChristmas />
    </CountdownPageShell>
  )
}
