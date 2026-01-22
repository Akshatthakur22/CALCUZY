import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Baby Names & Pet Names - Name Ideas & Inspiration | Calcuzy.app',
  description: 'Find the perfect name with our curated collections. Baby boy names, baby girl names, dog names, cat names, and American last names. Free name inspiration.',
  keywords: 'baby names, pet names, dog names, cat names, last names, name ideas, name inspiration',
  url: 'https://Calcuzy.app/names',
  image: '/og-default.png',
})

export default function NamesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Baby Names & Pet Names",
    "description": "Collection of name ideas for babies, pets, and family names",
    "url": "https://Calcuzy.app/names",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "WebPage",
          "name": "Baby Boy Names",
          "url": "https://Calcuzy.app/baby-boy-names"
        },
        {
          "@type": "WebPage", 
          "name": "Baby Girl Names",
          "url": "https://Calcuzy.app/baby-girl-names"
        },
        {
          "@type": "WebPage",
          "name": "Dog Names", 
          "url": "https://Calcuzy.app/dog-names"
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      
      <main className="container section-responsive">
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Baby Names & Pet Names
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Discover the perfect name with our curated collections. 
            From baby names to pet names, find inspiration for your loved ones.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="grid-responsive-2 gap-8 mb-16">
            <Link href="/baby-boy-names" className="block group">
              <Card animation="fade-in-up" delay={100} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">👶</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Baby Boy Names
                  </h2>
                  <p className="paragraph text-center">
                    Browse our collection of popular and unique baby boy names. 
                    Find the perfect name for your newborn son.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/baby-girl-names" className="block group">
              <Card animation="fade-in-up" delay={200} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">👧</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Baby Girl Names
                  </h2>
                  <p className="paragraph text-center">
                    Explore beautiful baby girl names from traditional to modern. 
                    Discover the perfect name for your baby daughter.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/dog-names" className="block group">
              <Card animation="fade-in-up" delay={300} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🐕</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Dog Names
                  </h2>
                  <p className="paragraph text-center">
                    Find the perfect name for your furry friend. 
                    Creative and popular dog names for every breed.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/cat-names" className="block group">
              <Card animation="fade-in-up" delay={400} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🐱</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Cat Names
                  </h2>
                  <p className="paragraph text-center">
                    Discover the perfect name for your feline companion. 
                    Cute, clever, and creative cat name ideas.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/american-last-names" className="block group">
              <Card animation="fade-in-up" delay={500} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🇺🇸</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    American Last Names
                  </h2>
                  <p className="paragraph text-center">
                    Explore popular American surnames and family names. 
                    Perfect for genealogy research or name inspiration.
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={600}>
            <h2 className="heading-2 mb-6">About Our Name Collections</h2>
            <div className="space-y-4">
              <p className="paragraph">
                Finding the perfect name is an important decision, whether you&apos;re naming a baby, 
                a new pet, or exploring family heritage. Our curated name collections provide 
                inspiration and ideas to help you make the right choice.
              </p>
              <p className="paragraph">
                Each collection is carefully organized and includes popular trends, timeless classics, 
                and unique options. We update our lists regularly to reflect current naming trends 
                while maintaining a diverse selection of names from different cultures and origins.
              </p>
              <p className="paragraph">
                All our name collections are completely free to browse and require no registration. 
                Whether you&apos;re looking for traditional names, modern trends, or something unique, 
                you&apos;ll find plenty of inspiration in our comprehensive name databases.
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
