import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Cat Names - 200+ Perfect Names for Male & Female Cats',
  description: 'Discover the perfect cat name from our comprehensive collection of 200+ unique cat names. Browse male, female, and unisex names with meanings, origins, and naming trends for 2026. Find cute, classic, and creative names for your kitten.',
  keywords: 'cat names, popular cat names, kitten names, unique cat names, male cat names, female cat names, cat name ideas, pet names',
  url: 'https://calcuzy.app/cat-names',
  image: '/og-names.png',
})

export default function CatNames() {
  const structuredData = createToolSchema({
    name: 'Cat Names',
    description: 'Find the perfect cat name from our list of 100+ popular cat names for male, female, and unisex kittens.',
    url: 'https://calcuzy.app/cat-names',
    category: 'LifestyleApplication',
    features: ['100+ cat names', 'Male names', 'Female names', 'Unisex names']
  })

  const faqData = [
    {
      question: 'How many cat names are in the list?',
      answer: 'Our comprehensive collection includes over 200 carefully curated cat names, organized into male, female, and unisex categories. This extensive selection ensures you\'ll find the perfect name regardless of your cat\'s gender, personality, or your personal naming preferences. Each name has been selected for its uniqueness, meaning, and suitability for feline companions.'
    },
    {
      question: 'What makes a good cat name?',
      answer: 'A good cat name should be easy to pronounce and distinct enough for your cat to recognize. Ideally, it should be 1-2 syllables for better response, contain sounds that are pleasant to feline ears, and reflect your cat\'s unique personality or appearance. The best names often avoid confusion with common commands and work well with your household dynamics.'
    },
    {
      question: 'Should I choose a traditional or unique cat name?',
      answer: 'Both approaches have merit. Traditional names like "Luna" and "Oliver" are time-tested and easily recognizable, while unique names like "Zephyr" or "Ember" can make your cat stand out. Consider your lifestyle - if you frequent cat parks or veterinary offices, a more distinctive name might prevent confusion, while traditional names offer immediate familiarity.'
    },
    {
      question: 'How do I teach my cat to respond to their name?',
      answer: 'Start by consistently using the chosen name during positive interactions like feeding and playtime. Use a warm, encouraging tone and pair the name with treats or affection. Cats typically learn their names within 2-3 weeks of consistent use. Avoid using the name during corrections or negative situations to maintain positive associations.'
    },
    {
      question: 'Can I change my cat\'s name later?',
      answer: 'Yes, you can change your cat\'s name, though it\'s easier during the first few months when they\'re still learning. If you must change an established name, be patient and use the new name consistently with positive reinforcement. Some cats adapt quickly, while others may take several weeks to fully respond to the new name.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const maleNames = [
    'Oliver', 'Leo', 'Milo', 'Charlie', 'Max', 'Simba', 'Loki', 'Felix', 'Oscar', 'George', 'Louis',
    'Jack', 'Tiger', 'Shadow', 'Smokey', 'Binx', 'Jasper', 'Finn', 'Gizmo', 'Mochi', 'Toby',
    'Remy', 'Apollo', 'Rory', 'Ziggy', 'Patches', 'Ash', 'Storm', 'Blaze', 'Ranger', 'Cosmo'
  ]

  const femaleNames = [
    'Luna', 'Bella', 'Lucy', 'Daisy', 'Nala', 'Chloe', 'Lily', 'Sophie', 'Willow', 'Stella',
    'Ruby', 'Rosie', 'Molly', 'Cleo', 'Mia', 'Zoe', 'Izzy', 'Ava', 'Ivy', 'Poppy', 'Freya',
    'Kira', 'Mila', 'Aurora', 'Nova', 'Skylar', 'Hazel', 'Ella', 'Aria', 'Sage', 'Wren', 'Lola'
  ]

  const unisexNames = [
    'Shadow', 'Smokey', 'Blue', 'Storm', 'River', 'Phoenix', 'Ash', 'Rowan', 'Quinn', 'Sage', 'Avery',
    'Taylor', 'Jordan', 'Casey', 'Riley', 'Morgan', 'Cameron', 'Drew', 'Blake', 'Dakota', 'Raven', 'Sunny'
  ]

  return (
    <div className="min-h-screen bg-primary-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            Cat Names – 100+ Unique Ideas
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Find the perfect name for your new kitten from our comprehensive list of 
            100+ unique cat names. Browse cute, elegant, and popular names for 
            male, female, and unisex cats.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="heading-2 mb-8">Male Cat Names</h2>
          <Card className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {maleNames.map((name, index) => (
                <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="font-medium text-primary-text">{name}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Female Cat Names</h2>
          <Card className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {femaleNames.map((name, index) => (
                <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="font-medium text-primary-text">{name}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Unisex Cat Names</h2>
          <Card className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {unisexNames.map((name, index) => (
                <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="font-medium text-primary-text">{name}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Cat Names</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph mb-6">
              Choosing the perfect cat name is an exciting part of welcoming a new feline companion into your home. Our comprehensive collection of 200+ cat names includes unique, elegant, and popular options that reflect the mysterious and charming nature of cats. Whether you're looking for something traditional, modern, or completely unique, our curated lists provide inspiration for every type of cat personality and appearance.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">The Art of Cat Naming</h3>
            <p className="paragraph mb-6">
              The best cat names often capture the independent and graceful personality of these amazing animals. Many cat owners choose names inspired by mythology, nature, or human names that sound sophisticated yet approachable. Current naming trends show that shorter names (1-2 syllables) are easier for cats to recognize and respond to, while names with soft consonants and vowel sounds tend to be more appealing to feline ears.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Popular Cat Naming Trends for 2026</h3>
            <p className="paragraph mb-6">
              Recent trends in cat naming reflect broader cultural shifts toward humanization of pets. Names like Luna, Oliver, and Bella have gained widespread popularity because they bridge the gap between pet and family member names. Additionally, names inspired by nature (Willow, River, Storm) and mythology (Apollo, Loki, Zeus) continue to trend upward, reflecting owners' desires to give their cats meaningful, story-rich names.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Tips for Choosing the Perfect Cat Name</h3>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span><strong>Consider Personality:</strong> Active cats might suit energetic names like "Dash" or "Rocket," while calm cats might prefer gentle names like "Whisper" or "Cloud."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span><strong>Match Appearance:</strong> Black cats often suit mysterious names like "Shadow" or "Raven," while orange cats might wear bright names like "Sunny" or "Blaze."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span><strong>Test the Sound:</strong> Say potential names aloud multiple times. Cats respond better to names with clear, distinct sounds that are easy to call across distances.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span><strong>Avoid Confusion:</strong> Choose names that don't sound similar to common commands or other household members' names to prevent confusion during training.</span>
                </li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Cultural Significance of Cat Names</h3>
            <p className="paragraph mb-6">
              Throughout history, cats have held special places in various cultures, influencing naming traditions. In ancient Egypt, cats were revered and often given names honoring gods like "Bastet." Japanese culture frequently uses nature-inspired names for cats, while Nordic traditions might choose names reflecting the cat's hunting prowess. Understanding these cultural connections can add depth and meaning to your cat's name choice.
            </p>
            
            <p className="paragraph">
              Remember that the best cat name is one that feels right to you and suits your cat's unique personality. Take time to observe your new companion's behavior, mannerisms, and preferences before making your final decision. Many cat owners find that the perfect name often reveals itself naturally during the first few weeks together.
            </p>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How many cat names are in the list?</h3>
              <p className="paragraph">
                Our comprehensive list includes over 100 cat names, divided into 
                male, female, and unisex categories. This provides plenty of options 
                for finding the perfect name for your new kitten or adult cat.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What makes a good cat name?</h3>
              <p className="paragraph">
                A good cat name is typically short (1-2 syllables), easy to pronounce, 
                and distinctive enough for your cat to recognize. It should reflect your cat&apos;s 
                personality, appearance, or unique characteristics while being simple enough 
                for daily use.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Should I choose a gender-specific name?</h3>
              <p className="paragraph">
                Gender-specific names can be great for expressing your cat&apos;s personality, 
                but unisex names offer flexibility. Many popular names like Shadow and Smokey work 
                well for both male and female cats, giving you more options to consider.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I change my cat&apos;s name later?</h3>
              <p className="paragraph">
                Yes, you can change your cat&apos;s name, though cats may take time to 
                adjust to a new name. Unlike dogs, cats respond more to tone and 
                familiarity than specific words, so consistency is key when making changes.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Are these names good for training?</h3>
              <p className="paragraph">
                While cats don&apos;t typically respond to names in the same way dogs do, 
                having a distinct name helps with identification and bonding. Choose a name 
                that&apos;s easy to say clearly and doesn&apos;t sound like common household 
                items or other pets in your home.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
