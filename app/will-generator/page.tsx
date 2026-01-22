import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import WillGeneratorClient from '@/components/tools/WillGeneratorClient'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Will Generator - Free Online Will Template | Calcuzy.com',
  description: 'Create a simple last will and testament online with our free will generator. Generate a basic legal will template with beneficiaries, assets, and special wishes.',
  keywords: 'will generator, last will and testament, free will template, legal will creator, online will generator, simple will form',
  url: 'https://calcuzy.com/will-generator',
  image: '/og-legal.png',
})

export default function WillGeneratorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Will Generator",
    "description": "Create a simple last will and testament online with our free will generator",
    "url": "https://calcuzy.com/will-generator",
    "provider": {
      "@type": "Organization",
      "name": "Calcuzy.com",
      "url": "https://calcuzy.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      
      <main className="container section-responsive">
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Will Generator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Create a simple last will and testament online with our free will generator. 
            Generate a basic legal document with beneficiaries, assets, and special wishes.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <WillGeneratorClient />
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">About Will Generation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-3">What is a Last Will and Testament?</h3>
                <p className="paragraph">
                  A last will and testament is a legal document that specifies how your assets and property 
                  should be distributed after your death. It allows you to name beneficiaries, designate an 
                  executor to manage your estate, and provide instructions for your final wishes.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Essential Components of a Will</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Testator Information</h4>
                    <p className="paragraph mb-0">
                      Your full legal name, address, and declaration that this document represents your last will.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Beneficiary Designations</h4>
                    <p className="paragraph mb-0">
                      Clear identification of who will receive your assets, including names, relationships, and distribution percentages.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Asset Inventory</h4>
                    <p className="paragraph mb-0">
                      Comprehensive list of your assets including real estate, financial accounts, personal property, and investments.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Executor Appointment</h4>
                    <p className="paragraph mb-0">
                      Designation of a trusted person to manage your estate and ensure your wishes are carried out.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Legal Requirements for Valid Wills</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>The testator must be at least 18 years old and of sound mind</li>
                  <li>The document must be in writing (handwritten or typed)</li>
                  <li>It must be signed by the testator in the presence of witnesses</li>
                  <li>Typically requires two or three disinterested witnesses</li>
                  <li>Witnesses must also sign the document in the testator&apos;s presence</li>
                  <li>Some states require notarization for self-proving wills</li>
                </ul>
              </div>

              <div>
                <h3 className="heading-3 mb-3">When to Update Your Will</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>After marriage or divorce</li>
                  <li>Birth or adoption of children</li>
                  <li>Death of a beneficiary or executor</li>
                  <li>Significant changes in assets or property</li>
                  <li>Moving to a different state</li>
                  <li>Every 3-5 years for regular review</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={400}>
            <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-2">Is this will generator legally binding?</h3>
                <p className="paragraph">
                  The will generated by our tool creates a basic template that can be legally valid when properly 
                  executed according to your state&apos;s laws. However, this is not a substitute for legal advice. 
                  We strongly recommend consulting with an attorney to ensure your will meets all legal requirements.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Do I need a lawyer to create a will?</h3>
                <p className="paragraph">
                  While simple wills can be created without a lawyer, complex estates, business interests, or 
                  special family situations may require professional legal guidance. An attorney can help ensure 
                  your will is properly drafted and executed according to state laws.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What happens if I die without a will?</h3>
                <p className="paragraph">
                  Dying without a will (intestate) means your assets will be distributed according to your state&apos;s 
                  intestacy laws. This may not align with your wishes and can lead to lengthy court proceedings. 
                  Having a will ensures your assets go to your chosen beneficiaries.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Can I change my will after creating it?</h3>
                <p className="paragraph">
                  Yes, you can modify your will at any time as long as you&apos;re mentally competent. Changes can be 
                  made through a codicil (amendment) or by creating a new will that revokes previous versions. 
                  Always ensure modifications follow the same legal requirements as the original will.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Should I store my will with a lawyer?</h3>
                <p className="paragraph">
                  Storing your will with an attorney provides secure storage and easy access for your executor. 
                  Other options include safe deposit boxes, home safes, or the probate court in some jurisdictions. 
                  Ensure your executor knows where to locate the original document.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What is the difference between a will and a trust?</h3>
                <p className="paragraph">
                  A will takes effect after death and goes through probate court, while a trust can avoid probate 
                  and manage assets during your lifetime. Trusts offer more privacy and control but are typically 
                  more complex and expensive to establish. Many people use both as part of comprehensive estate planning.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={500}>
            <h2 className="heading-2 mb-6">Related Legal Tools</h2>
            <div className="grid-responsive-3 gap-6">
              <Link href="/nda-generator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">NDA Generator</h3>
                  <p className="text-sm text-gray-600">Create non-disclosure agreements for business protection</p>
                </div>
              </Link>
              <Link href="/tools" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">All Legal Tools</h3>
                  <p className="text-sm text-gray-600">Explore our complete collection of legal document generators</p>
                </div>
              </Link>
              <Link href="/age-calculator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Age Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate exact age and important life milestones</p>
                </div>
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
