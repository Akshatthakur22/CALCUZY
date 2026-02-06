import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Privacy Policy - How Calcuzy Protects Your Data',
  description:
    'Learn how Calcuzy.app protects your privacy with 100% client-side calculations. No data collection, no accounts, complete anonymity. GDPR & CCPA compliant privacy practices.',
  keywords: 'privacy policy, data protection, user privacy, calcuzy privacy, anonymous calculations, GDPR compliance',
  url: 'https://calcuzy.app/privacy-policy',
  image: '/og-default.png',
})

export default function PrivacyPolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Calcuzy.app privacy policy explaining data protection and user privacy practices",
    "url": "https://calcuzy.app/privacy-policy",
    "mainEntity": {
      "@type": "Organization",
      "name": "Calcuzy.app",
      "url": "https://calcuzy.app"
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
        {/* --- HERO --- */}
        <section className="text-center mb-16 fade-in-up">
          <h1 className="heading-1 mb-6">Privacy Policy</h1>
          <p className="paragraph max-w-3xl mx-auto">
            At Calcuzy.app, your privacy isn't just a priority—it's our foundation. Every calculation happens instantly in your browser, never leaving your device. We've built our entire platform around the principle that powerful tools should never require you to sacrifice your privacy. This comprehensive policy explains our commitment to protecting your data while complying with global privacy standards including GDPR and CCPA.
          </p>
          <div className="bg-card p-6 rounded-lg border border-border mt-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🔒</span>
              <h3 className="font-semibold text-primary-text">Our Privacy Promise</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>100% Client-side Processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>No Account Required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>No Data Collection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Anonymous by Default</span>
              </li>
            </ul>
          </div>
        </section>
        {/* --- MAIN CONTENT --- */}
        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="prose prose-lg max-w-none space-y-10">
            {/* 1 */}
            <section>
              <h2 className="heading-2 mb-4">1. Introduction</h2>
              <p className="paragraph">
                Calcuzy.app is designed to offer simple online tools without collecting personal data. All calculations and processing happen locally in your browser. We believe privacy is a fundamental right, and we build our tools to reflect that philosophy.
              </p>
              <p className="paragraph">
                This Privacy Policy explains what minimal data is processed, how it is used, and your rights as a user.
              </p>
            </section>
            {/* 2 */}
            <section>
              <h2 className="heading-2 mb-4">2. Information We Do Not Collect</h2>
              <p className="paragraph"><strong>We do NOT collect:</strong></p>
              <ul className="list-disc ml-6">
                <li>Names or email addresses</li>
                <li>Passwords or login details</li>
                <li>Uploaded files</li>
                <li>Calculation results</li>
                <li>Personal identifiers</li>
              </ul>
              <p className="paragraph">
                You can use all tools anonymously with no account required. We never sell or share your data.
              </p>
            </section>
            {/* 3 */}
            <section>
              <h2 className="heading-2 mb-4">3. Information Automatically Collected</h2>
              <p className="paragraph">We may automatically collect anonymous technical data to improve the site:</p>
              <ul className="list-disc ml-6">
                <li>Anonymized IP addresses</li>
                <li>Browser/device type</li>
                <li>Approximate location (city/country)</li>
                <li>Pages visited & time spent</li>
              </ul>
              <p className="paragraph">
                This information is aggregated and cannot identify any user. It is used solely to improve site performance and user experience.
              </p>
            </section>
            {/* 4 */}
            <section>
              <h2 className="heading-2 mb-4">4. Cookies & Tracking Technologies</h2>
              <p className="paragraph">
                Calcuzy.app uses minimal cookies, only for essential site functionality (such as remembering your theme preference). We do not use cookies for advertising or tracking your activity across the web. You can disable cookies in your browser settings, but some features may not work as intended.
              </p>
            </section>
            {/* 5 */}
            <section>
              <h2 className="heading-2 mb-4">5. Third-Party Analytics (Anonymous Mode)</h2>
              <p className="paragraph">
                We use Google Analytics in anonymous mode to understand general usage patterns. All IP addresses are anonymized, and no personally identifiable information is collected. Analytics data is used only to improve the site and is never sold or shared with advertisers.
              </p>
              <p className="paragraph">
                For more information, see <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" className="underline">Google Analytics Data Privacy & Security</a>.
              </p>
            </section>
            {/* 6 */}
            <section>
              <h2 className="heading-2 mb-4">6. Data Retention & Security</h2>
              <p className="paragraph">
                Anonymous analytics data is retained for up to 26 months, after which it is automatically deleted. We use industry-standard security practices to protect all data, including HTTPS encryption and regular security reviews.
              </p>
            </section>
            {/* 7 */}
            <section>
              <h2 className="heading-2 mb-4">7. Your Rights (GDPR, CCPA, etc.)</h2>
              <p className="paragraph">
                You have the right to:
              </p>
              <ul className="list-disc ml-6">
                <li>Access any data we may have about you (which is almost always none)</li>
                <li>Request deletion of your data</li>
                <li>Opt out of analytics tracking (use browser privacy settings or extensions)</li>
                <li>Contact us with privacy questions at <a href="mailto:calcuzyy@gmail.com" className="underline">calcuzyy@gmail.com</a></li>
              </ul>
              <p className="paragraph">
                We comply with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other global privacy laws to the best of our ability.
              </p>
            </section>
            {/* 8 */}
            <section>
              <h2 className="heading-2 mb-4">8. Children’s Privacy</h2>
              <p className="paragraph">
                Calcuzy.app is designed for general audiences and does not knowingly collect information from children under 13. If you believe a child has provided personal data, please contact us for prompt removal.
              </p>
            </section>
            {/* 9 */}
            <section>
              <h2 className="heading-2 mb-4">9. Changes to This Policy</h2>
              <p className="paragraph">
                We may update this Privacy Policy from time to time. Major changes will be announced on the site. Your continued use of Calcuzy.app means you accept the updated policy.
              </p>
            </section>
            {/* 10 */}
            <section>
              <h2 className="heading-2 mb-4">10. References & Resources</h2>
              <ul className="list-disc ml-6">
                <li><a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer" className="underline">GDPR.eu: General Data Protection Regulation</a></li>
                <li><a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer" className="underline">California Consumer Privacy Act (CCPA)</a></li>
                <li><a href="https://www.eff.org/issues/privacy" target="_blank" rel="noopener noreferrer" className="underline">EFF: Privacy & Security</a></li>
              </ul>
            </section>
            {/* 11 */}
            <section>
              <h2 className="heading-2 mb-4">11. Contact</h2>
              <p className="paragraph">
                For any privacy-related questions, requests, or concerns, please email <a href="mailto:calcuzyy@gmail.com" className="underline">calcuzyy@gmail.com</a>. We are committed to resolving all privacy issues promptly and transparently.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
