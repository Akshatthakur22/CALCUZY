import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DateDifferenceClient from '@/components/client/DateDifferenceClient'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import Breadcrumbs from '@/components/Breadcrumbs'
import HowItWorks from '@/components/HowItWorks'
import ToolJsonLd from '@/components/ToolJsonLd'
import { buildToolPageSchemas } from '@/lib/build-tool-schemas'
import { CALCULATOR_SEO } from '@/lib/calculator-seo-config'
import { createMetadata } from '@/lib/metadata'
import ToolEducationalGuide from '@/components/ToolEducationalGuide'

export const metadata = createMetadata({
  title: 'Date Difference Calculator',
  description: 'Calculate days, weeks, months, and years between two dates. Optional time-of-day precision, quick presets, and leap-year-aware Gregorian calendar math—all in your browser.',
  keywords: 'date difference calculator, days between dates, date calculator, time between dates, calendar calculator',
  url: 'https://calcuzy.app/date-difference',
  image: '/og/og-tools.png',
})

export default function DateDifference() {
  const faqData = [
    {
      question: 'How does this calculator work?',
      answer: 'Pick a start date and end date. The tool computes the span as years, months, and days (with a total day count) using standard Gregorian calendar rules, including leap years and varying month lengths. You can optionally include start and end times for sub-day precision.'
    },
    {
      question: 'What units does it show?',
      answer: 'Results display years, months, days, and total days between the two dates. With “Include time” enabled, the underlying calculation also accounts for hours and minutes, which can affect the total day count for partial days.'
    },
    {
      question: 'Does it exclude weekends or holidays?',
      answer: 'No. This tool counts all calendar days. It does not calculate business days, working days, or exclude holidays. Use a dedicated business-day calculator if you need that.'
    },
    {
      question: 'How are time zones handled?',
      answer: 'Date-only mode treats each date in your browser’s local timezone (start of day to end of day). When you include time, hours and minutes are also interpreted locally. It does not let you pick different time zones for each date.'
    },
    {
      question: 'Can I use historical dates?',
      answer: 'Any dates supported by your browser’s date picker can be used. The math follows the modern Gregorian calendar—it does not adjust for Julian-to-Gregorian transitions or non-Gregorian calendar systems used in some regions historically.'
    },
    {
      question: 'Is my data stored?',
      answer: 'No. Dates and results are calculated entirely in your browser. Nothing is sent to our servers.'
    }
  ]

  const steps = [
    { title: 'Choose dates', description: 'Select a start date and end date, or use a quick preset (week, month, year, etc.).' },
    { title: 'Add time (optional)', description: 'Enable “Include time” for hour- and minute-level precision between datetimes.' },
    { title: 'Calculate', description: 'Results update automatically when both dates are set, or click Calculate Difference.' },
    { title: 'Read the breakdown', description: 'View years, months, days, and total days—or swap dates to reverse the range.' }
  ]

  const tips = [
    'Use presets like “Year to Date” for common reporting ranges',
    'Enable time mode when the gap is less than one full day',
    'Swap dates quickly with the swap button if you picked them reversed',
    'For project deadlines in business days only, this tool counts every calendar day',
    'Pair with our age calculator if you need age in years, months, and days from a birth date'
  ]

  const howItWorksSteps = [
    {
      title: 'Select a date range',
      description: 'Pick start and end dates manually or from quick presets.'
    },
    {
      title: 'Compute the gap',
      description: 'The tool subtracts dates using calendar logic and optional time-of-day values.'
    },
    {
      title: 'View the breakdown',
      description: 'See years, months, days, and total elapsed days between the two points.'
    }
  ]

  const schemas = buildToolPageSchemas({
    tool: {
      name: 'Date Difference Calculator',
      description: 'Calculate the difference between two dates in years, months, days, and total days using the Gregorian calendar.',
      url: 'https://calcuzy.app/date-difference',
      category: 'UtilityApplication',
      features: ['Days and total day count', 'Years, months, days breakdown', 'Optional time precision', 'Quick presets', 'Leap year support'],
    },
    breadcrumbItems: [
      { name: 'Home', url: 'https://calcuzy.app' },
      { name: 'Tools', url: 'https://calcuzy.app/tools' },
      { name: 'Calculators', url: 'https://calcuzy.app/tools#calculators' },
      { name: 'Date Difference Calculator', url: 'https://calcuzy.app/date-difference' },
    ],
    faqs: faqData,
    howToSteps: howItWorksSteps,
    howTo: CALCULATOR_SEO['date-difference'].howTo,
    calculateAction: CALCULATOR_SEO['date-difference'].calculateAction,
  })

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <ToolJsonLd schemas={schemas} />
      <Navbar />
      
      <main className="container section-responsive">
        <Breadcrumbs
          items={[
            { name: 'Tools', url: '/tools' },
            { name: 'Calculators', url: '/tools#calculators' },
            { name: 'Date Difference', url: '/date-difference' }
          ]}
        />
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Date Difference Calculator
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Find how many days, weeks, months, and years lie between two dates. Use quick presets, optional time precision, and calendar-based math—all processed locally in your browser.
          </p>
        </div>

        <DateDifferenceClient />

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Common uses</h2>
          <p className="text-slate-600 mb-4">
            Date difference calculations help with project timelines, countdowns, contract lengths, time since an event, and planning milestones. This tool counts calendar days on the Gregorian calendar—it is not a business-day or holiday-aware calculator.
          </p>
          <p className="text-slate-600 mb-4">
            For age from a birth date, try our{' '}
            <a href="/age-calculator/" className="text-blue-600 hover:underline">age calculator</a>
            . For holiday countdowns, see our{' '}
            <a href="/countdowns/" className="text-blue-600 hover:underline">countdown timers</a>.
          </p>
        </section>

        <AdUnit slot={2} />

                <ToolEducationalGuide slug="date-difference" />

        <HowItWorks
          title="How This Calculator Works"
          steps={howItWorksSteps}
          className="bg-slate-50/50"
        />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Date Difference Calculator"
            description={
              <>
                <p className="mb-4">
                  Select two dates to measure the time between them. The calculator reports a years-months-days breakdown plus total days, with optional time-of-day inputs for finer gaps. Leap years and month lengths are handled automatically.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Calendar days</h4>
                    <p className="text-sm text-blue-700">
                      Counts every day—not business days or holidays.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">Optional time</h4>
                    <p className="text-sm text-green-700">
                      Toggle time inputs when hours and minutes matter.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-2">Private</h4>
                    <p className="text-sm text-purple-700">
                      Calculations run locally—nothing is uploaded.
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
          <RelatedTools currentTool="/date-difference" category="date-tools" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
