import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountdownChristmas from '@/components/client/CountdownChristmas'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Days Until Christmas 2026 – Exact Countdown Timer',
  description: 'Count down the exact days, hours, minutes, and seconds until Christmas 2026. Real-time Christmas countdown timer with accurate time remaining.',
  keywords: 'christmas countdown, xmas 2026, days until christmas, christmas timer',
  url: 'https://calcuzy.com/days-until-christmas',
  image: '/og-countdowns.png',
})

export default function ChristmasCountdown() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Christmas 2026 Countdown",
    "description": "Count down the exact days, hours, minutes, and seconds until Christmas 2026",
    "startDate": "2026-12-25T00:00:00",
    "eventStatus": "ScheduledEvent",
    "eventAttendanceMode": "OnlineEventAttendanceMode",
    "url": "https://calcuzy.com/days-until-christmas",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://calcuzy.com/days-until-christmas"
    }
  }
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
            Days Until Christmas 2026
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Count down every second until Christmas morning with our precise real-time timer. 
            See exactly how many days, hours, minutes, and seconds remain until December 25th, 2026.
          </p>
        </div>

        <AdUnit slot={1} />

        <CountdownChristmas />

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-6">About Christmas Countdown</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Christmas is one of the most anticipated holidays in the United States, celebrated by millions 
              of families across the country. Our countdown timer helps you track every moment leading up to 
              this magical day, whether you&apos;re planning holiday preparations, gift shopping, or simply 
              counting down to the festive celebrations.
            </p>
            
            <p className="paragraph">
              The tradition of counting down to Christmas dates back centuries, with advent calendars and 
              other countdown methods helping build excitement for the holiday season. In modern times, 
              digital countdown timers like ours provide precise measurements down to the second, helping 
              you experience the anticipation in real-time.
            </p>
            
            <p className="paragraph">
              Our Christmas countdown updates automatically every second, ensuring you always have the most 
              accurate time remaining until Christmas morning. Whether you&apos;re checking from your phone, 
              tablet, or computer, the countdown remains synchronized and precise.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Popular Christmas Traditions</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Decorating Christmas trees with lights and ornaments</li>
              <li className="text-secondary-text">Exchanging gifts with family and friends</li>
              <li className="text-secondary-text">Hanging stockings by fireplace</li>
              <li className="text-secondary-text">Singing Christmas carols and holiday music</li>
              <li className="text-secondary-text">Watching classic Christmas movies and specials</li>
            </ul>
            
            <p className="paragraph">
              Our countdown timer automatically updates every second, ensuring you always know exactly 
              how much time remains until Christmas morning. Whether you&apos;re excited about Santa&apos;s arrival, 
              family gatherings, or simply the festive atmosphere, this tool helps you stay connected to 
              the holiday spirit all season long.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Countdowns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/days-until-new-year" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">New Year Countdown</div>
                <div className="text-sm text-secondary-text">Count down to 2027</div>
              </Link>
              <Link href="/black-friday-countdown" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Black Friday Countdown</div>
                <div className="text-sm text-secondary-text">Holiday shopping deals</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How many days until Christmas 2026?</h3>
              <p className="paragraph">
                Our countdown timer shows the exact number of days, hours, minutes, and seconds 
                remaining until December 25, 2026. The timer updates automatically every second.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Why do people celebrate Christmas?</h3>
              <p className="paragraph">
                Christmas is celebrated to commemorate the birth of Jesus Christ and has become a 
                major cultural and commercial holiday in the United States, marked by family gatherings, 
                gift-giving, and festive traditions.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is Christmas always on December 25th?</h3>
              <p className="paragraph">
                Yes, Christmas is always celebrated on December 25th in the United States and most 
                countries around the world, regardless of which day of the week it falls on.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How accurate is this countdown timer?</h3>
              <p className="paragraph">
                Our countdown timer is extremely accurate, updating every second and synchronized 
                to your local timezone. It calculates the exact time remaining until midnight on 
                December 25, 2026.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What time does Christmas officially start?</h3>
              <p className="paragraph">
                Christmas Day officially begins at 12:00 AM on December 25th. Our countdown timer 
                counts down to this exact moment, when Christmas morning arrives.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
