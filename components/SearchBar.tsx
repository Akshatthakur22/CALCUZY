'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

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
  
  // Other Tools
  { name: 'Date Difference Calculator', description: 'Calculate the difference between two dates', url: '/date-difference', category: 'Calculators' },
]

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Tool[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([])
      setIsOpen(false)
      return
    }

    const filtered = tools.filter(tool => 
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase()) ||
      tool.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8)

    setSuggestions(filtered)
    setIsOpen(filtered.length > 0)
  }, [query])

  const handleSearch = (searchQuery?: string) => {
    const finalQuery = searchQuery || query
    if (finalQuery.trim()) {
      // First try to find exact match
      const exactMatch = tools.find(tool => 
        tool.name.toLowerCase() === finalQuery.toLowerCase()
      )
      
      if (exactMatch) {
        router.push(exactMatch.url)
      } else {
        // If no exact match, redirect to search results page
        router.push(`/tools?q=${encodeURIComponent(finalQuery)}`)
      }
      
      setQuery('')
      setSuggestions([])
      setIsOpen(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const handleSuggestionClick = (tool: Tool) => {
    router.push(tool.url)
    setQuery('')
    setSuggestions([])
    setIsOpen(false)
  }

  const popularSearches = ['Age Calculator', 'BMI Calculator', 'Password Generator', 'Christmas Countdown']

  return (
    <div className="max-w-2xl mx-auto mb-16 slide-up relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          placeholder="Search for any tool..."
          className="w-full px-6 py-4 text-lg rounded-2xl border border-border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
        />
        <button 
          onClick={() => handleSearch()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent text-white px-6 py-2 rounded-xl hover:bg-accent/90 transition-colors duration-200"
        >
          Search
        </button>
        
        {/* Suggestions Dropdown */}
        {isOpen && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
            {suggestions.map((tool, index) => (
              <div
                key={index}
                onClick={() => handleSuggestionClick(tool)}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-border last:border-b-0 transition-colors duration-150"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-primary-text">{tool.name}</div>
                    <div className="text-sm text-secondary-text">{tool.description}</div>
                  </div>
                  <div className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {tool.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Popular Searches */}
      <div className="mt-3 flex flex-wrap gap-2 justify-center">
        <span className="text-sm text-secondary-text">Popular:</span>
        {popularSearches.map((search, index) => (
          <button
            key={index}
            onClick={() => handleSearch(search)}
            className="text-sm text-accent hover:underline transition-colors duration-150"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  )
}
