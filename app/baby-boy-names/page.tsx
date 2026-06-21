import NamePageShell from '@/components/NamePageShell'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  noIndex: true,
  title: 'Baby Boy Names',
  description: 'Browse baby boy name ideas in traditional, modern, and strong styles. Inspiration lists—not official popularity rankings.',
  keywords: 'baby boy names, boy names, unique boy names, popular boy names, baby name ideas',
  url: 'https://calcuzy.app/baby-boy-names',
  image: '/og/og-names.png',
})

const config = {
  slug: '/baby-boy-names',
  schemaName: 'Baby Boy Names',
  schemaDescription: 'Curated baby boy name ideas grouped by traditional, modern, and strong styles.',
  heroTitle: 'Baby Boy Names',
  heroDescription:
    'Explore name ideas for your son. Test how each sounds with your last name, check initials, and agree on spelling before official forms.',
  introTitle: 'Naming your son',
  introParagraphs: [
    'Classic names stay familiar; modern picks reflect current tastes. Neither is better—choose what fits your family and culture.',
    'For US popularity by year, see Social Security Administration baby name data. These lists are for browsing, not official rankings.',
  ] as [string, string],
  faqs: [
    {
      question: 'How many names are listed?',
      answer: 'Three sections with about 20–30 names each—traditional, modern, and strong. Research any finalist for meaning and pronunciation.',
    },
    {
      question: 'What are popular boy names lately?',
      answer: 'Names like Liam, Noah, and Oliver have ranked highly in recent US data, but trends change. Pick a name you love, not only what is trending.',
    },
    {
      question: 'How do I test a name?',
      answer: 'Say the full name aloud, write initials, and imagine school and job introductions. Share a shortlist with people you trust if helpful.',
    },
    {
      question: 'Popular vs unique?',
      answer: 'Popular names are easy to spell but may be shared by classmates. Unique names stand out but may need more correction. Balance what matters to you.',
    },
    {
      question: 'Will the name age well?',
      answer: 'Imagine the name on a child and an adult. Very trendy spellings can feel dated later; timeless names rarely go out of style entirely.',
    },
  ],
  tips: [
    'Match first and last name rhythm—avoid tongue-twisters',
    'Consider honor names from family carefully',
    'Search the name for unexpected famous associations',
    'Decide on nickname options before birth',
    'Spell it the way you want it on the birth certificate',
  ],
  relatedLinks: [
    { href: '/baby-girl-names', title: 'Baby girl names', description: 'Ideas for daughters' },
    { href: '/names', title: 'All name lists', description: 'Pet and surname lists' },
  ],
}

const traditionalNames = [
  'Liam', 'Noah', 'Oliver', 'Ethan', 'Lucas', 'Mason', 'Logan', 'Jacob', 'William', 'James', 'Benjamin',
  'Alexander', 'Michael', 'Daniel', 'Henry', 'Jackson', 'Sebastian', 'Jack', 'Owen', 'Samuel', 'David',
  'Joseph', 'Matthew', 'Anthony', 'Christopher', 'Andrew', 'Joshua', 'Ryan', 'Nathan',
]

const modernNames = [
  'Leo', 'Ezra', 'Asher', 'Silas', 'Milo', 'Hudson', 'Jasper', 'Caleb', 'Axel', 'Wyatt', 'Adrian',
  'Grayson', 'Julian', 'Luca', 'Elias', 'Kayden', 'Jayden', 'River', 'Sage', 'Finn',
]

const strongNames = [
  'Maximilian', 'Theodore', 'Frederick', 'Dominic', 'Nathaniel', 'Jonathan', 'Nicholas', 'Gabriel',
  'Christian', 'Charles', 'Richard', 'Robert', 'Victor', 'Leonard', 'Gregory',
]

export default function BabyBoyNamesPage() {
  return (
    <NamePageShell
      config={config}
      sections={[
        { title: 'Traditional boy names', names: traditionalNames },
        { title: 'Modern boy names', names: modernNames },
        { title: 'Strong boy names', names: strongNames },
      ]}
    />
  )
}
