'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

interface Tool {
  name: string
  url: string
  category: string
  description?: string
}

interface HomepageSearchClientProps {
  allTools: Tool[]
}

export default function HomepageSearchClient({ allTools }: HomepageSearchClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  const filteredTools = searchQuery.length > 0 
    ? allTools.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const popularTools = allTools.slice(0, 6)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('recentSearches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  const addToRecentSearches = (query: string) => {
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5)
    setRecentSearches(updated)
    localStorage.setItem('recentSearches', JSON.stringify(updated))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < filteredTools.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0) {
          const selectedTool = filteredTools[selectedIndex]
          addToRecentSearches(searchQuery)
          window.location.href = selectedTool.url
        }
        break
      case 'Escape':
        setShowSuggestions(false)
        setSelectedIndex(-1)
        break
    }
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    addToRecentSearches(query)
    setShowSuggestions(false)
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('recentSearches')
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      calculator: 'bg-blue-100 text-blue-800',
      converter: 'bg-green-100 text-green-800',
      generator: 'bg-purple-100 text-purple-800',
      countdown: 'bg-orange-100 text-orange-800',
      date: 'bg-pink-100 text-pink-800',
      text: 'bg-indigo-100 text-indigo-800',
      finance: 'bg-yellow-100 text-yellow-800',
      health: 'bg-red-100 text-red-800'
    }
    return colors[category.toLowerCase()] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="max-w-2xl mx-auto relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setShowSuggestions(true)
            setSelectedIndex(-1)
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search for any tool..."
          className="w-full px-6 py-4 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      {/* Search Suggestions */}
      {showSuggestions && (
        <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
          {/* Recent Searches */}
          {searchQuery.length === 0 && recentSearches.length > 0 && (
            <div className="p-4 border-b border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium text-gray-700">Recent Searches</h4>
                <button
                  onClick={clearRecentSearches}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
              </div>
              <div className="space-y-1">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(search)}
                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular Tools */}
          {searchQuery.length === 0 && (
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Popular Tools</h4>
              <div className="grid grid-cols-1 gap-2">
                {popularTools.map((tool, index) => (
                  <Link
                    key={index}
                    href={tool.url}
                    className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-primary-text">{tool.name}</div>
                        <div className="text-sm text-gray-500 capitalize">{tool.category}</div>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(tool.category)}`}>
                        {tool.category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {searchQuery.length > 0 && filteredTools.length > 0 && (
            <div>
              <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
                Found {filteredTools.length} result{filteredTools.length !== 1 ? 's' : ''}
              </div>
              {filteredTools.map((tool, index) => (
                <Link
                  key={index}
                  href={tool.url}
                  className={`block px-6 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                    selectedIndex === index ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-primary-text">
                        {tool.name}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        {tool.category}
                      </div>
                      {tool.description && (
                        <div className="text-xs text-gray-400 mt-1 line-clamp-1">
                          {tool.description}
                        </div>
                      )}
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(tool.category)}`}>
                      {tool.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* No Results */}
          {searchQuery.length > 0 && filteredTools.length === 0 && (
            <div className="p-8 text-center">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No tools found</h3>
              <p className="text-gray-500">Try searching with different keywords</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
