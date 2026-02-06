import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Inspirational Quotes - 500+ Motivational, Love & Holiday Quotes',
  description: 'Discover our comprehensive collection of 500+ inspirational quotes including motivational, love, graduation, Christmas, and aesthetic quotes. Find daily inspiration, heartfelt messages, and meaningful sayings for every occasion.',
  keywords: 'inspirational quotes, motivational quotes, love quotes, graduation quotes, christmas quotes, daily inspiration, positive quotes, life quotes',
  url: 'https://calcuzy.app/quotes',
  image: '/og-default.png',
})

const quoteCategories = [
  {
    href: '/motivational-quotes',
    icon: '💪',
    title: 'Motivational Quotes',
    description: 'Get inspired with powerful motivational quotes for daily encouragement.',
    gradient: 'from-orange-50 to-amber-50',
    iconBg: 'bg-orange-100',
  },
  {
    href: '/love-quotes',
    icon: '❤️',
    title: 'Love Quotes',
    description: 'Express your feelings with beautiful romantic and heartfelt quotes.',
    gradient: 'from-red-50 to-pink-50',
    iconBg: 'bg-red-100',
  },
  {
    href: '/graduation-quotes',
    icon: '🎓',
    title: 'Graduation Quotes',
    description: 'Celebrate achievement with inspiring graduation quotes and wishes.',
    gradient: 'from-blue-50 to-indigo-50',
    iconBg: 'bg-blue-100',
  },
  {
    href: '/christmas-quotes',
    icon: '🎄',
    title: 'Christmas Quotes',
    description: 'Spread holiday cheer with festive Christmas quotes and messages.',
    gradient: 'from-green-50 to-emerald-50',
    iconBg: 'bg-green-100',
  },
  {
    href: '/aesthetic-quotes',
    icon: '✨',
    title: 'Aesthetic Quotes',
    description: 'Beautiful and artistic quotes perfect for social media and creativity.',
    gradient: 'from-purple-50 to-pink-50',
    iconBg: 'bg-purple-100',
  },
]

export default function QuotesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Inspirational Quotes & Motivational Sayings",
    "description": "Collection of inspirational quotes and motivational sayings for daily inspiration",
    "url": "https://calcuzy.app/quotes",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": quoteCategories.map((item, index) => ({
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-br from-orange-100/30 via-transparent to-transparent rounded-full blur-3xl" />
          
          <div className="relative container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-16">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
                <span className="text-lg">💬</span>
                <span className="text-sm font-medium text-orange-600">Daily Inspiration</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
                Inspirational Quotes
              </h1>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="paragraph">
                  Quotes have the power to inspire, motivate, and transform perspectives throughout human history. From ancient wisdom to modern insights, our comprehensive collection brings together the most impactful sayings across multiple categories—motivational, love, graduation, Christmas, and aesthetic quotes. These carefully curated collections serve as daily inspiration, social media content, and material for important life moments, helping people find the perfect words for any situation or emotion.
                </p>
                
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-100 mb-8">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">The Power of Inspirational Quotes</h3>
                  <p className="paragraph mb-6">
                    Inspirational quotes tap into fundamental human needs for encouragement, hope, and meaning. Research in positive psychology shows that regular exposure to uplifting quotes can improve resilience, boost motivation, and enhance overall well-being. These quotes work by reframing challenges, highlighting strengths, and reminding people of their inherent potential. In today's fast-paced world, where stress and uncertainty are common, inspirational quotes serve as mental anchors that help maintain focus and optimism during difficult times.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Categories and Their Psychological Impact</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p><strong>Motivational Quotes:</strong> Activate achievement mindset, build confidence, and overcome obstacles</p>
                      <p className="text-orange-700">Ideal for goal setting, habit formation, and personal development</p>
                    </div>
                    <div>
                      <p><strong>Love Quotes:</strong> Foster emotional connection, express affection, and strengthen relationships</p>
                      <p className="text-orange-700">Perfect for relationships, anniversaries, and emotional expression</p>
                    </div>
                    <div>
                      <p><strong>Graduation Quotes:</strong> Mark transitions, celebrate achievements, and inspire future success</p>
                      <p className="text-orange-700">Ideal for ceremonies, commencement speeches, and life milestones</p>
                    </div>
                    <div>
                      <p><strong>Christmas Quotes:</strong> Spread joy, generosity, and holiday spirit</p>
                      <p className="text-orange-700">Perfect for seasonal celebrations, family gatherings, and holiday cards</p>
                    </div>
                    <div>
                      <p><strong>Aesthetic Quotes:</strong> Appreciate beauty, art, and visual harmony</p>
                      <p className="text-orange-700">Ideal for creative projects, social media, and artistic expression</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Modern Applications and Digital Age</h3>
                <p className="paragraph mb-6">
                  In the digital era, quotes have found new life through social media, blogs, and digital communication platforms. Memes, quote graphics, and shareable text formats have transformed how inspirational content spreads, creating viral trends and cultural phenomena. The digital age has democratized quote sharing, allowing anyone to become both consumer and creator of inspirational content. This evolution has led to the rise of quote influencers, digital quote communities, and AI-generated inspirational messages that reflect contemporary communication styles and values.
                </p>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Historical Evolution and Cultural Significance</h3>
                <p className="paragraph mb-6">
                  The tradition of sharing wisdom through quotes spans millennia, from ancient proverbs and religious texts to modern secular expressions. Classical philosophers like Aristotle, Confucius, and Marcus Aurelius established foundations of Western quote culture, while Eastern traditions contributed profound sayings from Buddha, Lao Tzu, and other spiritual leaders. Each era has adapted quotes to reflect contemporary values and challenges, from medieval religious wisdom to Enlightenment rationalism, to modern psychological insights and social commentary.
                </p>
                
                <p className="paragraph">
                  Whether you're seeking daily motivation, words to express love, inspiration for a major life transition, or simply want to share wisdom on social media, our collection provides quotes that resonate with diverse human experiences and emotions. Remember that the most powerful quotes are those that speak to your current situation while offering perspective that helps you grow and connect with others more meaningfully.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdUnit slot={1} format="horizontal" />

        {/* Quotes Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {quoteCategories.map((category, index) => (
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
                  About Our Quote Collections
                </h2>
                <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                  <p>
                    Words have the power to inspire, motivate, and transform. Our carefully curated 
                    collections feature timeless wisdom from great thinkers, leaders, and artists.
                  </p>
                  <p>
                    Whether you need motivation for a challenging day, words to express your love, 
                    or inspiration for a special occasion, our quote collections are here to help 
                    you find the perfect message.
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
