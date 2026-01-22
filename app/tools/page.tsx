'use client'

import { Suspense } from 'react'
import SearchResultsContent from '../../components/SearchResultsContent'

export default function SearchResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-primary-bg fade-in">
        <div className="container section-responsive py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4 max-w-md mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded mb-8 max-w-sm mx-auto"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-xl border border-border p-6">
                    <div className="h-4 bg-gray-200 rounded mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  )
}
