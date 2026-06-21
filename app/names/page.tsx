import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Baby Names & Pet Names',
  description:
    'Curated baby and pet name lists for brainstorming. Say names aloud, check spelling, and read our naming tips—not official registries or popularity rankings.',
  keywords:
    'baby names, pet names, dog names, cat names, last names, name ideas, baby boy names, baby girl names',
  url: 'https://calcuzy.app/names',
  image: '/og/og-names.png',
})

const nameCategories = [
  {
    href: '/baby-boy-names',
    icon: '👶',
    title: 'Baby Boy Names',
    description: 'Traditional and modern boy names to shortlist and test with your last name.',
    gradient: 'from-blue-50 to-cyan-50',
    iconBg: 'bg-blue-100',
  },
  {
    href: '/baby-girl-names',
    icon: '👧',
    title: 'Baby Girl Names',
    description: 'Girl names from classic to contemporary—use as inspiration, not a ranking.',
    gradient: 'from-pink-50 to-rose-50',
    iconBg: 'bg-pink-100',
  },
  {
    href: '/dog-names',
    icon: '🐕',
    title: 'Dog Names',
    description: 'Short, strong, and playful names that are easy to call at the park.',
    gradient: 'from-amber-50 to-orange-50',
    iconBg: 'bg-amber-100',
  },
  {
    href: '/cat-names',
    icon: '🐱',
    title: 'Cat Names',
    description: 'Ideas for indoor cats, kittens, and rescues—match personality, not just breed.',
    gradient: 'from-purple-50 to-violet-50',
    iconBg: 'bg-purple-100',
  },
  {
    href: '/american-last-names',
    icon: '🇺🇸',
    title: 'American Last Names',
    description: 'Common U.S. surnames for writing, genealogy notes, or character names.',
    gradient: 'from-slate-50 to-blue-50',
    iconBg: 'bg-slate-100',
  },
]

export default function NamesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Baby Names & Pet Names',
    description: 'Curated name ideas for babies, pets, and family research',
    url: 'https://calcuzy.app/names',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: nameCategories.map((item, index) => ({
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
        <section className="relative overflow-hidden bg-white">
          <div className="relative container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-16">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Baby Names & Pet Names
              </h1>
              <div className="prose prose-lg max-w-none text-left md:text-center mb-8">
                <p className="text-slate-600">
                  Choosing a name is personal. These lists are starting points—curated ideas you can say aloud,
                  spell-check, and compare with your partner or family. They are not official registries, SSA
                  popularity charts, or cultural authority on meaning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900">How to use these lists</h2>
          <ol className="text-slate-600 space-y-2">
            <li>
              <strong>Say the full name</strong> — first, middle, and last together. Awkward rhythm is a sign to
              keep looking.
            </li>
            <li>
              <strong>Check initials and nicknames</strong> — kids will find them whether you plan for it or not.
            </li>
            <li>
              <strong>Confirm spelling early</strong> — before hospital forms or vet paperwork lock it in.
            </li>
            <li>
              <strong>Consider family and culture</strong> — if heritage matters, research meaning and pronunciation
              with people who know the language, not just a list online.
            </li>
          </ol>
          <h2 className="text-xl font-semibold text-slate-900 mt-8">Baby names vs pet names</h2>
          <p className="text-slate-600">
            Baby names often stay for decades; pet names can be shorter and easier to shout across a yard. Last-name
            lists help with fiction writing or genealogy notes—they are not family trees or legal records.
          </p>
          <p className="text-slate-600">
            For official U.S. baby name statistics, see the{' '}
            <a
              href="https://www.ssa.gov/oact/babynames/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Social Security Administration baby names data
            </a>
            .
          </p>
        </section>

        <AdUnit slot={1} format="horizontal" />

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {nameCategories.map((category) => (
                  <Link key={category.href} href={category.href} className="group relative">
                    <div
                      className={`relative bg-gradient-to-br ${category.gradient} rounded-2xl p-5 md:p-6 border border-slate-100 transition-all duration-300 hover:shadow-md`}
                    >
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 ${category.iconBg} rounded-xl flex items-center justify-center mb-4`}
                      >
                        <span className="text-2xl md:text-3xl">{category.icon}</span>
                      </div>
                      <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">{category.title}</h2>
                      <p className="text-sm text-slate-500 leading-relaxed">{category.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-slate-50/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">About these collections</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              Lists are maintained by Calcuzy for brainstorming. Popularity changes year to year; uniqueness is
              subjective. Use our{' '}
              <Link href="/tools/" className="text-blue-600 hover:underline">
                calculators and finance tools
              </Link>{' '}
              for budgeting around a new child or pet—the name pages themselves are inspiration only.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
