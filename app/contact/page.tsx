import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: "Contact Calcuzy.app – Reach the Founder Directly",
  description:
    "Have feedback, tool ideas, or questions? Contact Calcuzy.app and speak directly with founder Akshat Thakur. I read and reply to every message personally.",
    keywords: "contact calcuzy, calcuzy support, calcuzy feedback, contact akshat thakur, report bug calcuzy",
  url: "https://calcuzy.app/contact",
  image: "/og-default.png",
})

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Calcuzy.app",
    "url": "https://calcuzy.app/contact",
    "description":
      "Reach out to Calcuzy.app with questions, feedback, suggestions, or tool requests. Messages go directly to the founder.",
    "mainEntity": {
      "@type": "Person",
      "name": "Akshat Thakur",
      "jobTitle": "Founder & Developer of Calcuzy.app",
      "email": "mailto:calcuzyy@gmail.com",
      "sameAs": [
        "https://www.linkedin.com/in/akshatthakur22/",
        "https://github.com/Akshatthakur22",
        "https://x.com/akshatt66612958",
        "https://twitter.com/CalcuzyApp"
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "mailto:calcuzyy@gmail.com",
      "availableLanguage": ["English", "Hindi"]
    }
  }

  return (
    <div className="min-h-screen bg-primary-bg fade-in flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />

      <main className="flex-1 container section-responsive max-w-3xl mx-auto py-12">

        {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden mb-16 shadow-md border border-border bg-card p-8 md:p-14 flex flex-col items-center justify-center transition-all duration-500">
  <div className="relative z-10 flex flex-col items-center text-center">
    <h1 className="font-extrabold text-3xl md:text-5xl tracking-tight text-primary-text mb-4">
      Contact Us
    </h1>

    <p className="paragraph text-lg md:text-xl text-secondary-text max-w-2xl mx-auto mb-6 leading-relaxed">
      If you have feedback, ideas, or questions — I’d genuinely love to hear from you.
      As a solo developer, your message directly shapes the next improvements on Calcuzy.
    </p>

    <blockquote className="italic text-primary-text/80 text-xl font-medium border-l-4 border-border pl-4">
      Your message doesn’t go to a support team — it goes straight to the creator.
    </blockquote>
  </div>
</section>


        {/* Founder Note */}
        <section className="mb-12 fade-in">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📨</span>
            <h2 className="heading-2">A Note From the Founder</h2>
          </div>
          <p className="paragraph mb-2">
            Hi, I’m Akshat — the creator and developer behind Calcuzy.app.<br />
            I read every single message personally, whether it’s feedback, a bug report, or an idea for a new tool.
          </p>
          <p className="paragraph">
            Calcuzy grows because of users like you. Your input helps me decide what to build next.
          </p>
        </section>

        {/* Why Reach Out */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🧑‍💻</span>
            <h2 className="heading-2">Why You Should Reach Out</h2>
          </div>
          <p className="paragraph mb-2">
            Your message helps with:
          </p>
          <ul className="list-disc ml-6 mb-2 text-primary-text/90">
            <li>finding bugs I may not notice</li>
            <li>deciding which new tools to build</li>
            <li>improving UI, speed, and accessibility</li>
            <li>understanding what real users actually need</li>
          </ul>
          <p className="paragraph">
            Even a short message creates a big impact.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="mb-12 fade-in">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📝</span>
            <h2 className="heading-2">Best Ways to Contact Me</h2>
          </div>

          {/* Email */}
          <div className="mb-4">
            <span className="font-semibold text-primary-text flex items-center gap-2 text-lg mb-1">
              📧 Email <span className="text-xs text-secondary-text">(Fastest Response)</span>
            </span>
            <p className="paragraph mb-1">Reach me anytime at:</p>
            <a href="mailto:calcuzyy@gmail.com" className="text-accent underline font-medium text-lg">
              calcuzyy@gmail.com
            </a>

            <div className="mt-4">
              <div className="font-semibold mb-2">Connect with me:</div>
              <ul className="list-disc ml-6">
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/akshatthakur22/"
                    className="text-accent underline"
                    target="_blank"
                    rel="noopener"
                  >
                    Akshat Thakur
                  </a>
                </li>
                <li>
                  GitHub:{" "}
                  <a
                    href="https://github.com/Akshatthakur22"
                    className="text-accent underline"
                    target="_blank"
                    rel="noopener"
                  >
                    Akshatthakur22
                  </a>
                </li>
                <li>
                  Twitter/X:{" "}
                  <a
                    href="https://x.com/akshatt66612958"
                    className="text-accent underline"
                    target="_blank"
                    rel="noopener"
                  >
                    @akshatt66612958
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-sm text-secondary-text mt-1">
              I usually reply within 24–48 hours on business days.
            </p>
          </div>

          {/* Feedback */}
          <div className="mb-4">
            <span className="font-semibold text-primary-text flex items-center gap-2 text-lg mb-1">
              🛠 Tool Feedback / Bug Reports
            </span>
            <p className="paragraph mb-1">To help me fix things faster, please share:</p>
            <ul className="list-disc ml-6 mb-2 text-primary-text/90">
              <li>tool name</li>
              <li>what went wrong</li>
              <li>steps to reproduce</li>
              <li>device & browser (optional)</li>
              <li>screenshot (if possible)</li>
            </ul>
          </div>

          {/* Tool Suggestion */}
          <div className="mb-4">
            <span className="font-semibold text-primary-text flex items-center gap-2 text-lg mb-1">
              💡 Suggest a New Tool
            </span>
            <p className="paragraph mb-1">
              Got an idea for a calculator, converter, or utility?
              I love building tools that come directly from user suggestions.
            </p>
          </div>

          {/* General Questions */}
          <div className="mb-4">
            <span className="font-semibold text-primary-text flex items-center gap-2 text-lg mb-1">
              ❓ General Questions
            </span>
            <p className="paragraph mb-1">You can ask me about:</p>
            <ul className="list-disc ml-6 mb-2 text-primary-text/90">
              <li>privacy</li>
              <li>how Calcuzy works</li>
              <li>how tools are built</li>
              <li>future features</li>
              <li>SEO/tech questions</li>
            </ul>
          </div>
        </section>

        {/* Social Links */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🌐</span>
            <h2 className="heading-2">Social Profiles</h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-2 mb-2">
            <span className="font-semibold text-primary-text flex items-center gap-2 text-lg">
              Twitter:
            </span>
            <a
              href="https://twitter.com/CalcuzyApp"
              target="_blank"
              rel="noopener"
              className="text-accent underline font-medium"
            >
              @CalcuzyApp
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-2 mb-2">
            <span className="font-semibold text-primary-text flex items-center gap-2 text-lg">
              LinkedIn:
            </span>
            <span className="text-secondary-text">Coming soon</span>
          </div>
        </section>

        {/* Community Starter Tools */}
        <section className="mb-12 fade-in">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🤝</span>
            <h2 className="heading-2">Start With These Tools</h2>
          </div>

          <div className="space-y-2">
            <Link href="/age-calculator" className="link-accent block font-medium">
              → Age Calculator
            </Link>
            <Link href="/bmi-calculator" className="link-accent block font-medium">
              → BMI Calculator
            </Link>
            <Link href="/random-number-generator" className="link-accent block font-medium">
              → Random Number Generator
            </Link>
            <Link href="/date-difference" className="link-accent block font-medium">
              → Date Difference Calculator
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-0 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">❓</span>
            <h2 className="heading-2">FAQ</h2>
          </div>

          <div className="space-y-6">
            <div>
              <span className="font-semibold text-primary-text text-lg mb-1">
                How quickly do you respond?
              </span>
              <p className="paragraph mb-1">
                Usually within 24–48 hours. Bug reports are prioritized.
              </p>
            </div>

            <div>
              <span className="font-semibold text-primary-text text-lg mb-1">
                Do you implement every suggestion?
              </span>
              <p className="paragraph mb-1">
                Not all — but I read every message and prioritize tools that help the most people.
              </p>
            </div>

            <div>
              <span className="font-semibold text-primary-text text-lg mb-1">
                Can I request a custom tool?
              </span>
              <p className="paragraph mb-1">
                Yes — especially if you're from a school, college, content team, or organization.
              </p>
            </div>

            <div>
              <span className="font-semibold text-primary-text text-lg mb-1">
                How do you decide what to build next?
              </span>
              <p className="paragraph mb-1">I look at:</p>
              <ul className="list-disc ml-6 mb-2 text-primary-text/90">
                <li>user requests</li>
                <li>search trends</li>
                <li>what’s simple & useful</li>
                <li>what helps the most people</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
