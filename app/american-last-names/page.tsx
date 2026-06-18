import NamePageShell from '@/components/NamePageShell'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'American Last Names',
  description: 'Browse common American surnames for genealogy, writing, or general interest. Grouped lists—not a complete census database.',
  keywords: 'american last names, common surnames, US surnames, family names, genealogy surnames',
  url: 'https://calcuzy.app/american-last-names',
  image: '/og/og-names.png',
})

const config = {
  slug: '/american-last-names',
  schemaName: 'American Last Names',
  schemaDescription: 'Lists of common and historical American surnames for reference and inspiration.',
  heroTitle: 'American Last Names',
  heroDescription:
    'Explore frequently seen US surnames and names tied to early American history. Useful for fiction, genealogy starting points, or curiosity—not legal name records.',
  introTitle: 'About American surnames',
  introParagraphs: [
    'US surnames come from English, Irish, German, Hispanic, and many other traditions. Occupational names (Smith, Miller), patronymics (Johnson), and place names (Hill) are especially common.',
    'Spelling changed over generations through immigration and record keeping. If you are researching family history, use official census and vital records—not this list alone.',
  ] as [string, string],
  faqs: [
    {
      question: 'Where does this list come from?',
      answer: 'Names are grouped for browsing based on common US examples and historical figures. For authoritative frequency data, use US Census or genealogy databases.',
    },
    {
      question: 'Why are some presidential surnames listed?',
      answer: 'The historical section includes surnames of early US presidents as recognizable examples—not an endorsement or complete list of all American families.',
    },
    {
      question: 'Are Hispanic surnames included?',
      answer: 'Yes. Names like Garcia, Rodriguez, and Martinez reflect large Hispanic communities in the US and appear among the most common surnames nationally.',
    },
    {
      question: 'Can I use these for characters or usernames?',
      answer: 'Yes for fiction or casual use. Avoid impersonating real people or using someone else\'s surname to mislead others.',
    },
    {
      question: 'How do I trace my own surname?',
      answer: 'Start with family records, then county archives, census data, and DNA/matching tools if you use genealogy services.',
    },
  ],
  tips: [
    'Note variant spellings when searching old records',
    'Ask relatives for maiden names and immigration stories',
    'Cross-check multiple sources—indexes have typos',
    'Respect privacy when sharing living relatives\' names online',
    'Use library genealogy sections for free reference books',
  ],
  relatedLinks: [
    { href: '/baby-boy-names', title: 'Baby boy names', description: 'First name ideas' },
    { href: '/names', title: 'All name lists', description: 'Pet and baby name hubs' },
  ],
}

const commonNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez',
  'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee',
  'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Young',
]

const historicalNames = [
  'Washington', 'Jefferson', 'Lincoln', 'Hamilton', 'Adams', 'Franklin', 'Roosevelt', 'Kennedy', 'Grant', 'Madison',
]

const occupationalNames = [
  'Smith', 'Miller', 'Taylor', 'Baker', 'Carter', 'Cooper', 'Fisher', 'Mason', 'Porter', 'Wright',
  'Turner', 'Walker', 'Coleman', 'Hayes', 'Hunter', 'Archer', 'Sawyer', 'Chandler', 'Spencer', 'Potter',
]

export default function AmericanLastNamesPage() {
  return (
    <NamePageShell
      config={config}
      sections={[
        { title: 'Most common US surnames', names: commonNames },
        { title: 'Historical American surnames', names: historicalNames },
        { title: 'Occupational surnames', names: occupationalNames },
      ]}
    />
  )
}
