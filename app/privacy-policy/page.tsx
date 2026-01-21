import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Privacy Policy - Calcuzy.com',
  description: 'Read Calcuzy.com privacy policy. Learn how we protect your data, ensure complete privacy, and handle information securely.',
  keywords: 'privacy policy, data protection, user privacy, calcuzy privacy',
  url: 'https://calcuzy.com/privacy-policy',
  image: '/og-default.png',
})

export default function PrivacyPolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Calcuzy.com privacy policy explaining data protection and user privacy practices",
    "url": "https://calcuzy.com/privacy-policy",
    "mainEntity": {
      "@type": "Organization",
      "name": "Calcuzy.com",
      "url": "https://calcuzy.com"
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
            Privacy Policy
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            At Calcuzy.com, your privacy is our highest priority. Learn how we 
            protect your data and ensure complete anonymity when using our tools.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="heading-2 mb-6">Information We Collect</h2>
              <p className="paragraph">
                <strong>Calcuzy.com does not collect personal information.</strong> Our tools 
                are designed to work entirely in your browser without requiring registration, 
                email addresses, or any personal data. All calculations and processing 
                happen locally on your device, ensuring complete privacy.
              </p>
              <p className="paragraph">
                We may automatically collect certain technical information through our web hosting 
                service, such as IP addresses, browser types, and device information. 
                This data is aggregated and anonymous, used solely for improving our 
                services and ensuring optimal performance.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">How We Use Information</h2>
              <p className="paragraph">
                Anonymous technical data helps us understand how users interact with our 
                tools, which features are most popular, and how we can improve the user 
                experience. This information is never used to identify individual users or 
                combined with any personal data.
              </p>
              <p className="paragraph">
                We use Google Analytics to analyze website traffic patterns and user behavior 
                in aggregate form. This helps us identify which tools are most valuable 
                and where we should focus our development efforts. No individual user 
                data is ever shared with Google.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Cookies and Local Storage</h2>
              <p className="paragraph">
                Our tools may use browser cookies and local storage to remember your preferences 
                and settings. This enhances your experience by saving calculation history, 
                favorite tools, or display preferences. All storage is local to your 
                browser and under your control.
              </p>
              <p className="paragraph">
                You can control or delete cookies and local data through your browser 
                settings at any time. Our tools will continue to function even if 
                you decline cookies, though some personalized features may be 
                limited.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Third-Party Services</h2>
              <p className="paragraph">
                Calcuzy.com displays advertisements through Google AdSense to keep our 
                tools free. Google may place cookies for ad targeting and analytics 
                purposes. We have no control over these third-party cookies.
              </p>
              <p className="paragraph">
                Some tools may include links to external websites for additional information 
                or resources. We are not responsible for the privacy practices of 
                these external sites and encourage you to review their privacy policies.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Data Security</h2>
              <p className="paragraph">
                We implement appropriate security measures to protect our website and services. 
                All data transmission is encrypted using industry-standard protocols. We 
                regularly review our security practices and update them as needed.
              </p>
              <p className="paragraph">
                Since we don't collect personal data and all processing happens locally, 
                there is minimal risk to your privacy. Your information never leaves 
                your device unless you choose to share it.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Your Rights</h2>
              <p className="paragraph">
                You have the right to access our tools without providing any personal 
                information. You can use our services anonymously and delete any local 
                data at any time.
              </p>
              <p className="paragraph">
                You have the right to understand what information is collected and how it's 
                used. This privacy policy is designed to be transparent about our 
                practices and your rights as a user.
              </p>
              <p className="paragraph">
                You have the right to contact us with questions or concerns about this 
                privacy policy. We're committed to addressing any issues promptly 
                and ensuring your trust in our services.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Children's Privacy</h2>
              <p className="paragraph">
                Our services are not directed to children under 13, and we do not 
                knowingly collect personal information from minors. We encourage parents to 
                monitor their children's online activities and educate them about privacy 
                best practices.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Policy Updates</h2>
              <p className="paragraph">
                We may update this privacy policy occasionally to reflect changes in our 
                practices or legal requirements. Significant changes will be highlighted on 
                our website, and we encourage users to review this policy periodically.
              </p>
              <p className="paragraph">
                This privacy policy was last updated on January 22, 2026, and 
                reflects our current practices regarding data collection, use, and 
                protection on Calcuzy.com.
              </p>
            </div>
          </div>

          <Card animation="fade-in-up" delay={200}>
            <h2 className="heading-2 mb-6">Contact Us About Privacy</h2>
            <p className="paragraph">
              If you have questions or concerns about this privacy policy or our data 
              practices, please contact us at <strong>privacy@calcuzy.com</strong>. We're 
              committed to addressing privacy issues promptly and transparently.
            </p>
            
            <div className="mt-6">
              <h3 className="heading-3 mb-3">Related Pages</h3>
              <div className="grid-responsive-2 gap-4">
                <Link href="/about" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
                  <div className="font-medium text-primary-text mb-1">About Us</div>
                  <div className="text-sm text-secondary-text">Our mission and values</div>
                </Link>
                <Link href="/terms" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
                  <div className="font-medium text-primary-text mb-1">Terms of Service</div>
                  <div className="text-sm text-secondary-text">Usage guidelines</div>
                </Link>
                <Link href="/contact" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
                  <div className="font-medium text-primary-text mb-1">Contact</div>
                  <div className="text-sm text-secondary-text">Get in touch</div>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-6">Effective Date</h2>
          <p className="paragraph">
            This privacy policy is effective as of January 22, 2026, and governs 
            your use of Calcuzy.com services. By continuing to use our tools, 
            you acknowledge that you have read, understood, and agree to be bound by 
            this policy.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
