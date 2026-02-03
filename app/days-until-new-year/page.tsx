import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountdownNewYear from '@/components/client/CountdownNewYear'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'New Year Countdown – Days, Hours, Minutes',
  description: 'Count down to New Year 2027 with our precise timer. See exactly how many days, hours, minutes, and seconds remain until the New Year celebration.',
  keywords: 'new year timer, nye countdown, days until new year, new year 2027',
  url: 'https://calcuzy.app/days-until-new-year',
  image: '/og-countdowns.png',
})

export default function NewYearCountdown() {
  const structuredData = createToolSchema({
    name: 'New Year Countdown Timer',
    description: 'Count down to New Year 2027 with our precise timer',
    url: 'https://calcuzy.app/days-until-new-year',
    category: 'UtilityApplication',
    features: ['Real-time countdown', 'Days, hours, minutes, seconds', 'Automatic timezone sync', 'New Year planning']
  })

  const faqData = [
    {
      question: 'How many days until New Year 2027?',
      answer: 'Our countdown timer shows the exact number of days, hours, minutes, and seconds remaining until January 1, 2027. The timer updates automatically every second.'
    },
    {
      question: 'Why do people celebrate New Year\'s Eve?',
      answer: 'New Year\'s Eve celebrates the end of one year and the beginning of another, offering a chance for reflection, celebration, and hope for the future. It\'s a time to gather with loved ones and welcome new opportunities.'
    },
    {
      question: 'What happens at midnight on New Year\'s Eve?',
      answer: 'At midnight, people traditionally count down from 10, kiss loved ones, toast with champagne, set off fireworks, and celebrate the arrival of the new year with joy and optimism.'
    },
    {
      question: 'What are common New Year\'s resolutions?',
      answer: 'Popular resolutions include exercising more, eating healthier, saving money, learning new skills, spending more time with family, and personal growth goals.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'View Countdown', description: 'See the real-time countdown to New Year\'s Day with days, hours, minutes, and seconds.' },
    { title: 'Plan Celebrations', description: 'Use the countdown to plan your New Year\'s Eve party or gathering.' },
    { title: 'Set Resolutions', description: 'Prepare your goals and resolutions for the upcoming year.' }
  ]

  const tips = [
    'Start thinking about your New Year\'s resolutions early',
    'Plan your celebration venue and guest list in advance',
    'Stock up on party supplies before the holiday rush',
    'Reflect on the past year\'s accomplishments and lessons'
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

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="New Year Countdown"
            description={
              <>
                <p className="mb-4">
                  New Year&apos;s Eve is one of the most celebrated nights worldwide, marking the transition 
                  from one year to the next. Our countdown timer helps you track every moment leading up 
                  to this magical midnight celebration.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">🎆 Celebrations</h4>
                    <p className="text-sm text-blue-700">
                      Fireworks, parties, and midnight countdowns.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">🥂 Traditions</h4>
                    <p className="text-sm text-amber-700">
                      Toast with champagne and kiss at midnight.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">🎯 Resolutions</h4>
                    <p className="text-sm text-green-700">
                      Set new goals for personal growth and success.
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
          <RelatedTools currentTool="/days-until-new-year" category="date-tools" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
