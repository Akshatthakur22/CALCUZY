import CountdownThanksgiving from '@/components/client/CountdownThanksgiving'
import CountdownPageShell from '@/components/CountdownPageShell'
import { createMetadata } from '@/lib/metadata'
import { thanksgivingCountdown } from '@/lib/countdown-page-content'

export const metadata = createMetadata({
  title: thanksgivingCountdown.title,
  description: thanksgivingCountdown.description,
  keywords: thanksgivingCountdown.keywords,
  url: `https://calcuzy.app${thanksgivingCountdown.slug}`,
  image: '/og/og-countdowns.svg',
})

export default function ThanksgivingCountdown() {
  return (
    <CountdownPageShell config={thanksgivingCountdown}>
      <CountdownThanksgiving />
    </CountdownPageShell>
  )
}
