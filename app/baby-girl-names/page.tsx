import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Baby Girl Names – 100+ Girl Names',
  description: 'Find the perfect baby girl name from our list of 100+ girl names. Browse traditional, modern, and unique names.',
  keywords: 'baby girl names, girl baby names, baby names, female names',
  openGraph: {
    title: 'Baby Girl Names – 100+ Girl Names',
    description: 'Find the perfect baby girl name from our list of 100+ girl names.',
    type: 'website',
  },
}

export default function BabyGirlNames() {
  const traditionalNames = [
    'Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn',
    'Abigail', 'Emily', 'Elizabeth', 'Madison', 'Sofia', 'Avery', 'Ella', 'Madeline', 'Addison', 'Lily',
    'Grace', 'Chloe', 'Victoria', 'Penelope', 'Riley', 'Zoey', 'Nora', 'Hannah', 'Lillian', 'Brooklyn'
  ]

  const modernNames = [
    'Luna', 'Aurora', 'Willow', 'Sage', 'Aria', 'Nova', 'Ivy', 'Freya', 'Kira', 'Mila', 'Zara',
    'Nia', 'Ella', 'Skylar', 'Hazel', 'River', 'Wren', 'Poppy', 'Rose', 'Violet', 'Ruby', 'Stella'
  ]

  const uniqueNames = [
    'Seraphina', 'Persephone', 'Calypso', 'Solstice', 'Marigold', 'Clementine', 'Genevieve', 'Antoinette',
    'Josephine', 'Theodora', 'Alexandria', 'Samantha', 'Rebecca', 'Catherine', 'Margaret', 'Beatrice',
    'Florence', 'Gwendolyn', 'Evangeline', 'Seraphina', 'Persephone', 'Calypso', 'Solstice', 'Marigold'
  ]

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            Baby Girl Names – 100+ Beautiful Ideas
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Find the perfect baby girl name from our comprehensive list of 
            100+ beautiful girl names. Browse unique, traditional, and modern names 
            that will make your daughter's name special and meaningful.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="heading-2 mb-8">Traditional Baby Girl Names</h2>
          <Card className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {traditionalNames.map((name, index) => (
                <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="font-medium text-primary-text">{name}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Modern Baby Girl Names</h2>
          <Card className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {modernNames.map((name, index) => (
                <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="font-medium text-primary-text">{name}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Unique Baby Girl Names</h2>
          <Card className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {uniqueNames.map((name, index) => (
                <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="font-medium text-primary-text">{name}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Baby Girl Names</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Choosing the perfect baby girl name is one of the most exciting decisions 
              for expectant parents. Our comprehensive list of 100+ beautiful girl names includes 
              traditional classics, modern trends, and unique options that will make your 
              daughter's name special and meaningful.
            </p>
            
            <p className="paragraph">
              The best baby girl names often balance tradition with contemporary style. 
              Timeless names like Emma, Olivia, and Sophia continue to top popularity charts, 
              while modern options like Luna, Aurora, and Willow reflect current naming 
              trends that emphasize nature and individuality.
            </p>
            
            <p className="paragraph">
              When selecting a baby girl name, consider how it sounds with your 
              last name, potential nicknames, and the meaning behind the name. Our list 
              includes names with beautiful meanings, from classic virtues to natural 
              elements, helping you find a name with special significance.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Tips for Choosing Baby Girl Names</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Say the full name with your last name to test flow</li>
              <li className="text-secondary-text">Consider potential nicknames and initials</li>
              <li className="text-secondary-text">Think about the meaning and origin of the name</li>
              <li className="text-secondary-text">Choose a name that grows well with your child</li>
              <li className="text-secondary-text">Consider family traditions and cultural significance</li>
              <li className="text-secondary-text">Check popularity trends in your area</li>
            </ul>
            
            <p className="paragraph">
              Our baby girl names list is completely free to browse and includes names 
              suitable for all families and backgrounds. Whether you prefer timeless 
              classics or want something more unique, you'll find plenty of inspiration 
              for your precious daughter.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Name Lists</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/baby-boy-names" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Baby Boy Names</div>
                <div className="text-sm text-secondary-text">Find baby boy names</div>
              </Link>
              <Link href="/dog-names" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Dog Names</div>
                <div className="text-sm text-secondary-text">Browse dog name ideas</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How many baby girl names are in the list?</h3>
              <p className="paragraph">
                Our comprehensive list includes over 100 baby girl names, divided into 
                traditional, modern, and unique categories. This provides plenty of options 
                for finding the perfect name for your new daughter.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What makes a good baby girl name?</h3>
              <p className="paragraph">
                A good baby girl name is meaningful, easy to pronounce, and 
                complements your family's heritage. It should be timeless yet contemporary, 
                with positive associations and a beautiful sound that will serve your 
                daughter well throughout her life.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Should I choose a popular or unique name?</h3>
              <p className="paragraph">
                Both popular and unique names have their advantages. Popular names like 
                Emma and Olivia are familiar and well-liked, while unique names like 
                Seraphina and Persephone offer individuality. Consider what matters 
                most to your family - fitting in or standing out.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How do I ensure the name ages well?</h3>
              <p className="paragraph">
                Choose a name that's classic enough to remain stylish but not 
                so trendy that it becomes dated. Consider how the name sounds at different 
                life stages - from childhood to professional settings - and select one 
                that will grow with your daughter.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Are these names culturally diverse?</h3>
              <p className="paragraph">
                Our list includes names from various cultural backgrounds and origins, 
                representing different traditions and languages. We strive to include names that 
                are meaningful to diverse families while remaining accessible and beautiful 
                to all who browse our collection.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
