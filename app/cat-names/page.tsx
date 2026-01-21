import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Cat Names – 100+ Popular Cat Names',
  description: 'Find the perfect cat name from our list of 100+ popular cat names. Browse unique, cute, and classic names for male and female cats.',
  keywords: 'cat names, popular cat names, kitten names, cat name ideas',
})

export default function CatNames() {
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
            <p className="paragraph">
              Choosing the perfect cat name is an exciting part of welcoming a new feline 
              into your home. Our comprehensive list of 100+ cat names includes unique, elegant, 
              and popular options that reflect the mysterious and charming nature of cats.
            </p>
            
            <p className="paragraph">
              The best cat names often capture the independent and graceful personality of these 
              amazing animals. Many cat owners choose names inspired by mythology, nature, or human 
              names that sound sophisticated yet approachable. Popular trends include names like Luna, 
              Oliver, and Bella that have gained widespread popularity.
            </p>
            
            <p className="paragraph">
              When selecting a cat name, consider how it sounds when calling your pet, 
              whether it matches their appearance or personality, and if it will be easy for 
              family members to remember and pronounce. Our list includes timeless classics alongside 
              trendy options that work well for any breed or personality type.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Tips for Choosing Cat Names</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Consider your cat's personality and appearance</li>
              <li className="text-secondary-text">Choose a name with 1-2 syllables for easier recognition</li>
              <li className="text-secondary-text">Test how the name sounds when calling your cat</li>
              <li className="text-secondary-text">Avoid names that sound like common household objects</li>
              <li className="text-secondary-text">Think about nicknames that might naturally develop</li>
              <li className="text-secondary-text">Consider names that work well with your family's last name</li>
            </ul>
            
            <p className="paragraph">
              Our cat names list is completely free to browse and includes names suitable 
              for all breeds and personalities. Whether you prefer traditional names or want 
              something more unique, you'll find plenty of inspiration for your new feline friend.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Name Lists</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/dog-names" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Dog Names</div>
                <div className="text-sm text-secondary-text">Browse dog name ideas</div>
              </Link>
              <Link href="/baby-girl-names" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Baby Girl Names</div>
                <div className="text-sm text-secondary-text">Find baby girl names</div>
              </Link>
            </div>
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
                and distinctive enough for your cat to recognize. It should reflect your cat's 
                personality, appearance, or unique characteristics while being simple enough 
                for daily use.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Should I choose a gender-specific name?</h3>
              <p className="paragraph">
                Gender-specific names can be great for expressing your cat's personality, 
                but unisex names offer flexibility. Many popular names like Shadow and Smokey work 
                well for both male and female cats, giving you more options to consider.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I change my cat's name later?</h3>
              <p className="paragraph">
                Yes, you can change your cat's name, though cats may take time to 
                adjust to a new name. Unlike dogs, cats respond more to tone and 
                familiarity than specific words, so consistency is key when making changes.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Are these names good for training?</h3>
              <p className="paragraph">
                While cats don't typically respond to names in the same way dogs do, 
                having a distinct name helps with identification and bonding. Choose a name 
                that's easy to say clearly and doesn't sound like common household 
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
