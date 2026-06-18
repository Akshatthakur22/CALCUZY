import QuotePageShell from '@/components/QuotePageShell'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Motivational Quotes',
  description: 'Browse motivational quotes about success, perseverance, and achievement. Short sayings for cards, captions, and daily inspiration.',
  keywords: 'motivational quotes, success quotes, inspirational quotes, perseverance quotes, achievement quotes',
  url: 'https://calcuzy.app/motivational-quotes',
  image: '/og/og-quotes.png',
})

const config = {
  slug: '/motivational-quotes',
  schemaName: 'Motivational Quotes',
  schemaDescription: 'Curated motivational quotes grouped by success, perseverance, and achievement themes.',
  heroTitle: 'Motivational Quotes',
  heroDescription:
    'Short quotes to encourage focus, effort, and resilience. Use them in journals, speeches, or social posts—credit authors when you share.',
  introTitle: 'Using motivational quotes',
  introParagraphs: [
    'A good quote can remind you of a goal or mindset, but it does not replace planning, rest, or professional help when you need it.',
    'Authors are listed where known. Verify attribution before publishing commercially or in formal materials.',
  ] as [string, string],
  faqs: [
    {
      question: 'Can I use these quotes on social media?',
      answer: 'Yes for personal posts. Credit the author when known. For ads or merchandise, check copyright rules for that quote and author.',
    },
    {
      question: 'Are these quotes verified?',
      answer: 'We cite common attributions. Famous quotes are sometimes misattributed online—double-check before formal use.',
    },
    {
      question: 'How many quotes are here?',
      answer: 'Three themed sections with about ten quotes each—a small curated sample, not an exhaustive library.',
    },
    {
      question: 'Do quotes actually help motivation?',
      answer: 'They can prompt reflection or a quick mood shift. Lasting change usually comes from habits, support, and realistic goals—not slogans alone.',
    },
  ],
  tips: [
    'Pair a quote with one concrete action for the day',
    'Save favorites in a note app instead of scrolling endlessly',
    'Write your own version in your words—it often feels more honest',
    'Avoid toxic positivity—rest and setbacks are normal',
    'Credit authors when sharing publicly',
  ],
}

const successQuotes = [
  'Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill',
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau',
  'Don\'t watch the clock; do what it does. Keep going. - Sam Levenson',
  'The way to get started is to quit talking and begin doing. - Walt Disney',
  'Success is the sum of small efforts repeated day in and day out. - Robert Collier',
  'Believe you can and you\'re halfway there. - Theodore Roosevelt',
  'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
]

const perseveranceQuotes = [
  'It does not matter how slowly you go as long as you do not stop. - Confucius',
  'Our greatest glory is not in never falling, but in rising every time we fall. - Confucius',
  'Courage doesn\'t always roar. Sometimes courage is the quiet voice at the end of the day saying, "I will try again tomorrow." - Mary Anne Radmacher',
  'Fall seven times, stand up eight. - Japanese Proverb',
  'It\'s not that I\'m so smart, it\'s just that I stay with problems longer. - Albert Einstein',
  'The man who moves mountains begins by carrying away small stones. - Confucius',
]

const achievementQuotes = [
  'The only impossible journey is the one you never begin. - Tony Robbins',
  'Dream big and dare to fail. - Norman Vaughan',
  'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
  'If you want to fly, you have to give up what weighs you down. - Roy T. Bennett',
  'The secret of getting ahead is getting started. - Mark Twain',
  'Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer',
]

export default function MotivationalQuotesPage() {
  return (
    <QuotePageShell
      config={config}
      sections={[
        { title: 'Success', quotes: successQuotes },
        { title: 'Perseverance', quotes: perseveranceQuotes },
        { title: 'Achievement', quotes: achievementQuotes },
      ]}
    />
  )
}
