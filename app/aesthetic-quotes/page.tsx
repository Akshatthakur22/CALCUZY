import QuotePageShell from '@/components/QuotePageShell'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  noIndex: true,
  title: 'Aesthetic Quotes',
  description: 'Quotes about beauty, art, and life for captions and creative projects. Simple lists—no fake design science claims.',
  keywords: 'aesthetic quotes, beauty quotes, art quotes, caption quotes, visual inspiration quotes',
  url: 'https://calcuzy.app/aesthetic-quotes',
  image: '/og/og-quotes.png',
})

const config = {
  slug: '/aesthetic-quotes',
  schemaName: 'Aesthetic Quotes',
  schemaDescription: 'Curated quotes about beauty, art, and life for captions and creative inspiration.',
  heroTitle: 'Aesthetic Quotes',
  heroDescription:
    'Short quotes that pair well with photos, journals, and design mood boards. Match typography and layout to your own style—these are text starting points only.',
  introTitle: 'Quotes and visual design',
  introParagraphs: [
    'Legibility matters more than fancy fonts. High contrast between text and background helps readers on phones.',
    'Pair a quote with an image you have rights to use. These lines are for inspiration—not a substitute for design training or licensed stock art.',
  ] as [string, string],
  faqs: [
    {
      question: 'Can I use these as Instagram captions?',
      answer: 'Yes. Credit the author when known. Hashtags and your own caption line often perform better than quote-only posts.',
    },
    {
      question: 'Do these include design templates?',
      answer: 'No. This page lists text only. Layout, fonts, and colors are up to you in your editor or app.',
    },
    {
      question: 'Are attributions verified?',
      answer: 'We use common citations. Verify before commercial prints or client work.',
    },
    {
      question: 'How many quotes are here?',
      answer: 'Three sections—beauty, art, and life—with about ten quotes each.',
    },
  ],
  tips: [
    'Keep captions short on mobile—one or two lines often enough',
    'Check contrast for accessibility (WCAG guidelines)',
    'Use your own photos or properly licensed images',
    'Avoid overcrowding—leave whitespace in graphics',
    'Credit photographers and quote authors when sharing',
  ],
}

const beautyQuotes = [
  'Beauty begins the moment you decide to be yourself. - Coco Chanel',
  'The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart. - Helen Keller',
  'Beauty is not in the face; beauty is a light in the heart. - Kahlil Gibran',
  'Beauty is about being comfortable in your own skin.',
  'The most beautiful makeup for a woman is passion. - Yves Saint Laurent',
]

const artQuotes = [
  'Art enables us to find ourselves and lose ourselves at the same time. - Thomas Merton',
  'Art is not what you see, but what you make others see. - Edgar Degas',
  'The purpose of art is washing the dust of daily life off our souls. - Pablo Picasso',
  'Creativity takes courage. - Henri Matisse',
  'Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso',
]

const lifeQuotes = [
  'Life is what happens when you\'re busy making other plans. - John Lennon',
  'Life is really simple, but we insist on making it complicated. - Confucius',
  'Life is either a daring adventure or nothing at all. - Helen Keller',
  'Life is not measured by the number of breaths we take, but by the moments that take our breath away. - Maya Angelou',
  'The purpose of our lives is to be happy. - Dalai Lama',
]

export default function AestheticQuotesPage() {
  return (
    <QuotePageShell
      config={config}
      sections={[
        { title: 'Beauty', quotes: beautyQuotes },
        { title: 'Art', quotes: artQuotes },
        { title: 'Life', quotes: lifeQuotes },
      ]}
    />
  )
}
