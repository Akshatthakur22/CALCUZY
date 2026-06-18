import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import NDAGeneratorClient from '@/components/tools/NDAGeneratorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import HowItWorks from '@/components/HowItWorks'
import YMYLDisclaimer from '@/components/YMYLDisclaimer'
import ToolJsonLd from '@/components/ToolJsonLd'
import { buildToolPageSchemas } from '@/lib/build-tool-schemas'
import { CALCULATOR_SEO } from '@/lib/calculator-seo-config'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'NDA Generator',
  description: 'Draft a basic unilateral non-disclosure agreement template. Enter party names, term, and purpose—then copy the text for attorney review. Not legal advice.',
  keywords: 'NDA generator, non-disclosure agreement, confidentiality agreement template, NDA template, business NDA',
  url: 'https://calcuzy.app/nda-generator',
  image: '/og/og-tools.png',
})

export default function NDAGeneratorPage() {
  const faqData = [
    {
      question: 'What is a non-disclosure agreement (NDA)?',
      answer: 'An NDA is a contract where one or both parties agree not to share certain confidential information. Businesses use NDAs before sharing trade secrets, product plans, financial data, or other sensitive details during discussions.'
    },
    {
      question: 'What does this generator create?',
      answer: 'A basic unilateral NDA: one disclosing party shares information with one receiving party. You enter names, agreement length, purpose of disclosure, and whether materials must be returned. The tool outputs plain text you can copy—not a signed or state-specific legal document.'
    },
    {
      question: 'Is an NDA from this tool legally binding?',
      answer: 'Not automatically. Enforceability depends on your state or country, how clearly confidential information is defined, whether terms are reasonable, and proper signing. Have a qualified attorney review and customize the template before use.'
    },
    {
      question: 'What is the difference between unilateral and mutual NDAs?',
      answer: 'A unilateral NDA protects information flowing one way (one discloser, one recipient). A mutual NDA applies when both sides share secrets. This generator produces a unilateral template only; mutual agreements usually need lawyer-drafted terms.'
    },
    {
      question: 'What should I customize before signing?',
      answer: 'Fill in governing law (state or country), define confidential information specifically, set a reasonable term, and add industry-specific clauses if needed (employment, healthcare, IP). Both parties should sign and date the final version.'
    },
    {
      question: 'Can an NDA hide illegal activity?',
      answer: 'No. NDAs cannot legally prevent reporting crimes, harassment, or whistleblowing protected by law. Courts may refuse to enforce agreements that are overly broad or against public policy.'
    }
  ]

  const steps = [
    { title: 'Name the parties', description: 'Enter the disclosing party (sharing secrets) and receiving party (learning them).' },
    { title: 'Set term and purpose', description: 'Choose agreement duration and describe why information is being shared.' },
    { title: 'Return of materials', description: 'Optionally require return of confidential documents when the NDA ends.' },
    { title: 'Generate and copy', description: 'Create the template, copy the text, and complete placeholders like governing state.' },
    { title: 'Attorney review', description: 'Have a lawyer adapt the NDA to your jurisdiction and situation before signing.' }
  ]

  const tips = [
    'Define “confidential information” as specifically as possible for your deal',
    'Choose a term that matches how long the information stays sensitive',
    'Specify governing law—replace the [State] placeholder with your jurisdiction',
    'Keep signed copies and note what was shared and when',
    'For mutual sharing, both sides disclosing—use a lawyer-drafted mutual NDA',
    'This template is a starting point, not a substitute for legal advice'
  ]

  const howItWorksSteps = [
    {
      title: 'Enter deal details',
      description: 'Provide party names, duration, purpose, and return-of-materials preference.'
    },
    {
      title: 'Generate the template',
      description: 'The tool assembles a standard unilateral NDA with common confidentiality clauses.'
    },
    {
      title: 'Review with counsel',
      description: 'Copy the text, fill in governing law, and have an attorney review before signing.'
    }
  ]

  const schemas = buildToolPageSchemas({
    tool: {
      name: 'NDA Generator',
      description: 'Generate a basic unilateral non-disclosure agreement template with customizable term, purpose, and return-of-materials option.',
      url: 'https://calcuzy.app/nda-generator',
      category: 'UtilityApplication',
      features: ['Unilateral NDA template', 'Custom duration', 'Purpose field', 'Return materials option', 'Copy to clipboard'],
    },
    faqs: faqData,
    howToSteps: howItWorksSteps,
    howTo: CALCULATOR_SEO['nda-generator'].howTo,
    calculateAction: CALCULATOR_SEO['nda-generator'].calculateAction,
  })

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <ToolJsonLd schemas={schemas} />
      <Navbar />
      
      <main className="container section-responsive">
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            NDA Generator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Create a basic unilateral non-disclosure agreement template for one-way sharing of confidential information. Fill in party names, term, and purpose, then copy the text for review by a qualified attorney—not legal advice.
          </p>
        </div>

        <YMYLDisclaimer category="legal" />

        <div className="max-w-4xl mx-auto fade-in-up">
          <NDAGeneratorClient />
        </div>

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">When to use an NDA</h2>
          <p className="text-slate-600 mb-4">
            NDAs are common before sharing business plans with investors, prototypes with contractors, or client data with vendors. A written agreement clarifies what must stay confidential, how long obligations last, and what happens when the deal ends.
          </p>
          <p className="text-slate-600 mb-4">
            This generator produces a simple unilateral template. Complex deals—mutual NDAs, employee agreements, international parties, or regulated data—need customized documents from a lawyer.
          </p>
          <p className="text-sm text-slate-500">
            Learn more:{' '}
            <a href="https://www.law.cornell.edu/wex/non-disclosure_agreement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cornell Law — Non-disclosure agreement</a>
            {' · '}
            <a href="https://www.nolo.com/legal-encyclopedia/non-disclosure-agreements-29630.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nolo — Non-disclosure agreements</a>
          </p>
        </section>

        <AdUnit slot={2} />

        <HowItWorks
          title="How This Tool Works"
          steps={howItWorksSteps}
          className="bg-slate-50/50"
        />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="NDA Generator"
            description={
              <>
                <p className="mb-4">
                  Generate a plain-text unilateral NDA with standard sections: definition of confidential information, receiving party duties, exclusions, term, return of materials, remedies, and governing law placeholder. Copy the output and edit with legal counsel before signing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Unilateral</h4>
                    <p className="text-sm text-blue-700">
                      One disclosing party, one receiving party—one-way confidentiality.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Configurable term</h4>
                    <p className="text-sm text-emerald-700">
                      Choose 1–10 years or indefinite, plus optional return of materials.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">Template only</h4>
                    <p className="text-sm text-amber-700">
                      Replace [State] governing law and tailor clauses with an attorney.
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
          <RelatedTools currentTool="/nda-generator" category="generators" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
