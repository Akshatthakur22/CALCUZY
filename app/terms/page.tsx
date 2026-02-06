import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Terms of Service - Calcuzy Usage Guidelines',
  description: 'Official Terms of Service for Calcuzy.app. Understand acceptable use, user responsibilities, disclaimers, and your rights while using our 40+ free online tools and calculators.',
  keywords: 'terms of service, calcuzy terms, user agreement, acceptable use, online tools terms, calculator terms',
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
          <p className="paragraph text-lg max-w-3xl mx-auto mb-6">
            Welcome to Calcuzy.app! By using our 40+ free online tools, you agree to these straightforward terms designed to protect both you and us. We believe in transparency, fairness, and creating tools that respect your intelligence and privacy. If you don't agree with these terms, please discontinue use—no hard feelings, just honest boundaries.
          </p>
          <div className="bg-card p-6 rounded-lg border border-border mt-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🤝</span>
              <h3 className="font-semibold text-primary-text">Our Commitment</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span>Always Free Tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span>No Hidden Costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span>Privacy First</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span>Transparent Practices</span>
              </li>
            </ul>
          </div>
        </section>
        {/* MAIN CONTENT */}
        <div className="prose prose-lg max-w-none space-y-10 fade-in-up">
          {/* 1 */}
          <section>
            <h2 className="heading-2 mb-4">1. Acceptance of Terms</h2>
            <p className="paragraph">
              By accessing or using Calcuzy.app, you confirm that you have read, understood, and agree to follow these Terms and our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
            </p>
          </section>
          {/* 2 */}
          <section>
            <h2 className="heading-2 mb-4">2. Description of Service</h2>
            <p className="paragraph">
              Calcuzy.app offers free calculators, converters, countdowns, random generators, and similar everyday tools. All features may change, update, or be removed at any time. We strive to keep the site useful, relevant, and up-to-date.
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
              You are responsible for your device, internet connection, and the accuracy of any information entered into our tools.
            </p>
          </section>
          {/* 4 */}
          <section>
            <h2 className="heading-2 mb-4">4. Availability of Service</h2>
            <p className="paragraph">
              While we aim for stable uptime, services may be unavailable during updates, maintenance, or unexpected technical issues. We are not liable for any loss or inconvenience caused by downtime.
            </p>
          </section>
          {/* 5 */}
          <section>
            <h2 className="heading-2 mb-4">5. Accuracy of Tools</h2>
            <p className="paragraph">
              Our tools are designed for general use. Although we aim for accuracy, results may not be suitable for professional or legal purposes. Always double-check important calculations and consult a qualified expert if needed.
            </p>
          </section>
          {/* 6 */}
          <section>
            <h2 className="heading-2 mb-4">6. Intellectual Property</h2>
            <p className="paragraph">
              All content, code, and design elements on Calcuzy.app are the intellectual property of Akshat Thakur unless otherwise stated. You may not copy, reproduce, or redistribute any part of the site without written permission. Open-source components are credited and licensed accordingly.
            </p>
          </section>
          {/* 7 */}
          <section>
            <h2 className="heading-2 mb-4">7. Limitation of Liability</h2>
            <p className="paragraph">
              Calcuzy.app is provided “as is” without warranties of any kind. We are not liable for any damages, losses, or issues arising from the use or inability to use the site. Use the tools at your own risk.
            </p>
          </section>
          {/* 8 */}
          <section>
            <h2 className="heading-2 mb-4">8. Governing Law</h2>
            <p className="paragraph">
              These Terms are governed by the laws of India, without regard to conflict of law principles. Any disputes will be resolved in the courts of India.
            </p>
          </section>
          {/* 9 */}
          <section>
            <h2 className="heading-2 mb-4">9. Dispute Resolution</h2>
            <p className="paragraph">
              If you have a dispute or concern, please contact us first at <a href="mailto:calcuzyy@gmail.com" className="underline">calcuzyy@gmail.com</a>. We aim to resolve all issues amicably and promptly. If a resolution cannot be reached, disputes will be handled in accordance with the laws and courts specified above.
            </p>
          </section>
          {/* 10 */}
          <section>
            <h2 className="heading-2 mb-4">10. User Rights</h2>
            <p className="paragraph">
              You have the right to access, correct, or request deletion of any data we may have about you (see our <a href="/privacy-policy" className="underline">Privacy Policy</a>). You may also opt out of analytics tracking using browser settings or extensions.
            </p>
          </section>
          {/* 11 */}
          <section>
            <h2 className="heading-2 mb-4">11. Changes to Terms</h2>
            <p className="paragraph">
              We may update these Terms from time to time. Major changes will be announced on the site. Your continued use of Calcuzy.app means you accept the updated Terms.
            </p>
          </section>
          {/* 12 */}
          <section>
            <h2 className="heading-2 mb-4">12. References & Resources</h2>
            <ul className="list-disc ml-6">
              <li><a href="https://www.consumer.ftc.gov/articles/0272-how-keep-your-personal-information-secure" target="_blank" rel="noopener noreferrer" className="underline">FTC: How to Keep Your Personal Information Secure</a></li>
              <li><a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer" className="underline">GDPR.eu: General Data Protection Regulation</a></li>
              <li><a href="https://www.eff.org/issues/coders/know-your-rights" target="_blank" rel="noopener noreferrer" className="underline">EFF: Know Your Rights</a></li>
            </ul>
          </section>
          {/* 13 */}
          <section>
            <h2 className="heading-2 mb-4">13. Contact</h2>
            <p className="paragraph">
              For any questions or concerns about these Terms, please email <a href="mailto:calcuzyy@gmail.com" className="underline">calcuzyy@gmail.com</a>.
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
