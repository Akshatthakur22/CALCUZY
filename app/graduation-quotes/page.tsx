import QuotePageShell from '@/components/QuotePageShell'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  noIndex: true,
  title: 'Graduation Quotes',
  description: 'Graduation quotes for cards, speeches, and social posts. Themes include achievement, the future, and learning.',
  keywords: 'graduation quotes, commencement quotes, graduation wishes, senior quotes, class of quotes',
  url: 'https://calcuzy.app/graduation-quotes',
  image: '/og/og-quotes.png',
})

const config = {
  slug: '/graduation-quotes',
  schemaName: 'Graduation Quotes',
  schemaDescription: 'Curated graduation quotes about achievement, the future, and lifelong learning.',
  heroTitle: 'Graduation Quotes',
  heroDescription:
    'Congratulate a graduate or mark your own milestone. Combine a quote with specific praise—what they actually accomplished matters more than generic praise.',
  introTitle: 'Graduation messages',
  introParagraphs: [
    'Ceremonies mark a transition, not an end. These quotes fit cards, yard signs, and short speeches.',
    'Verify attributions before printing programs. When unsure, paraphrase the idea in your own words.',
  ] as [string, string],
  faqs: [
    {
      question: 'What makes a good graduation quote?',
      answer: 'Short, hopeful, and easy to read aloud. Best when tied to the graduate\'s story—major, challenges overcome, or plans ahead.',
    },
    {
      question: 'Can I use these in a yearbook?',
      answer: 'Usually yes for student yearbooks. Check your school\'s editorial policy and confirm quote attribution.',
    },
    {
      question: 'High school vs college quotes?',
      answer: 'The themes overlap. Future-focused lines work for both; pick tone that matches the graduate\'s next step.',
    },
    {
      question: 'How many quotes are here?',
      answer: 'Three sections with several quotes each—a starter set, not a complete commencement archive.',
    },
  ],
  tips: [
    'Name the graduate and one specific achievement',
    'Keep speeches under two minutes when possible',
    'Avoid inside jokes that exclude part of the audience',
    'Practice reading the quote aloud before the event',
    'Thank teachers or family by name when appropriate',
  ],
}

const achievementQuotes = [
  'Education is the most powerful weapon which you can use to change the world. - Nelson Mandela',
  'The beautiful thing about learning is that no one can take it away from you. - B.B. King',
  'Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill',
  'The expert in anything was once a beginner. - Helen Hayes',
  'It does not matter how slowly you go as long as you do not stop. - Confucius',
]

const futureQuotes = [
  'Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau',
  'The future starts today, not tomorrow. - Pope John Paul II',
  'The best way to predict the future is to create it. - Peter Drucker',
  'The future depends on what you do today. - Mahatma Gandhi',
  'Dream big and dare to fail. - Norman Vaughan',
]

const wisdomQuotes = [
  'Graduation is not the end; it\'s the beginning. - Senator Orrin Hatch',
  'Education is not preparation for life; education is life itself. - John Dewey',
  'The roots of education are bitter, but the fruit is sweet. - Aristotle',
  'The more that you read, the more things you will know. - Dr. Seuss',
  'Education is not the filling of a pail, but the lighting of a fire. - William Butler Yeats',
]

export default function GraduationQuotesPage() {
  return (
    <QuotePageShell
      config={config}
      sections={[
        { title: 'Achievement', quotes: achievementQuotes },
        { title: 'The future', quotes: futureQuotes },
        { title: 'Learning and wisdom', quotes: wisdomQuotes },
      ]}
    />
  )
}
