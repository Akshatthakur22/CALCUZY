import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import WillGeneratorClient from '@/components/tools/WillGeneratorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Will Generator',
  description: 'Create a simple last will and testament online. Free will generator with customizable beneficiaries, assets, and executor designation for estate planning.',
  keywords: 'will generator, last will and testament, estate planning, legal document generator, will template, inheritance planning',
  url: 'https://calcuzy.app/will-generator',
  image: '/og-tools.png',
})

export default function WillGeneratorPage() {
  const structuredData = createToolSchema({
    name: 'Will Generator',
    description: 'Create a simple last will and testament with customizable beneficiaries and asset distribution',
    url: 'https://calcuzy.app/will-generator',
    category: 'UtilityApplication',
    features: ['Asset distribution', 'Beneficiary designation', 'Executor appointment', 'PDF export', 'Simple estate planning']
  })

  const faqData = [
    {
      question: 'What is a will and why do I need one?',
      answer: 'A will (or last will and testament) is a legal document that expresses your wishes for how your property should be distributed after death, who will care for minor children, and who will execute your estate. Without a will, state laws determine these decisions through intestacy rules, which may not reflect your wishes.'
    },
    {
      question: 'Is a will generated online legally valid?',
      answer: 'An online will template provides a solid starting point, but legal validity depends on meeting your state/jurisdiction\'s requirements, including proper witnessing and notarization. Most states require two witnesses who are not beneficiaries. We strongly recommend consulting an estate planning attorney.'
    },
    {
      question: 'What is an executor and how do I choose one?',
      answer: 'An executor is the person responsible for managing your estate after death, including paying debts, filing taxes, and distributing assets. Choose someone trustworthy, organized, and capable of handling financial matters. Many people choose a spouse, adult child, or trusted friend.'
    },
    {
      question: 'Can I change my will after creating it?',
      answer: 'Yes, you can update your will anytime by creating a new will or adding a codicil (amendment). Major life events like marriage, divorce, births, or significant asset changes should trigger a will review. Keep your will current to reflect your latest wishes.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Enter Personal Information', description: 'Provide your full legal name, address, and basic identifying information.' },
    { title: 'Name Your Executor', description: 'Designate someone to manage your estate and carry out your wishes.' },
    { title: 'Add Beneficiaries & Assets', description: 'List your beneficiaries and specify how assets should be distributed.' },
    { title: 'Generate & Download', description: 'Create your will template ready for review, witnessing, and signing.' }
  ]

  const tips = [
    'Review and update your will after major life events (marriage, divorce, births, deaths)',
    'Store the original signed will in a secure location like a safe or with your attorney',
    'Inform your executor where to find your will and important documents',
    'Consider naming alternate beneficiaries and a backup executor',
    'Always have your will properly witnessed according to your state\'s requirements'
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
            Will Generator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Create a simple last will and testament template. Designate beneficiaries, 
            distribute assets, and name an executor for your estate.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <WillGeneratorClient />
        </div>

        <AdUnit slot={2} />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Will Generator"
            description={
              <>
                <p className="mb-4">
                  A last will and testament is a legal document that outlines your wishes for the 
                  distribution of your assets and the care of any minor children after your death. 
                  Creating a will ensures your property goes to the people you choose rather than 
                  being distributed according to state intestacy laws.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-2">👤 Executor</h4>
                    <p className="text-sm text-purple-700">
                      Manages your estate, pays debts, and distributes assets per your wishes.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">💝 Beneficiaries</h4>
                    <p className="text-sm text-green-700">
                      The individuals or organizations who receive your assets.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">📋 Witnesses</h4>
                    <p className="text-sm text-amber-700">
                      Required for legal validity; usually 2 non-beneficiary adults.
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
          <RelatedTools currentTool="/will-generator" category="generators" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
