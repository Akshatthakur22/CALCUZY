import QuotePageShell from '@/components/QuotePageShell'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Love Quotes',
  description: 'Romantic and relationship quotes for cards, messages, and anniversaries. Short sayings with author credits where known.',
  keywords: 'love quotes, romantic quotes, relationship quotes, anniversary quotes, heartfelt quotes',
  url: 'https://calcuzy.app/love-quotes',
  image: '/og/og-quotes.svg',
})

const config = {
  slug: '/love-quotes',
  schemaName: 'Love Quotes',
  schemaDescription: 'Curated romantic and relationship quotes for personal messages and inspiration.',
  heroTitle: 'Love Quotes',
  heroDescription:
    'Heartfelt quotes about love and partnership. Best paired with your own words—generic quotes alone rarely replace a sincere message.',
  introTitle: 'Sharing love quotes',
  introParagraphs: [
    'Use these in cards, texts, or vows as a starting point. Edit for your relationship and voice.',
    'Attribution is included when commonly known. Some quotes are traditional sayings with unknown authors.',
  ] as [string, string],
  faqs: [
    {
      question: 'Can I use these in a wedding speech?',
      answer: 'Yes. Introduce why the quote fits your story, then add personal details. One short quote plus your own words usually lands better than a long list.',
    },
    {
      question: 'Are all attributions accurate?',
      answer: 'We use widely cited sources, but misattribution is common online. Verify before printing programs or formal publications.',
    },
    {
      question: 'How many quotes are listed?',
      answer: 'Two sections—romantic and relationship—with several quotes each. Browse our other quote pages for more themes.',
    },
    {
      question: 'Can I copy text directly?',
      answer: 'Yes for personal use. For commercial products (merch, paid content), check copyright and licensing rules.',
    },
  ],
  tips: [
    'Add a specific memory after the quote',
    'Read it aloud—awkward phrasing means pick another',
    'Shorter is often better for text messages',
    'Avoid quotes that do not match your relationship dynamic',
    'Write your own line even if it is imperfect',
  ],
}

const romanticQuotes = [
  'Love is composed of a single soul inhabiting two bodies. - Aristotle',
  'The best thing to hold onto in life is each other. - Audrey Hepburn',
  'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu',
  'The greatest happiness of life is the conviction that we are loved. - Victor Hugo',
  'Love is when the other person\'s happiness is more important than your own.',
  'Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.',
]

const relationshipQuotes = [
  'A successful marriage requires falling in love many times, always with the same person. - Mignon McLaughlin',
  'The best relationships are the ones where you can be completely yourself.',
  'Love is the bridge between two hearts.',
  'In all the world, there is no heart for me like yours. - Maya Angelou',
  'Grow old with me, the best is yet to be. - Robert Browning',
  'We loved with a love that was more than love. - Edgar Allan Poe',
]

export default function LoveQuotesPage() {
  return (
    <QuotePageShell
      config={config}
      sections={[
        { title: 'Romantic quotes', quotes: romanticQuotes },
        { title: 'Relationship quotes', quotes: relationshipQuotes },
      ]}
    />
  )
}
