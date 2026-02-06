import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Baby Names & Pet Names - 1000+ Name Ideas for Families',
  description: 'Explore our comprehensive collection of 1000+ baby names and pet names. Find perfect baby boy names, baby girl names, dog names, cat names, and American last names. Expert-curated name lists with meanings, origins, and naming trends.',
  keywords: 'baby names, pet names, dog names, cat names, last names, name ideas, name inspiration, baby boy names, baby girl names',
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
              <div className="prose prose-lg max-w-none mb-8">
                <p className="paragraph">
                  The art of naming is one of humanity's oldest and most meaningful traditions, reflecting cultural values, family heritage, and personal aspirations. Our comprehensive collection brings together thousands of carefully curated names for babies, pets, and families, serving as both inspiration and practical resource for one of life's most important decisions. Whether you're welcoming a newborn, adopting a pet, or exploring your family heritage, our name collections provide the perfect blend of tradition, meaning, and contemporary appeal.
                </p>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 mb-8">
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">The Psychology and Cultural Impact of Names</h3>
                  <p className="paragraph mb-6">
                    Research shows that names significantly influence identity formation, social perception, and even life outcomes. The "name-letter effect" demonstrates how initial letters can create unconscious associations, while cultural names connect individuals to their heritage and community. Studies indicate that people with easily pronounceable names often report higher confidence and better social experiences. Our collections consider these psychological factors, providing names that are not only beautiful but also beneficial to the person's life journey.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Global Naming Traditions and Modern Trends</h3>
                  <p className="paragraph mb-6">
                    Modern naming practices reflect increasing globalization and cultural appreciation. While traditional Western names remain popular, there's growing interest in names from diverse backgrounds—Japanese names like Kenji and Yuki, African names like Kwame and Amara, and Nordic names like Freya and Bjorn. Additionally, 2026 trends show parents moving toward gender-neutral names, nature-inspired choices, and vintage names that feel both timeless and fresh. This evolution reflects broader cultural awareness and desire for names that honor heritage while fitting contemporary global society.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">Types of Names and Their Significance</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p><strong>Baby Names:</strong> Mark new beginnings, family legacy, and parental hopes</p>
                      <p className="text-purple-700">Includes traditional, modern, and cultural options with meanings and origins</p>
                    </div>
                    <div>
                      <p><strong>Pet Names:</strong> Reflect personality, create bonds, and show companionship</p>
                      <p className="text-purple-700">Dog and cat names that match appearance, temperament, and breed characteristics</p>
                    </div>
                    <div>
                      <p><strong>Last Names:</strong> Connect to ancestry, family history, and cultural identity</p>
                      <p className="text-purple-700">American surnames with origins, meanings, and historical significance</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Expert Naming Strategies and Considerations</h3>
                <p className="paragraph mb-6">
                  Choosing the perfect name requires thoughtful consideration of multiple factors. Our expert recommendations include testing names with your last name to ensure good flow, considering potential nicknames, researching cultural meanings and pronunciations, and thinking about how the name will serve the person throughout different life stages—from childhood to professional settings. We also advise checking popularity trends in your region to balance uniqueness with familiarity, and considering how the name might be perceived in different cultural contexts.
                </p>
                
                <p className="paragraph">
                  Whether you're expecting a baby, adopting a pet, or exploring your family history, our comprehensive name collections provide inspiration, guidance, and practical tools to help you make this important decision with confidence. Remember that the best name is one that feels right to your family, honors your heritage, and will serve your loved one well throughout their life journey.
                </p>
              </div>
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
