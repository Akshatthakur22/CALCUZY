import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Calcuzy.com - Simple Online Tools, Countdowns & Everyday Utilities',
  description: 'Minimal. Fast. Search-Optimized. Revenue-Ready. Simple online tools, countdown timers, and everyday utilities designed for speed and simplicity.',
  keywords: 'online tools, countdown timers, calculators, simple utilities, age calculator, BMI calculator',
  url: 'https://calcuzy.com/',
  image: '/og-default.png',
})

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Calcuzy.com",
    "description": "Simple online tools, countdown timers, and everyday utilities designed for speed and simplicity",
    "url": "https://calcuzy.com",
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": "https://calcuzy.com?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    ]
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
            Simple Online Tools, Countdowns & Everyday Utilities
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Calcuzy.com offers minimal, fast, and search-optimized tools for everyday use. 
            From countdown timers to practical calculators, we provide simple solutions without the clutter.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="grid-responsive-4 mb-16">
          <Card animation="fade-in-up" delay={100}>
            <h3 className="heading-3 mb-4">🎄 Countdowns</h3>
            <p className="paragraph text-sm mb-4">
              Track important dates and holidays with our precise countdown timers.
            </p>
            <div className="space-y-2">
              <Link href="/days-until-christmas" className="link-accent text-sm font-medium block">
                Christmas Countdown →
              </Link>
              <Link href="/days-until-new-year" className="link-accent text-sm font-medium block">
                New Year Countdown →
              </Link>
              <Link href="/days-until-halloween" className="link-accent text-sm font-medium block">
                Halloween Countdown →
              </Link>
            </div>
          </Card>

          <Card animation="fade-in-up" delay={200}>
            <h3 className="heading-3 mb-4">🧮 Tools</h3>
            <p className="paragraph text-sm mb-4">
              Practical calculators and utilities for everyday calculations and conversions.
            </p>
            <div className="space-y-2">
              <Link href="/age-calculator" className="link-accent text-sm font-medium block">
                Age Calculator →
              </Link>
              <Link href="/bmi-calculator" className="link-accent text-sm font-medium block">
                BMI Calculator →
              </Link>
              <Link href="/unit-converter" className="link-accent text-sm font-medium block">
                Unit Converter →
              </Link>
            </div>
          </Card>

          <Card animation="fade-in-up" delay={300}>
            <h3 className="heading-3 mb-4">📝 Names</h3>
            <p className="paragraph text-sm mb-4">
              Curated lists of popular and unique names for pets, babies, and more.
            </p>
            <div className="space-y-2">
              <Link href="/dog-names" className="link-accent text-sm font-medium block">
                Dog Names →
              </Link>
              <Link href="/baby-boy-names" className="link-accent text-sm font-medium block">
                Baby Boy Names →
              </Link>
              <Link href="/cat-names" className="link-accent text-sm font-medium block">
                Cat Names →
              </Link>
            </div>
          </Card>

          <Card animation="fade-in-up" delay={400}>
            <h3 className="heading-3 mb-4">💬 Quotes</h3>
            <p className="paragraph text-sm mb-4">
              Inspirational and meaningful quotes for motivation and reflection.
            </p>
            <div className="space-y-2">
              <Link href="/motivational-quotes" className="link-accent text-sm font-medium block">
                Motivational Quotes →
              </Link>
              <Link href="/love-quotes" className="link-accent text-sm font-medium block">
                Love Quotes →
              </Link>
              <Link href="/christmas-quotes" className="link-accent text-sm font-medium block">
                Christmas Quotes →
              </Link>
            </div>
          </Card>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-6">Why Choose Calcuzy.com?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              In today's digital world, simplicity is power. Calcuzy.com was built on the principle that 
              the best tools are often the simplest ones. We've eliminated unnecessary features, 
              complex interfaces, and distracting elements to deliver exactly what you need—fast.
            </p>
            
            <p className="paragraph">
              Our platform serves millions of users who value speed and efficiency. Whether you're 
              calculating your age, counting down to Christmas, finding the perfect name for your new 
              puppy, or seeking daily motivation, our tools work instantly without registration or 
              complicated processes.
            </p>
            
            <p className="paragraph">
              Every tool on Calcuzy.com is optimized for both desktop and mobile devices, ensuring 
              a seamless experience regardless of how you access our site. We prioritize performance 
              and usability over flashy designs, because we know your time is valuable.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Popular Tools This Month</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Christmas Countdown - Track the days until the holiday season</li>
              <li className="text-secondary-text">Age Calculator - Calculate exact age in years, months, and days</li>
              <li className="text-secondary-text">BMI Calculator - Check your body mass index instantly</li>
              <li className="text-secondary-text">Dog Names - Find the perfect name for your furry friend</li>
              <li className="text-secondary-text">Motivational Quotes - Get inspired with daily quotes</li>
            </ul>
            
            <p className="paragraph">
              All our tools are completely free to use and work offline once loaded. We don't require 
              any personal information or accounts—just visit, use, and get results instantly. This 
              commitment to privacy and simplicity has made us a trusted resource for users across 
              the United States and beyond.
            </p>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16 fade-in-up">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">Is Calcuzy.com really free?</h3>
              <p className="paragraph">
                Yes, all tools and features on Calcuzy.com are completely free to use. We don't require 
                registration, payment, or any personal information.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How accurate are your countdown timers?</h3>
              <p className="paragraph">
                Our countdown timers update in real-time and are synchronized to your local timezone, 
                ensuring accurate countdowns to the exact second.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I use these tools on my phone?</h3>
              <p className="paragraph">
                Absolutely! All our tools are fully responsive and work perfectly on smartphones, 
                tablets, and desktop computers.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Do you store my data?</h3>
              <p className="paragraph">
                No. We don't store any personal data or calculation results. Everything runs locally 
                in your browser for complete privacy.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How often do you add new tools?</h3>
              <p className="paragraph">
                We regularly add new tools and features based on user feedback and trending searches. 
                Check back often for new utilities!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
