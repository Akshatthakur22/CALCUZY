import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import WillGeneratorClient from '@/components/tools/WillGeneratorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import HowItWorks from '@/components/HowItWorks'
import YMYLDisclaimer from '@/components/YMYLDisclaimer'
import GuideLink from '@/components/GuideLink'
import ToolJsonLd from '@/components/ToolJsonLd'
import { buildToolPageSchemas } from '@/lib/build-tool-schemas'
import { CALCULATOR_SEO } from '@/lib/calculator-seo-config'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Will Generator',
  description: 'Draft a basic last will and testament template with beneficiaries, assets, and an executor. Free starting point for simple estates—not a substitute for an attorney.',
  keywords: 'will generator, last will and testament, basic will template, estate planning, beneficiary designation, executor appointment',
  url: 'https://calcuzy.app/will-generator',
  image: '/og/og-legal.png',
})

export default function WillGeneratorPage() {
  const faqData = [
    {
      question: 'What is a last will and testament?',
      answer: 'A will is a legal document that states who should receive your property after you die and who should manage your estate (the executor). Without a valid will, state intestacy laws typically decide how assets are distributed—which may not match your wishes.'
    },
    {
      question: 'Is a will from this tool legally binding?',
      answer: 'No guarantee. This tool produces a basic text template only. Whether a will is valid depends on your state\'s requirements for signing, witnesses, notarization, and content. Complex situations—minor children, blended families, business interests, or large estates—usually need an attorney-drafted will.'
    },
    {
      question: 'What does this generator include?',
      answer: 'You can enter your name, name an executor, list beneficiaries with percentage shares, add specific asset bequests, and note special wishes (such as funeral preferences). The tool outputs plain text you can copy and review with a legal professional.'
    },
    {
      question: 'Why do witnesses matter?',
      answer: 'Most US states require a will to be signed in the presence of witnesses—often two adults who are not beneficiaries. Some states also allow or require notarization or self-proving affidavits. Requirements vary by state; check your state bar or a local attorney before signing.'
    },
    {
      question: 'What does this tool not cover?',
      answer: 'This template does not create trusts, name guardians for minor children, handle digital asset access, or provide tax or probate planning. Assets with beneficiary designations (life insurance, 401(k)s, IRAs) pass outside your will. An estate planning attorney can address gaps this template cannot.'
    },
    {
      question: 'When should I hire an estate planning attorney?',
      answer: 'Consider professional help if you have minor children, own a business, hold property in multiple states, have a high net worth, need a trust, or want to minimize estate taxes. An attorney can ensure your documents meet state law and reflect your full situation.'
    }
  ]

  const steps = [
    { title: 'Enter your name', description: 'Provide your full legal name as it should appear on the document.' },
    { title: 'Name an executor', description: 'Choose someone trustworthy to pay debts and distribute assets according to your wishes.' },
    { title: 'Add beneficiaries', description: 'List who inherits your estate and assign percentage shares (ideally totaling 100%).' },
    { title: 'List specific assets', description: 'Optionally bequeath particular items such as a home, vehicle, or personal property.' },
    { title: 'Generate and review', description: 'Copy the template, fill in placeholders like city/state, sign with witnesses per your state\'s rules, and have an attorney review if needed.' }
  ]

  const tips = [
    'Review and update your will after marriage, divorce, births, deaths, or major asset changes',
    'Store the original signed will in a secure place and tell your executor where to find it',
    'Name a backup executor in case your first choice cannot serve',
    'Beneficiary designations on retirement accounts and life insurance override your will—keep them updated',
    'Consult an estate planning attorney for complex estates, minor children, or state-specific requirements'
  ]

  const howItWorksSteps = [
    {
      title: 'Fill in your details',
      description: 'Add your name, executor, beneficiaries, optional assets, and any special wishes.'
    },
    {
      title: 'Generate the template',
      description: 'The tool assembles a basic last will and testament with standard articles and witness lines.'
    },
    {
      title: 'Review before signing',
      description: 'Copy the text, complete placeholders, and follow your state\'s signing and witness rules—or have a lawyer review first.'
    }
  ]

  const schemas = buildToolPageSchemas({
    tool: {
      name: 'Will Generator',
      description: 'Create a simple last will and testament template with beneficiaries, asset bequests, and an executor designation.',
      url: 'https://calcuzy.app/will-generator',
      category: 'UtilityApplication',
      features: ['Beneficiary percentages', 'Specific asset bequests', 'Executor appointment', 'Special wishes', 'Copy to clipboard'],
    },
    faqs: faqData,
    howToSteps: howItWorksSteps,
    howTo: CALCULATOR_SEO['will-generator'].howTo,
    calculateAction: CALCULATOR_SEO['will-generator'].calculateAction,
  })

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <ToolJsonLd schemas={schemas} />
      <Navbar />
      
      <main className="container section-responsive">
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Will Generator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            A last will and testament can help you state who receives your property and who manages your estate. This free tool drafts a basic will template you can use as a starting point—it is not legal advice and may not meet your state&apos;s requirements without review by a qualified attorney.
          </p>
        </div>

        <YMYLDisclaimer category="legal" />

        <div className="max-w-4xl mx-auto fade-in-up">
          <WillGeneratorClient />
        </div>

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">What a basic will can do</h2>
          <p className="text-slate-600 mb-4">
            A will names an executor to settle your estate, directs how remaining assets are divided among beneficiaries, and can include specific gifts (such as jewelry or a vehicle) and personal wishes. After death, the will is typically submitted to probate court so the executor can pay debts and distribute property.
          </p>
          <p className="text-slate-600 mb-4">
            Many adults benefit from having a will, especially parents, homeowners, and anyone with clear preferences for their property. State law applies if you die without one. This generator is best for simple situations; trusts, guardianship clauses, and tax planning require professional guidance.
          </p>
          <GuideLink toolPath="/will-generator" />
        </section>

        <AdUnit slot={2} />

        <HowItWorks
          title="How This Tool Works"
          steps={howItWorksSteps}
          className="bg-slate-50/50"
        />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Will Generator"
            description={
              <>
                <p className="mb-4">
                  Use this tool to assemble a plain-text will template with standard sections: executor appointment, beneficiary shares, optional specific bequests, and special wishes. All input stays in your browser until you generate and copy the document.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-2">Executor</h4>
                    <p className="text-sm text-purple-700">
                      Manages your estate, pays debts, and distributes assets. Choose someone organized and trustworthy.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">Beneficiaries</h4>
                    <p className="text-sm text-green-700">
                      People or organizations who receive your estate. Percentages should total 100%.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">Witnesses</h4>
                    <p className="text-sm text-amber-700">
                      Most states require two adult witnesses at signing. Rules vary—verify locally before you sign.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-6">
                  Further reading:{' '}
                  <a href="https://www.usa.gov/wills" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USA.gov — Wills and estate planning</a>
                  {' · '}
                  <a href="https://www.americanbar.org/groups/real_property_trust_estate/resources/estate_planning/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">American Bar Association — Estate planning</a>
                </p>
              </>
            }
            steps={steps}
            faqs={faqData}
            tips={tips}
          />
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/will-generator" category="generators" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
