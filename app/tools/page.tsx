import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Online Tools & Calculators | Calcuzy.com',
  description: 'Free online calculators and tools for everyday use. Age calculator, BMI calculator, unit converter, date difference calculator, random number generator and more.',
  keywords: 'online calculators, age calculator, BMI calculator, unit converter, date calculator, random number generator',
  url: 'https://calcuzy.com/tools',
  image: '/og-default.png',
})

export default function ToolsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Online Tools & Calculators",
    "description": "Collection of useful online calculators and utility tools",
    "url": "https://calcuzy.com/tools",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "WebPage",
          "name": "Age Calculator",
          "url": "https://calcuzy.com/age-calculator"
        },
        {
          "@type": "WebPage", 
          "name": "BMI Calculator",
          "url": "https://calcuzy.com/bmi-calculator"
        },
        {
          "@type": "WebPage",
          "name": "Unit Converter", 
          "url": "https://calcuzy.com/unit-converter"
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
            Online Tools & Calculators
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Powerful yet simple online tools for everyday calculations and conversions. 
            All our tools are free, fast, and work right in your browser.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="grid-responsive-2 gap-8 mb-16">
            <Link href="/age-calculator" className="block group">
              <Card animation="fade-in-up" delay={100} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🧮</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Age Calculator
                  </h2>
                  <p className="paragraph text-center">
                    Calculate your exact age in years, months, and days. 
                    Simply enter your birth date and get instant results.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/bmi-calculator" className="block group">
              <Card animation="fade-in-up" delay={200} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    BMI Calculator
                  </h2>
                  <p className="paragraph text-center">
                    Calculate your Body Mass Index and assess your health status. 
                    Get instant BMI results with health category indicators.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/unit-converter" className="block group">
              <Card animation="fade-in-up" delay={300} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔄</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Unit Converter
                  </h2>
                  <p className="paragraph text-center">
                    Convert between different units of measurement. 
                    Length, weight, temperature, and more conversions available.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/date-difference" className="block group">
              <Card animation="fade-in-up" delay={400} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">📅</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Date Difference Calculator
                  </h2>
                  <p className="paragraph text-center">
                    Calculate the difference between two dates. 
                    Perfect for planning events or tracking time periods.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/random-number-generator" className="block group">
              <Card animation="fade-in-up" delay={500} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎲</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Random Number Generator
                  </h2>
                  <p className="paragraph text-center">
                    Generate random numbers within your specified range. 
                    Great for games, contests, or statistical sampling.
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={600}>
            <h2 className="heading-2 mb-6">About Our Online Tools</h2>
            <div className="space-y-4">
              <p className="paragraph">
                Our online tools are designed to make everyday calculations simple and accessible. 
                Whether you need to calculate your age, convert units, or generate random numbers, 
                our tools provide instant, accurate results without any complexity.
              </p>
              <p className="paragraph">
                All tools work directly in your browser with no registration required. 
                We prioritize privacy - your calculations never leave your device, 
                ensuring complete data security and privacy.
              </p>
              <p className="paragraph">
                Each tool is optimized for speed and accuracy, with clean interfaces that 
                focus on functionality over unnecessary features. Get the results you need 
                quickly and efficiently, whether you&apos;re on desktop or mobile.
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
