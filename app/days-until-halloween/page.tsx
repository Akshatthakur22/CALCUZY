import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountdownHalloween from '@/components/client/CountdownHalloween'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Halloween Countdown – Days Left Until Halloween',
  description: 'Count down the exact days, hours, minutes, and seconds until Halloween 2026. Real-time Halloween countdown timer with accurate time remaining.',
  keywords: 'halloween countdown, days until halloween, halloween timer, october 31',
  url: 'https://calcuzy.app/days-until-halloween',
  image: '/og-countdowns.png',
})

export default function HalloweenCountdown() {
  const structuredData = createToolSchema({
    name: 'Halloween Countdown Timer',
    description: 'Count down the exact days, hours, minutes, and seconds until Halloween 2026',
    url: 'https://calcuzy.app/days-until-halloween',
    category: 'UtilityApplication',
    features: ['Real-time countdown', 'Days, hours, minutes, seconds', 'Automatic timezone sync', 'Spooky season planning']
  })

  const faqData = [
    {
      question: 'How many days until Halloween 2026?',
      answer: 'Our countdown timer shows the exact number of days, hours, minutes, and seconds remaining until October 31, 2026. The timer updates automatically every second.'
    },
    {
      question: 'Why do people celebrate Halloween?',
      answer: 'Halloween celebrates the tradition of dressing up in costumes, trick-or-treating, and enjoying spooky festivities. It has roots in ancient Celtic festivals and has become a beloved American holiday.'
    },
    {
      question: 'Is Halloween always on October 31st?',
      answer: 'Yes, Halloween is always celebrated on October 31st in the United States. Some communities may hold trick-or-treat events on different days, but the holiday itself always falls on October 31st.'
    },
    {
      question: 'What time does Halloween start?',
      answer: 'Halloween celebrations typically begin in the evening on October 31st, with most trick-or-treating occurring between 6:00 PM and 9:00 PM. Our countdown timer counts down to midnight when October 31st officially begins.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'View Countdown', description: 'See the real-time countdown to Halloween with days, hours, minutes, and seconds.' },
    { title: 'Plan Costumes', description: 'Use the countdown to plan your costume ideas and purchase supplies in time.' },
    { title: 'Prepare for Spooky Fun', description: 'Get ready for trick-or-treating, parties, and haunted house visits.' }
  ]

  const tips = [
    'Start planning costumes early for the best selection and prices',
    'Stock up on candy before the Halloween rush',
    'Test all decorations and lights before the big night',
    'Plan your trick-or-treat route for efficiency and safety'
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

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Halloween Countdown"
            description={
              <>
                <p className="mb-4">
                  Halloween is one of the most exciting holidays in the United States, celebrated by millions 
                  with costumes, trick-or-treating, haunted houses, and spooky festivities. Our countdown timer 
                  helps you track every moment leading up to this thrilling night.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                    <h4 className="font-semibold text-orange-800 mb-2">🎃 Costumes</h4>
                    <p className="text-sm text-orange-700">
                      Dress up as your favorite characters or creatures.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-2">🍬 Trick-or-Treat</h4>
                    <p className="text-sm text-purple-700">
                      Go door-to-door collecting candy and treats.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-xl border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">👻 Spooky Fun</h4>
                    <p className="text-sm text-gray-700">
                      Haunted houses, scary movies, and eerie decorations.
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
          <RelatedTools currentTool="/days-until-halloween" category="date-tools" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
