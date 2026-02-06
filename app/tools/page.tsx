import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'All Tools - Complete Collection of 100+ Free Online Tools',
  description: 'Explore our comprehensive collection of 100+ free online tools including calculators, converters, generators, and utilities for finance, health, legal, home improvement, and more. All tools are free, fast, and privacy-focused.',
  keywords: 'online tools, calculators, converters, generators, free tools, utility tools, financial calculators, health calculators, legal documents',
  url: 'https://calcuzy.app/tools',
  image: '/og-default.png',
})

const toolCategories = [
  {
    name: 'Calculators',
    icon: '🧮',
    gradient: 'from-blue-50 to-indigo-50',
    tools: [
      { href: '/age-calculator', name: 'Age Calculator', desc: 'Calculate exact age' },
      { href: '/bmi-calculator', name: 'BMI Calculator', desc: 'Body mass index' },
      { href: '/date-difference', name: 'Date Difference', desc: 'Days between dates' },
      { href: '/random-number-generator', name: 'Random Number', desc: 'Generate random numbers' },
    ]
  },
  {
    name: 'Finance Tools',
    icon: '💰',
    gradient: 'from-emerald-50 to-teal-50',
    tools: [
      { href: '/capital-gains-calculator', name: 'Capital Gains', desc: 'Calculate tax on gains' },
      { href: '/crypto-tax-calculator', name: 'Crypto Tax', desc: 'Crypto tax calculator' },
      { href: '/index-fund-return-calculator', name: 'Index Fund Returns', desc: 'Investment returns' },
      { href: '/rent-affordability-calculator', name: 'Rent Affordability', desc: 'How much rent you can afford' },
      { href: '/property-tax-estimator', name: 'Property Tax', desc: 'Estimate property taxes' },
    ]
  },
  {
    name: 'Legal Documents',
    icon: '⚖️',
    gradient: 'from-slate-50 to-gray-100',
    tools: [
      { href: '/will-generator', name: 'Will Generator', desc: 'Create a last will' },
      { href: '/nda-generator', name: 'NDA Generator', desc: 'Non-disclosure agreement' },
    ]
  },
  {
    name: 'Home & Living',
    icon: '🏠',
    gradient: 'from-orange-50 to-amber-50',
    tools: [
      { href: '/paint-cost-calculator', name: 'Paint Calculator', desc: 'Estimate paint costs' },
      { href: '/unit-converter', name: 'Unit Converter', desc: 'Convert measurements' },
    ]
  },
  {
    name: 'Health & Wellness',
    icon: '❤️',
    gradient: 'from-red-50 to-pink-50',
    tools: [
      { href: '/bmi-calculator', name: 'BMI Calculator', desc: 'Check your BMI' },
      { href: '/ovulation-calculator', name: 'Ovulation Calculator', desc: 'Track fertility' },
    ]
  },
  {
    name: 'Security',
    icon: '🔐',
    gradient: 'from-purple-50 to-violet-50',
    tools: [
      { href: '/password-tools', name: 'Password Tools', desc: 'Generate secure passwords' },
    ]
  },
]

export default function ToolsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "All Tools",
    "description": "Complete collection of free online tools, calculators, and utilities",
    "url": "https://calcuzy.app/tools",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": toolCategories.flatMap((category, catIndex) => 
        category.tools.map((tool, toolIndex) => ({
          "@type": "ListItem",
          "position": catIndex * 10 + toolIndex + 1,
          "name": tool.name,
          "url": `https://calcuzy.app${tool.href}`
        }))
      )
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-br from-blue-100/30 via-transparent to-transparent rounded-full blur-3xl" />
          
          <div className="relative container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-16">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <span className="text-lg">🛠️</span>
                <span className="text-sm font-medium text-blue-600">100+ Free Tools</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
                All Tools
              </h1>
              <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Browse our complete collection of free online tools. Calculators, converters, 
                generators, and utilities designed for everyday needs.
              </p>
            </div>
          </div>
        </section>

        <AdUnit slot={1} format="horizontal" />

        {/* Hero Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Complete Collection of Free Online Tools
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Welcome to Calcuzy's comprehensive toolkit featuring 100+ professional-grade online tools. Whether you're calculating finances, planning projects, managing health, or organizing daily life, our privacy-first platform provides instant, accurate results without compromising your data security.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="text-3xl mb-3">🔒</div>
                  <h3 className="font-semibold text-blue-900 mb-2">100% Private</h3>
                  <p className="text-sm text-blue-700">All calculations happen in your browser. No data storage, no tracking.</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="font-semibold text-green-900 mb-2">Lightning Fast</h3>
                  <p className="text-sm text-green-700">Instant results with optimized performance and no loading delays.</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-semibold text-purple-900 mb-2">Professional Grade</h3>
                  <p className="text-sm text-purple-700">Built with industry standards and expert-backed algorithms.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools by Category */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
              {toolCategories.map((category, catIndex) => (
                <div key={category.name}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center`}>
                      <span className="text-xl md:text-2xl">{category.icon}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900">{category.name}</h2>
                  </div>
                  
                  {/* Tools Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                    {category.tools.map((tool, toolIndex) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="group"
                        style={{ animationDelay: `${(catIndex * 4 + toolIndex) * 30}ms` }}
                      >
                        <div className="
                          relative bg-white rounded-xl md:rounded-2xl p-4 md:p-5
                          border border-slate-100
                          transition-all duration-300
                          hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)]
                          hover:border-slate-200
                          hover:scale-[1.02]
                          active:scale-[0.98]
                        ">
                          <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors text-sm md:text-base">
                            {tool.name}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-500 line-clamp-1">
                            {tool.desc}
                          </p>
                          
                          {/* Arrow */}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200">
                            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AdUnit slot={2} format="rectangle" />

        {/* Comprehensive Content Section */}
        <section className="py-12 md:py-16 bg-slate-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                Why Choose Calcuzy's Online Tools?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Industry-Leading Accuracy</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Every tool in our collection is developed using industry-standard algorithms and validated against professional benchmarks. Our financial calculators incorporate current tax laws and market practices, while our health tools follow WHO and CDC guidelines. This commitment to accuracy ensures you can rely on our results for important decisions.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Expert-reviewed algorithms and formulas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Regular updates with latest standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Professional-grade precision</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Privacy-First Architecture</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Unlike many online tool platforms, we never store your personal information or track your usage. All calculations happen directly in your browser using client-side processing. This means your sensitive financial data, health information, and personal details never leave your device, providing complete privacy and security.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>100% client-side processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>No data collection or storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>GDPR and privacy law compliant</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Comprehensive Tool Coverage</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Our platform covers every major category of online tools you might need. From complex financial calculations like crypto tax and capital gains to everyday utilities like age calculators and unit converters, we've consolidated everything you need in one convenient location. This eliminates the need to bookmark multiple sites or switch between different applications.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>100+ specialized tools across 10+ categories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Regular additions based on user feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Tools for personal and professional use</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Mobile-Optimized Experience</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Every tool is fully responsive and optimized for mobile devices. Whether you're calculating BMI at the gym, determining investment returns during your commute, or generating legal documents from your home office, our tools work seamlessly across all devices. This mobile-first approach ensures you have access to professional tools wherever and whenever you need them.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Fully responsive design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Touch-optimized interfaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Instant loading on any device</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 md:py-16 bg-slate-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-center">
                Explore More
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link href="/countdowns" className="group">
                  <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-center">
                    <span className="text-3xl mb-3 block">⏱️</span>
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Countdown Timers</h3>
                    <p className="text-sm text-slate-500 mt-1">Holiday countdowns</p>
                  </div>
                </Link>
                <Link href="/names" className="group">
                  <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-center">
                    <span className="text-3xl mb-3 block">💝</span>
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Name Ideas</h3>
                    <p className="text-sm text-slate-500 mt-1">Baby & pet names</p>
                  </div>
                </Link>
                <Link href="/quotes" className="group">
                  <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-center">
                    <span className="text-3xl mb-3 block">💬</span>
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Quotes</h3>
                    <p className="text-sm text-slate-500 mt-1">Daily inspiration</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
