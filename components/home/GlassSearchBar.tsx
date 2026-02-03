'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface Tool {
  name: string
  description: string
  url: string
  category: string
  icon: string
}

const tools: Tool[] = [
  // Calculators
  { name: 'Age Calculator', description: 'Calculate exact age in years, months, and days', url: '/age-calculator', category: 'Calculators', icon: '🎂' },
  { name: 'BMI Calculator', description: 'Check your body mass index instantly', url: '/bmi-calculator', category: 'Calculators', icon: '⚖️' },
  { name: 'Capital Gains Calculator', description: 'Calculate tax on investment profits', url: '/capital-gains-calculator', category: 'Finance Tools', icon: '📈' },
  { name: 'Crypto Tax Calculator', description: 'Simplify cryptocurrency tax calculations', url: '/crypto-tax-calculator', category: 'Finance Tools', icon: '₿' },
  { name: 'Index Fund Return Calculator', description: 'Calculate index fund investment returns', url: '/index-fund-return-calculator', category: 'Finance Tools', icon: '📊' },
  { name: 'Ovulation Calculator', description: 'Track fertility and calculate fertile days', url: '/ovulation-calculator', category: 'Health Tools', icon: '📅' },
  { name: 'Paint Cost Calculator', description: 'Estimate paint needed for your project', url: '/paint-cost-calculator', category: 'Home Tools', icon: '🎨' },
  { name: 'Property Tax Estimator', description: 'Estimate property taxes for real estate', url: '/property-tax-estimator', category: 'Home Tools', icon: '🏠' },
  { name: 'Rent Affordability Calculator', description: 'Calculate how much rent you can afford', url: '/rent-affordability-calculator', category: 'Finance Tools', icon: '💰' },
  { name: 'Unit Converter', description: 'Convert between different units of measurement', url: '/unit-converter', category: 'Converters', icon: '🔄' },
  { name: 'Date Difference Calculator', description: 'Calculate the difference between two dates', url: '/date-difference', category: 'Calculators', icon: '📆' },
  
  // Countdowns
  { name: 'Christmas Countdown', description: 'Count down to Christmas day', url: '/days-until-christmas', category: 'Countdowns', icon: '🎄' },
  { name: 'New Year Countdown', description: "Count down to New Year's day", url: '/days-until-new-year', category: 'Countdowns', icon: '🎉' },
  { name: 'Halloween Countdown', description: 'Count down to Halloween', url: '/days-until-halloween', category: 'Countdowns', icon: '🎃' },
  { name: 'Thanksgiving Countdown', description: 'Count down to Thanksgiving', url: '/thanksgiving-countdown', category: 'Countdowns', icon: '🦃' },
  { name: 'Easter Countdown', description: 'Count down to Easter', url: '/easter-countdown', category: 'Countdowns', icon: '🐰' },
  { name: 'Black Friday Countdown', description: 'Count down to Black Friday', url: '/black-friday-countdown', category: 'Countdowns', icon: '🛍️' },
  
  // Legal Tools
  { name: 'Will Generator', description: 'Create a legally sound will online', url: '/will-generator', category: 'Legal Tools', icon: '📜' },
  { name: 'NDA Generator', description: 'Generate non-disclosure agreements', url: '/nda-generator', category: 'Legal Tools', icon: '📋' },
  
  // Name Generators
  { name: 'Dog Names', description: 'Find the perfect name for your dog', url: '/dog-names', category: 'Name Generators', icon: '🐕' },
  { name: 'Cat Names', description: 'Find the perfect name for your cat', url: '/cat-names', category: 'Name Generators', icon: '🐱' },
  { name: 'Baby Boy Names', description: 'Find the perfect name for your baby boy', url: '/baby-boy-names', category: 'Name Generators', icon: '👶' },
  { name: 'Baby Girl Names', description: 'Find the perfect name for your baby girl', url: '/baby-girl-names', category: 'Name Generators', icon: '👧' },
  { name: 'American Last Names', description: 'Explore American last names', url: '/american-last-names', category: 'Name Generators', icon: '🇺🇸' },
  
  // Quotes & Content
  { name: 'Motivational Quotes', description: 'Get inspired with daily motivational quotes', url: '/motivational-quotes', category: 'Quotes & Content', icon: '💪' },
  { name: 'Love Quotes', description: 'Find romantic love quotes', url: '/love-quotes', category: 'Quotes & Content', icon: '❤️' },
  { name: 'Christmas Quotes', description: 'Festive quotes for the holiday season', url: '/christmas-quotes', category: 'Quotes & Content', icon: '🎄' },
  { name: 'Graduation Quotes', description: 'Inspirational quotes for graduation', url: '/graduation-quotes', category: 'Quotes & Content', icon: '🎓' },
  { name: 'Aesthetic Quotes', description: 'Beautiful and aesthetic quotes', url: '/aesthetic-quotes', category: 'Quotes & Content', icon: '✨' },
  
  // Security Tools
  { name: 'Password Tools', description: 'Generate and test password strength', url: '/password-tools', category: 'Security Tools', icon: '🔐' },
  { name: 'Random Number Generator', description: 'Generate random numbers', url: '/random-number-generator', category: 'Generators', icon: '🎲' },
]

export default function GlassSearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Tool[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
    ).slice(0, 6)

    setSuggestions(filtered)
    setIsOpen(filtered.length > 0)
    setSelectedIndex(-1)
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (searchQuery?: string) => {
    const finalQuery = searchQuery || query
    if (finalQuery.trim()) {
      const exactMatch = tools.find(tool =>
        tool.name.toLowerCase() === finalQuery.toLowerCase()
      )

      if (exactMatch) {
        router.push(exactMatch.url)
      } else {
        router.push(`/tools?q=${encodeURIComponent(finalQuery)}`)
      }

      setQuery('')
      setSuggestions([])
      setIsOpen(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        router.push(suggestions[selectedIndex].url)
        setQuery('')
        setIsOpen(false)
      } else {
        handleSearch()
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, -1))
    }
  }

  const handleSuggestionClick = (tool: Tool) => {
    router.push(tool.url)
    setQuery('')
    setSuggestions([])
    setIsOpen(false)
  }

  const popularSearches = [
    { name: 'Age Calculator', url: '/age-calculator' },
    { name: 'BMI Calculator', url: '/bmi-calculator' },
    { name: 'Capital Gains', url: '/capital-gains-calculator' },
    { name: 'Password Tools', url: '/password-tools' },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto" ref={containerRef}>
      {/* Premium White-Translucent Search Container */}
      <div className="relative">
        {/* White glass search bar */}
        <div className={`relative bg-white/70 backdrop-blur-xl border border-slate-200/50 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-300 ${isOpen ? 'rounded-b-none border-b-transparent' : ''}`}>
          <div className="flex items-center">
            {/* Search icon */}
            <div className="pl-6 text-slate-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => query.length >= 2 && setIsOpen(true)}
              placeholder="Search 100+ tools..."
              className="flex-1 px-4 py-5 bg-transparent text-slate-900 text-lg placeholder-slate-400 focus:outline-none"
              autoComplete="off"
            />
            
            <button
              onClick={() => handleSearch()}
              className="m-2.5 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-[14px] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
            >
              Search
            </button>
          </div>
        </div>
        
        {/* Suggestions Dropdown */}
        {isOpen && suggestions.length > 0 && (
          <div className="absolute left-0 right-0 top-full bg-white/95 backdrop-blur-xl border border-slate-200/50 border-t-0 rounded-b-[20px] shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden z-50">
            {suggestions.map((tool, index) => (
              <div
                key={tool.url}
                onClick={() => handleSuggestionClick(tool)}
                className={`flex items-center gap-4 px-6 py-4 cursor-pointer transition-all duration-150 ${
                  index === selectedIndex
                    ? 'bg-blue-50'
                    : 'hover:bg-slate-50'
                }`}
              >
                <span className="text-2xl">{tool.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-slate-900 truncate">{tool.name}</div>
                  <div className="text-sm text-slate-500 truncate">{tool.description}</div>
                </div>
                <span className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 font-medium whitespace-nowrap">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Popular Searches */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <span className="text-sm text-slate-400">Popular:</span>
        {popularSearches.map((search) => (
          <button
            key={search.url}
            onClick={() => router.push(search.url)}
            className="text-sm text-slate-500 hover:text-blue-500 px-3 py-1.5 rounded-full hover:bg-blue-50 transition-all duration-200 font-medium"
          >
            {search.name}
          </button>
        ))}
      </div>
    </div>
  )
}
