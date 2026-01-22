'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Card from '@/components/Card'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    // Log error to monitoring service
    console.error('Application error:', error)
    
    // You could also send to an error reporting service here
    // logErrorToService(error)
  }, [error])

  return (
    <div className="min-h-screen bg-primary-bg flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full">
        <div className="text-center space-y-6">
          <div className="text-6xl">⚠️</div>
          
          <div>
            <h1 className="heading-2 mb-4">Something went wrong</h1>
            <p className="paragraph text-secondary-text">
              We encountered an unexpected error. This has been logged and our team will look into it.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Error details:</strong> {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-gray-500">
                Error ID: {error.digest}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="btn-primary"
            >
              Try Again
            </button>
            
            <button
              onClick={() => router.push('/')}
              className="btn-secondary"
            >
              Go Home
            </button>
            
            <button
              onClick={() => window.location.reload()}
              className="btn-secondary"
            >
              Refresh Page
            </button>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-gray-500 mb-4">
              If this problem persists, please contact us with the error details above.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/contact"
                className="link-accent text-sm"
              >
                Contact Support
              </a>
              <a
                href="/tools"
                className="link-accent text-sm"
              >
                Browse Tools
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
