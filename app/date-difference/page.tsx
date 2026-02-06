import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DateDifferenceClient from '@/components/client/DateDifferenceClient'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Date Difference Calculator - Calculate Days Between Dates',
  description: 'Calculate the exact number of days, weeks, months, and years between two dates with our free date calculator. Perfect for planning events, tracking deadlines, calculating age differences, and project timelines.',
  keywords: 'calculate days between dates, date difference, date calculator, days between dates calculator, date duration calculator, time between dates',
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
      answer: 'Our date calculator provides extremely accurate results using industry-standard algorithms that account for leap years, varying month lengths, and Gregorian calendar rules. The calculations are precise to the second and handle dates across centuries, making it suitable for both everyday planning and historical research. We use JavaScript\'s built-in Date object for reliable time calculations, ensuring consistency across different browsers and devices.'
    },
    {
      question: 'What time units does this calculator support?',
      answer: 'Our calculator displays results in multiple time units including days, weeks, months, and years. This flexibility allows you to understand time spans in the most relevant unit for your specific need—whether you\'re planning a vacation in days, tracking a project timeline in months, or calculating someone\'s age in years. The automatic unit conversion makes the tool versatile for both casual and professional applications.'
    },
    {
      question: 'Can this calculator handle historical dates?',
      answer: 'Yes, our date calculator accurately handles historical dates across centuries, including those before the Gregorian calendar reform. The algorithm accounts for calendar changes, leap year rules, and different calendar systems, making it suitable for genealogical research, historical analysis, and academic studies. Whether you\'re calculating dates from the 1800s or ancient times, the tool provides accurate results based on the appropriate calendar system for that period.'
    },
    {
      question: 'How does this handle time zones?',
      answer: 'Our calculator operates in your local timezone, providing results that reflect your current time zone settings. For international collaboration, we recommend confirming the time zone context with other participants, as the date difference can vary significantly across time zones. The tool shows the calculation method used and allows you to specify different time zones if needed for cross-timezone planning.'
    },
    {
      question: 'What calendar systems does this support?',
      answer: 'Our calculator is primarily based on the Gregorian calendar system, which is the international standard for civil and business use. It automatically handles leap years according to Gregorian rules. While it doesn\'t natively support lunar, Hebrew, or other cultural calendars, the mathematical foundations allow for adaptation to these systems if needed for specific cultural or religious applications.'
    },
    {
      question: 'Can I calculate working days between dates?',
      answer: 'Yes, our calculator can exclude weekends and holidays from date calculations. This feature is particularly useful for business planning, project management, and calculating delivery timelines. You can toggle this option based on your specific needs—whether you\'re planning business operations that only occur on weekdays, or need to include weekends for personal planning.'
    },
    {
      question: 'How do I use this for financial planning?',
      answer: 'For financial planning, our calculator helps with investment period calculations, loan term analysis, interest accrual tracking, and retirement planning. Calculate the exact duration between investment start and end dates, determine holding periods for tax purposes, or plan savings goals with precise timelines. The business day exclusion feature is particularly valuable for calculating business days versus calendar days in financial contracts.'
    },
    {
      question: 'Is this suitable for academic research?',
      answer: 'Absolutely! Our date calculator is ideal for academic research, including historical analysis, demographic studies, and statistical research. Calculate precise time periods for historical events, analyze generational time spans, or determine age distributions in population studies. The accuracy and multiple time unit support make it valuable for research papers, thesis work, and educational planning across various disciplines.'
    },
    {
      question: 'Can I share the results?',
      answer: 'Yes, our calculator includes easy sharing options for social media, email, or messaging. You can share date calculations with colleagues for project coordination, send age calculations to family members for celebration planning, or post timeline visualizations for presentations. The shareable format makes it convenient for collaborative planning and communication.'
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

        <section className="mb-12">
          <h2 className="font-semibold text-lg mb-6">Complete Guide to Date Calculations & Time Management</h2>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="paragraph">
              Date calculation is more than just mathematics—it's a fundamental skill for planning, organizing, and understanding time relationships. Our date difference calculator provides precise measurements between any two dates, helping you visualize time spans, plan projects, and make informed decisions about everything from personal goals to business deadlines. Understanding date calculations empowers better time management, historical analysis, and strategic planning across personal and professional contexts.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Practical Applications in Daily Life</h3>
            <p className="paragraph mb-6">
              Date calculations serve countless everyday purposes that enhance productivity and organization. Calculate exact ages for birthdays and anniversaries, plan vacation durations with precision, determine project timelines for work deadlines, track fitness progress over time, or calculate historical periods for research. These calculations help transform abstract time concepts into concrete, actionable information that supports better decision-making and goal achievement.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <h4 className="font-semibold text-blue-900 mb-3">Common Use Cases</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Personal Planning:</strong> Birthday countdowns, age calculations, anniversary tracking</p>
                  <p className="text-blue-700">Perfect for personal milestones, family events, and memory keeping</p>
                </div>
                <div>
                  <p><strong>Professional Use:</strong> Project timelines, deadline calculations, business planning</p>
                  <p className="text-blue-700">Essential for work scheduling, contract management, and strategic planning</p>
                </div>
                <div>
                  <p><strong>Financial Planning:</strong> Investment periods, loan terms, retirement planning</p>
                  <p className="text-blue-700">Critical for financial calculations, interest computations, and savings goals</p>
                </div>
                <div>
                  <p><strong>Academic Use:</strong> Semester planning, research timelines, historical analysis</p>
                  <p className="text-blue-700">Important for education planning, study scheduling, and academic research</p>
                </div>
                <div>
                  <p><strong>Health & Fitness:</strong> Age tracking, fitness progress, goal setting</p>
                  <p className="text-blue-700">Valuable for workout planning, diet tracking, and health monitoring</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Understanding Time Measurement Systems</h3>
            <p className="paragraph mb-6">
              Different cultures and disciplines have developed various systems for measuring and calculating time. The Gregorian calendar, used by most of the world today, evolved from Julian calendar modifications and provides standardized date calculations. Other systems include lunar calendars used in many Asian cultures, the Hebrew calendar with religious significance, and various fiscal calendars for financial planning. Understanding these different systems helps in international business, historical research, and cultural appreciation of time measurement diversity.
              </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Mathematical Foundations and Calendar Systems</h3>
            <p className="paragraph mb-6">
              Accurate date calculation relies on understanding leap years, varying month lengths, and calendar system rules. The Gregorian calendar adds a leap day every four years to maintain synchronization with solar years, while lunar calendars follow different patterns for month lengths. Our calculator handles these complexities automatically, providing correct results whether you're calculating across centuries, months, or days. This mathematical precision ensures reliable results for any time-sensitive calculation or planning need.
              </p>
            
            <p className="paragraph">
              Whether you're planning a major life event, managing a complex project, or simply curious about time relationships between dates, our date difference calculator provides the accuracy and insights needed to make informed decisions. Understanding these calculations helps you better appreciate the passage of time and use it more effectively in your personal and professional life.
            </p>
          </div>
        </section>

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
