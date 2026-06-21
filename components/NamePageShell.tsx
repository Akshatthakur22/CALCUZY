import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import HowItWorks from '@/components/HowItWorks'
import { createToolSchema, createFAQSchema } from '@/lib/metadata'

export interface NameSection {
  title: string
  description?: string
  names: string[]
}

export interface NamePageConfig {
  slug: string
  schemaName: string
  schemaDescription: string
  heroTitle: string
  heroDescription: string
  introTitle: string
  introParagraphs: [string, string]
  faqs: { question: string; answer: string }[]
  tips: string[]
  relatedLinks?: { href: string; title: string; description: string }[]
}

const howItWorksSteps = [
  { title: 'Browse lists', description: 'Scroll categories that match the style you want.' },
  { title: 'Say names aloud', description: 'Test how each name sounds with your last name.' },
  { title: 'Shortlist favorites', description: 'Pick a few options and sleep on them before deciding.' },
]

const steps = [
  { title: 'Pick a style', description: 'Traditional, modern, or themed lists help narrow choices.' },
  { title: 'Check flow', description: 'Say the full name including middle and last name.' },
  { title: 'Consider nicknames', description: 'Think about common shortenings you like or want to avoid.' },
  { title: 'Confirm spelling', description: 'Decide on spelling before filling official forms.' },
]

interface NamePageShellProps {
  config: NamePageConfig
  sections: NameSection[]
}

export default function NamePageShell({ config, sections }: NamePageShellProps) {
  const structuredData = createToolSchema({
    name: config.schemaName,
    description: config.schemaDescription,
    url: `https://calcuzy.app${config.slug}`,
    category: 'LifestyleApplication',
    features: sections.map((s) => s.title),
  })

  const faqSchema = createFAQSchema(config.faqs)

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main className="container section-responsive">
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">{config.heroTitle}</h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">{config.heroDescription}</p>
        </div>

        <section className="max-w-3xl mx-auto mb-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">{config.introTitle}</h2>
          <p className="text-slate-600 mb-4">{config.introParagraphs[0]}</p>
          <p className="text-slate-600 mb-4">{config.introParagraphs[1]}</p>
        </section>

        <div className="max-w-4xl mx-auto mb-12 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="heading-2 mb-4">{section.title}</h2>
              {section.description && (
                <p className="text-secondary-text text-sm mb-4">{section.description}</p>
              )}
              <Card>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
                  {section.names.map((name) => (
                    <div
                      key={name}
                      className="text-center p-2 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors"
                    >
                      <div className="font-medium text-primary-text">{name}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        <AdUnit slot={1} />

        <HowItWorks title="How to Use These Lists" steps={howItWorksSteps} className="bg-slate-50/50" />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title={config.heroTitle}
            description={
              <p className="mb-4">
                These are curated name ideas for inspiration—not official registries or popularity rankings. Verify spelling, meaning, and cultural context that matter to your family.
              </p>
            }
            steps={steps}
            faqs={config.faqs}
            tips={config.tips}
          />
        </div>

        {config.relatedLinks && config.relatedLinks.length > 0 && (
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="heading-2 mb-6">More name lists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {config.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors"
                >
                  <div className="font-medium text-primary-text mb-1">{link.title}</div>
                  <div className="text-sm text-secondary-text">{link.description}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  )
}
