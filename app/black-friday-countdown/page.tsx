'use client'

import type { Metadata } from 'next'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Black Friday Countdown – Sale Day Timer US',
  description: 'Count down to Black Friday 2026 with our precise timer. See exactly how many days, hours, minutes, and seconds remain until the biggest shopping day of the year.',
  keywords: 'black friday countdown, black friday timer, black friday 2026, shopping deals',
  openGraph: {
    title: 'Black Friday Countdown – Sale Day Timer US',
    description: 'Count down to Black Friday 2026 with our precise timer.',
    type: 'website',
  },
}

export default function BlackFridayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const blackFriday = new Date('November 27, 2026 00:00:00')
      const now = new Date()
      const difference = blackFriday.getTime() - now.getTime()

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
            Black Friday Countdown 2026
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Count down every second to Black Friday with our precise real-time timer. 
            See exactly how many days, hours, minutes, and seconds remain until the biggest shopping day of the year.
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
              Until Black Friday, November 27, 2026
            </div>
          </div>
        </Card>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Black Friday Countdown</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Black Friday is the biggest shopping day of the year in the United States, marking the beginning 
              of the holiday shopping season. Our countdown timer helps you track every moment leading up to 
              this massive sales event, whether you're planning your shopping strategy, budgeting for deals, 
              or simply anticipating the incredible discounts.
            </p>
            
            <p className="paragraph">
              The tradition of Black Friday dates back to the 1950s when retailers would offer massive 
              discounts the day after Thanksgiving. Today, it's evolved into a shopping phenomenon with 
              doorbuster deals, early morning openings, and both online and in-store sales that attract 
              millions of shoppers seeking the best holiday bargains.
            </p>
            
            <p className="paragraph">
              Black Friday falls on the day after Thanksgiving each year, making it a four-day weekend 
              for many Americans. Retailers compete fiercely for customers with deep discounts on electronics, 
              appliances, clothing, toys, and more. The day has expanded to include Black Friday week 
              sales and Cyber Monday deals for online shoppers.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Black Friday Shopping Tips</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Research deals in advance and create a shopping list</li>
              <li className="text-secondary-text">Compare prices across multiple retailers</li>
              <li className="text-secondary-text">Arrive early for doorbuster deals or shop online</li>
              <li className="text-secondary-text">Set a budget to avoid overspending</li>
              <li className="text-secondary-text">Check return policies before making purchases</li>
            </ul>
            
            <p className="paragraph">
              Our countdown timer updates every second, ensuring you always know exactly how much time 
              remains until Black Friday sales begin. Whether you're planning to brave the crowds or 
              shop from the comfort of home, this timer helps you prepare for the biggest shopping 
              day of the year.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Countdowns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/thanksgiving-countdown" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Thanksgiving Countdown</div>
                <div className="text-sm text-secondary-text">Day before Black Friday</div>
              </Link>
              <Link href="/days-until-christmas" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Christmas Countdown</div>
                <div className="text-sm text-secondary-text">Holiday shopping season</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How many days until Black Friday 2026?</h3>
              <p className="paragraph">
                Our countdown timer shows the exact number of days, hours, minutes, and seconds 
                remaining until November 27, 2026. The timer updates automatically every second.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Why is it called Black Friday?</h3>
              <p className="paragraph">
                Black Friday got its name because retailers' accounting records would go from "in the red" 
                (losses) to "in the black" (profits) due to the massive shopping volume. It marks the 
                beginning of the profitable holiday shopping season.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is Black Friday always the day after Thanksgiving?</h3>
              <p className="paragraph">
                Yes, Black Friday is always celebrated on the day after Thanksgiving in the United States. 
                Since Thanksgiving falls on the fourth Thursday of November, Black Friday is always the 
                fourth Friday of November.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What time do Black Friday sales start?</h3>
              <p className="paragraph">
                Black Friday sales traditionally start early Friday morning, with many stores opening as 
                early as 5 AM or 6 AM. However, many retailers now start their Black Friday deals 
                online on Thanksgiving evening or even earlier in the week.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How accurate is this Black Friday countdown?</h3>
              <p className="paragraph">
                Our countdown timer is extremely accurate, updating every second and synchronized 
                to your local timezone. It calculates the exact time remaining until midnight on 
                Black Friday, November 27, 2026.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
