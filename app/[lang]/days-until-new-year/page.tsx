import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountdownNewYear from '@/components/client/CountdownNewYear'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'New Year Countdown – Days, Hours, Minutes',
  description: 'Count down to New Year 2027 with our precise timer. See exactly how many days, hours, minutes, and seconds remain until the New Year celebration.',
  keywords: 'new year timer, nye countdown, days until new year, new year 2027',
})

export default function NewYearCountdown() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            New Year Countdown 2027
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Count down every second to New Year&apos;s Day 2027. Watch the precise time remaining 
            until the clock strikes midnight and we welcome the new year with celebration and hope.
          </p>
        </div>

        <AdUnit slot={1} />

        <CountdownNewYear />

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About New Year Countdown</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              New Year&apos;s Eve is one of the most celebrated nights worldwide, marking the transition 
              from one year to the next. Our countdown timer helps you track every moment leading up 
              to this magical midnight celebration, whether you&apos;re planning parties, setting resolutions, 
              or simply anticipating the fresh start that a new year brings.
            </p>
            
            <p className="paragraph">
              The tradition of counting down to midnight on New Year&apos;s Eve dates back centuries, with 
              gatherings in public squares like Times Square in New York City drawing millions of viewers. 
              The dropping of the ball, fireworks displays, and collective countdown from &quot;10&quot; to &quot;1&quot; 
              have become iconic symbols of New Year celebrations across the United States and beyond.
            </p>
            
            <p className="paragraph">
              New Year&apos;s Day, January 1st, represents new beginnings, fresh opportunities, and the chance 
              to start anew. Many Americans celebrate by making New Year&apos;s resolutions, watching parades 
              like the Tournament of Roses Parade, and enjoying time with family and friends. It&apos;s a day 
              filled with hope, optimism, and celebration of what&apos;s to come.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Popular New Year Traditions in the US</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Watching the Times Square Ball Drop in New York City</li>
              <li className="text-secondary-text">Making New Year&apos;s resolutions for self-improvement</li>
              <li className="text-secondary-text">Setting off fireworks and attending midnight celebrations</li>
              <li className="text-secondary-text">Watching college football bowl games on New Year&apos;s Day</li>
              <li className="text-secondary-text">Enjoying special meals and toasting with champagne</li>
            </ul>
            
            <p className="paragraph">
              Our countdown timer updates every second, ensuring you know exactly when midnight arrives 
              and the new year begins. Whether you&apos;re counting down to kiss someone special, pop the 
              champagne, or simply welcome the new year with quiet reflection, this timer keeps you 
              connected to the excitement and anticipation of New Year&apos;s Eve.
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
                <div className="text-sm text-secondary-text">Count down to Thanksgiving</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How many days until New Year 2027?</h3>
              <p className="paragraph">
                Our countdown timer shows the exact number of days, hours, minutes, and seconds 
                remaining until January 1, 2027. The timer updates automatically every second.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Why do people celebrate New Year&apos;s Eve?</h3>
              <p className="paragraph">
                New Year&apos;s Eve celebrates the end of one year and the beginning of another, offering 
                a chance for reflection, celebration, and hope for the future. It&apos;s a time to gather 
                with loved ones and welcome new opportunities.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What happens at midnight on New Year&apos;s Eve?</h3>
              <p className="paragraph">
                At midnight, people traditionally count down from 10, kiss loved ones, toast with 
                champagne, set off fireworks, and celebrate the arrival of the new year with joy 
                and optimism for what&apos;s ahead.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How accurate is this New Year countdown?</h3>
              <p className="paragraph">
                Our countdown timer is extremely accurate, updating every second and synchronized 
                to your local timezone. It calculates the exact time remaining until midnight on 
                January 1, 2027.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What are common New Year&apos;s resolutions?</h3>
              <p className="paragraph">
                Popular resolutions include exercising more, eating healthier, saving money, learning 
                new skills, spending more time with family, and personal growth goals. Many people 
                use the new year as motivation for positive life changes.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
