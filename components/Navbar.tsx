'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-heading-bold text-primary-text">
            Calcuzy.com
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/countdowns" className="text-secondary-text hover:text-primary-text transition-colors">
              Countdowns
            </Link>
            <Link href="/tools" className="text-secondary-text hover:text-primary-text transition-colors">
              Tools
            </Link>
            <Link href="/names" className="text-secondary-text hover:text-primary-text transition-colors">
              Names
            </Link>
            <Link href="/quotes" className="text-secondary-text hover:text-primary-text transition-colors">
              Quotes
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary-bg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link href="/countdowns" className="text-secondary-text hover:text-primary-text transition-colors py-2">
                Countdowns
              </Link>
              <Link href="/tools" className="text-secondary-text hover:text-primary-text transition-colors py-2">
                Tools
              </Link>
              <Link href="/names" className="text-secondary-text hover:text-primary-text transition-colors py-2">
                Names
              </Link>
              <Link href="/quotes" className="text-secondary-text hover:text-primary-text transition-colors py-2">
                Quotes
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
