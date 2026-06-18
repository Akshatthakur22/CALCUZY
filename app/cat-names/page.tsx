import NamePageShell from '@/components/NamePageShell'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Cat Names',
  description: 'Browse cat name ideas for male, female, and unisex kittens. Short lists for inspiration—pick a name that is easy to call at home.',
  keywords: 'cat names, kitten names, male cat names, female cat names, unique cat names, pet names',
  url: 'https://calcuzy.app/cat-names',
  image: '/og/og-names.png',
})

const config = {
  slug: '/cat-names',
  schemaName: 'Cat Names',
  schemaDescription: 'Curated cat name ideas for male, female, and unisex kittens.',
  heroTitle: 'Cat Names',
  heroDescription:
    'Name ideas for kittens and adopted cats. Cats often respond best to short names with clear vowel sounds—say a few aloud before you decide.',
  introTitle: 'Naming your cat',
  introParagraphs: [
    'Indoor cats learn names through repetition at feeding and playtime. Avoid names that sound like commands you use daily.',
    'These lists mix classic and modern picks. Popularity varies—choose what fits your cat and household.',
  ] as [string, string],
  faqs: [
    {
      question: 'How many names are on this page?',
      answer: 'Three lists—male, female, and unisex—with about 20–30 names each. They are suggestions, not a complete database.',
    },
    {
      question: 'Do cats recognize their names?',
      answer: 'Many cats learn to associate their name with food or attention when you use it consistently. Response varies by cat.',
    },
    {
      question: 'Can I rename an adult cat?',
      answer: 'Yes, with patience. Use the new name during positive moments and keep sessions short. Some cats adjust in a few weeks.',
    },
    {
      question: 'One syllable or two?',
      answer: 'One- or two-syllable names are easy to call. Longer names often become nicknames anyway.',
    },
  ],
  tips: [
    'Try the name for a week before updating vet records',
    'Avoid names too similar to other pets in the home',
    'High-pitched, clear calls often get a cat\'s attention',
    'Keep treats nearby when practicing name recall',
    'Update microchip and tag info after you decide',
  ],
  relatedLinks: [
    { href: '/dog-names', title: 'Dog names', description: 'Ideas for puppies and dogs' },
    { href: '/names', title: 'All name lists', description: 'Baby and surname lists' },
  ],
}

const maleNames = [
  'Oliver', 'Leo', 'Milo', 'Charlie', 'Max', 'Simba', 'Loki', 'Felix', 'Oscar', 'George', 'Louis',
  'Jack', 'Tiger', 'Shadow', 'Smokey', 'Binx', 'Jasper', 'Finn', 'Gizmo', 'Mochi', 'Toby',
  'Remy', 'Apollo', 'Rory', 'Ziggy', 'Patches', 'Ash', 'Storm', 'Blaze', 'Ranger', 'Cosmo',
]

const femaleNames = [
  'Luna', 'Bella', 'Lucy', 'Daisy', 'Nala', 'Chloe', 'Lily', 'Sophie', 'Willow', 'Stella',
  'Ruby', 'Rosie', 'Molly', 'Cleo', 'Mia', 'Zoe', 'Izzy', 'Ava', 'Ivy', 'Poppy', 'Freya',
  'Kira', 'Mila', 'Aurora', 'Nova', 'Skylar', 'Hazel', 'Ella', 'Aria', 'Sage', 'Wren', 'Lola',
]

const unisexNames = [
  'Shadow', 'Smokey', 'Blue', 'Storm', 'River', 'Phoenix', 'Ash', 'Rowan', 'Quinn', 'Sage', 'Avery',
  'Taylor', 'Jordan', 'Casey', 'Riley', 'Morgan', 'Cameron', 'Drew', 'Blake', 'Dakota', 'Raven', 'Sunny',
]

export default function CatNamesPage() {
  return (
    <NamePageShell
      config={config}
      sections={[
        { title: 'Male cat names', names: maleNames },
        { title: 'Female cat names', names: femaleNames },
        { title: 'Unisex cat names', names: unisexNames },
      ]}
    />
  )
}
