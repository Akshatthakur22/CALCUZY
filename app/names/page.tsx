import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Baby Names & Pet Names',
  description: 'Find the perfect name with our curated collections. Baby boy names, baby girl names, dog names, cat names, and American last names. Free name inspiration.',
  keywords: 'baby names, pet names, dog names, cat names, last names, name ideas, name inspiration',
  url: 'https://calcuzy.app/names',
  image: '/og-default.png',
})

const nameCategories = [
  {
    href: '/baby-boy-names',
    icon: '👶',
    title: 'Baby Boy Names',
    description: 'Browse our collection of popular and unique baby boy names for your newborn son.',
    gradient: 'from-blue-50 to-cyan-50',
    iconBg: 'bg-blue-100',
  },
  {
    href: '/baby-girl-names',
    icon: '👧',
    title: 'Baby Girl Names',
    description: 'Explore beautiful baby girl names from traditional to modern styles.',
    gradient: 'from-pink-50 to-rose-50',
    iconBg: 'bg-pink-100',
  },
  {
    href: '/dog-names',
    icon: '🐕',
    title: 'Dog Names',
    description: 'Find the perfect name for your furry friend. Creative names for every breed.',
    gradient: 'from-amber-50 to-orange-50',
    iconBg: 'bg-amber-100',
  },
  {
    href: '/cat-names',
    icon: '🐱',
    title: 'Cat Names',
    description: 'Discover the perfect name for your feline companion. Cute and creative ideas.',
    gradient: 'from-purple-50 to-violet-50',
    iconBg: 'bg-purple-100',
  },
  {
    href: '/american-last-names',
    icon: '🇺🇸',
    title: 'American Last Names',
    description: 'Explore popular American surnames. Perfect for genealogy research.',
    gradient: 'from-slate-50 to-blue-50',
    iconBg: 'bg-slate-100',
  },
]

export default function NamesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Baby Names & Pet Names",
    "description": "Collection of name ideas for babies, pets, and family names",
    "url": "https://calcuzy.app/names",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": nameCategories.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.title,
        "url": `https://calcuzy.app${item.href}`
      }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-white" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-br from-pink-100/30 via-transparent to-transparent rounded-full blur-3xl" />
          
          <div className="relative container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-16">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full mb-6">
                <span className="text-lg">💝</span>
                <span className="text-sm font-medium text-pink-600">Name Inspiration</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
                Baby Names & Pet Names
              </h1>
              <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Discover the perfect name with our curated collections. 
                From baby names to pet names, find inspiration for your loved ones.
              </p>
            </div>
          </div>
        </section>

        <AdUnit slot={1} format="horizontal" />

        {/* Names Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {nameCategories.map((category, index) => (
                  <Link 
                    key={category.href}
                    href={category.href} 
                    className="group relative"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`
                      relative bg-gradient-to-br ${category.gradient} 
                      rounded-2xl md:rounded-[20px] p-5 md:p-6
                      border border-slate-100
                      transition-all duration-300
                      hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                      hover:scale-[1.02]
                      active:scale-[0.98]
                    `}>
                      {/* Icon */}
                      <div className={`
                        w-12 h-12 md:w-14 md:h-14 ${category.iconBg} 
                        rounded-xl md:rounded-2xl flex items-center justify-center mb-4
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        <span className="text-2xl md:text-3xl">{category.icon}</span>
                      </div>
                      
                      {/* Content */}
                      <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                        {category.title}
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                        {category.description}
                      </p>
                      
                      {/* Arrow indicator */}
                      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AdUnit slot={2} format="rectangle" />

        {/* Info Section */}
        <section className="py-12 md:py-16 bg-slate-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl md:rounded-[24px] p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  About Our Name Collections
                </h2>
                <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                  <p>
                    Choosing the perfect name is one of the most important decisions you&apos;ll make. 
                    Our curated collections feature thousands of names, from classic favorites to 
                    unique modern choices.
                  </p>
                  <p>
                    Each category includes popular names with meanings, origins, and pronunciation guides. 
                    Whether you&apos;re expecting a baby or welcoming a new pet into your family, 
                    we&apos;re here to help you find the perfect name.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
