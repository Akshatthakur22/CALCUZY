import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountdownChristmas from '@/components/client/CountdownChristmas'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Days Until Christmas 2026 – Exact Countdown Timer',
  description: 'Count down the exact days, hours, minutes, and seconds until Christmas 2026. Real-time Christmas countdown timer with accurate time remaining.',
  keywords: 'christmas countdown, xmas 2026, days until christmas, christmas timer',
  url: 'https://calcuzy.app/days-until-christmas',
  image: '/og-countdowns.png',
})

export default function ChristmasCountdown() {
  const structuredData = createToolSchema({
    name: 'Christmas Countdown Timer',
    description: 'Count down the exact days, hours, minutes, and seconds until Christmas 2026',
    url: 'https://calcuzy.app/days-until-christmas',
    category: 'UtilityApplication',
    features: ['Real-time countdown', 'Days, hours, minutes, seconds', 'Automatic timezone sync', 'Holiday planning']
  })

  const faqData = [
    {
      question: 'How many days until Christmas 2026?',
      answer: 'Our countdown timer shows the exact number of days, hours, minutes, and seconds remaining until December 25, 2026. The timer updates automatically every second for precise tracking.'
    },
    {
      question: 'Why do people celebrate Christmas?',
      answer: 'Christmas is celebrated to commemorate the birth of Jesus Christ and has become a major cultural and commercial holiday, marked by family gatherings, gift-giving, and festive traditions.'
    },
    {
      question: 'Is Christmas always on December 25th?',
      answer: 'Yes, Christmas is always celebrated on December 25th in the United States and most countries around the world, regardless of which day of the week it falls on.'
    },
    {
      question: 'How accurate is this countdown timer?',
      answer: 'Our countdown timer is extremely accurate, updating every second and synchronized to your local timezone. It calculates the exact time remaining until midnight on December 25, 2026.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'View Countdown', description: 'See the real-time countdown to Christmas Day with days, hours, minutes, and seconds.' },
    { title: 'Plan Ahead', description: 'Use the countdown to plan shopping, decorating, and holiday preparations.' },
    { title: 'Share Excitement', description: 'Share the countdown with family and friends to build holiday anticipation.' }
  ]

  const tips = [
    'Start holiday shopping early to avoid the rush and find better deals',
    'Plan your holiday travel arrangements well in advance',
    'Create a gift list and budget to stay organized',
    'Begin decorating after Thanksgiving to maximize holiday spirit'
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
            Days Until Christmas 2026
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Count down every second until Christmas morning with our precise real-time timer. 
            See exactly how many days, hours, minutes, and seconds remain until December 25th, 2026.
          </p>
        </div>

        <AdUnit slot={1} />

        <CountdownChristmas />

        <AdUnit slot={2} />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Christmas Countdown"
            description={
              <>
                <p className="mb-4">
                  Christmas is one of the most anticipated holidays in the United States, celebrated by millions 
                  of families across the country. Our countdown timer helps you track every moment leading up to 
                  this magical day, whether you&apos;re planning holiday preparations, gift shopping, or simply 
                  counting down to the festive celebrations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <h4 className="font-semibold text-red-800 mb-2">🎄 Traditions</h4>
                    <p className="text-sm text-red-700">
                      Decorating trees, exchanging gifts, and singing carols.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">🎁 Gift Giving</h4>
                    <p className="text-sm text-green-700">
                      Share love with thoughtful presents for family and friends.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">👨‍👩‍👧‍👦 Family Time</h4>
                    <p className="text-sm text-amber-700">
                      Gather with loved ones for festive meals and celebration.
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
          <RelatedTools currentTool="/days-until-christmas" category="date-tools" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
