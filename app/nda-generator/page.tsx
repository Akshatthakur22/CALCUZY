import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import NDAGeneratorClient from '@/components/tools/NDAGeneratorClient'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'NDA Generator - Free Non-Disclosure Agreement Template | Calcuzy.com',
  description: 'Generate custom Non-Disclosure Agreement (NDA) templates online. Free NDA generator with customizable terms, duration, and confidentiality clauses.',
  keywords: 'NDA generator, non-disclosure agreement, confidentiality agreement template, legal document generator, NDA template',
  url: 'https://calcuzy.com/nda-generator',
  image: '/og-legal.png',
})

export default function NDAGeneratorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "NDA Generator",
    "description": "Generate custom Non-Disclosure Agreement templates online",
    "url": "https://calcuzy.com/nda-generator",
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
            NDA Generator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Generate a professional Non-Disclosure Agreement template for your business needs. 
            Customize terms, duration, and confidentiality requirements in minutes.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <NDAGeneratorClient />
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">Understanding Non-Disclosure Agreements</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-3">What is an NDA?</h3>
                <p className="paragraph">
                  A Non-Disclosure Agreement (NDA) is a legal contract that establishes confidential 
                  relationship between parties. It outlines what information constitutes confidential material, 
                  obligations to protect that information, and remedies for breaches. NDAs are commonly used 
                  in business negotiations, employment relationships, and partnerships.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Key Components of an NDA</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Definition of Confidential Information</h4>
                    <p className="paragraph mb-0">
                      Clearly defines what constitutes confidential information, including business plans, 
                      financial data, customer lists, technical specifications, trade secrets, and other 
                      proprietary information.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Obligations and Restrictions</h4>
                    <p className="paragraph mb-0">
                      Specifies how receiving party must handle confidential information, including security 
                      measures, permitted uses, and restrictions on disclosure to third parties.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Term and Duration</h4>
                    <p className="paragraph mb-0">
                      Establishes how long the agreement remains in effect and confidentiality 
                      obligations survive termination. Common durations range from 1-10 years.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Types of NDAs</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Unilateral NDA</h4>
                    <p className="paragraph mb-0">
                      Only one party discloses confidential information. Common in employer-employee 
                      relationships or when sharing business plans with potential partners.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Mutual NDA</h4>
                    <p className="paragraph mb-0">
                      Both parties exchange confidential information. Used in partnerships, joint ventures, 
                      or collaborative business relationships where both sides share sensitive data.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">When to Use an NDA</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Discussing potential business partnerships or investments</li>
                  <li>Sharing proprietary technology or product information</li>
                  <li>Interviewing potential employees or contractors</li>
                  <li>Working with vendors or service providers</li>
                  <li>Exploring licensing or franchise opportunities</li>
                  <li>Collaborating on research and development projects</li>
                </ul>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Best Practices for NDAs</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Be specific about what constitutes confidential information</li>
                  <li>Clearly define permitted uses of the information</li>
                  <li>Specify the duration of confidentiality obligations</li>
                  <li>Include provisions for return or destruction of materials</li>
                  <li>Define remedies for breaches of the agreement</li>
                  <li>Ensure all parties sign and date the document</li>
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
                <h3 className="heading-3 mb-2">Is this NDA template legally binding?</h3>
                <p className="paragraph">
                  The generated NDA can be legally binding when properly executed by all parties. 
                  However, this is a general template and may not address specific requirements of your 
                  situation or jurisdiction. For important matters, consult with an attorney.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What information should be considered confidential?</h3>
                <p className="paragraph">
                  Include any information that provides business value and isn&apos;t publicly known, such as 
                  financial data, customer lists, business strategies, technical specifications, marketing plans, 
                  trade secrets, and proprietary processes. Be as specific as possible.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">How long should an NDA last?</h3>
                <p className="paragraph">
                  Duration depends on your needs and industry standards. Short-term projects may use 
                  1-3 years, while ongoing business relationships often use 5-10 years. Consider how 
                  long the information will remain valuable and relevant.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Can an NDA be modified?</h3>
                <p className="paragraph">
                  Yes, NDAs can be modified if all parties agree to changes in writing. 
                  Include a clause specifying that modifications must be in writing and signed by all parties 
                  to be effective.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What happens if someone breaches an NDA?</h3>
                <p className="paragraph">
                  Breaches can result in legal action for damages, injunctive relief to stop 
                  further disclosure, and potentially criminal charges if trade secrets are involved. 
                  The agreement should specify remedies and governing law.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Do I need a lawyer for an NDA?</h3>
                <p className="paragraph">
                  While not legally required for simple agreements, consulting an attorney is recommended 
                  for important business relationships. Lawyers can ensure the agreement protects your interests 
                  and complies with applicable laws in your jurisdiction.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={500}>
            <h2 className="heading-2 mb-6">Related Legal Tools</h2>
            <div className="grid-responsive-3 gap-6">
              <Link href="/will-generator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Will Generator</h3>
                  <p className="text-sm text-gray-600">Create a simple last will and testament</p>
                </div>
              </Link>
              <Link href="/tools" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">All Legal Tools</h3>
                  <p className="text-sm text-gray-600">Explore our complete collection of legal generators</p>
                </div>
              </Link>
              <Link href="/password-tools" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Password Tools</h3>
                  <p className="text-sm text-gray-600">Generate secure passwords and hash values</p>
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
