import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Calcuzy.com - Simple Online Tools, Countdowns & Everyday Utilities',
  description: 'Minimal. Fast. Search-Optimized. Revenue-Ready. Simple online tools, countdown timers, and everyday utilities designed for speed and simplicity.',
  keywords: 'online tools, countdown timers, calculators, simple utilities, age calculator, BMI calculator',
  openGraph: {
    title: 'Calcuzy.com - Simple Online Tools & Countdowns',
    description: 'Minimal. Fast. Search-Optimized. Simple online tools and countdown timers.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-16">
          <h1 className="heading-1 text-center mb-6">
            Simple Online Tools, Countdowns & Everyday Utilities
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Calcuzy.com offers minimal, fast, and search-optimized tools for everyday use. 
            From countdown timers to practical calculators, we provide simple solutions without the clutter.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <h3 className="heading-3 mb-4">🎄 Countdowns</h3>
            <p className="paragraph text-sm mb-4">
              Track important dates and holidays with our precise countdown timers.
            </p>
            <Link href="/days-until-christmas" className="text-accent hover:underline text-sm font-medium">
              Christmas Countdown →
            </Link>
          </Card>

          <Card>
            <h3 className="heading-3 mb-4">🧮 Tools</h3>
            <p className="paragraph text-sm mb-4">
              Practical calculators and utilities for everyday calculations and conversions.
            </p>
            <Link href="/age-calculator" className="text-accent hover:underline text-sm font-medium">
              Age Calculator →
            </Link>
          </Card>

          <Card>
            <h3 className="heading-3 mb-4">📝 Names</h3>
            <p className="paragraph text-sm mb-4">
              Curated lists of popular and unique names for pets, babies, and more.
            </p>
            <Link href="/dog-names" className="text-accent hover:underline text-sm font-medium">
              Dog Names →
            </Link>
          </Card>

          <Card>
            <h3 className="heading-3 mb-4">💬 Quotes</h3>
            <p className="paragraph text-sm mb-4">
              Inspirational and meaningful quotes for motivation and reflection.
            </p>
            <Link href="/motivational-quotes" className="text-accent hover:underline text-sm font-medium">
              Motivational Quotes →
            </Link>
          </Card>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
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

        <div className="max-w-4xl mx-auto mt-16">
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
