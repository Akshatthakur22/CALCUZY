import CountdownNewYear from '@/components/client/CountdownNewYear'
import CountdownPageShell from '@/components/CountdownPageShell'
import { createMetadata } from '@/lib/metadata'
import { newYearCountdown } from '@/lib/countdown-page-content'

export const metadata = createMetadata({
  title: newYearCountdown.title,
  description: newYearCountdown.description,
  keywords: newYearCountdown.keywords,
  url: `https://calcuzy.app${newYearCountdown.slug}`,
  image: '/og/og-countdowns.png',
})

export default function NewYearCountdown() {
  return (
    <CountdownPageShell config={newYearCountdown}>
      <CountdownNewYear />
    </CountdownPageShell>
  )
}
