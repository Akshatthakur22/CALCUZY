import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Contact Calcuzy.com - Get in Touch',
  description: 'Contact Calcuzy.com with feedback, suggestions, or questions. We welcome user input and ideas for new tools.',
  keywords: 'contact calcuzy, feedback, suggestions, tool requests',
  url: 'https://calcuzy.com/contact',
  image: '/og-default.png',
})

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Calcuzy.com",
    "description": "Contact Calcuzy.com with feedback, suggestions, or questions",
    "url": "https://calcuzy.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Calcuzy.com",
      "url": "https://calcuzy.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["English"]
      }
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
            Contact Calcuzy.com
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Have feedback, suggestions, or questions? We'd love to hear from you 
            and continuously improve our tools based on user input and experiences.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="grid-responsive-2 gap-8 mb-16">
            <Card animation="fade-in-up" delay={100}>
              <h2 className="heading-2 mb-6">Get in Touch</h2>
              <p className="paragraph mb-6">
                We value your feedback and use it to guide our development priorities. 
                Whether you've found a bug, have an idea for a new tool, or simply 
                want to share your experience, your input helps us make Calcuzy.com better 
                for everyone.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="heading-3 mb-2">Tool Feedback</h3>
                  <p className="paragraph">
                    Report bugs, suggest improvements, or share your experience with our 
                    calculators and countdowns. Your detailed feedback helps us identify issues and 
                    prioritize features that matter most to users.
                  </p>
                </div>
                
                <div>
                  <h3 className="heading-3 mb-2">New Tool Ideas</h3>
                  <p className="paragraph">
                    Have an idea for a tool that would make everyday life easier? 
                    We're always looking for practical utility suggestions that align with our mission 
                    of simplicity and usefulness.
                  </p>
                </div>
                
                <div>
                  <h3 className="heading-3 mb-2">General Questions</h3>
                  <p className="paragraph">
                    Questions about our privacy practices, data handling, or business 
                    operations are welcome. We believe in transparency and happy to explain 
                    how we work and why we make certain decisions.
                  </p>
                </div>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={200}>
              <h2 className="heading-2 mb-6">Contact Form</h2>
              <p className="paragraph mb-6">
                While we don't have a contact form backend, you can reach out through 
                various channels. We read every message and respond to legitimate inquiries 
                as quickly as possible.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="heading-3 mb-2">Email</h3>
                  <p className="paragraph">
                    Send us a detailed message at <strong>contact@calcuzy.com</strong>. 
                    Include specific information about your feedback or suggestion to help us 
                    understand and respond appropriately.
                  </p>
                </div>
                
                <div>
                  <h3 className="heading-3 mb-2">Response Time</h3>
                  <p className="paragraph">
                    We typically respond within 24-48 hours during business days. 
                    While we can't implement every suggestion, we carefully consider all 
                    user input in our planning and development process.
                  </p>
                </div>
                
                <div>
                  <h3 className="heading-3 mb-2">What to Include</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li className="text-secondary-text">Specific tool or feature name</li>
                    <li className="text-secondary-text">Detailed description of the issue or idea</li>
                    <li className="text-secondary-text">Steps to reproduce any bugs (if applicable)</li>
                    <li className="text-secondary-text">Your device and browser information</li>
                    <li className="text-secondary-text">Any screenshots that help explain the issue</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">Other Ways to Connect</h2>
            <div className="grid-responsive-2 gap-6">
              <div>
                <h3 className="heading-3 mb-3">Social Media</h3>
                <p className="paragraph mb-4">
                  Follow us for updates, tips, and announcements about new tools 
                  and features. We share useful content and engage with our community 
                  through social platforms.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-accent hover:text-blue-600 transition-colors">
                    Twitter
                  </Link>
                  <Link href="#" className="text-accent hover:text-blue-600 transition-colors">
                    LinkedIn
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="heading-3 mb-3">Community</h3>
                <p className="paragraph mb-4">
                  Join thousands of users who rely on Calcuzy.com for their everyday 
                  calculation and countdown needs. Share your experiences and learn from others 
                  in our growing community.
                </p>
                <div className="space-y-2">
                  <Link href="/age-calculator" className="link-accent block">
                    → Try our Age Calculator
                  </Link>
                  <Link href="/days-until-christmas" className="link-accent block">
                    → Check the Christmas Countdown
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How quickly do you respond?</h3>
              <p className="paragraph">
                We aim to respond to all inquiries within 24-48 hours during 
                business days. Technical issues and bug reports are typically prioritized 
                and addressed more quickly than general suggestions.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Do you implement every suggestion?</h3>
              <p className="paragraph">
                We carefully review and consider all user feedback, though we can't 
                implement every suggestion due to technical constraints, resource limitations, 
                or conflicts with our mission of simplicity. All ideas are valued and 
                help us understand user needs better.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I request a custom tool?</h3>
              <p className="paragraph">
                Yes! We consider custom tool requests, especially from organizations 
                or educational institutions. Please contact us with detailed requirements 
                and we'll evaluate feasibility based on our mission and resources.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How do you choose which tools to build?</h3>
              <p className="paragraph">
                We prioritize tools based on user demand, search trends, and alignment 
                with our mission of providing simple, practical utilities. Tools that 
                solve everyday problems for the most people receive highest priority.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
