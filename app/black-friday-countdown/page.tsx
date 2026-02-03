import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountdownBlackFriday from '@/components/client/CountdownBlackFriday'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Black Friday Countdown – Sale Day Timer US',
  description: 'Count down to Black Friday 2026 with our precise timer. See exactly how many days, hours, minutes, and seconds remain until the biggest shopping day.',
  keywords: 'black friday countdown, black friday timer, black friday 2026',
  url: 'https://calcuzy.app/black-friday-countdown',
  image: '/og-countdowns.png',
})

export default function BlackFridayCountdown() {
  const structuredData = createToolSchema({
    name: 'Black Friday Countdown Timer',
    description: 'Count down to Black Friday 2026 with our precise timer',
    url: 'https://calcuzy.app/black-friday-countdown',
    category: 'UtilityApplication',
    features: ['Real-time countdown', 'Days, hours, minutes, seconds', 'Automatic timezone sync', 'Shopping planning']
  })

  const faqData = [
    {
      question: 'How many days until Black Friday 2026?',
      answer: 'Our countdown timer shows the exact number of days, hours, minutes, and seconds remaining until November 27, 2026. The timer updates automatically every second.'
    },
    {
      question: 'Why is it called Black Friday?',
      answer: 'Black Friday got its name because retailers\' accounting records would go from "in the red" (losses) to "in the black" (profits) due to the massive shopping volume. It marks the beginning of the profitable holiday shopping season.'
    },
    {
      question: 'Is Black Friday always the day after Thanksgiving?',
      answer: 'Yes, Black Friday is always celebrated on the day after Thanksgiving in the United States. Since Thanksgiving falls on the fourth Thursday of November, Black Friday is always the fourth Friday of November.'
    },
    {
      question: 'What time do Black Friday sales start?',
      answer: 'Black Friday sales traditionally start early Friday morning, with many stores opening as early as 5 AM or 6 AM. However, many retailers now start their Black Friday deals online on Thanksgiving evening or even earlier in the week.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'View Countdown', description: 'See the real-time countdown to Black Friday with days, hours, minutes, and seconds.' },
    { title: 'Research Deals', description: 'Use the time to research upcoming deals and create your shopping list.' },
    { title: 'Shop & Save', description: 'Be ready when sales start to grab the best deals on your wishlist.' }
  ]

  const tips = [
    'Research prices before Black Friday to know if deals are genuine',
    'Create a shopping list and budget to avoid impulse purchases',
    'Sign up for retailer newsletters for early access to deals',
    'Compare prices across multiple stores before buying'
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
            Black Friday Countdown 2026
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Count down every second to Black Friday with our precise real-time timer. 
            See exactly how many days, hours, minutes, and seconds remain until November 27th, 2026.
          </p>
        </div>

        <AdUnit slot={1} />

        <CountdownBlackFriday />

        <AdUnit slot={2} />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Black Friday Countdown"
            description={
              <>
                <p className="mb-4">
                  Black Friday is the biggest shopping day of the year in the United States, marking the beginning 
                  of the holiday shopping season. Our countdown timer helps you track every moment leading up to 
                  this massive sales event.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-900 p-4 rounded-xl border border-gray-700">
                    <h4 className="font-semibold text-white mb-2">🏷️ Mega Deals</h4>
                    <p className="text-sm text-gray-300">
                      Deep discounts on electronics, appliances, and more.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <h4 className="font-semibold text-red-800 mb-2">🛒 Doorbuster Sales</h4>
                    <p className="text-sm text-red-700">
                      Limited-time offers with the biggest savings.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">💻 Online Deals</h4>
                    <p className="text-sm text-blue-700">
                      Shop from home with online-exclusive discounts.
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
          <RelatedTools currentTool="/black-friday-countdown" category="date-tools" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
