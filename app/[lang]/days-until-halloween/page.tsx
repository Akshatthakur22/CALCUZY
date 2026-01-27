import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountdownHalloween from '@/components/client/CountdownHalloween'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Halloween Countdown – Days Left Until Halloween',
  description: 'Count down the exact days, hours, minutes, and seconds until Halloween 2026. Real-time Halloween countdown timer with accurate time remaining.',
  keywords: 'halloween countdown, days until halloween, halloween timer, october 31',
})

export default function HalloweenCountdown() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            Halloween Countdown 2026
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Count down every second until Halloween night with our precise real-time timer. 
            See exactly how many days, hours, minutes, and seconds remain until October 31st, 2026.
          </p>
        </div>

        <AdUnit slot={1} />

        <CountdownHalloween />

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Halloween Countdown</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Halloween is one of the most exciting holidays in the United States, celebrated by millions 
              with costumes, trick-or-treating, haunted houses, and spooky festivities. Our countdown timer 
              helps you track every moment leading up to this thrilling night, whether you&apos;re planning 
              costumes, parties, or simply anticipating the candy and excitement.
            </p>
            
            <p className="paragraph">
              The tradition of Halloween dates back over 2,000 years to the ancient Celtic festival of 
              Samhain. In modern America, Halloween has evolved into a beloved holiday where children 
              dress up in costumes and go door-to-door collecting candy, while adults enjoy costume 
              parties, haunted attractions, and horror movie marathons.
            </p>
            
            <p className="paragraph">
              Halloween falls on October 31st every year and is celebrated with various traditions across 
              the United States. From carving pumpkins into jack-o&apos;-lanterns to decorating homes with 
              spooky decorations, Americans spend billions annually on Halloween-related purchases, 
              making it one of the most commercially successful holidays.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Popular Halloween Traditions in the US</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Trick-or-treating door-to-door for candy and treats</li>
              <li className="text-secondary-text">Carving pumpkins into jack-o&apos;-lanterns</li>
              <li className="text-secondary-text">Wearing costumes and attending costume parties</li>
              <li className="text-secondary-text">Visiting haunted houses and spooky attractions</li>
              <li className="text-secondary-text">Watching horror movies and telling scary stories</li>
            </ul>
            
            <p className="paragraph">
              Our countdown timer updates every second, ensuring you always know exactly how much time 
              remains until Halloween night. Whether you&apos;re excited about trick-or-treating, costume 
              planning, or simply the festive atmosphere, this tool helps you stay connected to the 
              Halloween spirit all October long.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Countdowns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/days-until-christmas" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Christmas Countdown</div>
                <div className="text-sm text-secondary-text">Holiday season countdown</div>
              </Link>
              <Link href="/thanksgiving-countdown" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Thanksgiving Countdown</div>
                <div className="text-sm text-secondary-text">Fall holiday countdown</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How many days until Halloween 2026?</h3>
              <p className="paragraph">
                Our countdown timer shows the exact number of days, hours, minutes, and seconds 
                remaining until October 31, 2026. The timer updates automatically every second.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Why do people celebrate Halloween?</h3>
              <p className="paragraph">
                Halloween celebrates the tradition of dressing up in costumes, trick-or-treating, and 
                enjoying spooky festivities. It has roots in ancient Celtic festivals and has become 
                a beloved American holiday for both children and adults.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is Halloween always on October 31st?</h3>
              <p className="paragraph">
                Yes, Halloween is always celebrated on October 31st in the United States. Some 
                communities may hold trick-or-treat events on different days, but the holiday itself 
                always falls on October 31st.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What time does Halloween start?</h3>
              <p className="paragraph">
                Halloween celebrations typically begin in the evening on October 31st, with most 
                trick-or-treating occurring between 6:00 PM and 9:00 PM. Our countdown timer counts 
                down to midnight when October 31st officially begins.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How accurate is this Halloween countdown?</h3>
              <p className="paragraph">
                Our countdown timer is extremely accurate, updating every second and synchronized 
                to your local timezone. It calculates the exact time remaining until midnight on 
                October 31, 2026.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
