import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Inspirational Quotes & Motivational Sayings | Calcuzy.app',
  description: 'Free collection of inspirational quotes and motivational sayings. Motivational quotes, love quotes, graduation quotes, Christmas quotes and aesthetic quotes for daily inspiration.',
  keywords: 'inspirational quotes, motivational quotes, love quotes, graduation quotes, daily inspiration, positive quotes',
  url: 'https://Calcuzy.app/quotes',
  image: '/og-default.png',
})

export default function QuotesPage() {
  const searchActionData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://calcuzy.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://calcuzy.app/tools?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Inspirational Quotes & Motivational Sayings",
    "description": "Collection of inspirational quotes and motivational sayings for daily inspiration",
    "url": "https://Calcuzy.app/quotes",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "WebPage",
          "name": "Motivational Quotes",
          "url": "https://Calcuzy.app/motivational-quotes"
        },
        {
          "@type": "WebPage", 
          "name": "Love Quotes",
          "url": "https://Calcuzy.app/love-quotes"
        },
        {
          "@type": "WebPage",
          "name": "Graduation Quotes", 
          "url": "https://Calcuzy.app/graduation-quotes"
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchActionData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <Breadcrumbs />
      
      <main className="container section-responsive">
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Inspirational Quotes & Motivational Sayings
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Find daily inspiration with our curated collection of quotes. 
            From motivational wisdom to heartfelt expressions, discover the perfect words for any moment.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="grid-responsive-2 gap-8 mb-16">
            <Link href="/motivational-quotes" className="block group">
              <Card animation="fade-in-up" delay={100} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">💪</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Motivational Quotes
                  </h2>
                  <p className="paragraph text-center">
                    Get inspired with powerful motivational quotes. 
                    Perfect for daily encouragement and achieving your goals.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/love-quotes" className="block group">
              <Card animation="fade-in-up" delay={200} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">❤️</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Love Quotes
                  </h2>
                  <p className="paragraph text-center">
                    Express your feelings with beautiful love quotes. 
                    Romantic and heartfelt words for every relationship.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/graduation-quotes" className="block group">
              <Card animation="fade-in-up" delay={300} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎓</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Graduation Quotes
                  </h2>
                  <p className="paragraph text-center">
                    Celebrate achievement with inspiring graduation quotes. 
                    Perfect for graduates and milestone celebrations.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/christmas-quotes" className="block group">
              <Card animation="fade-in-up" delay={400} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎄</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Christmas Quotes
                  </h2>
                  <p className="paragraph text-center">
                    Spread holiday cheer with festive Christmas quotes. 
                    Heartfelt messages for the most wonderful time of the year.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/aesthetic-quotes" className="block group">
              <Card animation="fade-in-up" delay={500} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Aesthetic Quotes
                  </h2>
                  <p className="paragraph text-center">
                    Beautiful and artistic quotes for visual inspiration. 
                    Perfect for social media and creative expression.
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={600}>
            <h2 className="heading-2 mb-6">About Our Quote Collections</h2>
            <div className="space-y-4">
              <p className="paragraph">
                Words have the power to inspire, motivate, and transform. Our curated quote collections 
                bring together the most meaningful and impactful sayings from various sources, 
                perfect for finding the right words for any occasion.
              </p>
              <p className="paragraph">
                Each collection is carefully selected to provide value and inspiration. Whether you&apos;re 
                seeking motivation for your goals, expressing love to someone special, celebrating 
                achievements, or simply need daily encouragement, you&apos;ll find quotes that resonate.
              </p>
              <p className="paragraph">
                All our quote collections are free to browse and share. We regularly update our 
                selections to include fresh perspectives and timeless wisdom, ensuring you always 
                have access to inspiring words when you need them most.
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
