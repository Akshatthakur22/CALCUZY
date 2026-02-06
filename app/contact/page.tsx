import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: "Contact Calcuzy - Get in Touch with Founder",
  description:
    "Have feedback, suggestions, or questions? Contact Calcuzy.app founder Akshat Thakur directly. I personally read and respond to every message about tools, bugs, or feature requests.",
  keywords: "contact calcuzy, akshat thakur contact, calcuzy support, feedback calcuzy, report bug calcuzy, tool suggestions",
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
              Get in Touch
            </h1>
            <p className="paragraph text-lg md:text-xl text-secondary-text max-w-2xl mx-auto mb-6 leading-relaxed">
              Your feedback shapes Calcuzy's evolution. Whether you've found a bug, have a brilliant idea for a new tool, or simply want to share your experience—your message goes directly to me, Akshat Thakur, the founder. I personally read and respond to every single message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
              <div className="flex items-center gap-2 bg-primary-bg px-4 py-2 rounded-full border border-border">
                <span className="text-2xl">📧</span>
                <span className="font-medium">calcuzzyy@gmail.com</span>
              </div>
              <div className="text-sm text-secondary-text">
                Response time: 24-48 hours
              </div>
            </div>
            <blockquote className="italic text-primary-text/80 text-lg font-medium border-l-4 border-border pl-4">
              "No support teams, no automated replies—just genuine human conversation about tools that matter to you."
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

        {/* How to Contact & What to Expect */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📬</span>
            <h2 className="heading-2">How to Contact & What to Expect</h2>
          </div>
          <p className="paragraph mb-2">
            You can reach me directly at <a href="mailto:calcuzyy@gmail.com" className="underline">calcuzyy@gmail.com</a> or through the form below (if available). I aim to reply to all messages within 48 hours, but sometimes it may take a bit longer during busy periods or exam season.<br/>
            <br/>
            Your privacy is important: messages are never shared with third parties, and your contact details are only used to respond to your inquiry. For more, see our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
          </p>
        </section>

        {/* User Feedback & Real Stories */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">💬</span>
            <h2 className="heading-2">What Users Are Saying</h2>
          </div>
          <ul className="list-disc ml-6 mb-2 text-primary-text/90">
            <li>“I use Calcuzy’s calculators for my math homework every week. Thanks for making it so easy!” — <span className="italic">Priya, student</span></li>
            <li>“The privacy-first approach is why I recommend Calcuzy to my friends.” — <span className="italic">Rahul, teacher</span></li>
            <li>“I suggested a new countdown tool and it was live within a month. Amazing support!” — <span className="italic">Sonia, freelancer</span></li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">❓</span>
            <h2 className="heading-2">Frequently Asked Questions</h2>
          </div>
          <div className="prose prose-lg max-w-none space-y-6">
            <h3>How quickly will I get a response?</h3>
            <p>Most messages are answered within 48 hours. During exam season or holidays, it may take up to 5 days, but I always reply personally.</p>
            <h3>Is my message private?</h3>
            <p>Yes. Your message is only seen by me (Akshat) and is never shared or sold. See the <a href="/privacy-policy" className="underline">Privacy Policy</a> for details.</p>
            <h3>Can I suggest a new tool or feature?</h3>
            <p>Absolutely! Many of Calcuzy's tools started as user suggestions. If your idea fits the site's mission, I'll do my best to build it.</p>
            <h3>What if I find a bug?</h3>
            <p>Please report it! Include as much detail as possible (device, browser, steps to reproduce) so I can fix it quickly.</p>
            <h3>Are there other ways to contact you?</h3>
            <p>Yes. You can also reach out via <a href="https://twitter.com/CalcuzyApp" target="_blank" rel="noopener noreferrer" className="underline">Twitter</a>, <a href="https://www.linkedin.com/in/akshatthakur22/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>, or <a href="https://github.com/Akshatthakur22" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>.</p>
            <h3>Do you implement every suggestion?</h3>
            <p>Not all — but I read every message and prioritize tools that help most people.</p>
            <h3>Can I request a custom tool?</h3>
            <p>Yes — especially if you're from a school, college, content team, or organization.</p>
            <h3>How do you decide what to build next?</h3>
            <p>I look at user requests, search trends, what's simple & useful, and what helps most people.</p>
          </div>
        </section>

        {/* Community & Future Plans */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🌱</span>
            <h2 className="heading-2">Building a Community</h2>
          </div>
          <p className="paragraph mb-2">
            Calcuzy isn’t just a set of tools—it’s a growing community of users who care about quality, privacy, and simplicity. Your feedback helps shape the roadmap, and I’m always open to collaborations, guest blog posts, or open-source contributions.
          </p>
        </section>

        {/* Feedback */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🛠</span>
            <h2 className="heading-2">Tool Feedback / Bug Reports</h2>
          </div>
          <p className="paragraph mb-2">To help me fix things faster, please share:</p>
          <ul className="list-disc ml-6 mb-2 text-primary-text/90">
            <li>tool name</li>
            <li>what went wrong</li>
            <li>steps to reproduce</li>
            <li>device & browser (optional)</li>
            <li>screenshot (if possible)</li>
          </ul>
        </section>

        {/* Tool Suggestion */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">💡</span>
            <h2 className="heading-2">Suggest a New Tool</h2>
          </div>
          <p className="paragraph mb-2">
            Got an idea for a calculator, converter, or utility?
            I love building tools that come directly from user suggestions.
          </p>
        </section>

        {/* General Questions */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">❓</span>
            <h2 className="heading-2">General Questions</h2>
          </div>
          <p className="paragraph mb-2">You can ask me about:</p>
          <ul className="list-disc ml-6 mb-2 text-primary-text/90">
            <li>privacy</li>
            <li>how Calcuzy works</li>
            <li>how tools are built</li>
            <li>future features</li>
            <li>SEO/tech questions</li>
          </ul>
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
            <a
              href="https://www.linkedin.com/in/akshatthakur22/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline font-medium"
            >
              Akshat Thakur
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-2 mb-2">
            <span className="font-semibold text-primary-text flex items-center gap-2 text-lg">
              GitHub:
            </span>
            <a
              href="https://github.com/Akshatthakur22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline font-medium"
            >
              @Akshatthakur22
            </a>
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

      </main>

      <Footer />
    </div>
  )
}
