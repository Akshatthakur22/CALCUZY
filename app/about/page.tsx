import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { createMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = createMetadata({
  title: "About Calcuzy – The Story, Mission & Team Behind Your Free Online Toolbox",
  description:
    "Learn about Calcuzy.app, the vision of founder Akshat Thakur. Discover our mission, values, and how a solo developer built 40+ free, privacy-first calculators, converters, and everyday tools for everyone.",
  keywords: "about calcuzy, calcuzy founder, akshat thakur, free calculators, online tools, privacy-first, mission, story, toolbox, utility platform",
  url: "https://calcuzy.app/about",
  image: "/og-default.png",
})

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Calcuzy.app",
    "url": "https://calcuzy.app/about",
    "description":
      "Calcuzy.app is built by Akshat Thakur, a solo developer passionate about creating fast, simple, privacy-friendly online tools.",
    "mainEntity": {
      "@type": "Person",
      "name": "Akshat Thakur",
      "jobTitle": "Founder & Developer",
      "url": "https://calcuzy.app/about",
      "description":
        "A 3rd-year B.Tech CSE student who enjoys building clean, fast and useful tools for the internet."
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-2 justify-center">
          <span role="img" aria-label="star">⭐</span> About Calcuzy.app
        </h1>

        {/* Introduction & Founder Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How a Late-Night Idea Became a Toolbox for Thousands</h2>
          <p className="mb-4 text-lg">
            Calcuzy.app started on a random night in my college dorm room. I’m <strong>Akshat Thakur</strong>, a 3rd-year B.Tech CSE student who loves building things that are clean, fast, and genuinely helpful. There was no big startup plan—just a simple question: <em>“What if simple tools, when done right, could actually help thousands of people?”</em>
          </p>
          <p className="mb-4">
            That question led to a few hours of coding, a lot of curiosity, and the birth of Calcuzy. What began as a playground for learning web development, SEO, and Google AdSense has grown into a platform with 40+ free tools used by students, professionals, and everyday people worldwide.
          </p>
          <blockquote className="italic text-primary-text/80 text-xl font-medium mb-4 border-l-4 border-border pl-4">
            “Simple things, when polished with care, become powerful.”
          </blockquote>
        </section>

        {/* Who I Am */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Meet the Maker</h2>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🧑‍💻</span>
            <span className="font-bold">Akshat Thakur – Founder & Solo Developer</span>
          </div>
          <p className="mb-4">
            I’ve been learning web development for less than a year, and Calcuzy became my hands-on project to explore SEO, AdSense, scaling, and building something that lasts. Every line of code, every UI tweak, and every new tool is a step in my journey to prove that small things done right can become big.
          </p>
          <h3 className="text-xl font-semibold mb-2">Why I Built Calcuzy</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>I wanted a long-term project that grows over time</li>
            <li>I wanted to build clean, useful tools people can rely on</li>
            <li>I wanted to see how far a simple idea can go with consistent work</li>
            <li>I love the challenge of creating something from scratch</li>
          </ul>
          <p className="mb-4">
            Calcuzy is not a one-month project—it’s something I plan to build slowly, improve constantly, and grow into a real online utility hub.
          </p>
        </section>

        {/* What Calcuzy Offers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What Calcuzy Offers</h2>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🧰</span>
            <span className="font-bold">A Growing Collection of Everyday Tools</span>
          </div>
          <p className="mb-4">
            Calcuzy is a collection of calculators, countdowns, converters, and generators—designed to be <strong>fast</strong>, <strong>simple</strong>, <strong>minimal</strong>, and <strong>distraction-free</strong>. No logins, no complicated interfaces, no tracking beyond what’s necessary. Just useful tools that work instantly, on any device.
          </p>
          <h3 className="text-xl font-semibold mb-2">Real-World Examples</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Calculate your exact age for a passport application in seconds</li>
            <li>Convert units for a science project without ads or pop-ups</li>
            <li>Check your BMI before a doctor’s appointment—privately</li>
            <li>Generate a strong password for a new account</li>
            <li>Track days until your next big event or holiday</li>
          </ul>
          <p className="mb-4">
            Whether you’re a student, a professional, or just someone who loves simple tools, Calcuzy aims to make everyday tasks effortless.
          </p>
        </section>

        {/* Mission & Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission & Values</h2>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🚀</span>
            <span className="font-bold">A Toolbox You Can Trust</span>
          </div>
          <ul className="list-disc ml-6 mb-4">
            <li>Become a reliable online toolbox for everyday users</li>
            <li>Keep everything free forever</li>
            <li>Prioritize privacy—no personal data collection</li>
            <li>Make tools that work fast even on slow devices/networks</li>
            <li>Build trust through simplicity and accuracy</li>
          </ul>
          <p className="mb-4">
            I want Calcuzy to feel like a place you can depend on—not filled with pop-ups or distractions. Just clear tools that do their job.
          </p>
        </section>

        {/* What Makes Calcuzy Different */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What Makes Calcuzy Different?</h2>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">❤️</span>
            <span className="font-bold">Built for People, Not Just Pageviews</span>
          </div>
          <ul className="list-disc ml-6 mb-4">
            <li>Every tool is tested manually</li>
            <li>Feedback is taken seriously—many features come from user suggestions</li>
            <li>Updates happen regularly</li>
            <li>No dark patterns or forced interactions</li>
            <li>Ads will never ruin the user experience</li>
            <li>Everything remains free and accessible</li>
          </ul>
          <p className="mb-4">
            I’m not trying to make Calcuzy “viral” overnight. I’m trying to make it useful and trustworthy, even if growth is slow.
          </p>
        </section>

        {/* Solo Project */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">A Solo Project, Built With Care</h2>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🛠️</span>
            <span className="font-bold">One Person, Many Roles</span>
          </div>
          <p className="mb-4">
            Calcuzy is designed, developed, maintained, and improved by me alone. From coding to content to UI to SEO—it’s all done by a single pair of hands. That means decisions are fast, updates are personal, and every improvement is intentional.
          </p>
        </section>

        {/* The Story Behind Calcuzy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Story Behind Calcuzy</h2>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🌙</span>
            <span className="font-bold">From Curiosity to Community</span>
          </div>
          <p className="mb-4">
            One random night, I built a basic calculator tool. Then another. Then a countdown. Then a generator. A few hours of curiosity turned into a real platform. That night made me realize: <em>“Simple things, when polished with care, become powerful.”</em> And that’s exactly how Calcuzy continues to grow.
          </p>
        </section>

        {/* Message from the Founder */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">A Message From the Founder</h2>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🗣️</span>
            <span className="font-bold">Thank You for Being Here</span>
          </div>
          <p className="mb-4">
            Hi, I’m Akshat. I created Calcuzy as a personal project to learn, experiment, and build something meaningful. I believe everyday tools should be fast, simple, and honest—without forcing you to sign up or share data. If you’re using Calcuzy right now, thank you. Your visits, feedback, and support motivate me to keep improving it every single day.
          </p>
        </section>

        {/* Looking Ahead */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Looking Ahead</h2>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🙌</span>
            <span className="font-bold">The Future of Calcuzy</span>
          </div>
          <p className="mb-4">
            Calcuzy is still growing. More tools, cleaner UI, better performance, and new features are on the way. My goal is to turn Calcuzy into one of the most trusted free tool platforms online—built slowly, honestly, and with care. And I’m excited to keep building.
          </p>
        </section>

        {/* Internal Links Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <Link href="/">Home</Link> – Discover all our free tools
            </li>
            <li>
              <Link href="/about">About Calcuzy</Link> – Learn more about our story
            </li>
            <li>
              <Link href="/contact">Contact</Link> – Get in touch or share feedback
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link> – See how we protect your data
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link> – Read our terms and conditions
            </li>
            <li>
              <Link href="/tools">All Tools</Link> – Browse the complete toolbox
            </li>
            <li>
              <Link href="/bmi-calculator">BMI Calculator</Link> – Try one of our most popular tools
            </li>
            <li>
              <Link href="/age-calculator">Age Calculator</Link> – Calculate your age instantly
            </li>
            <li>
              <Link href="/unit-converter">Unit Converter</Link> – Convert measurements easily
            </li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">What makes Calcuzy different from other calculator sites?</h3>
              <p>Calcuzy is built by a real person, not a faceless company. Every tool is tested, feedback is valued, and there are no dark patterns or forced signups. The focus is on speed, privacy, and usefulness.</p>
            </div>
            <div>
              <h3 className="font-semibold">Is Calcuzy really free? Will it stay free?</h3>
              <p>Yes! Calcuzy is 100% free to use and will always remain free. The goal is to help as many people as possible, not to lock features behind paywalls.</p>
            </div>
            <div>
              <h3 className="font-semibold">How do you keep my data private?</h3>
              <p>Calcuzy collects no personal data. There are no logins, no tracking beyond basic analytics, and no selling of user information. See our <Link href="/privacy-policy">Privacy Policy</Link> for details.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can I suggest a new tool or feature?</h3>
              <p>Absolutely! Visit the <Link href="/contact">Contact</Link> page to share your ideas. Many of Calcuzy’s best features come from user suggestions.</p>
            </div>
            <div>
              <h3 className="font-semibold">Who is behind Calcuzy?</h3>
              <p>Calcuzy is created and maintained by Akshat Thakur, a solo developer and student. Learn more on this <Link href="/about">About</Link> page.</p>
            </div>
            <div>
              <h3 className="font-semibold">How often are tools updated?</h3>
              <p>Tools are updated regularly based on user feedback, new ideas, and improvements in technology. You can always check the <Link href="/tools">All Tools</Link> page for the latest additions.</p>
            </div>
            <div>
              <h3 className="font-semibold">Are there ads on Calcuzy?</h3>
              <p>Yes, but ads are minimal and never intrusive. They help keep the platform free for everyone, but will never ruin your experience.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can I use Calcuzy on my phone?</h3>
              <p>Definitely! Calcuzy is designed to be fast and responsive on all devices—phones, tablets, and desktops.</p>
            </div>
            <div>
              <h3 className="font-semibold">What if I find a bug or issue?</h3>
              <p>Please <Link href="/contact">contact me</Link> right away. I appreciate every report and fix issues as quickly as possible.</p>
            </div>
            <div>
              <h3 className="font-semibold">How can I support Calcuzy?</h3>
              <p>Share Calcuzy with friends, give feedback, or just keep using the tools! Your support means the world to me.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
