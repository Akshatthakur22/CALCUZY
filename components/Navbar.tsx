'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 fade-in">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-xl font-heading-bold text-primary-text hover:text-accent transition-colors duration-200 focus-ring"
          >
            Calcuzy.app
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/countdowns" 
              className="text-secondary-text hover:text-primary-text transition-colors duration-200 focus-ring py-2"
            >
              Countdowns
            </Link>
            <Link 
              href="/tools" 
              className="text-secondary-text hover:text-primary-text transition-colors duration-200 focus-ring py-2"
            >
              Tools
            </Link>
            <Link 
              href="/names" 
              className="text-secondary-text hover:text-primary-text transition-colors duration-200 focus-ring py-2"
            >
              Names
            </Link>
            <Link 
              href="/quotes" 
              className="text-secondary-text hover:text-primary-text transition-colors duration-200 focus-ring py-2"
            >
              Quotes
            </Link>
            <div className="border-l border-gray-300 h-6"></div>
            <Link 
              href="/about" 
              className="text-secondary-text hover:text-primary-text transition-colors duration-200 focus-ring py-2"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-secondary-text hover:text-primary-text transition-colors duration-200 focus-ring py-2"
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden p-3 rounded-lg hover:bg-secondary-bg transition-all duration-200 focus-ring"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
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

        {/* Mobile menu with smooth animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 py-4' : 'max-h-0'
        }`}>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/countdowns" 
                className="text-secondary-text hover:text-primary-text transition-colors duration-200 focus-ring py-3 px-2 rounded-lg hover:bg-secondary-bg"
                onClick={() => setIsMenuOpen(false)}
              >
                Countdowns
              </Link>
              <Link 
                href="/tools" 
                className="text-secondary-text hover:text-primary-text transition-colors duration-200 focus-ring py-3 px-2 rounded-lg hover:bg-secondary-bg"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <Link 
                href="/names" 
                className="text-secondary-text hover:text-primary-text transition-colors duration-200 focus-ring py-3 px-2 rounded-lg hover:bg-secondary-bg"
                onClick={() => setIsMenuOpen(false)}
              >
                Names
              </Link>
              <Link 
                href="/quotes" 
                className="text-secondary-text hover:text-primary-text transition-colors duration-200 focus-ring py-3 px-2 rounded-lg hover:bg-secondary-bg"
                onClick={() => setIsMenuOpen(false)}
              >
                Quotes
              </Link>
              <div className="border-t border-gray-200 my-2"></div>
              <Link 
                href="/about" 
                className="text-secondary-text hover:text-primary-text transition-colors duration-200 focus-ring py-3 px-2 rounded-lg hover:bg-secondary-bg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-secondary-text hover:text-primary-text transition-colors duration-200 focus-ring py-3 px-2 rounded-lg hover:bg-secondary-bg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
