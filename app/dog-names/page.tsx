import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Dog Names – 100+ Popular Dog Names',
  description: 'Find the perfect dog name from our list of 100+ popular dog names. Browse unique, cute, and classic names for male and female dogs.',
  keywords: 'dog names, popular dog names, puppy names, dog name ideas',
})

export default function DogNames() {
  const maleNames = [
    'Max', 'Charlie', 'Cooper', 'Buddy', 'Rocky', 'Duke', 'Bear', 'Zeus', 'Tucker', 'Leo', 'Oscar',
    'Winston', 'Finn', 'Gus', 'Bentley', 'Milo', 'Arlo', 'Jasper', 'Beau', 'River', 'Kai', 'Ace', 'Theo',
    'Louie', 'Atlas', 'Koda', 'Remy', 'Apollo', 'Orion', 'Phoenix', 'Arrow', 'Wolf', 'Storm', 'Blaze', 'Ranger'
  ]

  const femaleNames = [
    'Luna', 'Bella', 'Lucy', 'Daisy', 'Lola', 'Sadie', 'Molly', 'Bailey', 'Stella', 'Ruby', 'Rosie', 'Chloe',
    'Sophie', 'Zoey', 'Nala', 'Willow', 'Ava', 'Izzy', 'Coco', 'Penny', 'Pepper', 'Honey', 'Skye', 'Nova',
    'Aurora', 'Ivy', 'Lily', 'Poppy', 'Freya', 'Kira', 'Mila', 'Zara', 'Nia', 'Ella', 'Aria', 'Sage', 'Wren'
  ]

  const unisexNames = [
    'Charlie', 'Max', 'Bailey', 'Lucky', 'Shadow', 'Blue', 'Storm', 'River', 'Phoenix', 'Riley', 'Sage', 'Ash',
    'Rowan', 'Quinn', 'Sage', 'Avery', 'Taylor', 'Jordan', 'Casey', 'Riley', 'Morgan', 'Cameron', 'Drew', 'Blake', 'Dakota'
  ]

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            Dog Names – 100+ Popular Ideas
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Find the perfect name for your new puppy from our comprehensive list of 
            100+ popular dog names. Browse unique, cute, and classic names for 
            male, female, and unisex dogs.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="heading-2 mb-8">Male Dog Names</h2>
          <Card className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {maleNames.map((name, index) => (
                <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="font-medium text-primary-text">{name}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Female Dog Names</h2>
          <Card className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {femaleNames.map((name, index) => (
                <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="font-medium text-primary-text">{name}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Unisex Dog Names</h2>
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
          <h2 className="heading-2 mb-6">About Dog Names</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Choosing the perfect dog name is an important part of welcoming a new pet into your 
              family. Our comprehensive list of 100+ dog names includes popular, unique, and classic 
              options that work well for training and everyday use.
            </p>
            
            <p className="paragraph">
              The best dog names are typically short, easy to pronounce, and distinctive enough for 
              your dog to recognize. Many pet owners choose names that reflect their dog&apos;s 
              personality, appearance, or breed characteristics. Popular trends include names inspired 
              by nature, mythology, and human names.
            </p>
            
            <p className="paragraph">
              When selecting a dog name, consider how it sounds when calling your pet, 
              whether it&apos;s easily confused with commands, and if it will age well. Our list 
              includes timeless classics like Max and Bella, alongside trendy options like Luna and 
              Charlie that have gained popularity in recent years.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Tips for Choosing Dog Names</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Say the name out loud to test how it sounds</li>
              <li className="text-secondary-text">Choose a name with 1-2 syllables for easier training</li>
              <li className="text-secondary-text">Avoid names that sound like common commands</li>
              <li className="text-secondary-text">Consider your dog&apos;s size and personality</li>
              <li className="text-secondary-text">Test the name for a few days before committing</li>
            </ul>
            
            <p className="paragraph">
              Our dog names list is completely free to browse and includes names suitable 
              for all breeds and personalities. Whether you prefer traditional names or want 
              something more unique, you&apos;ll find plenty of inspiration here.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Name Lists</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/cat-names" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Cat Names</div>
                <div className="text-sm text-secondary-text">Browse cat name ideas</div>
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
              <h3 className="heading-3 mb-2">How many dog names are in the list?</h3>
              <p className="paragraph">
                Our comprehensive list includes over 100 dog names, divided into 
                male, female, and unisex categories. This provides plenty of options 
                for finding the perfect name for your new puppy.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What makes a good dog name?</h3>
              <p className="paragraph">
                A good dog name is typically short (1-2 syllables), easy to pronounce, 
                and doesn&apos;t sound like common training commands. It should be distinctive 
                enough for your dog to recognize but simple enough for daily use.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Popular Dog Naming Trends 2026</h3>
              <p className="paragraph mb-6">
                Current dog naming trends reflect a blend of traditional favorites 
                and modern creativity. Human names like Max, Bella, and Charlie remain popular, 
                while nature-inspired names like Luna, River, and Willow are gaining traction. 
                Pet owners increasingly choose names that reflect their dog&apos;s unique 
                personality and appearance.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Celebrity Dog Names</h3>
              <p className="paragraph mb-6">
                Celebrity dog names often influence popular naming trends. 
                From Taylor Swift&apos;s dogs to social media famous pets, these names 
                can spark inspiration while maintaining individuality for your furry friend.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Should I choose a gender-specific name?</h3>
              <p className="paragraph">
                Gender-specific names can be great for expressing your dog&apos;s personality, 
                but unisex names offer flexibility. Consider your dog&apos;s appearance and 
                temperament when choosing between male, female, or unisex options.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I change my dog&apos;s name later?</h3>
              <p className="paragraph">
                Yes, you can change your dog&apos;s name, though it&apos;s easier if done 
                early. Dogs can learn new names with consistent training, but it may take 
                time for them to respond reliably to the change.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Are these names good for training?</h3>
              <p className="paragraph">
                Most names in our list are training-friendly as they don&apos;t sound like 
                common commands. Avoid names that rhyme with &quot;no,&quot; &quot;stay,&quot; or &quot;come&quot; to 
                prevent confusion during training sessions.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
