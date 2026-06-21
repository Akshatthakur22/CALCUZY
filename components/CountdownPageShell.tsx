import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import HowItWorks from '@/components/HowItWorks'
import { createToolSchema, createFAQSchema } from '@/lib/metadata'
import type { CountdownPageConfig } from '@/lib/countdown-page-content'
import type { ReactNode } from 'react'

const howItWorksSteps = [
  {
    title: 'Load the target date',
    description: 'The timer is set to the holiday date shown on this page.',
  },
  {
    title: 'Use your local clock',
    description: 'Remaining time is calculated from your device timezone.',
  },
  {
    title: 'Watch it tick down',
    description: 'Days, hours, minutes, and seconds update while the page is open.',
  },
]

const steps = [
  { title: 'Open the page', description: 'The countdown starts automatically—no input required.' },
  { title: 'Check your timezone', description: 'Time remaining reflects your device\'s local settings.' },
  { title: 'Plan ahead', description: 'Use the timer for general scheduling and excitement.' },
  { title: 'Reload if needed', description: 'Refresh after long sleep or timezone changes to resync.' },
]

interface CountdownPageShellProps {
  config: CountdownPageConfig
  children: ReactNode
}

export default function CountdownPageShell({ config, children }: CountdownPageShellProps) {
  const structuredData = createToolSchema({
    name: config.schemaName,
    description: config.schemaDescription,
    url: `https://calcuzy.app${config.slug}`,
    category: 'UtilityApplication',
    features: ['Real-time countdown', 'Days, hours, minutes, seconds', 'Local timezone', 'Auto-updating display'],
  })

  const faqSchema = createFAQSchema(config.faqs)

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
          <h1 className="heading-1 text-center mb-6">{config.heroTitle}</h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">{config.heroDescription}</p>
        </div>

        {children}

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">{config.introTitle}</h2>
          <p className="text-slate-600 mb-4">{config.introParagraphs[0]}</p>
          <p className="text-slate-600 mb-4">{config.introParagraphs[1]}</p>
          <p className="text-sm text-slate-500">Target: {config.targetDateLabel}</p>
          <p className="text-slate-600 mt-4">
            Countdown timers show time remaining until a fixed calendar date in your local timezone. They are useful
            for general planning—confirm store hours, broadcast times, and travel schedules separately when precision
            matters.
          </p>
        </section>

        <HowItWorks title="How This Countdown Works" steps={howItWorksSteps} className="bg-slate-50/50" />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title={config.heroTitle}
            description={
              <>
                <p className="mb-4">
                  This free countdown shows time remaining until {config.targetDateLabel}. It runs entirely in your browser and updates every second while the tab is active.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Live timer</h4>
                    <p className="text-sm text-blue-700">Days, hours, minutes, and seconds until the target date.</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Local timezone</h4>
                    <p className="text-sm text-emerald-700">Uses your device clock—no manual timezone picker.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Planning only</h4>
                    <p className="text-sm text-slate-700">Confirm official event times with organizers or venues.</p>
                  </div>
                </div>
              </>
            }
            steps={steps}
            faqs={config.faqs}
            tips={config.tips}
          />
        </div>

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool={config.slug} category="date-tools" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
