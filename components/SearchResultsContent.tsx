'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

interface Tool {
  name: string
  description: string
  url: string
  category: string
}

const tools: Tool[] = [
  // Calculators
  { name: 'Age Calculator', description: 'Calculate exact age in years, months, and days', url: '/age-calculator', category: 'Calculators' },
  { name: 'BMI Calculator', description: 'Check your body mass index instantly', url: '/bmi-calculator', category: 'Calculators' },
  { name: 'Capital Gains Calculator', description: 'Calculate tax on investment profits', url: '/capital-gains-calculator', category: 'Finance Tools' },
  { name: 'Crypto Tax Calculator', description: 'Simplify cryptocurrency tax calculations', url: '/crypto-tax-calculator', category: 'Finance Tools' },
  { name: 'Index Fund Return Calculator', description: 'Calculate index fund investment returns', url: '/index-fund-return-calculator', category: 'Finance Tools' },
  { name: 'Ovulation Calculator', description: 'Track fertility and calculate fertile days', url: '/ovulation-calculator', category: 'Health Tools' },
  { name: 'Paint Cost Calculator', description: 'Estimate paint needed for your project', url: '/paint-cost-calculator', category: 'Home Tools' },
  { name: 'Property Tax Estimator', description: 'Estimate property taxes for real estate', url: '/property-tax-estimator', category: 'Home Tools' },
  { name: 'Rent Affordability Calculator', description: 'Calculate how much rent you can afford', url: '/rent-affordability-calculator', category: 'Finance Tools' },
  { name: 'Unit Converter', description: 'Convert between different units of measurement', url: '/unit-converter', category: 'Converters' },
  { name: 'Date Difference Calculator', description: 'Calculate the difference between two dates', url: '/date-difference', category: 'Calculators' },
  
  // Countdowns
  { name: 'Christmas Countdown', description: 'Count down to Christmas day', url: '/days-until-christmas', category: 'Countdowns' },
  { name: 'New Year Countdown', description: 'Count down to New Year\'s day', url: '/days-until-new-year', category: 'Countdowns' },
  { name: 'Halloween Countdown', description: 'Count down to Halloween', url: '/days-until-halloween', category: 'Countdowns' },
  { name: 'Thanksgiving Countdown', description: 'Count down to Thanksgiving', url: '/thanksgiving-countdown', category: 'Countdowns' },
  { name: 'Easter Countdown', description: 'Count down to Easter', url: '/easter-countdown', category: 'Countdowns' },
  { name: 'Black Friday Countdown', description: 'Count down to Black Friday', url: '/black-friday-countdown', category: 'Countdowns' },
  
  // Legal Tools
  { name: 'Will Generator', description: 'Create a legally sound will online', url: '/will-generator', category: 'Legal Tools' },
  { name: 'NDA Generator', description: 'Generate non-disclosure agreements', url: '/nda-generator', category: 'Legal Tools' },
  
  // Name Generators
  { name: 'Dog Names', description: 'Find the perfect name for your dog', url: '/dog-names', category: 'Name Generators' },
  { name: 'Cat Names', description: 'Find the perfect name for your cat', url: '/cat-names', category: 'Name Generators' },
  { name: 'Baby Boy Names', description: 'Find the perfect name for your baby boy', url: '/baby-boy-names', category: 'Name Generators' },
  { name: 'Baby Girl Names', description: 'Find the perfect name for your baby girl', url: '/baby-girl-names', category: 'Name Generators' },
  { name: 'American Last Names', description: 'Explore American last names', url: '/american-last-names', category: 'Name Generators' },
  
  // Quotes & Content
  { name: 'Motivational Quotes', description: 'Get inspired with daily motivational quotes', url: '/motivational-quotes', category: 'Quotes & Content' },
  { name: 'Love Quotes', description: 'Find romantic love quotes', url: '/love-quotes', category: 'Quotes & Content' },
  { name: 'Christmas Quotes', description: 'Festive quotes for the holiday season', url: '/christmas-quotes', category: 'Quotes & Content' },
  { name: 'Graduation Quotes', description: 'Inspirational quotes for graduation', url: '/graduation-quotes', category: 'Quotes & Content' },
  { name: 'Aesthetic Quotes', description: 'Beautiful and aesthetic quotes', url: '/aesthetic-quotes', category: 'Quotes & Content' },
  
  // Security Tools
  { name: 'Password Tools', description: 'Generate and test password strength', url: '/password-tools', category: 'Security Tools' },
  { name: 'Random Number Generator', description: 'Generate random numbers', url: '/random-number-generator', category: 'Generators' },
  
  // PDF Tools
  { name: 'PDF Merger', description: 'Combine multiple PDF files into one', url: '/pdf-tools/pdf-merger', category: 'PDF Tools' },
  { name: 'PDF Splitter', description: 'Split PDF files into multiple documents', url: '/pdf-tools/pdf-splitter', category: 'PDF Tools' },
  { name: 'PDF Compressor', description: 'Compress PDF files to reduce size', url: '/pdf-tools/pdf-compressor', category: 'PDF Tools' },
  { name: 'PDF to Word', description: 'Convert PDF files to Word documents', url: '/pdf-tools/pdf-to-word', category: 'PDF Tools' },
  { name: 'Word to PDF', description: 'Convert Word documents to PDF files', url: '/pdf-tools/word-to-pdf', category: 'PDF Tools' },
]

interface SearchResultsContentProps {
  query?: string
}

export default function SearchResultsContent({ query = '' }: SearchResultsContentProps) {
  const [results, setResults] = useState<Tool[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      if (query) {
        const filtered = tools.filter(tool => 
          tool.name.toLowerCase().includes(query.toLowerCase()) ||
          tool.description.toLowerCase().includes(query.toLowerCase()) ||
          tool.category.toLowerCase().includes(query.toLowerCase())
        )
        setResults(filtered)
      } else {
        // If no query, show all tools
        setResults(tools)
      }
      setIsLoading(false)
    }, 300) // Simulate search delay for better UX

    return () => clearTimeout(timer)
  }, [query])

  const getCategoryTools = (category: string) => {
    return tools.filter(tool => tool.category === category)
  }

  const categories = Array.from(new Set(tools.map(tool => tool.category))).sort()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://calcuzy.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://calcuzy.app/tools?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const collectionData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": query ? `Search Results for "${query}"` : "All Online Tools",
    "description": query ? `Search results for "${query}" on Calcuzy` : "Browse all available online tools and calculators on Calcuzy",
    "url": `https://calcuzy.app/tools${query ? `?q=${encodeURIComponent(query)}` : ''}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": results.map((tool, index) => ({
        "@type": "WebPage",
        "position": index + 1,
        "name": tool.name,
        "url": `https://calcuzy.app${tool.url}`,
        "description": tool.description
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionData) }}
      />
      <Navbar />
      
      <main className="container section-responsive py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary-text mb-4">
              {query ? `Search Results for "${query}"` : 'All Tools'}
            </h1>
            <p className="text-secondary-text">
              {query ? `Found ${results.length} result${results.length !== 1 ? 's' : ''}` : `Browse ${results.length} available tools`}
            </p>
          </div>

          <AdUnit slot={1} />

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-xl border border-border p-6 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {results.map((tool, index) => (
                <Card key={index} animation="fade-in-up" delay={index * 50} className="hover:scale-[1.02] transition-transform duration-200">
                  <div className="mb-3">
                    <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  <h3 className="heading-3 mb-2">{tool.name}</h3>
                  <p className="paragraph text-sm text-secondary-text mb-4">
                    {tool.description}
                  </p>
                  <Link 
                    href={tool.url}
                    className="link-accent font-medium text-sm inline-flex items-center hover:gap-2 transition-all duration-200"
                  >
                    Use Tool →
                  </Link>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 mb-16">
              <div className="text-6xl mb-6">🔍</div>
              <h2 className="text-2xl font-bold text-primary-text mb-4">
                No tools found for &quot;{query}&quot;
              </h2>
              <p className="text-secondary-text mb-8 max-w-2xl mx-auto">
                Try searching with different keywords or browse our tool categories below.
              </p>
            </div>
          )}

          <AdUnit slot={2} />

          {/* Enhanced Browse by Category */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary-text mb-4 text-center">
              Browse by Category
            </h2>
            <p className="text-center text-secondary-text mb-8 max-w-2xl mx-auto">
              Explore our comprehensive tool collection organized by category
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => {
                const categoryTools = getCategoryTools(category)
                const categoryIcons: { [key: string]: string } = {
                  'Calculators': '🧮',
                  'Countdowns': '⏰',
                  'Finance Tools': '💰',
                  'Health Tools': '🏥',
                  'Home Tools': '🏠',
                  'Legal Tools': '⚖️',
                  'Name Generators': '📝',
                  'Quotes & Content': '💬',
                  'Security Tools': '🔒',
                  'Generators': '🎲',
                  'Converters': '🔄',
                  'PDF Tools': '📄'
                }
                
                const categoryDescriptions: { [key: string]: string } = {
                  'Calculators': 'Age, BMI, financial, and specialized calculators',
                  'Countdowns': 'Holiday and event countdown timers',
                  'Finance Tools': 'Tax calculators, investment tools, and budget planners',
                  'Health Tools': 'BMI, ovulation, and health tracking tools',
                  'Home Tools': 'Mortgage, paint cost, and home improvement calculators',
                  'Legal Tools': 'Will generator, NDA, and legal document templates',
                  'Name Generators': 'Baby names, pet names, and business name generators',
                  'Quotes & Content': 'Inspirational quotes and content creation tools',
                  'Security Tools': 'Password generators and security utilities',
                  'Generators': 'Random number generators and creative tools',
                  'Converters': 'Unit converters and measurement tools',
                  'PDF Tools': 'PDF merger, splitter, compressor, and converters'
                }
                
                return (
                  <Link
                    key={index}
                    href={`/tools?category=${encodeURIComponent(category)}`}
                    className="block group"
                  >
                    <Card animation="fade-in-up" delay={index * 100} className="h-full hover:scale-[1.02] hover:shadow-md transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="text-2xl mr-3">{categoryIcons[category] || '🛠️'}</div>
                          <h3 className="heading-3 group-hover:text-accent transition-colors duration-200">{category}</h3>
                        </div>
                        <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          →
                        </div>
                      </div>
                      <p className="paragraph text-sm text-secondary-text mb-4">
                        {categoryDescriptions[category] || `Explore ${categoryTools.length} specialized tools`}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-accent">
                          {categoryTools.length} tool{categoryTools.length !== 1 ? 's' : ''}
                        </span>
                        <div className="flex -space-x-1">
                          {categoryTools.slice(0, 3).map((tool, toolIndex) => (
                            <div key={toolIndex} className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center" title={tool.name}>
                              <span className="text-xs text-accent font-medium">
                                {tool.name.charAt(0)}
                              </span>
                            </div>
                          ))}
                          {categoryTools.length > 3 && (
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                              <span className="text-xs text-gray-600 font-medium">
                                +{categoryTools.length - 3}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>

          <AdUnit slot={3} />
        </div>
      </main>

      <Footer />
    </>
  )
}
