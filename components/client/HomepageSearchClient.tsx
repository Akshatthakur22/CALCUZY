'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Tool {
  name: string
  url: string
  category: string
}

interface HomepageSearchClientProps {
  allTools: Tool[]
}

export default function HomepageSearchClient({ allTools }: HomepageSearchClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const filteredTools = searchQuery.length > 0 
    ? allTools.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  return (
    <div className="max-w-2xl mx-auto relative">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
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
      {showSuggestions && filteredTools.length > 0 && (
        <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
          {filteredTools.map((tool, index) => (
            <Link
              key={index}
              href={tool.url}
              className="block px-6 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="font-medium text-primary-text">{tool.name}</div>
              <div className="text-sm text-gray-500 capitalize">{tool.category}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
