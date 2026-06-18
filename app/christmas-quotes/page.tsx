import QuotePageShell from '@/components/QuotePageShell'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Christmas Quotes',
  description: 'Christmas quotes for cards, family messages, and holiday posts. Traditional, inspirational, and family themes.',
  keywords: 'christmas quotes, holiday wishes, christmas sayings, christmas card messages, festive quotes',
  url: 'https://calcuzy.app/christmas-quotes',
  image: '/og/og-quotes.png',
})

const config = {
  slug: '/christmas-quotes',
  schemaName: 'Christmas Quotes',
  schemaDescription: 'Curated Christmas quotes for holiday cards and messages.',
  heroTitle: 'Christmas Quotes',
  heroDescription:
    'Holiday quotes for cards, texts, and gatherings. Add a personal line about your family or tradition—the quote supports your message, not replaces it.',
  introTitle: 'Holiday messages',
  introParagraphs: [
    'Quotes range from religious to secular. Pick lines that match your audience and tone.',
    'Verify attributions before printing cards or programs. Unknown authors are marked where source is unclear.',
  ] as [string, string],
  faqs: [
    {
      question: 'How many quotes are listed?',
      answer: 'Three sections with about ten quotes each—a small curated set, not every Christmas saying ever written.',
    },
    {
      question: 'Religious or secular?',
      answer: 'Both styles appear in popular holiday culture. Choose quotes that fit your celebration and recipients.',
    },
    {
      question: 'Can I use these on holiday cards?',
      answer: 'Yes for personal cards. For sold designs or commercial prints, confirm copyright on the specific quote.',
    },
    {
      question: 'How do I write a better card?',
      answer: 'Lead with the recipient\'s name, add one specific detail, then optional quote, then your sign-off.',
    },
  ],
  tips: [
    'Handwrite one sentence even if the rest is printed',
    'Match quote tone to the recipient\'s beliefs',
    'Keep social captions short with a warm photo',
    'Credit authors on public posts when known',
    'Send messages early to friends who are alone during the holidays',
  ],
}

const traditionalQuotes = [
  'Christmas is not a time nor a season, but a state of mind. - Calvin Coolidge',
  'The best of all gifts around any Christmas tree: the presence of a happy family. - Burton Hillis',
  'Christmas waves a magic wand over this world, and behold, everything is softer and more beautiful. - Norman Vincent Peale',
  'Christmas is the season for kindling the fire of hospitality. - Gene Stratton-Porter',
  'Christmas is not as much about opening our presents as opening our hearts. - Janice Kapp Perry',
]

const inspirationalQuotes = [
  'The best way to spread Christmas cheer is singing loud for all to hear. - Elf (film)',
  'Christmas is the day that makes the whole world kin. - Charles Dickens',
  'Christmas is the spirit of giving without expecting anything in return.',
  'The magic of Christmas is not in the presents, but in being present.',
  'Christmas is the time when you tell your family you love them.',
]

const familyQuotes = [
  'The best Christmas memories are the ones we make with our family.',
  'Christmas is the day when we get together and celebrate the love that binds us.',
  'Christmas is the season when we open our hearts and our homes to those who need love most.',
  'The greatest gift at Christmas is the love of family.',
  'Christmas is the time when we cherish the moments we have with the people who matter most.',
]

export default function ChristmasQuotesPage() {
  return (
    <QuotePageShell
      config={config}
      sections={[
        { title: 'Traditional', quotes: traditionalQuotes },
        { title: 'Inspirational', quotes: inspirationalQuotes },
        { title: 'Family', quotes: familyQuotes },
      ]}
    />
  )
}
