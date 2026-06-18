import NamePageShell from '@/components/NamePageShell'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Dog Names',
  description: 'Browse popular dog name ideas for male, female, and unisex puppies. Short lists for inspiration—pick a name that is easy to say and fits your dog.',
  keywords: 'dog names, puppy names, male dog names, female dog names, unique dog names, pet names',
  url: 'https://calcuzy.app/dog-names',
  image: '/og/og-names.png',
})

const config = {
  slug: '/dog-names',
  schemaName: 'Dog Names',
  schemaDescription: 'Curated lists of dog name ideas for male, female, and unisex puppies.',
  heroTitle: 'Dog Names',
  heroDescription:
    'Browse name ideas for your puppy or rescue. Shorter names with clear sounds are often easier for training—choose something you will enjoy saying for years.',
  introTitle: 'Choosing a dog name',
  introParagraphs: [
    'Many trainers suggest one- or two-syllable names that do not sound like common commands (sit, stay, no). Try the name at home for a few days before updating tags or microchip records.',
    'These lists mix classic and modern options. Popularity varies by region and year—pick a name that fits your dog, not a trend alone.',
  ] as [string, string],
  faqs: [
    {
      question: 'How many names are on this page?',
      answer: 'There are three lists—male, female, and unisex—with dozens of options each. They are starting points, not a complete database of every dog name.',
    },
    {
      question: 'Does the name affect training?',
      answer: 'Clear, distinct sounds help your dog notice their name in noisy places. Avoid names that rhyme with commands you use often. Consistency matters more than the specific name you choose.',
    },
    {
      question: 'Can I rename an adopted dog?',
      answer: 'Yes. Many dogs learn a new name within a few weeks if you use it consistently with treats and praise. Keep the old name on vet records until paperwork is updated.',
    },
    {
      question: 'Should I pick a human name or a classic pet name?',
      answer: 'Either works. Human-style names (Charlie, Bella) are common today. Classic pet names (Buddy, Lucky) are still fine. Choose what feels natural for your household.',
    },
    {
      question: 'Are these names ranked by popularity?',
      answer: 'No. We group names by style for browsing. For official popularity data, check your country\'s pet or baby name statistics if available.',
    },
  ],
  tips: [
    'Test the name loudly in your yard or park—if you feel silly, try another',
    'Avoid names that sound like other pets or family members',
    'Pick something you are comfortable calling at the vet or dog park',
    'Keep treats handy when practicing name recall',
    'Update ID tags and microchip records after you decide',
  ],
  relatedLinks: [
    { href: '/cat-names', title: 'Cat names', description: 'Name ideas for kittens and cats' },
    { href: '/names', title: 'All name lists', description: 'Baby, pet, and surname collections' },
  ],
}

const maleNames = [
  'Max', 'Charlie', 'Cooper', 'Buddy', 'Rocky', 'Duke', 'Bear', 'Zeus', 'Tucker', 'Leo', 'Oscar',
  'Winston', 'Finn', 'Gus', 'Bentley', 'Milo', 'Arlo', 'Jasper', 'Beau', 'River', 'Kai', 'Ace', 'Theo',
  'Louie', 'Atlas', 'Koda', 'Remy', 'Apollo', 'Orion', 'Phoenix', 'Arrow', 'Storm', 'Blaze', 'Ranger',
]

const femaleNames = [
  'Luna', 'Bella', 'Lucy', 'Daisy', 'Lola', 'Sadie', 'Molly', 'Bailey', 'Stella', 'Ruby', 'Rosie', 'Chloe',
  'Sophie', 'Zoey', 'Nala', 'Willow', 'Ava', 'Izzy', 'Coco', 'Penny', 'Pepper', 'Honey', 'Skye', 'Nova',
  'Aurora', 'Ivy', 'Lily', 'Poppy', 'Freya', 'Kira', 'Mila', 'Zara', 'Nia', 'Ella', 'Aria', 'Sage', 'Wren',
]

const unisexNames = [
  'Charlie', 'Max', 'Bailey', 'Lucky', 'Shadow', 'Blue', 'Storm', 'River', 'Phoenix', 'Riley', 'Sage', 'Ash',
  'Rowan', 'Quinn', 'Avery', 'Taylor', 'Jordan', 'Casey', 'Morgan', 'Cameron', 'Drew', 'Blake', 'Dakota',
]

export default function DogNamesPage() {
  return (
    <NamePageShell
      config={config}
      sections={[
        { title: 'Male dog names', names: maleNames },
        { title: 'Female dog names', names: femaleNames },
        { title: 'Unisex dog names', names: unisexNames },
      ]}
    />
  )
}
