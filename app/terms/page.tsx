import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Terms of Service - Calcuzy.com',
  description: 'Read Calcuzy.com terms of service. Learn about acceptable use, limitations, disclaimers, and user responsibilities.',
  keywords: 'terms of service, calcuzy terms, acceptable use, user agreement',
  url: 'https://calcuzy.com/terms',
  image: '/og-default.png',
})

export default function TermsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Calcuzy.com terms of service explaining acceptable use, limitations, and user responsibilities",
    "url": "https://calcuzy.com/terms",
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
            Terms of Service
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Please read these terms carefully before using Calcuzy.com tools. 
            Your continued use signifies acceptance of these conditions.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="heading-2 mb-6">Acceptance of Terms</h2>
              <p className="paragraph">
                By accessing or using Calcuzy.com, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our 
                services.
              </p>
              <p className="paragraph">
                These terms apply to all users of Calcuzy.com and all tools 
                and services provided. Your use of our services constitutes acceptance 
                of these terms and our Privacy Policy, which is incorporated 
                by reference.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Service Description</h2>
              <p className="paragraph">
                Calcuzy.com provides free online tools and utilities including calculators, 
                countdown timers, name generators, and quote collections. All services 
                are provided "as is" without warranties of any kind.
              </p>
              <p className="paragraph">
                We reserve the right to modify, suspend, or discontinue any service 
                at any time. We may also update or change these terms 
                with notice to users.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">User Responsibilities</h2>
              <p className="paragraph">
                Users are responsible for maintaining the security of their devices and 
                internet connections. You must use our services in compliance with all 
                applicable laws and regulations.
              </p>
              <p className="paragraph">
                You agree not to use our services for any illegal, harmful, or 
                unauthorized purposes. This includes attempting to gain unauthorized 
                access to our systems or interfering with other users.
              </p>
              <p className="paragraph">
                You are responsible for any content you create or share using our 
                tools. We are not responsible for user-generated content or its 
                consequences.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Service Availability</h2>
              <p className="paragraph">
                We strive to maintain high service availability but cannot guarantee 
                uninterrupted access. Services may be temporarily unavailable for 
                maintenance, updates, or technical issues beyond our control.
              </p>
              <p className="paragraph">
                We are not liable for any losses, damages, or inconvenience 
                resulting from service unavailability or technical problems.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Intellectual Property</h2>
              <p className="paragraph">
                All content, features, and functionality on Calcuzy.com are owned by 
                us or our licensors and protected by copyright, trademark, and 
                other intellectual property laws.
              </p>
              <p className="paragraph">
                You may not copy, modify, distribute, or create derivative works 
                of our content without explicit permission. All tools are provided 
                for personal use only.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Disclaimers</h2>
              <p className="paragraph">
                Our tools are provided for informational purposes only. While we strive for 
                accuracy, we make no warranties about the completeness or reliability 
                of our services.
              </p>
              <p className="paragraph">
                Professional advice should not be based solely on our tools. Consult 
                qualified professionals for specific situations requiring expert 
                guidance.
              </p>
              <p className="paragraph">
                We are not responsible for the content of external websites linked 
                from our services. External links are provided for convenience 
                only.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Limitation of Liability</h2>
              <p className="paragraph">
                To the fullest extent permitted by law, Calcuzy.com shall not be 
                liable for any indirect, incidental, special, or consequential 
                damages arising from your use of our services.
              </p>
              <p className="paragraph">
                Your sole remedy for dissatisfaction with our services is to 
                discontinue use. Some jurisdictions may not allow the 
                exclusion or limitation of certain damages.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Governing Law</h2>
              <p className="paragraph">
                These terms are governed by and construed in accordance with the laws 
                of the jurisdiction where you access our services, without regard 
                to conflict of law provisions.
              </p>
              <p className="paragraph">
                Any legal action arising from these terms shall be subject to the 
                exclusive jurisdiction of the courts located in the governing 
                jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Changes to Terms</h2>
              <p className="paragraph">
                We reserve the right to modify these terms at any time. Changes 
                will be effective immediately upon posting on our website. Your 
                continued use of services constitutes acceptance of any modified 
                terms.
              </p>
              <p className="paragraph">
                Material changes to these terms will be highlighted on our website 
                and may be communicated through email or service announcements. 
                We encourage users to review these terms periodically.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Contact Information</h2>
              <p className="paragraph">
                Questions about these terms should be directed to 
                <strong>legal@calcuzy.com</strong>. We will respond to 
                legitimate inquiries in a timely manner.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Severability</h2>
              <p className="paragraph">
                If any provision of these terms is found to be unenforceable, the 
                remaining provisions will continue in full force and effect. This does not 
                waive our right to enforce other provisions.
              </p>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Entire Agreement</h2>
              <p className="paragraph">
                These terms, along with our Privacy Policy, constitute the entire 
                agreement between you and Calcuzy.com regarding your use of our 
                services.
              </p>
              <p className="paragraph">
                This agreement supersedes all prior agreements between you and 
                Calcuzy.com regarding your use of our services.
              </p>
            </div>
          </div>

          <Card animation="fade-in-up" delay={200}>
            <h2 className="heading-2 mb-6">Last Updated</h2>
            <p className="paragraph">
              These Terms of Service were last updated on January 22, 2026. 
              Calcuzy.com may update these terms periodically to reflect changes 
              in our practices, services, or applicable laws.
            </p>
            
            <div className="mt-6">
              <h3 className="heading-3 mb-3">Related Documents</h3>
              <div className="grid-responsive-2 gap-4">
                <Link href="/privacy-policy" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
                  <div className="font-medium text-primary-text mb-1">Privacy Policy</div>
                  <div className="text-sm text-secondary-text">Data protection</div>
                </Link>
                <Link href="/about" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring">
                  <div className="font-medium text-primary-text mb-1">About Us</div>
                  <div className="text-sm text-secondary-text">Our mission</div>
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
            These terms are effective as of January 22, 2026, and govern 
            your use of Calcuzy.com services. By continuing to use our 
            tools, you acknowledge that you have read, understood, and agree 
            to be bound by this agreement.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
