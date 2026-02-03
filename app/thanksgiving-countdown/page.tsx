import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountdownThanksgiving from '@/components/client/CountdownThanksgiving'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Thanksgiving Countdown 2026 – Days Remaining',
  description: 'Count down to Thanksgiving 2026 with our precise timer. See exactly how many days, hours, minutes, and seconds remain until Thanksgiving Day.',
  keywords: 'thanksgiving countdown, days until thanksgiving, thanksgiving timer',
  url: 'https://calcuzy.app/thanksgiving-countdown',
  image: '/og-countdowns.png',
})

export default function ThanksgivingCountdown() {
  const structuredData = createToolSchema({
    name: 'Thanksgiving Countdown Timer',
    description: 'Count down to Thanksgiving 2026 with our precise timer',
    url: 'https://calcuzy.app/thanksgiving-countdown',
    category: 'UtilityApplication',
    features: ['Real-time countdown', 'Days, hours, minutes, seconds', 'Automatic timezone sync', 'Holiday planning']
  })

  const faqData = [
    {
      question: 'How many days until Thanksgiving 2026?',
      answer: 'Our countdown timer shows the exact number of days, hours, minutes, and seconds remaining until November 26, 2026. The timer updates automatically every second.'
    },
    {
      question: 'Why do people celebrate Thanksgiving?',
      answer: 'Thanksgiving celebrates the harvest and blessings of the past year. It\'s a time for families to gather, share meals, and express gratitude, following the tradition of the first Thanksgiving feast shared by Pilgrims and Native Americans.'
    },
    {
      question: 'Is Thanksgiving always on the same date?',
      answer: 'Thanksgiving is always celebrated on the fourth Thursday of November in the United States. This means the date changes each year, but it always falls between November 22nd and 28th.'
    },
    {
      question: 'What is traditionally eaten on Thanksgiving?',
      answer: 'Traditional Thanksgiving meals include roasted turkey, stuffing, mashed potatoes, gravy, cranberry sauce, green bean casserole, and pumpkin pie. Many families have their own special recipes passed down through generations.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'View Countdown', description: 'See the real-time countdown to Thanksgiving Day with days, hours, minutes, and seconds.' },
    { title: 'Plan Your Feast', description: 'Use the countdown to plan your Thanksgiving menu and guest list.' },
    { title: 'Prepare & Celebrate', description: 'Get ready for family gatherings and express gratitude together.' }
  ]

  const tips = [
    'Start planning your Thanksgiving menu at least two weeks in advance',
    'Order your turkey early to ensure you get the right size',
    'Prepare make-ahead dishes to reduce stress on Thanksgiving Day',
    'Create a gratitude list to share at the dinner table'
  ]

  return (
    <div className="min-h-screen bg-primary-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      
      <main className="container section-responsive">
        <div className="text-center mb-12 slide-up">
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

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Thanksgiving Countdown"
            description={
              <>
                <p className="mb-4">
                  Thanksgiving is one of America&apos;s most cherished holidays, bringing families together for 
                  gratitude, feasting, and fellowship. Our countdown timer helps you track every moment 
                  leading up to this special day.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                    <h4 className="font-semibold text-orange-800 mb-2">🦃 Turkey Feast</h4>
                    <p className="text-sm text-orange-700">
                      Traditional dinner with turkey, stuffing, and all the fixings.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">🙏 Gratitude</h4>
                    <p className="text-sm text-amber-700">
                      Share thanks and appreciation with family and friends.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <h4 className="font-semibold text-red-800 mb-2">👨‍👩‍👧‍👦 Family Time</h4>
                    <p className="text-sm text-red-700">
                      Gather with loved ones for quality time together.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={steps}
            faqs={faqData}
            tips={tips}
          />
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/thanksgiving-countdown" category="date-tools" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
