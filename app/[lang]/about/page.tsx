import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'About Calcuzy.app - Simple Online Tools & Utilities',
  description: 'Learn about Calcuzy.app mission to provide simple, fast, and search-optimized online tools. Discover our story and commitment to user privacy.',
  keywords: 'about calcuzy, online tools mission, simple utilities, privacy focused',
  url: 'https://Calcuzy.app/about',
  image: '/og-default.png',
})

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Calcuzy.app",
    "description": "Learn about Calcuzy.app mission to provide simple, fast, and search-optimized online tools",
    "url": "https://Calcuzy.app/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Calcuzy.app",
      "description": "Simple online tools, countdown timers, and everyday utilities designed for speed and simplicity",
      "url": "https://Calcuzy.app"
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
            About Calcuzy.app
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Discover our mission to provide simple, fast, and search-optimized online tools 
            that make everyday calculations and countdowns effortless and accessible to everyone.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="grid-responsive-2 gap-8 mb-16">
            <Card animation="fade-in-up" delay={100}>
              <h2 className="heading-2 mb-6">Who We Are</h2>
              <p className="paragraph">
                Calcuzy.app was founded with a simple mission: to create the most 
                user-friendly online tools and utilities that help people solve everyday problems 
                without complexity or confusion. We believe the best tools are often the simplest 
                ones—fast, reliable, and completely free to use.
              </p>
              <p className="paragraph">
                Our team is passionate about eliminating digital clutter and focusing on what 
                truly matters: providing accurate results instantly without requiring registration, 
                personal data, or complicated interfaces. Every tool we build follows our core 
                principles of simplicity, speed, and privacy.
              </p>
            </Card>

            <Card animation="fade-in-up" delay={200}>
              <h2 className="heading-2 mb-6">What We Offer</h2>
              <p className="paragraph">
                Calcuzy.app provides a comprehensive suite of online tools designed for 
                everyday use. Our countdown timers help you track important dates and holidays, while our 
                calculators handle everything from age calculations to unit conversions and health metrics.
              </p>
              <p className="paragraph">
                We also curate collections of popular names and inspirational quotes, helping you 
                find the perfect name for your pet or baby, or get motivated with daily 
                wisdom. All our tools work seamlessly across devices and browsers, ensuring you have 
                access whenever and wherever you need them.
              </p>
            </Card>
          </div>

          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">Our Mission</h2>
            <p className="paragraph">
              Our mission is to democratize access to practical online tools by removing 
              barriers like registration, payment, and technical complexity. We believe everyone 
              deserves access to reliable utilities that just work—no learning curves, no hidden costs, 
              and no privacy concerns.
            </p>
            <p className="paragraph">
              We&apos;re committed to continuous improvement based on user feedback and emerging 
              needs. Every feature we add is tested rigorously to ensure it meets our standards 
              of simplicity, accuracy, and speed. Your trust is our most valuable asset, 
              and we work daily to earn and maintain it through transparent practices and 
              exceptional user experiences.
            </p>
          </Card>

          <Card animation="fade-in-up" delay={400}>
            <h2 className="heading-2 mb-6">Our Values</h2>
            <div className="space-y-4">
              <div>
                <h3 className="heading-3 mb-2">Simplicity First</h3>
                <p className="paragraph">
                  We prioritize clean interfaces and straightforward functionality over complex 
                  features. Every tool should be intuitive enough that anyone can use it 
                  immediately without instructions or tutorials.
                </p>
              </div>
              
              <div>
                <h3 className="heading-3 mb-2">Privacy by Design</h3>
                <p className="paragraph">
                  We never collect personal data or store calculation results. Everything 
                  happens locally in your browser, ensuring complete privacy and security 
                  of your information.
                </p>
              </div>
              
              <div>
                <h3 className="heading-3 mb-2">Speed & Reliability</h3>
                <p className="paragraph">
                  Our tools are optimized for instant results and 99.9% uptime. 
                  We understand that when you need a calculator or countdown, you need it 
                  to work immediately without delays or errors.
                </p>
              </div>
              
              <div>
                <h3 className="heading-3 mb-2">Always Free</h3>
                <p className="paragraph">
                  All our tools are and will always be completely free. No premium features, 
                  no hidden costs, and no limitations. We believe essential utilities should 
                  be accessible to everyone regardless of ability to pay.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-6">Popular Tools</h2>
          <div className="grid-responsive-3">
            <Link href="/age-calculator" className="block p-6 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
              <div className="text-center">
                <div className="text-2xl mb-2">🧮</div>
                <div className="font-medium text-primary-text">Age Calculator</div>
                <div className="text-sm text-secondary-text">Calculate exact age</div>
              </div>
            </Link>
            
            <Link href="/bmi-calculator" className="block p-6 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
              <div className="text-center">
                <div className="text-2xl mb-2">⚖️</div>
                <div className="font-medium text-primary-text">BMI Calculator</div>
                <div className="text-sm text-secondary-text">Health assessment tool</div>
              </div>
            </Link>
            
            <Link href="/unit-converter" className="block p-6 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
              <div className="text-center">
                <div className="text-2xl mb-2">🔄</div>
                <div className="font-medium text-primary-text">Unit Converter</div>
                <div className="text-sm text-secondary-text">Convert measurements</div>
              </div>
            </Link>
            
            <Link href="/random-number-generator" className="block p-6 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
              <div className="text-center">
                <div className="text-2xl mb-2">🎲</div>
                <div className="font-medium text-primary-text">Random Number</div>
                <div className="text-sm text-secondary-text">Generate random values</div>
              </div>
            </Link>
            
            <Link href="/date-difference" className="block p-6 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
              <div className="text-center">
                <div className="text-2xl mb-2">📅</div>
                <div className="font-medium text-primary-text">Date Difference</div>
                <div className="text-sm text-secondary-text">Calculate date intervals</div>
              </div>
            </Link>
            
            <Link href="/days-until-christmas" className="block p-6 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
              <div className="text-center">
                <div className="text-2xl mb-2">🎄</div>
                <div className="font-medium text-primary-text">Christmas Countdown</div>
                <div className="text-sm text-secondary-text">Holiday timer</div>
              </div>
            </Link>
            
            <Link href="/baby-boy-names" className="block p-6 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
              <div className="text-center">
                <div className="text-2xl mb-2">👶</div>
                <div className="font-medium text-primary-text">Baby Names</div>
                <div className="text-sm text-secondary-text">Name inspiration</div>
              </div>
            </Link>
            
            <Link href="/motivational-quotes" className="block p-6 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
              <div className="text-center">
                <div className="text-2xl mb-2">💬</div>
                <div className="font-medium text-primary-text">Quotes</div>
                <div className="text-sm text-secondary-text">Daily inspiration</div>
              </div>
            </Link>
            
            <Link href="/dog-names" className="block p-6 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
              <div className="text-center">
                <div className="text-2xl mb-2">🐕</div>
                <div className="font-medium text-primary-text">Dog Names</div>
                <div className="text-sm text-secondary-text">Pet name ideas</div>
              </div>
            </Link>
            
            <Link href="/american-last-names" className="block p-6 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
              <div className="text-center">
                <div className="text-2xl mb-2">🇺🇸</div>
                <div className="font-medium text-primary-text">Last Names</div>
                <div className="text-sm text-secondary-text">Family surnames</div>
              </div>
            </Link>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">Is Calcuzy.app really free?</h3>
              <p className="paragraph">
                Yes, all tools and features on Calcuzy.app are completely free to use. 
                We don&apos;t require registration, payment, or any personal information. Our mission 
                is to provide essential utilities to everyone without barriers.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How do you make money?</h3>
              <p className="paragraph">
                We display advertisements through Google AdSense to keep our tools free. 
                This allows us to maintain and improve our services without charging users. 
                We&apos;re transparent about this and never prioritize ads over user experience.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is my data safe?</h3>
              <p className="paragraph">
                Absolutely. We don&apos;t collect, store, or share any personal data. 
                All calculations happen locally in your browser, ensuring complete privacy. 
                We&apos;re committed to protecting your information and being transparent about our practices.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I request new tools?</h3>
              <p className="paragraph">
                Yes! We welcome user feedback and suggestions for new tools. 
                Many of our current features were developed based on user requests. 
                Contact us with your ideas—we read and consider every suggestion seriously.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How often do you update?</h3>
              <p className="paragraph">
                We regularly update existing tools and add new features based on user 
                feedback and trending needs. Major updates happen quarterly, with smaller 
                improvements and bug fixes deployed as needed to ensure the best possible experience.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
