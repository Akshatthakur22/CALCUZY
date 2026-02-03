import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdPlaceholder from '@/components/home/AdPlaceholder'
import TrustSection from '@/components/home/TrustSection'
import SEOContent from '@/components/home/SEOContent'
import { createMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

// Dynamic imports for heavy client components to improve initial load
const GlassSearchBar = dynamic(() => import('@/components/home/GlassSearchBar'), {
  ssr: true,
  loading: () => (
    <div className="w-full max-w-2xl mx-auto">
      <div className="h-[72px] bg-slate-100 rounded-[20px] animate-pulse" />
    </div>
  )
})

const RecentTools = dynamic(() => import('@/components/home/RecentTools'), {
  ssr: false, // localStorage access
  loading: () => null
})

const BentoGrid = dynamic(() => import('@/components/home/BentoGrid'), {
  ssr: true,
  loading: () => (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-[160px] bg-slate-100 rounded-[24px] animate-pulse" />
        ))}
      </div>
    </div>
  )
})

const TrendingTools = dynamic(() => import('@/components/home/TrendingTools'), {
  ssr: true,
  loading: () => (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-[120px] bg-slate-100 rounded-[20px] animate-pulse" />
        ))}
      </div>
    </div>
  )
})

const FeaturedCategories = dynamic(() => import('@/components/home/FeaturedCategories'), {
  ssr: true,
  loading: () => (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-[180px] bg-slate-100 rounded-[24px] animate-pulse" />
        ))}
      </div>
    </div>
  )
})

const FAQSection = dynamic(() => import('@/components/home/FAQSection'), {
  ssr: true,
  loading: () => (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-[64px] bg-slate-100 rounded-[16px] animate-pulse mb-3" />
      ))}
    </div>
  )
})

// Enhanced metadata with OpenGraph
export const metadata: Metadata = createMetadata({
  title: 'Calcuzy - Your All-In-One Online Tools Platform',
  description: 'Smart calculators, generators, converters, finance tools, legal tools, naming tools, and daily utilities — all free, fast, and beautifully designed.',
  keywords: 'online tools platform, calculators, generators, converters, finance tools, legal tools, name generators, countdown timers, security tools, content tools, BMI calculator, age calculator, will generator, capital gains calculator',
  url: 'https://calcuzy.app',
  image: '/og-default.png',
})

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Calcuzy",
    "description": "Your All-In-One Online Tools Platform - Smart calculators, generators, converters, finance tools, legal tools, naming tools, and daily utilities",
    "url": "https://calcuzy.app",
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://calcuzy.app/tools?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "sameAs": [
      "https://twitter.com/calcuzy",
      "https://github.com/calcuzy"
    ]
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Calcuzy",
    "url": "https://calcuzy.app",
    "logo": "https://calcuzy.app/logo.png",
    "description": "Free online tools platform with 100+ calculators, generators, and utilities"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section - Pure White with Subtle Gradient */}
        <section className="relative overflow-hidden bg-white">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-white" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-blue-100/40 via-transparent to-transparent rounded-full blur-3xl" />
          
          <div className="relative container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-20">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-blue-600">100+ Free Tools Available</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tighter">
                One Place. Every Tool.
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                Stop jumping between tabs. Access 100+ precision calculators, converters, and generators in one distraction-free workspace.
              </p>
              
              {/* Premium Search Bar */}
              <GlassSearchBar />
            </div>
          </div>
        </section>

        {/* Recent Tools (Client-side, from localStorage) */}
        <RecentTools />

        {/* Ad Slot 1 - Below Hero */}
        <div className="bg-slate-50/50">
          <AdPlaceholder slot={1} size="leaderboard" />
        </div>

        {/* Bento Grid Categories */}
        <div className="bg-slate-50/50">
          <BentoGrid />
        </div>

        {/* Ad Slot 2 - Between major sections */}
        <AdPlaceholder slot={2} size="rectangle" />

        {/* Trending Tools */}
        <TrendingTools />

        {/* Featured Categories */}
        <div className="bg-slate-50/50">
          <FeaturedCategories />
        </div>

        {/* Trust Section */}
        <TrustSection />

        {/* Ad Slot 3 - Before FAQ */}
        <div className="bg-slate-50/50">
          <AdPlaceholder slot={3} size="banner" />
        </div>

        {/* FAQ Section */}
        <FAQSection />

        {/* SEO Content Block */}
        <div className="bg-slate-50/50">
          <SEOContent />
        </div>

        {/* Ad Slot 4 - Near Footer */}
        <AdPlaceholder slot={4} size="leaderboard" />
      </main>

      <Footer />
    </div>
  )
}
  