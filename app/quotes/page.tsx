import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Inspirational Quotes',
  description:
    'Curated motivational, love, graduation, and holiday quotes for cards and captions. Use as a starting point—add your own words for messages that feel genuine.',
  keywords:
    'inspirational quotes, motivational quotes, love quotes, graduation quotes, christmas quotes, quote ideas',
  url: 'https://calcuzy.app/quotes',
  image: '/og/og-quotes.png',
})

const quoteCategories = [
  {
    href: '/motivational-quotes',
    icon: '💪',
    title: 'Motivational Quotes',
    description: 'Short lines for tough days, goals, and habit reminders.',
    gradient: 'from-orange-50 to-amber-50',
    iconBg: 'bg-orange-100',
  },
  {
    href: '/love-quotes',
    icon: '❤️',
    title: 'Love Quotes',
    description: 'Romantic and partnership quotes—best paired with something personal.',
    gradient: 'from-red-50 to-pink-50',
    iconBg: 'bg-red-100',
  },
  {
    href: '/graduation-quotes',
    icon: '🎓',
    title: 'Graduation Quotes',
    description: 'Lines for cards, speeches, and social posts when someone finishes a chapter.',
    gradient: 'from-blue-50 to-indigo-50',
    iconBg: 'bg-blue-100',
  },
  {
    href: '/christmas-quotes',
    icon: '🎄',
    title: 'Christmas Quotes',
    description: 'Holiday messages for cards, newsletters, and family group chats.',
    gradient: 'from-green-50 to-emerald-50',
    iconBg: 'bg-green-100',
  },
  {
    href: '/aesthetic-quotes',
    icon: '✨',
    title: 'Aesthetic Quotes',
    description: 'Shorter lines that work in captions when you need something visual and calm.',
    gradient: 'from-purple-50 to-pink-50',
    iconBg: 'bg-purple-100',
  },
]

export default function QuotesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Inspirational Quotes',
    description: 'Curated quote collections for personal messages and inspiration',
    url: 'https://calcuzy.app/quotes',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: quoteCategories.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        url: `https://calcuzy.app${item.href}`,
      })),
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <main>
        <section className="relative container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Inspirational Quotes
            </h1>
            <p className="text-slate-600 text-lg mb-8">
              Short quote lists for cards, captions, and speeches. Attribution is included when commonly cited—verify
              before printing programs or selling products with quoted text.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900">Using quotes well</h2>
          <p className="text-slate-600">
            A quote works when it connects to something specific: a memory, an inside joke, or what you admire about
            someone. One line plus two sentences you wrote usually beats a long block of famous words.
          </p>
          <h3 className="text-lg font-semibold text-slate-900 mt-6">Attribution and copyright</h3>
          <ul className="text-slate-600 space-y-2">
            <li>Personal texts and journals: credit authors when you know them.</li>
            <li>Wedding programs and paid products: double-check licensing—many quotes are public domain, many are not.</li>
            <li>Social posts: tag the author when the platform allows; misattribution is common online.</li>
          </ul>
          <h3 className="text-lg font-semibold text-slate-900 mt-6">When to skip a quote</h3>
          <p className="text-slate-600">
            Condolence notes, apology messages, and difficult conversations often land better in plain language. If
            the quote could apply to anyone, it may not say enough about the person you are addressing.
          </p>
        </section>

        <AdUnit slot={1} format="horizontal" />

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {quoteCategories.map((category) => (
                <Link key={category.href} href={category.href} className="group">
                  <div
                    className={`bg-gradient-to-br ${category.gradient} rounded-2xl p-5 md:p-6 border border-slate-100 hover:shadow-md transition-all`}
                  >
                    <div
                      className={`w-12 h-12 ${category.iconBg} rounded-xl flex items-center justify-center mb-4 text-2xl`}
                    >
                      {category.icon}
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900 mb-2">{category.title}</h2>
                    <p className="text-sm text-slate-500">{category.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-slate-50/50">
          <div className="container mx-auto px-4 max-w-3xl text-sm text-slate-600">
            <p>
              Calcuzy&apos;s main focus is calculators and practical tools—see the{' '}
              <Link href="/tools/" className="text-blue-600 hover:underline">
                tools directory
              </Link>{' '}
              and{' '}
              <Link href="/blog/" className="text-blue-600 hover:underline">
                blog guides
              </Link>{' '}
              for in-depth educational content.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
