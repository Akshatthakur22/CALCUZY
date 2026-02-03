import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DateDifferenceClient from '@/components/client/DateDifferenceClient'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Date Difference Calculator',
  description: 'Calculate the exact number of days between two dates with our free date difference calculator. Perfect for planning and tracking important dates.',
  keywords: 'calculate days between dates, date difference, date calculator',
  url: 'https://calcuzy.app/date-difference',
  image: '/og-tools.png',
})

export default function DateDifference() {
  const structuredData = createToolSchema({
    name: 'Date Difference Calculator',
    description: 'Calculate the exact number of days between two dates with our free date difference calculator.',
    url: 'https://calcuzy.app/date-difference',
    category: 'UtilityApplication',
    features: ['Days calculation', 'Weeks and months', 'Leap year support', 'Past and future dates']
  })

  const faqData = [
  {
    question: 'How accurate is this date calculator?',
    answer: 'Our date calculator is extremely accurate, accounting for leap years and varying month lengths for precise results.'
  },
  {
    question: 'Can I calculate dates in the past?',
    answer: 'Yes, you can calculate differences between any two dates, whether in the past, present, or future.'
  },
  {
    question: 'What date format should I use?',
    answer: 'Use the standard date format by selecting dates from the calendar picker. The calculator handles different input methods.'
  },
  {
    question: 'Does this account for time zones?',
    answer: 'The calculator uses your local timezone. For cross-timezone accuracy, ensure both dates are in the same timezone context.'
  },
  {
    question: 'Is my data secure when using this calculator?',
    answer: 'Yes, all calculations happen locally in your browser. We do not store any date information or results.'
  }
]

  const faqSchema = createFAQSchema(faqData)

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
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            Date Difference Calculator
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Calculate the exact number of days between two dates. Perfect for planning events, 
            tracking deadlines, or calculating time periods.
          </p>
        </div>

        <AdUnit slot={1} />

        <DateDifferenceClient />

        <AdUnit slot={2} />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Date Difference Calculator"
            description={
              <>
                <p className="mb-4">
                  Our date difference calculator provides precise calculations between any two dates, 
                  showing the exact number of days, weeks, months, and years. Essential for project 
                  planning, event coordination, and tracking important milestones.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">📅 Precise</h4>
                    <p className="text-sm text-blue-700">
                      Accounts for leap years and varying month lengths.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">⚡ Instant</h4>
                    <p className="text-sm text-green-700">
                      Get results immediately as you select dates.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-2">🔒 Private</h4>
                    <p className="text-sm text-purple-700">
                      All calculations happen locally in your browser.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={[
              { title: 'Select Start Date', description: 'Choose your first date from the calendar.' },
              { title: 'Select End Date', description: 'Pick your second date to compare.' },
              { title: 'View Results', description: 'See the difference in days, weeks, months, and years.' }
            ]}
            faqs={faqData}
            tips={[
              'Use for planning vacations and travel itineraries',
              'Track project deadlines and milestones',
              'Calculate age and time elapsed since events',
              'Plan events and appointments with precision'
            ]}
          />
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/date-difference" category="date-tools" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
