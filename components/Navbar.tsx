'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center text-slate-900 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
          >
            <Image 
              src="/logo.png" 
              alt="Calcuzy Logo" 
              width={64} 
              height={64} 
              className="h-16 w-16 md:h-18 md:w-18"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/countdowns" 
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 px-4 py-2 rounded-lg text-sm font-medium"
            >
              Countdowns
            </Link>
            <Link 
              href="/tools" 
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 px-4 py-2 rounded-lg text-sm font-medium"
            >
              Tools
            </Link>
            <Link 
              href="/names" 
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 px-4 py-2 rounded-lg text-sm font-medium"
            >
              Names
            </Link>
            <Link 
              href="/quotes" 
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 px-4 py-2 rounded-lg text-sm font-medium"
            >
              Quotes
            </Link>
            <div className="w-px h-5 bg-slate-200 mx-2" />
            <Link 
              href="/about" 
              className="text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 px-3 py-2 rounded-lg text-sm"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 px-3 py-2 rounded-lg text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl hover:bg-slate-100 transition-all duration-200 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Smooth slide down */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'
        }`}>
          <div className="pt-2 space-y-1">
            <Link 
              href="/countdowns" 
              className="flex items-center gap-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 py-3 px-4 rounded-xl active:scale-[0.98]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-lg">⏱️</span>
              <span className="font-medium">Countdowns</span>
            </Link>
            <Link 
              href="/tools" 
              className="flex items-center gap-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 py-3 px-4 rounded-xl active:scale-[0.98]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-lg">🛠️</span>
              <span className="font-medium">Tools</span>
            </Link>
            <Link 
              href="/names" 
              className="flex items-center gap-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 py-3 px-4 rounded-xl active:scale-[0.98]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-lg">💝</span>
              <span className="font-medium">Names</span>
            </Link>
            <Link 
              href="/quotes" 
              className="flex items-center gap-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 py-3 px-4 rounded-xl active:scale-[0.98]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-lg">💬</span>
              <span className="font-medium">Quotes</span>
            </Link>
            
            <div className="border-t border-slate-100 my-2" />
            
            <div className="flex gap-2 px-2">
              <Link 
                href="/about" 
                className="flex-1 text-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 py-2.5 px-4 rounded-xl text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="flex-1 text-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 py-2.5 px-4 rounded-xl text-sm"
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
