'use client'

import type { Metadata } from 'next'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export const generateMetadata = (): Metadata => ({
  title: 'Days Until Christmas 2026 – Exact Countdown Timer',
  description: 'Count down the exact days, hours, minutes, and seconds until Christmas 2026. Real-time Christmas countdown timer with accurate time remaining.',
  keywords: 'christmas countdown, xmas 2026, days until christmas, christmas timer',
  openGraph: {
    title: 'Days Until Christmas 2026 – Exact Countdown Timer',
    description: 'Count down the exact days, hours, minutes, and seconds until Christmas 2026.',
    type: 'website',
  },
})

export default function ChristmasCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const christmas = new Date('December 25, 2026 00:00:00')
      const now = new Date()
      const difference = christmas.getTime() - now.getTime()

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
            Days Until Christmas 2026
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Count down every second until Christmas morning with our precise real-time timer. 
            See exactly how many days, hours, minutes, and seconds remain until December 25th, 2026.
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
              Until Christmas Day, December 25, 2026
            </div>
          </div>
        </Card>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Christmas Countdown</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Christmas is one of the most anticipated holidays in the United States, celebrated by millions 
              of families across the country. Our countdown timer helps you track every moment leading up to 
              this magical day, whether you're planning holiday preparations, gift shopping, or simply 
              counting down to the festive celebrations.
            </p>
            
            <p className="paragraph">
              The tradition of counting down to Christmas dates back centuries, with advent calendars and 
              other countdown methods helping build excitement for the holiday season. In modern times, 
              digital countdown timers like ours provide precise measurements down to the second, helping 
              families coordinate their holiday activities and celebrations.
            </p>
            
            <p className="paragraph">
              Christmas falls on December 25th every year, commemorating the birth of Jesus Christ. In the 
              United States, it's a federal holiday marked by gift-giving, family gatherings, festive 
              decorations, and traditional meals. Many Americans start celebrating weeks in advance, with 
              holiday music, decorations, and events beginning as early as November.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Popular Christmas Traditions in the US</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Decorating Christmas trees with lights and ornaments</li>
              <li className="text-secondary-text">Exchanging gifts with family and friends</li>
              <li className="text-secondary-text">Hanging stockings by the fireplace</li>
              <li className="text-secondary-text">Singing Christmas carols and holiday music</li>
              <li className="text-secondary-text">Watching classic Christmas movies and specials</li>
            </ul>
            
            <p className="paragraph">
              Our countdown timer automatically updates every second, ensuring you always know exactly 
              how much time remains until Christmas morning. Whether you're excited about Santa's arrival, 
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
