import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountdownEaster from '@/components/client/CountdownEaster'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Easter 2026 Countdown – How Many Days Left?',
  description: 'Count down to Easter 2026 with our precise timer. See exactly how many days, hours, minutes, and seconds remain until Easter Sunday.',
  keywords: 'easter timer, easter countdown, days until easter, easter 2026',
})

export default function EasterCountdown() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            Easter Countdown 2026
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Count down every second to Easter Sunday with our precise real-time timer. 
            See exactly how many days, hours, minutes, and seconds remain until April 5th, 2026.
          </p>
        </div>

        <AdUnit slot={1} />

        <CountdownEaster />

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Easter Countdown</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Easter is one of the most important Christian holidays, celebrating the resurrection of 
              Jesus Christ. Our countdown timer helps you track every moment leading up to this joyous 
              celebration, whether you&apos;re planning Easter egg hunts, family gatherings, or simply 
              anticipating the spiritual significance of the day.
            </p>
            
            <p className="paragraph">
              The date of Easter changes each year because it&apos;s based on the lunar calendar, falling 
              on the first Sunday after the first full moon following the vernal equinox. In 2026, 
              Easter Sunday falls on April 5th. This movable date means Easter can occur anytime 
              between March 22nd and April 25th.
            </p>
            
            <p className="paragraph">
              Easter celebrations in the United States blend religious traditions with secular customs. 
              Families attend church services, participate in Easter egg hunts, enjoy special meals, 
              and share time with loved ones. The holiday symbolizes rebirth, renewal, and hope, 
              making it a meaningful celebration for millions of Americans.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Popular Easter Traditions in the US</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Easter egg hunts for children and families</li>
              <li className="text-secondary-text">Decorating Easter eggs with colors and designs</li>
              <li className="text-secondary-text">Attending sunrise church services on Easter morning</li>
              <li className="text-secondary-text">Sharing special Easter meals with ham or lamb</li>
              <li className="text-secondary-text">Giving Easter baskets filled with candy and treats</li>
            </ul>
            
            <p className="paragraph">
              Our countdown timer updates every second, ensuring you always know exactly how much time 
              remains until Easter Sunday. Whether you&apos;re excited about the family traditions, the 
              spiritual significance, or simply the spring celebration, this timer helps you stay 
              connected to the Easter season.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Countdowns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/days-until-christmas" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Christmas Countdown</div>
                <div className="text-sm text-secondary-text">Major Christian holiday</div>
              </Link>
              <Link href="/thanksgiving-countdown" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Thanksgiving Countdown</div>
                <div className="text-sm text-secondary-text">Fall holiday celebration</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How many days until Easter 2026?</h3>
              <p className="paragraph">
                Our countdown timer shows the exact number of days, hours, minutes, and seconds 
                remaining until April 5, 2026. The timer updates automatically every second.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Why does Easter change dates every year?</h3>
              <p className="paragraph">
                Easter&apos;s date changes because it&apos;s based on the lunar calendar and astronomical 
                calculations. It falls on the first Sunday after the first full moon following the 
                spring equinox, which is why the date varies each year.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What do people celebrate on Easter?</h3>
              <p className="paragraph">
                Easter celebrates the resurrection of Jesus Christ in Christian tradition. It&apos;s also 
                celebrated with secular traditions like Easter egg hunts, decorating eggs, and family 
                gatherings that symbolize spring and new life.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What are common Easter traditions?</h3>
              <p className="paragraph">
                Common Easter traditions include attending church services, Easter egg hunts, decorating 
                eggs, sharing special meals, giving Easter baskets, and spending time with family. 
                Many families also participate in community Easter events and activities.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How accurate is this Easter countdown?</h3>
              <p className="paragraph">
                Our countdown timer is extremely accurate, updating every second and synchronized 
                to your local timezone. It calculates the exact time remaining until midnight on 
                Easter Sunday, April 5, 2026.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
