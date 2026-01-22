import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Countdown Timers - Holiday & Event Countdowns | Calcuzy.com',
  description: 'Free countdown timers for holidays and events. Track days until Christmas, New Year, Halloween, Easter, Thanksgiving and more. Simple, fast, and accurate.',
  keywords: 'countdown timers, holiday countdown, days until christmas, new year countdown, event timers',
  url: 'https://calcuzy.com/countdowns',
  image: '/og-default.png',
})

export default function CountdownsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Countdown Timers",
    "description": "Collection of countdown timers for holidays and special events",
    "url": "https://calcuzy.com/countdowns",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "WebPage",
          "name": "Christmas Countdown",
          "url": "https://calcuzy.com/days-until-christmas"
        },
        {
          "@type": "WebPage", 
          "name": "New Year Countdown",
          "url": "https://calcuzy.com/days-until-new-year"
        },
        {
          "@type": "WebPage",
          "name": "Halloween Countdown", 
          "url": "https://calcuzy.com/days-until-halloween"
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
            Countdown Timers
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Track the days, hours, and minutes until your favorite holidays and special events. 
            Our countdown timers are simple, accurate, and always up-to-date.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="grid-responsive-2 gap-8 mb-16">
            <Link href="/days-until-christmas" className="block group">
              <Card animation="fade-in-up" delay={100} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎄</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Christmas Countdown
                  </h2>
                  <p className="paragraph text-center">
                    Count down the days until Christmas with our festive timer. 
                    See exactly how long until Santa arrives!
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/days-until-new-year" className="block group">
              <Card animation="fade-in-up" delay={200} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎊</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    New Year Countdown
                  </h2>
                  <p className="paragraph text-center">
                    Track the countdown to the New Year. Perfect for planning your celebrations 
                    and New Year&apos;s resolutions.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/days-until-halloween" className="block group">
              <Card animation="fade-in-up" delay={300} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎃</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Halloween Countdown
                  </h2>
                  <p className="paragraph text-center">
                    Count down to Halloween with our spooky timer. 
                    Perfect for planning costumes and decorations!
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/thanksgiving-countdown" className="block group">
              <Card animation="fade-in-up" delay={400} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🦃</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Thanksgiving Countdown
                  </h2>
                  <p className="paragraph text-center">
                    Track the days until Thanksgiving. Great for meal planning 
                    and holiday preparation.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/easter-countdown" className="block group">
              <Card animation="fade-in-up" delay={500} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🐰</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Easter Countdown
                  </h2>
                  <p className="paragraph text-center">
                    Count down to Easter Sunday. Perfect for planning egg hunts 
                    and holiday celebrations.
                  </p>
                </div>
              </Card>
            </Link>

            <Link href="/black-friday-countdown" className="block group">
              <Card animation="fade-in-up" delay={600} className="h-full hover:scale-[1.02] transition-transform duration-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h2 className="heading-2 mb-4 group-hover:text-accent transition-colors">
                    Black Friday Countdown
                  </h2>
                  <p className="paragraph text-center">
                    Track the countdown to Black Friday. Never miss the best deals 
                    with our shopping timer.
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={700}>
            <h2 className="heading-2 mb-6">About Our Countdown Timers</h2>
            <div className="space-y-4">
              <p className="paragraph">
                Our countdown timers are designed to be simple, accurate, and helpful for planning 
                your holidays and special events. Each timer updates in real-time and shows exactly 
                how many days, hours, minutes, and seconds remain until your target date.
              </p>
              <p className="paragraph">
                Whether you&apos;re excited for Christmas, planning for New Year&apos;s Eve, or getting ready 
                for Halloween, our timers help you stay on track and build anticipation for your 
                favorite celebrations.
              </p>
              <p className="paragraph">
                All our countdown timers work automatically in your browser, require no registration, 
                and are completely free to use. They&apos;re optimized for both desktop and mobile devices, 
                so you can check the countdown anywhere, anytime.
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
