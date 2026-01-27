import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Baby Boy Names – Popular American Boy Names',
  description: 'Find perfect baby boy name from our list of popular American boy names. Browse unique, traditional, and modern names for your baby boy.',
  keywords: 'baby boy names, popular boy names, american boy names, baby name ideas',
  url: 'https://Calcuzy.app/baby-boy-names',
  image: '/og-names.png',
})

export default function BabyBoyNames() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Popular Baby Boy Names",
    "description": "Comprehensive list of popular American baby boy names including traditional, modern, and unique options",
    "url": "https://Calcuzy.app/baby-boy-names",
    "numberOfItems": 60,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Liam"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Noah"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Oliver"
      }
    ]
  }

  const traditionalNames = [
    'Liam', 'Noah', 'Oliver', 'Ethan', 'Lucas', 'Mason', 'Logan', 'Jacob', 'William', 'James', 'Benjamin',
    'Alexander', 'Michael', 'Daniel', 'Henry', 'Jackson', 'Sebastian', 'Jack', 'Owen', 'Samuel', 'David',
    'Joseph', 'Matthew', 'Anthony', 'Christopher', 'Andrew', 'Joshua', 'Ryan', 'Nathan'
  ]

  const modernNames = [
    'Leo', 'Ezra', 'Asher', 'Silas', 'Milo', 'Hudson', 'Jasper', 'Caleb', 'Axel', 'Wyatt', 'Adrian',
    'Grayson', 'Julian', 'Luca', 'Owen', 'Elias', 'Kayden', 'Jayden', 'River', 'Sage', 'Finn'
  ]

  const strongNames = [
    'Maximilian', 'Alexander', 'Sebastian', 'Christopher', 'Theodore', 'Frederick', 'Dominic', 'Nathaniel',
    'Jonathan', 'Benjamin', 'Nicholas', 'Gabriel', 'Samuel', 'Christian', 'Joseph', 'William',
    'Thomas', 'Charles', 'Daniel', 'Matthew', 'Anthony', 'David', 'Richard', 'Robert'
  ]

  return (
    <div className="min-h-screen bg-primary-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      
      <main className="container section-responsive">
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Baby Boy Names – 100+ Strong Ideas
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Find the perfect baby boy name from our comprehensive list of 
            100+ strong boy names. Browse classic, modern, and unique names 
            that will make your son&apos;s name special and memorable.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto mb-12">
          <Card animation="fade-in-up" delay={100}>
            <h2 className="heading-2 mb-6">Traditional Baby Boy Names</h2>
            <p className="paragraph mb-6">
              Classic and timeless names that have been popular for generations. These traditional 
              boy names carry strong meanings and have stood the test of time.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {traditionalNames.map((name, index) => (
                <div key={index} className="p-3 bg-secondary-bg rounded-lg text-center font-medium text-primary-text hover:bg-card-hover transition-all duration-200">
                  {name}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card animation="fade-in-up" delay={200}>
            <h2 className="heading-2 mb-6">Modern Baby Boy Names</h2>
            <p className="paragraph mb-6">
              Contemporary and trendy names that are gaining popularity. These modern boy names 
              reflect current naming trends while maintaining strong appeal.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {modernNames.map((name, index) => (
                <div key={index} className="p-3 bg-secondary-bg rounded-lg text-center font-medium text-primary-text hover:bg-card-hover transition-all duration-200">
                  {name}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">Strong & Powerful Boy Names</h2>
            <p className="paragraph mb-6">
              Powerful and meaningful names that convey strength and character. These strong 
              boy names are perfect for parents seeking impactful name choices.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {strongNames.map((name, index) => (
                <div key={index} className="p-3 bg-secondary-bg rounded-lg text-center font-medium text-primary-text hover:bg-card-hover transition-all duration-200">
                  {name}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-6">About Baby Boy Names</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Choosing the perfect baby boy name is one of the most exciting decisions 
              you&apos;ll make as a parent. Our comprehensive list of 100+ strong boy names includes 
              timeless classics, modern trends, and powerful options that convey strength 
              and character.
            </p>
            
            <p className="paragraph">
              The best baby boy names often balance tradition with contemporary style. 
              Classic names like Liam, Noah, and Oliver continue to dominate popularity charts, 
              while modern options like Leo, Ezra, and Asher reflect current naming 
              trends that emphasize individuality and fresh perspectives.
            </p>
            
            <p className="paragraph">
              When selecting a baby boy name, consider how it sounds with your 
              last name, potential nicknames, and the meaning behind the name. Our list 
              includes names with strong meanings and historical significance, helping you 
              find a name that carries both beauty and purpose.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Popular Baby Boy Name Trends 2026</h3>
            <p className="paragraph mb-6">
              Current naming trends show parents moving toward shorter, more distinctive names 
              while still appreciating traditional roots. Names with strong vowel sounds and 
              positive meanings are particularly popular, reflecting a desire for names that 
              will empower children throughout their lives.
            </p>
            
            <h3 className="heading-3 mb-4">Cultural Influences in American Baby Names</h3>
            <p className="paragraph mb-6">
              American baby boy names today reflect diverse cultural influences, from traditional 
              English and biblical names to international options gaining popularity. This diversity 
              gives parents access to names that honor heritage while embracing global naming 
              conventions and modern sensibilities.
            </p>
            
            <h3 className="heading-3 mb-4">Choosing the Right Baby Boy Name</h3>
            <p className="paragraph mb-6">
              The perfect baby boy name should feel meaningful to parents while serving the 
              child well throughout life. Consider factors like pronunciation ease, classroom 
              friendliness, professional appropriateness, and how the name might be 
              perceived in different social contexts.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Tips for Choosing Baby Boy Names</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Say the full name with your last name to test flow</li>
              <li className="text-secondary-text">Consider potential nicknames and initials</li>
              <li className="text-secondary-text">Choose a name that reflects your values and heritage</li>
              <li className="text-secondary-text">Think about the meaning and origin of the name</li>
              <li className="text-secondary-text">Select a name that ages well from childhood to adulthood</li>
              <li className="text-secondary-text">Check popularity trends in your area</li>
              <li className="text-secondary-text">Avoid names that might be difficult to spell or pronounce</li>
            </ul>
            
            <p className="paragraph">
              Our baby boy names list is completely free to browse and includes names 
              suitable for all families and backgrounds. Whether you prefer timeless 
              classics or want something more unique, you&apos;ll find plenty of inspiration 
              for your precious son.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Name Lists</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/baby-girl-names" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Baby Girl Names</div>
                <div className="text-sm text-secondary-text">Find baby girl names</div>
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
              <h3 className="heading-3 mb-2">How many baby boy names are in the list?</h3>
              <p className="paragraph">
                Our comprehensive list includes over 100 baby boy names, divided into 
                traditional, modern, and strong categories. This provides plenty of options 
                for finding the perfect name for your new son.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What makes a good baby boy name?</h3>
              <p className="paragraph">
                A good baby boy name is meaningful, strong, and easy to pronounce. 
                It should reflect your family&apos;s values and heritage while being 
                distinctive enough to stand out. The name should carry positive 
                associations and serve your son well throughout his life.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Should I choose a popular or unique name?</h3>
              <p className="paragraph">
                Both popular and unique names have their advantages. Popular names like 
                Liam and Noah are familiar and well-liked, while unique names like 
                Maximilian and Alexander offer individuality. Consider what matters 
                most to your family - fitting in or standing out.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How do I ensure the name ages well?</h3>
              <p className="paragraph">
                Choose a name that&apos;s classic enough to remain stylish but not 
                so trendy that it becomes dated. Consider how the name sounds at different 
                life stages - from childhood to professional settings - and select one 
                that will grow with your son.
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
