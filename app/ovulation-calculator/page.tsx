import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import OvulationCalculatorClient from '@/components/tools/OvulationCalculatorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Ovulation Calculator',
  description: 'Calculate your ovulation day, fertile window, and safe days with our free ovulation calculator. Track your menstrual cycle for family planning.',
  keywords: 'ovulation calculator, fertile window, fertility tracker, menstrual cycle, pregnancy planning, ovulation day calculator',
  url: 'https://calcuzy.app/ovulation-calculator',
  image: '/og-health.png',
})

export default function OvulationCalculatorPage() {
  const structuredData = createToolSchema({
    name: 'Ovulation Calculator',
    description: 'Calculate ovulation day, fertile window, and safe days for family planning',
    url: 'https://calcuzy.app/ovulation-calculator',
    category: 'HealthApplication',
    features: ['Fertile window prediction', 'Ovulation day calculation', 'Safe days tracking', 'Cycle length support']
  })

  const faqData = [
    {
      question: 'How accurate is this ovulation calculator?',
      answer: 'Our calculator provides estimates based on average cycle patterns. While helpful for planning, individual cycles can vary. For most accurate results, track your cycles for several months and consider using additional methods like basal temperature tracking or ovulation predictor kits.'
    },
    {
      question: 'What is a normal menstrual cycle length?',
      answer: 'The average menstrual cycle is 28 days, but normal cycles can range from 21 to 35 days. Regular cycles are important for accurate ovulation prediction. If your cycles are irregular, consult with a healthcare provider for personalized guidance.'
    },
    {
      question: 'How many days am I fertile each month?',
      answer: 'The fertile window typically spans about 6 days each month: 5 days before ovulation and 1 day after. Sperm can survive up to 5 days, while the egg remains viable for 12-24 hours after release, creating this window of conception possibility.'
    },
    {
      question: 'Can I get pregnant during my period?',
      answer: 'While unlikely, it\'s possible to get pregnant during menstruation, especially if you have short cycles. Sperm can survive in the reproductive tract for several days, and ovulation might occur earlier than expected in some cycles.'
    },
    {
      question: 'What are safe days for avoiding pregnancy?',
      answer: 'Safe days are typically the days outside the fertile window, usually before day 5 of the cycle and after day 20 in a 28-day cycle. However, the rhythm method has a higher failure rate compared to other contraceptive methods and should be used with caution.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Enter Last Period Date', description: 'Select the first day of your most recent menstrual period.' },
    { title: 'Set Cycle Length', description: 'Enter your average cycle length (typically 21-35 days).' },
    { title: 'Calculate Results', description: 'Click calculate to see your ovulation day and fertile window.' },
    { title: 'View Fertile Window', description: 'Review the 6-day window when conception is most likely.' },
    { title: 'Track Your Cycle', description: 'Use results for family planning or conception timing.' }
  ]

  const tips = [
    'Track your cycles for 3+ months for more accurate predictions',
    'Look for physical signs like cervical mucus changes and temperature shifts',
    'The fertile window is 5 days before and 1 day after ovulation',
    'Irregular cycles may require additional tracking methods',
    'Consult a healthcare provider for personalized fertility guidance'
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
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Ovulation Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Calculate your ovulation day, fertile window, and safe days with our comprehensive 
            fertility calculator. Track your menstrual cycle for effective family planning.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <OvulationCalculatorClient />
        </div>

        <AdUnit slot={2} />

        <ToolInfo
          title="Ovulation Calculator"
          description="Our ovulation calculator helps you predict your most fertile days by analyzing your menstrual cycle. Ovulation typically occurs 14 days before your next period, releasing a mature egg that can be fertilized for 12-24 hours. Sperm can survive up to 5 days in the reproductive tract, creating a 6-day fertile window each cycle. Understanding your cycle phases—follicular, ovulation, and luteal—helps with family planning whether you're trying to conceive or avoid pregnancy."
          steps={steps}
          tips={tips}
          faqs={faqData}
        />

        <AdUnit slot={3} />

        <RelatedTools currentTool="/ovulation-calculator" category="health" />
      </main>

      <Footer />
    </div>
  )
}
