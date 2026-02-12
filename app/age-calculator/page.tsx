import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AgeCalculatorClient from '@/components/client/AgeCalculatorClient'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createToolSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/metadata'
import { useState } from 'react'


export default function AgeCalculator() {
  const structuredData = createToolSchema({
    name: 'Age Calculator',
    description: 'Calculate your exact age in years, months, and days with our free age calculator',
    url: 'https://calcuzy.app/age-calculator',
    category: 'UtilityApplication',
    features: ['Years, months, days breakdown', 'Leap year support', 'Instant calculation', 'Privacy-focused']
  })

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://calcuzy.app' },
    { name: 'Tools', url: 'https://calcuzy.app/tools' },
    { name: 'Calculators', url: 'https://calcuzy.app/tools#calculators' },
    { name: 'Age Calculator', url: 'https://calcuzy.app/age-calculator' }
  ])

  const faqData = [
    {
      question: 'How does the calculator handle the transition between the Julian and Gregorian calendars for historical dates?',
      answer: "Our tool is optimized for post-1582 Gregorian dates. For historical genealogy before the 'Calendar Act' of 1752 (in the UK/US), users should manually adjust for the 11-day shift."
    },
    {
      question: "Why does the 'Age in Days' sometimes vary between different online tools?",
      answer: "Many tools use an 'Average Year' ($365.25$ days). Calcuzy uses 'Calendar Specificity,' counting the exact leap days that occurred during your specific lifetime."
    },
    {
      question: 'Can this tool be used for “Age of Majority” legal verification?',
      answer: 'Yes. It provides the precise chronological delta required to determine if an individual has reached the legal age for voting, driving, or contract signing.'
    },
    {
      question: "How is the 'remaining days' calculated in a month?",
      answer: "We use the Reference Month approach, where the number of days in the month immediately preceding the target date is used to calculate the fractional remainder."
    },
    {
      question: 'Is there a limit to how far back the birth date can go?',
      answer: 'The tool supports dates back to the year 1900, covering all living human spans and most modern genealogical records.'
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Calculate your exact age in years, months, and days. Simply enter your birth date 
            and current date to get precise age calculations instantly.
          </p>
        </div>

        
        <AdUnit slot={1} />

        <div className="flex items-center gap-2 mb-4 max-w-2xl mx-auto">
          <svg className="text-green-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            <path d="M12 2v4m0 4v2m0-8v2"/>
          </svg>
          <span className="text-xs text-green-700 font-medium">Privacy Verified: Calculated locally in-browser via V8 Engine. No server-side storage.</span>
        </div>

        <AgeCalculatorClient />

        <AdUnit slot={2} />

        <ToolInfo
          title="Age Calculator"
          description="Calcuzy provides an analytical breakdown of lifespan duration using ISO-compliant date-delta logic, essential for legal filings and developmental tracking."
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
