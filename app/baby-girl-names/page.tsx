import NamePageShell from '@/components/NamePageShell'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Baby Girl Names',
  description: 'Browse baby girl name ideas in traditional, modern, and unique styles. Inspiration lists—not official popularity rankings.',
  keywords: 'baby girl names, girl names, unique girl names, popular girl names, baby name ideas',
  url: 'https://calcuzy.app/baby-girl-names',
  image: '/og/og-names.png',
})

const config = {
  slug: '/baby-girl-names',
  schemaName: 'Baby Girl Names',
  schemaDescription: 'Curated baby girl name ideas grouped by traditional, modern, and unique styles.',
  heroTitle: 'Baby Girl Names',
  heroDescription:
    'Explore name ideas for your daughter. Say each option with your last name, check initials, and choose spelling before birth certificates or announcements.',
  introTitle: 'Naming your daughter',
  introParagraphs: [
    'Popular names change every year. These lists mix well-known classics and newer choices—verify meanings and family traditions that matter to you.',
    'Consider how the name sounds at different ages, possible nicknames, and whether you want a name that is easy to spell and pronounce in your community.',
  ] as [string, string],
  faqs: [
    {
      question: 'How many names are listed?',
      answer: 'Three sections—traditional, modern, and unique—with about 20–30 names each. Use them as a starting point and research any name you seriously consider.',
    },
    {
      question: 'Are these the most popular names in the US?',
      answer: 'Not necessarily. For official US popularity, see the Social Security Administration baby name data for the latest year.',
    },
    {
      question: 'How do I test a name?',
      answer: 'Say the full name aloud, write initials, and imagine introductions at school and work. Share a shortlist with trusted friends or family if helpful.',
    },
    {
      question: 'Traditional vs unique names?',
      answer: 'Traditional names are familiar and easy to spell. Unique names stand out but may need more spelling correction. There is no wrong choice—only what fits your family.',
    },
    {
      question: 'Should I worry about trends?',
      answer: 'Many names cycle in and out of fashion. If you love a name, a trend should not stop you—just know several classmates might share popular picks.',
    },
  ],
  tips: [
    'Check meaning and origin if cultural heritage matters',
    'Avoid initials that spell unintended words',
    'Consider a middle name that balances a long first name',
    'Search the name online for unexpected associations',
    'Agree on spelling before ordering monograms or gifts',
  ],
  relatedLinks: [
    { href: '/baby-boy-names', title: 'Baby boy names', description: 'Ideas for sons' },
    { href: '/names', title: 'All name lists', description: 'Pet and surname lists too' },
  ],
}

const traditionalNames = [
  'Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn',
  'Abigail', 'Emily', 'Elizabeth', 'Madison', 'Sofia', 'Avery', 'Ella', 'Madeline', 'Addison', 'Lily',
  'Grace', 'Chloe', 'Victoria', 'Penelope', 'Riley', 'Zoey', 'Nora', 'Hannah', 'Lillian', 'Brooklyn',
]

const modernNames = [
  'Luna', 'Aurora', 'Willow', 'Sage', 'Aria', 'Nova', 'Ivy', 'Freya', 'Kira', 'Mila', 'Zara',
  'Nia', 'Skylar', 'Hazel', 'River', 'Wren', 'Poppy', 'Rose', 'Violet', 'Ruby', 'Stella',
]

const uniqueNames = [
  'Seraphina', 'Persephone', 'Calypso', 'Solstice', 'Marigold', 'Clementine', 'Genevieve', 'Antoinette',
  'Josephine', 'Theodora', 'Alexandria', 'Beatrice', 'Florence', 'Gwendolyn', 'Evangeline',
]

export default function BabyGirlNamesPage() {
  return (
    <NamePageShell
      config={config}
      sections={[
        { title: 'Traditional girl names', names: traditionalNames },
        { title: 'Modern girl names', names: modernNames },
        { title: 'Unique girl names', names: uniqueNames },
      ]}
    />
  )
}
