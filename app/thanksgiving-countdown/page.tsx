import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountdownThanksgiving from '@/components/client/CountdownThanksgiving'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Thanksgiving Countdown 2026 – Days Remaining',
  description: 'Count down to Thanksgiving 2026 with our precise timer. See exactly how many days, hours, minutes, and seconds remain until Thanksgiving Day.',
  keywords: 'thanksgiving countdown, days until thanksgiving, thanksgiving timer',
})

export default function ThanksgivingCountdown() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            Thanksgiving Countdown 2026
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Count down every second to Thanksgiving Day with our precise real-time timer. 
            See exactly how many days, hours, minutes, and seconds remain until November 26th, 2026.
          </p>
        </div>

        <AdUnit slot={1} />

        <CountdownThanksgiving />

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Thanksgiving Countdown</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Thanksgiving is one of America's most cherished holidays, bringing families together for 
              gratitude, feasting, and fellowship. Our countdown timer helps you track every moment 
              leading up to this special day, whether you're planning the perfect Thanksgiving dinner, 
              coordinating travel plans, or simply anticipating the warmth of family gatherings.
            </p>
            
            <p className="paragraph">
              The tradition of Thanksgiving dates back to 1621 when Pilgrims and Native Americans 
              shared a harvest feast in Plymouth, Massachusetts. Today, Americans celebrate on the 
              fourth Thursday of November with turkey dinners, pumpkin pie, football games, and 
              expressions of gratitude for life's blessings.
            </p>
            
            <p className="paragraph">
              Thanksgiving marks the beginning of the holiday season in the United States, followed 
              by Black Friday shopping and Christmas preparations. It's a time when millions of 
              Americans travel to be with loved ones, making it one of the busiest travel periods 
              of the year. The holiday emphasizes gratitude, family traditions, and sharing 
              blessings with others.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Popular Thanksgiving Traditions in the US</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Roasting turkey with traditional stuffing and gravy</li>
              <li className="text-secondary-text">Watching Thanksgiving Day parades and football games</li>
              <li className="text-secondary-text">Sharing what everyone is thankful for around the dinner table</li>
              <li className="text-secondary-text">Black Friday shopping the day after Thanksgiving</li>
              <li className="text-secondary-text">Volunteering and helping those in need</li>
            </ul>
            
            <p className="paragraph">
              Our countdown timer updates every second, ensuring you always know exactly how much time 
              remains until Thanksgiving Day. Whether you're excited about the family feast, the 
              holiday sales, or simply the opportunity to give thanks, this timer helps you stay 
              connected to the spirit of gratitude and togetherness.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Countdowns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/black-friday-countdown" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Black Friday Countdown</div>
                <div className="text-sm text-secondary-text">Holiday shopping deals</div>
              </Link>
              <Link href="/days-until-christmas" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Christmas Countdown</div>
                <div className="text-sm text-secondary-text">Holiday season countdown</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How many days until Thanksgiving 2026?</h3>
              <p className="paragraph">
                Our countdown timer shows the exact number of days, hours, minutes, and seconds 
                remaining until November 26, 2026. The timer updates automatically every second.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Why do people celebrate Thanksgiving?</h3>
              <p className="paragraph">
                Thanksgiving celebrates the harvest and blessings of the past year. It's a time for 
                families to gather, share meals, and express gratitude for what they have, following 
                the tradition of the first Thanksgiving feast shared by Pilgrims and Native Americans.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is Thanksgiving always on the same date?</h3>
              <p className="paragraph">
                Thanksgiving is always celebrated on the fourth Thursday of November in the United States. 
                This means the date changes each year, but it always falls between November 22nd and 28th.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What is traditionally eaten on Thanksgiving?</h3>
              <p className="paragraph">
                Traditional Thanksgiving meals include roasted turkey, stuffing, mashed potatoes, 
                gravy, cranberry sauce, green bean casserole, and pumpkin pie. Many families have 
                their own special recipes and traditions passed down through generations.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How accurate is this Thanksgiving countdown?</h3>
              <p className="paragraph">
                Our countdown timer is extremely accurate, updating every second and synchronized 
                to your local timezone. It calculates the exact time remaining until midnight on 
                Thanksgiving Day, November 26, 2026.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
