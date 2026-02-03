import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountdownEaster from '@/components/client/CountdownEaster'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Easter 2026 Countdown – How Many Days Left?',
  description: 'Count down to Easter 2026 with our precise timer. See exactly how many days, hours, minutes, and seconds remain until Easter Sunday.',
  keywords: 'easter timer, easter countdown, days until easter, easter 2026',
  url: 'https://calcuzy.app/easter-countdown',
  image: '/og-countdowns.png',
})

export default function EasterCountdown() {
  const structuredData = createToolSchema({
    name: 'Easter Countdown Timer',
    description: 'Count down to Easter 2026 with our precise timer',
    url: 'https://calcuzy.app/easter-countdown',
    category: 'UtilityApplication',
    features: ['Real-time countdown', 'Days, hours, minutes, seconds', 'Automatic timezone sync', 'Easter planning']
  })

  const faqData = [
    {
      question: 'How many days until Easter 2026?',
      answer: 'Our countdown timer shows the exact number of days, hours, minutes, and seconds remaining until April 5, 2026. The timer updates automatically every second.'
    },
    {
      question: 'Why does Easter change dates every year?',
      answer: 'Easter\'s date changes because it\'s based on the lunar calendar. It falls on the first Sunday after the first full moon following the spring equinox, which is why the date varies each year.'
    },
    {
      question: 'What do people celebrate on Easter?',
      answer: 'Easter celebrates the resurrection of Jesus Christ in Christian tradition. It\'s also celebrated with secular traditions like Easter egg hunts, decorating eggs, and family gatherings that symbolize spring and new life.'
    },
    {
      question: 'What are common Easter traditions?',
      answer: 'Common Easter traditions include attending church services, Easter egg hunts, decorating eggs, sharing special meals, giving Easter baskets, and spending time with family.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'View Countdown', description: 'See the real-time countdown to Easter Sunday with days, hours, minutes, and seconds.' },
    { title: 'Plan Activities', description: 'Use the countdown to plan Easter egg hunts and family gatherings.' },
    { title: 'Prepare Celebrations', description: 'Get ready for Easter brunch, baskets, and spring festivities.' }
  ]

  const tips = [
    'Plan your Easter brunch menu and shopping list in advance',
    'Buy Easter eggs and decorating supplies early for best selection',
    'Consider making reservations for Easter church services',
    'Prepare Easter baskets with age-appropriate treats and gifts'
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

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Easter Countdown"
            description={
              <>
                <p className="mb-4">
                  Easter is one of the most important Christian holidays, celebrating the resurrection of 
                  Jesus Christ. Our countdown timer helps you track every moment leading up to this joyous 
                  celebration and spring festivities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                    <h4 className="font-semibold text-pink-800 mb-2">🥚 Egg Hunts</h4>
                    <p className="text-sm text-pink-700">
                      Search for hidden Easter eggs with family and friends.
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                    <h4 className="font-semibold text-yellow-800 mb-2">🐰 Easter Baskets</h4>
                    <p className="text-sm text-yellow-700">
                      Give and receive baskets filled with treats and goodies.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">🌸 Spring Renewal</h4>
                    <p className="text-sm text-green-700">
                      Celebrate new life and the arrival of spring season.
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
          <RelatedTools currentTool="/easter-countdown" category="date-tools" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
