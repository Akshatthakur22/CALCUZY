import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AgeCalculatorClient from '@/components/client/AgeCalculatorClient'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import Breadcrumbs from '@/components/Breadcrumbs'
import HowItWorks from '@/components/HowItWorks'
import ToolJsonLd from '@/components/ToolJsonLd'
import { buildToolPageSchemas } from '@/lib/build-tool-schemas'
import { CALCULATOR_SEO } from '@/lib/calculator-seo-config'

export { metadata } from './metadata'

export default function AgeCalculator() {
  const faqData = [
    {
      question: 'How does this age calculator work?',
      answer: 'Enter your date of birth and a target date (today by default). The tool subtracts the birth date from the target date and reports the difference as years, months, and days, adjusting for varying month lengths and leap years.'
    },
    {
      question: 'Does it account for leap years?',
      answer: 'Yes. The calculation uses the standard Gregorian calendar, so February 29 and other month-length differences are handled when counting years, months, and days between two dates.'
    },
    {
      question: 'Can I calculate age as of a past or future date?',
      answer: 'Yes. Change the target date to see how old someone was or will be on a specific day—for example, age on a wedding date or eligibility cutoff. The birth date cannot be after the target date.'
    },
    {
      question: 'Why might my result differ from another calculator?',
      answer: 'Most age tools should agree on years, months, and days when using the same two dates. Small differences can occur if a tool uses approximations (such as average month length) instead of calendar-based subtraction.'
    },
    {
      question: 'Can I use this for legal age verification?',
      answer: 'This gives a chronological age for reference only. Legal age of majority, voting, driving, or contracts depends on jurisdiction and specific rules. Use official documents and legal guidance for formal verification.'
    },
    {
      question: 'Is my data stored?',
      answer: 'No. Dates and results are processed in your browser. Nothing is sent to our servers.'
    }
  ]

  const steps = [
    { title: 'Enter birth date', description: 'Select your date of birth using the calendar picker.' },
    { title: 'Set target date', description: 'Choose the date to calculate age as of—defaults to today.' },
    { title: 'Calculate', description: 'Click Calculate or wait for automatic results when both dates are set.' },
    { title: 'Read your age', description: 'View the breakdown in years, months, and days.' }
  ]

  const tips = [
    'Useful for forms, milestones, and “age on date” questions',
    'Leap years are handled automatically in the calendar math',
    'Set a future target date to see age on an upcoming birthday or event',
    'For legal purposes, rely on official ID and local rules—not this tool alone',
    'All calculations run locally in your browser'
  ]

  const howItWorksSteps = [
    {
      title: 'Pick two dates',
      description: 'Choose a birth date and the date you want age calculated as of.'
    },
    {
      title: 'Subtract calendar-style',
      description: 'Years, months, and days are computed with borrow logic for uneven months.'
    },
    {
      title: 'See the breakdown',
      description: 'Results show your age as years, months, and days—not a single total-days count.'
    }
  ]

  const schemas = buildToolPageSchemas({
    tool: {
      name: 'Age Calculator',
      description: 'Calculate exact age in years, months, and days from a birth date and target date.',
      url: 'https://calcuzy.app/age-calculator',
      category: 'UtilityApplication',
      features: ['Years, months, days breakdown', 'Leap year support', 'Any target date', 'Privacy-focused'],
    },
    breadcrumbItems: [
      { name: 'Home', url: 'https://calcuzy.app' },
      { name: 'Tools', url: 'https://calcuzy.app/tools' },
      { name: 'Calculators', url: 'https://calcuzy.app/tools#calculators' },
      { name: 'Age Calculator', url: 'https://calcuzy.app/age-calculator' },
    ],
    faqs: faqData,
    howToSteps: howItWorksSteps,
    howTo: CALCULATOR_SEO['age-calculator'].howTo,
    calculateAction: CALCULATOR_SEO['age-calculator'].calculateAction,
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
            { name: 'Age Calculator', url: '/age-calculator' }
          ]}
        />
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Age Calculator
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Find your exact age in years, months, and days. Enter a birth date and any target date—today by default. Calculations run in your browser and nothing is stored.
          </p>
        </div>

        <AgeCalculatorClient />

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">When to use an age calculator</h2>
          <p className="text-slate-600 mb-4">
            An age calculator answers “how old am I?” or “how old was I on a given date?” by counting full years, then months, then days between two calendar dates. It is handy for school forms, event planning, genealogy notes, and milestone tracking.
          </p>
          <p className="text-slate-600 mb-4">
            Results are chronological age only. Legal eligibility (voting, contracts, benefits) may depend on rules in your country or state—confirm with official sources when it matters.
          </p>
        </section>

        <AdUnit slot={2} />

        <HowItWorks
          title="How This Calculator Works"
          steps={howItWorksSteps}
          className="bg-slate-50/50"
        />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Age Calculator"
            description={
              <>
                <p className="mb-4">
                  Enter a birth date and target date to get a years-months-days breakdown. The tool uses standard calendar subtraction so month lengths and leap years are reflected in the result.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Any target date</h4>
                    <p className="text-sm text-blue-700">
                      Calculate age as of today or any other valid date you choose.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Leap years</h4>
                    <p className="text-sm text-emerald-700">
                      Gregorian calendar rules are used when counting between dates.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Private</h4>
                    <p className="text-sm text-slate-700">
                      Dates stay in your browser—no account or server storage.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={steps}
            tips={tips}
            faqs={faqData}
          />
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/age-calculator" category="calculators" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
