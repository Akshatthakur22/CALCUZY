import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import HowItWorks from '@/components/HowItWorks'
import { createToolSchema, createFAQSchema } from '@/lib/metadata'

export interface QuoteSection {
  title: string
  description?: string
  quotes: string[]
}

export interface QuotePageConfig {
  slug: string
  schemaName: string
  schemaDescription: string
  heroTitle: string
  heroDescription: string
  introTitle: string
  introParagraphs: [string, string]
  faqs: { question: string; answer: string }[]
  tips: string[]
}

const howItWorksSteps = [
  { title: 'Browse by theme', description: 'Pick a section that fits your occasion or mood.' },
  { title: 'Copy or share', description: 'Use quotes in cards, captions, or messages—credit authors when known.' },
  { title: 'Make it personal', description: 'Add your own words so messages feel genuine, not generic.' },
]

const steps = [
  { title: 'Find a section', description: 'Romantic, motivational, holiday, or aesthetic groupings.' },
  { title: 'Choose a quote', description: 'Pick one that matches the tone you want.' },
  { title: 'Attribute when possible', description: 'Include the author for famous quotes; say unknown when unsure.' },
  { title: 'Edit for context', description: 'Shorten or paraphrase for space—keep the meaning intact.' },
]

interface QuotePageShellProps {
  config: QuotePageConfig
  sections: QuoteSection[]
}

export default function QuotePageShell({ config, sections }: QuotePageShellProps) {
  const structuredData = createToolSchema({
    name: config.schemaName,
    description: config.schemaDescription,
    url: `https://calcuzy.app${config.slug}`,
    category: 'UtilityApplication',
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

        <div className="max-w-4xl mx-auto mb-12 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="heading-2 mb-4">{section.title}</h2>
              {section.description && (
                <p className="text-secondary-text text-sm mb-4">{section.description}</p>
              )}
              <Card>
                <div className="space-y-3 p-6">
                  {section.quotes.map((quote, index) => (
                    <div
                      key={`${section.title}-${index}`}
                      className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors"
                    >
                      <p className="text-secondary-text italic">{quote}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">{config.introTitle}</h2>
          <p className="text-slate-600 mb-4">{config.introParagraphs[0]}</p>
          <p className="text-slate-600 mb-4">{config.introParagraphs[1]}</p>
        </section>

        <AdUnit slot={2} />

        <HowItWorks title="How to Use These Quotes" steps={howItWorksSteps} className="bg-slate-50/50" />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title={config.heroTitle}
            description={
              <p className="mb-4">
                Quotes are provided for personal inspiration and sharing. Attribution is included where known; verify famous quotes before publishing commercially.
              </p>
            }
            steps={steps}
            faqs={config.faqs}
            tips={config.tips}
          />
        </div>

        <AdUnit slot={3} />
      </main>

      <Footer />
    </div>
  )
}
