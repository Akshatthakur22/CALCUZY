import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AgeCalculatorClient from '@/components/client/AgeCalculatorClient'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Age Calculator',
  description: 'Calculate your exact age in years, months, and days with our free age calculator. Enter your birth date to get precise age calculations instantly.',
  keywords: 'age from date, calculate age, age calculator, birthday calculator',
  url: 'https://calcuzy.app/age-calculator',
  image: '/og-tools.png',
})

export default function AgeCalculator() {
  const structuredData = createToolSchema({
    name: 'Age Calculator',
    description: 'Calculate your exact age in years, months, and days with our free age calculator',
    url: 'https://calcuzy.app/age-calculator',
    category: 'UtilityApplication',
    features: ['Years, months, days breakdown', 'Leap year support', 'Instant calculation', 'Privacy-focused']
  })

  const faqData = [
    {
      question: 'How accurate is this age calculator?',
      answer: 'Our age calculator is extremely accurate, accounting for leap years and varying month lengths. It calculates your exact age down to the day, making it suitable for official purposes and precise calculations.'
    },
    {
      question: 'What date format should I use?',
      answer: 'Use the standard date format by selecting dates from the calendar picker. The calculator accepts any valid date and automatically handles different date formats for your convenience.'
    },
    {
      question: 'Can I calculate someone else\'s age?',
      answer: 'Yes, you can calculate anyone\'s age by entering their birth date and the current date. This is useful for calculating family members\' ages, planning celebrations, or filling out forms for others.'
    },
    {
      question: 'Does this account for leap years?',
      answer: 'Yes, our age calculator automatically accounts for leap years and the varying number of days in each month. This ensures your age calculation is precise regardless of when you were born.'
    },
    {
      question: 'Is my data stored when using this calculator?',
      answer: 'No, we don\'t store any of your personal data or calculation results. All calculations happen locally in your browser, ensuring complete privacy and security of your information.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Enter Birth Date', description: 'Select your date of birth using the calendar picker.' },
    { title: 'Set Target Date', description: 'Choose the date to calculate your age as of (defaults to today).' },
    { title: 'View Results', description: 'See your exact age in years, months, and days instantly.' },
    { title: 'Review Details', description: 'Check additional age information and milestones.' },
    { title: 'Share or Save', description: 'Copy results for forms or share with others.' }
  ]

  const tips = [
    'Use this for official forms requiring exact age calculations',
    'The calculator accounts for leap years automatically',
    'Great for tracking children\'s developmental milestones',
    'Calculate age at any future or past date',
    'All calculations happen locally for complete privacy'
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
            Age Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Calculate your exact age in years, months, and days. Simply enter your birth date 
            and current date to get precise age calculations instantly.
          </p>
        </div>

        <AdUnit slot={1} />

        <AgeCalculatorClient />

        <AdUnit slot={2} />

        <ToolInfo
          title="Age Calculator"
          description="Our age calculator provides precise age calculations in years, months, and days. This tool is perfect for knowing your exact age for important milestones, legal purposes, or simply out of curiosity. The calculator accounts for leap years and varying month lengths to ensure accuracy. Age calculation is important for many life events including school enrollment, voting eligibility, driving age requirements, retirement planning, and other age-based criteria."
          steps={steps}
          tips={tips}
          faqs={faqData}
        />

        <AdUnit slot={3} />

        <RelatedTools currentTool="/age-calculator" category="calculators" />
      </main>

      <Footer />
    </div>
  )
}
