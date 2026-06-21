import CountdownEaster from '@/components/client/CountdownEaster'
import CountdownPageShell from '@/components/CountdownPageShell'
import { createMetadata } from '@/lib/metadata'
import { easterCountdown } from '@/lib/countdown-page-content'

export const metadata = createMetadata({
  noIndex: true,
  title: easterCountdown.title,
  description: easterCountdown.description,
  keywords: easterCountdown.keywords,
  url: `https://calcuzy.app${easterCountdown.slug}`,
  image: '/og/og-countdowns.png',
})

export default function EasterCountdown() {
  return (
    <CountdownPageShell config={easterCountdown}>
      <CountdownEaster />
    </CountdownPageShell>
  )
}
