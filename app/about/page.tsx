<>
  <>
    <p className="paragraph text-sm mb-4">Calcuzy is your all-in-one online tools platform. It brings together calculators, generators, converters, finance tools, legal tools, naming tools, and daily utilities — all free, fast, and beautifully designed. It&apos;s the only site you need for smart calculations and daily tasks.</p>
    <p className="paragraph text-sm mb-4">No sign-up, no data tracking, no hidden fees. Calcuzy&apos;s mission is to make advanced tools accessible to everyone, everywhere, for free.</p>
  </>
</>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: "About Calcuzy.app – Story, Mission & Creator",
  description:
    "Calcuzy.app was created by Akshat Thakur, a 3rd-year CSE student who believes in building simple, fast and privacy-friendly online tools. Learn the story behind Calcuzy and its mission.",
  keywords: "about calcuzy, calcuzy story, who created calcuzy, online tools mission, akshat thakur, utility tools",
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
      "url": "https://calcuzy.app",
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
        {/* Hero Section */}
        <section className="text-center mb-16 slide-up">
          <div className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
            <span role="img" aria-label="star"></span> About Us Page
          </div>
          <p className="paragraph text-lg max-w-2xl mx-auto mb-6">
            Calcuzy.app is a simple idea that started on a random late night in my college room.<br/>
            I&apos;m Akshat Thakur, a 3rd-year B.Tech CSE student who enjoys building things that are clean, fast, and genuinely helpful. Calcuzy didn&apos;t come from a big startup plan — it came from curiosity, experimentation, and the thought:
          </p>
          <blockquote className="italic text-primary-text/80 text-xl font-medium mb-4">
            &quot;What if simple tools, when done right, can actually reach thousands of people?&quot;
          </blockquote>
          <p className="paragraph text-lg max-w-2xl mx-auto mb-2">
            That one thought led to a few hours of coding…<br/>and Calcuzy was born.
          </p>
        </section>

        {/* Who I Am */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🧑‍💻</span>
            <h2 className="heading-2">Who I Am</h2>
          </div>
          <p className="paragraph mb-2">
            Hi, I&apos;m Akshat, the solo developer behind Calcuzy.app.<br/>
            I&apos;ve been learning web development for less than a year, and this project became my playground to explore:
          </p>
          <ul className="list-disc ml-6 mb-2 text-primary-text/90">
            <li>SEO</li>
            <li>Google AdSense monetization</li>
            <li>scaling a simple idea</li>
            <li>understanding how people use tools</li>
            <li>and building something that lasts</li>
          </ul>
          <p className="paragraph">
            &quot;Calcuzy.app is built by Akshat Thakur, a solo developer passionate about creating fast, simple, privacy-friendly online tools.&quot;,
          </p>
        </section>

        {/* Why I Built Calcuzy */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
              &quot;A 3rd-year B.Tech CSE student who enjoys building clean, fast and useful tools for the internet.&quot;
            <h2 className="heading-2">Why I Built Calcuzy</h2>
          </div>
          <p className="paragraph mb-2">
            Calcuzy didn’t start because the world needed “another calculator website.”<br/>
            It started because I wanted to learn — truly learn — how things like SEO, ads, traffic, UI, and user behaviour work in the real world.
          </p>
          <p className="paragraph mb-2">I built it because:</p>
          <ul className="list-disc ml-6 mb-2 text-primary-text/90">
            <li>I wanted a long-term project that grows over time</li>
            <li>I wanted to build clean, useful tools people can rely on</li>
            <li>I wanted to see how far a simple idea can go with consistent work</li>
            <li>And because I love the challenge of creating something from scratch</li>
          </ul>
          <p className="paragraph">
            Calcuzy is not a one-month project — it’s something I plan to build slowly, improve constantly, and grow into a real online utility hub.
          </p>
        </section>

        {/* What Calcuzy Offers */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🧰</span>
            <h2 className="heading-2">What Calcuzy Offers</h2>
          </div>
          <p className="paragraph mb-2">
            Calcuzy is a collection of everyday tools — calculators, countdowns, converters, generators — designed to be:
          </p>
          <ul className="list-disc ml-6 mb-2 text-primary-text/90">
            <li>fast</li>
            <li>simple</li>
            <li>minimal</li>
            <li>distraction-free</li>
            <li>and available on any device</li>
          </ul>
          <p className="paragraph mb-2">
            There are no logins, no complicated interfaces, no tracking beyond what’s necessary.<br/>
            Just useful tools that work instantly.
          </p>
          <p className="paragraph">
            Whether someone wants to calculate age, convert units, check BMI, generate a random number, or track an upcoming date — Calcuzy aims to make these tasks effortless.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🚀</span>
            <h2 className="heading-2">Our Mission</h2>
          </div>
          <ul className="list-disc ml-6 mb-2 text-primary-text/90">
            <li>Become a reliable online toolbox for everyday users</li>
            <li>Keep everything free forever</li>
            <li>Prioritize privacy — no personal data collection</li>
            <li>Make tools that work fast even on slower devices and networks</li>
            <li>Build trust through simplicity and accuracy</li>
          </ul>
          <p className="paragraph">
            I want Calcuzy to feel like a place people can depend on — not filled with pop-ups or distractions.<br/>
            Just clear tools that do their job.
          </p>
        </section>

        {/* What Makes Calcuzy Different */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">❤️</span>
            <h2 className="heading-2">What Makes Calcuzy Different</h2>
          </div>
          <ul className="list-disc ml-6 mb-2 text-primary-text/90">
            <li>Every tool is tested manually</li>
            <li>Feedback is taken seriously</li>
            <li>Updates happen regularly</li>
            <li>No dark patterns or forced interactions</li>
            <li>Ads will never ruin the user experience</li>
            <li>Everything remains free and accessible</li>
          </ul>
          <p className="paragraph">
            I&apos;m not trying to make Calcuzy &quot;viral&quot; overnight.<br/>
            I&apos;m trying to make it useful and trustworthy, even if growth is slow.
          </p>
        </section>

        {/* Built by One Person */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🛠️</span>
            <h2 className="heading-2">Built by One Person</h2>
          </div>
          <p className="paragraph mb-2">
            Calcuzy is a solo project — designed, developed, maintained, and improved by me alone.<br/>
            From coding to content to UI to SEO… it’s all done by a single pair of hands.
          </p>
          <ul className="list-disc ml-6 mb-2 text-primary-text/90">
            <li>decisions are fast</li>
            <li>updates are personal</li>
            <li>and every improvement is intentional</li>
          </ul>
        </section>

        {/* Story */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🌙</span>
            <h2 className="heading-2">The Story Behind Calcuzy</h2>
          </div>
          <p className="paragraph mb-2">
            One random night, while experimenting with small ideas, I built a basic calculator tool.<br/>
            Then another.<br/>
            Then added a countdown.<br/>
            Then a generator.
          </p>
          <p className="paragraph mb-2">
            A few hours of curiosity turned into a real platform. That night made me realize:
          </p>
          <blockquote className="italic text-primary-text/80 text-xl font-medium mb-4">
            &quot;Simple things, when polished with care, become powerful.&quot;
          </blockquote>
          <p className="paragraph">
            And that’s exactly how Calcuzy continues to grow.
          </p>
        </section>

        {/* Message from Founder */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🗣️</span>
            <h2 className="heading-2">A Message From the Founder</h2>
          </div>
          <p className="paragraph mb-2">
            Hi, I&apos;m Akshat.<br/>
            I created Calcuzy as a personal project to learn, experiment, and build something meaningful.<br/>
            I believe everyday tools should be fast, simple, and honest — without forcing you to sign up or share data.
          </p>
          <p className="paragraph">
            If you&apos;re using Calcuzy right now, thank you.<br/>
            Your visits, feedback, and support motivate me to keep improving it every single day.
          </p>
        </section>

        {/* Looking Ahead */}
        <section className="mb-12 fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🙌</span>
            <h2 className="heading-2">Looking Ahead</h2>
          </div>
          <p className="paragraph mb-2">
            Calcuzy is still growing.<br/>
            More tools, cleaner UI, better performance, and more features are on the way.
          </p>
          <p className="paragraph">
            My goal is to turn Calcuzy into one of the most trusted free tool platforms online — built slowly, honestly, and with care.<br/>
            And I&apos;m excited to keep building.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
