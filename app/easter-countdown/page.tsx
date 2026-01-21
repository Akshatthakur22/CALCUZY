'use client'

import type { Metadata } from 'next'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Easter 2026 Countdown – How Many Days Left?',
  description: 'Count down the exact days, hours, minutes, and seconds until Easter 2026. Real-time Easter countdown timer with accurate time remaining.',
  keywords: 'easter timer, easter countdown, days until easter, easter 2026',
  openGraph: {
    title: 'Easter 2026 Countdown – How Many Days Left?',
    description: 'Count down the exact days, hours, minutes, and seconds until Easter 2026.',
    type: 'website',
  },
}

export default function EasterCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const easter = new Date('April 5, 2026 00:00:00')
      const now = new Date()
      const difference = easter.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

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

        <Card className="max-w-4xl mx-auto mb-12">
          <div className="text-center py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-5xl md:text-6xl font-heading-bold text-accent mb-2">
                  {timeLeft.days}
                </div>
                <div className="text-secondary-text font-medium">Days</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-heading-bold text-accent mb-2">
                  {timeLeft.hours}
                </div>
                <div className="text-secondary-text font-medium">Hours</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-heading-bold text-accent mb-2">
                  {timeLeft.minutes}
                </div>
                <div className="text-secondary-text font-medium">Minutes</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-heading-bold text-accent mb-2">
                  {timeLeft.seconds}
                </div>
                <div className="text-secondary-text font-medium">Seconds</div>
              </div>
            </div>
            <div className="text-lg text-primary-text font-medium">
              Until Easter Sunday, April 5, 2026
            </div>
          </div>
        </Card>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Easter Countdown</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Easter is one of the most important Christian holidays, celebrating the resurrection of 
              Jesus Christ. Our countdown timer helps you track every moment leading up to this joyous 
              celebration, whether you're planning Easter egg hunts, family gatherings, or simply 
              anticipating the spiritual significance of the day.
            </p>
            
            <p className="paragraph">
              The date of Easter changes each year because it's based on the lunar calendar, falling 
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
              remains until Easter Sunday. Whether you're excited about the family traditions, the 
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
                Easter's date changes because it's based on the lunar calendar and astronomical 
                calculations. It falls on the first Sunday after the first full moon following the 
                spring equinox, which is why the date varies each year.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What do people celebrate on Easter?</h3>
              <p className="paragraph">
                Easter celebrates the resurrection of Jesus Christ in Christian tradition. It's also 
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
