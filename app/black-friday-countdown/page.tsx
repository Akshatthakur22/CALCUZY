import CountdownBlackFriday from '@/components/client/CountdownBlackFriday'
import CountdownPageShell from '@/components/CountdownPageShell'
import { createMetadata } from '@/lib/metadata'
import { blackFridayCountdown } from '@/lib/countdown-page-content'

export const metadata = createMetadata({
  title: blackFridayCountdown.title,
  description: blackFridayCountdown.description,
  keywords: blackFridayCountdown.keywords,
  url: `https://calcuzy.app${blackFridayCountdown.slug}`,
  image: '/og/og-countdowns.svg',
})

export default function BlackFridayCountdown() {
  return (
    <CountdownPageShell config={blackFridayCountdown}>
      <CountdownBlackFriday />
    </CountdownPageShell>
  )
}
