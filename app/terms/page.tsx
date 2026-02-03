import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Terms of Service',
  description: 'Official Terms of Service for Calcuzy.app. Understand acceptable use, disclaimers, responsibilities, and your rights while using our free online tools.',
  keywords: 'terms of service, calcuzy terms, user agreement, acceptable use',
  url: 'https://calcuzy.app/terms',
  image: '/og-default.png',
})

export default function TermsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Calcuzy.app Terms explaining acceptable use, user responsibilities, disclaimers, and legal conditions",
    "url": "https://calcuzy.app/terms",
    "mainEntity": {
      "@type": "Organization",
      "name": "Calcuzy.app",
      "url": "https://calcuzy.app"
    }
  }

  return (
    <div className="min-h-screen bg-primary-bg fade-in flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />

      <main className="flex-1 container section-responsive max-w-4xl mx-auto py-12">
        
        {/* HERO */}
        <section className="text-center mb-16 slide-up">
          <h1 className="heading-1 mb-6">Terms of Service</h1>
          <p className="paragraph text-lg max-w-3xl mx-auto">
            By using Calcuzy.app, you agree to the conditions listed below.  
            If you do not agree with these Terms, please stop using the website.
          </p>
        </section>

        {/* MAIN CONTENT */}
        <div className="prose prose-lg max-w-none space-y-10 fade-in-up">

          {/* 1 */}
          <section>
            <h2 className="heading-2 mb-4">1. Acceptance of Terms</h2>
            <p className="paragraph">
              By accessing or using Calcuzy.app, you confirm that you have read, understood,
              and agree to follow these Terms and our Privacy Policy.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="heading-2 mb-4">2. Description of Service</h2>
            <p className="paragraph">
              Calcuzy.app offers free calculators, converters, countdowns, random generators,
              and similar everyday tools. All features may change, update, or be removed at any time.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="heading-2 mb-4">3. User Responsibilities</h2>
            <p className="paragraph">You agree not to:</p>
            <ul className="list-disc ml-6">
              <li>Use our tools for illegal or harmful purposes</li>
              <li>Attempt to hack, overload, or disrupt the service</li>
              <li>Copy or scrape website content, code, or data</li>
              <li>Use bots or automation to abuse services</li>
              <li>Inject malicious scripts or attempt security breaches</li>
            </ul>
            <p className="paragraph">
              You are responsible for your device, internet connection, and the accuracy
              of any information entered into our tools.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="heading-2 mb-4">4. Availability of Service</h2>
            <p className="paragraph">
              While we aim for stable uptime, services may be unavailable during updates,
              maintenance, or unexpected technical issues.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="heading-2 mb-4">5. Accuracy of Tools</h2>
            <p className="paragraph">
              Our tools are designed for general use. Although we aim for accuracy,
              results may not be perfect.
            </p>
            <p className="paragraph">
              Do not rely solely on Calcuzy tools for decisions involving finance, law,
              healthcare, exams, or critical matters.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="heading-2 mb-4">6. Intellectual Property</h2>
            <p className="paragraph">
              All design, code, content, and features are owned by Calcuzy.app.
              You may not copy, modify, or redistribute them without written permission.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="heading-2 mb-4">7. Third-Party Services</h2>
            <p className="paragraph">
              Calcuzy.app uses Google AdSense and Google Analytics, which may collect anonymous data.
              These services follow their own privacy terms.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="heading-2 mb-4">8. Disclaimer of Warranties</h2>
            <p className="paragraph">
              Calcuzy.app is provided “as is’’ with no warranties—express or implied.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="heading-2 mb-4">9. Limitation of Liability</h2>
            <p className="paragraph">
              To the fullest extent allowed by law, Calcuzy.app is not responsible for
              damages caused by using or being unable to use the service.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="heading-2 mb-4">10. Indemnification</h2>
            <p className="paragraph">
              You agree to indemnify Calcuzy.app against claims arising from your misuse of the platform.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="heading-2 mb-4">11. Governing Law</h2>
            <p className="paragraph">
              These Terms will be governed by the laws of your local jurisdiction.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="heading-2 mb-4">12. Changes to Terms</h2>
            <p className="paragraph">
              We may update these Terms at any time. Continued use means you accept the updates.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="heading-2 mb-4">13. Contact Information</h2>
            <p className="paragraph">
              For legal or policy-related questions, email:<br />
              <strong>calcuzyy@gmail.com</strong>
            </p>
          </section>
        </div>

        {/* RELATED LINKS */}
        <Card animation="fade-in-up" delay={200} className="mt-12">
          <h2 className="heading-2 mb-4">Related Pages</h2>
          <div className="grid-responsive-2 gap-4">
            <Link href="/privacy-policy" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-all duration-200">
              <div className="font-medium text-primary-text">Privacy Policy</div>
              <div className="text-sm text-secondary-text">How your data is protected</div>
            </Link>
            <Link href="/about" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-all duration-200">
              <div className="font-medium text-primary-text">About Us</div>
              <div className="text-sm text-secondary-text">Story & mission</div>
            </Link>
            <Link href="/contact" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-all duration-200">
              <div className="font-medium text-primary-text">Contact</div>
              <div className="text-sm text-secondary-text">Get in touch</div>
            </Link>
          </div>
        </Card>

        {/* EFFECTIVE DATE */}
        <section className="max-w-3xl mx-auto mt-16 fade-in-up">
          <h2 className="heading-2 mb-4">Effective Date</h2>
          <p className="paragraph">This policy is effective as of January 22, 2026.</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
