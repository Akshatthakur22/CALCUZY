import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RandomNumberClient from '@/components/client/RandomNumberClient'
import RelatedTools from '@/components/RelatedTools'
import ToolInfo from '@/components/ToolInfo'
import AdUnit from '@/components/AdUnit'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Random Number Generator',
  description: 'Generate random numbers instantly with our free random number generator. Set custom range and quantity for games, contests, statistics, and random selection. Fast & secure.',
  keywords: 'random number generator, generate random numbers, random number tool, lottery number generator, dice roller, random picker',
  url: 'https://calcuzy.app/random-number-generator',
  image: '/og-tools.png',
})

export default function RandomNumberGenerator() {
  const structuredData = createToolSchema({
    name: 'Random Number Generator',
    description: 'Generate random numbers instantly with customizable range and quantity for games, contests, and statistics',
    url: 'https://calcuzy.app/random-number-generator',
    category: 'UtilityApplication',
    features: ['Custom range selection', 'Multiple number generation', 'Instant results', 'Copy to clipboard', 'Mobile-friendly']
  })

  const faqData = [
    {
      question: 'How random are the numbers generated?',
      answer: 'Our generator uses JavaScript\'s Math.random() function which produces pseudorandom numbers with uniform distribution. Each number within your specified range has equal probability of being selected, making it suitable for games, contests, and statistical sampling.'
    },
    {
      question: 'What is the maximum range I can use?',
      answer: 'You can set any range where the minimum is less than the maximum. The generator supports numbers from very small to very large values, making it suitable for dice rolls (1-6), lottery numbers (1-50), or any custom range you need.'
    },
    {
      question: 'How many random numbers can I generate at once?',
      answer: 'You can generate up to 1,000 random numbers in a single request. This limit ensures optimal browser performance while accommodating most practical needs, from single numbers to large statistical samples.'
    },
    {
      question: 'Is the random number generator secure and private?',
      answer: 'Yes, all number generation happens locally in your browser. We don\'t send, store, or log any of your inputs or generated numbers. Your data remains completely private and secure on your device.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Set Minimum Value', description: 'Enter the lowest possible number you want in your range (e.g., 1 for dice rolls).' },
    { title: 'Set Maximum Value', description: 'Enter the highest possible number you want (e.g., 6 for a standard die, 100 for percentages).' },
    { title: 'Choose Quantity', description: 'Specify how many random numbers to generate (1-1000).' },
    { title: 'Generate & Copy', description: 'Click Generate to create your random numbers, then copy them with one click.' }
  ]

  const tips = [
    'Use 1-6 range for dice rolls, 1-52 for card draws, or 1-100 for percentages',
    'Generate multiple numbers at once for lottery picks or team assignments',
    'All numbers have equal probability within your range (uniform distribution)',
    'Results are instantly copyable for easy sharing or documentation'
  ]

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
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
            Random Number Generator
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Generate random numbers instantly with customizable range and quantity. 
            Perfect for games, contests, statistics, and random selection needs.
          </p>
        </div>

        <AdUnit slot={1} />

        <RandomNumberClient />

        <AdUnit slot={2} />

        {/* Tool Info Section */}
        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Random Number Generator"
            description={
              <>
                <p className="mb-4">
                  Our random number generator provides uniformly distributed random values using 
                  JavaScript&apos;s Math.random() function. This tool is perfect for games, contests, 
                  statistical sampling, and any situation requiring fair random selection.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">🎲 Gaming & Entertainment</h4>
                    <p className="text-sm text-blue-700">
                      Dice rolls, card games, lottery picks, raffle winners, and contest selections.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">📊 Research & Statistics</h4>
                    <p className="text-sm text-emerald-700">
                      Statistical sampling, random assignments, A/B testing, and data analysis.
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

        {/* Related Tools */}
        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/random-number-generator" category="utility" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
