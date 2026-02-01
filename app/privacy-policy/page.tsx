import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Privacy Policy - Calcuzy.app',
  description:
    'Learn how Calcuzy.app protects your privacy. We do not collect personal data and all calculations happen locally in your browser.',
  keywords: 'privacy policy, data protection, user privacy, calcuzy policy',
  url: 'https://Calcuzy.app/privacy-policy',
  image: '/og-default.png',
})

export default function PrivacyPolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Calcuzy.app privacy policy explaining data protection and user privacy practices",
    "url": "https://Calcuzy.app/privacy-policy",
    "mainEntity": {
      "@type": "Organization",
      "name": "Calcuzy.app",
      "url": "https://Calcuzy.app"
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
            At Calcuzy.app, your privacy matters. Our tools run instantly without collecting
            personal information. This policy explains how we keep your usage safe, private,
            and anonymous.
          </p>
        </section>

        {/* --- MAIN CONTENT --- */}
        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="prose prose-lg max-w-none space-y-10">

            {/* 1 */}
            <section>
              <h2 className="heading-2 mb-4">1. Introduction</h2>
              <p className="paragraph">
                Calcuzy.app is designed to offer simple online tools without collecting personal
                data. All calculations and processing happen locally in your browser.
              </p>
              <p className="paragraph">
                This Privacy Policy explains what minimal data is processed and how it is used.
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
                You can use all tools anonymously with no account required.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="heading-2 mb-4">3. Information Automatically Collected</h2>
              <p className="paragraph">We may automatically collect anonymous technical data:</p>
              <ul className="list-disc ml-6">
                <li>Anonymized IP addresses</li>
                <li>Browser/device type</li>
                <li>Approximate location (city/country)</li>
                <li>Pages visited & time spent</li>
              </ul>
              <p className="paragraph">
                This information is aggregated and cannot identify any user.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="heading-2 mb-4">4. Google Analytics (Anonymous Mode)</h2>
              <p className="paragraph">
                We use Google Analytics with anonymized IP to understand general traffic
                patterns. No personal data is collected or shared.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="heading-2 mb-4">5. Google AdSense</h2>
              <p className="paragraph">
                To keep Calcuzy free, we display ads. Google may use cookies or identifiers
                for personalization.
              </p>
              <p className="paragraph">
                You can manage ad personalization at:
                <br />• google.com/settings/ads  
                <br />• myadcenter.google.com
              </p>
              <p className="paragraph">
                We do not store or access any advertising-related data.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="heading-2 mb-4">6. Cookies & Local Storage</h2>
              <p className="paragraph">
                We may store simple preferences using local storage to enhance performance.
                This data remains on your device.
              </p>
              <p className="paragraph">
                Cookies may be used by Google products. You can block or delete them anytime.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="heading-2 mb-4">7. Third-Party Links</h2>
              <p className="paragraph">
                Some tools may link to external sites. We are not responsible for third-party
                privacy practices.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="heading-2 mb-4">8. Data Security</h2>
              <p className="paragraph">
                We use HTTPS encryption. Since we do not store personal data, privacy risks
                remain minimal.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="heading-2 mb-4">9. Your Rights</h2>
              <p className="paragraph">
                Even without collecting personal data, you still have the right to:
              </p>
              <ul className="list-disc ml-6">
                <li>Use Calcuzy anonymously</li>
                <li>Delete local storage entries</li>
                <li>Opt out of ad personalization</li>
                <li>Request privacy support</li>
              </ul>
              <p className="paragraph">
                Contact us anytime at <strong>calcuzyy@gmail.com</strong>.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="heading-2 mb-4">10. Children’s Privacy</h2>
              <p className="paragraph">
                Calcuzy is not for children under 13. We do not knowingly collect data from minors.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="heading-2 mb-4">11. Policy Updates</h2>
              <p className="paragraph">
                We may update this policy as new tools are added or laws change.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="heading-2 mb-4">12. Contact Information</h2>
              <p className="paragraph">
                For privacy questions:<br />
                <strong>calcuzyy@gmail.com</strong><br />
              </p>
            </section>
          </div>

          {/* RELATED LINKS */}
          <Card animation="fade-in-up" delay={200}>
            <h2 className="heading-2 mb-6">Related Pages</h2>
            <div className="grid-responsive-2 gap-4">
              <Link href="/about" className="block p-4 border border-border rounded-lg hover:bg-card-hover hover:shadow-md transition-all">
                <div className="font-medium text-primary-text mb-1">About Us</div>
                <div className="text-sm text-secondary-text">Our mission and values</div>
              </Link>

              <Link href="/terms" className="block p-4 border border-border rounded-lg hover:bg-card-hover hover:shadow-md transition-all">
                <div className="font-medium text-primary-text mb-1">Terms of Service</div>
                <div className="text-sm text-secondary-text">Usage guidelines</div>
              </Link>

              <Link href="/contact" className="block p-4 border border-border rounded-lg hover:bg-card-hover hover:shadow-md transition-all">
                <div className="font-medium text-primary-text mb-1">Contact</div>
                <div className="text-sm text-secondary-text">Get in touch</div>
              </Link>
            </div>
          </Card>
        </div>

        {/* EFFECTIVE DATE */}
        <section className="max-w-4xl mx-auto mt-12 fade-in-up pb-10">
          <h2 className="heading-2 mb-3">Effective Date</h2>
          <p className="paragraph">This Privacy Policy is effective as of January 22, 2026.</p>
        </section>

      </main>
      <Footer />
    </div>
  )
}
