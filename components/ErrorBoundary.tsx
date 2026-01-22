'use client'

import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error }>
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return <FallbackComponent error={this.state.error} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error }: { error?: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-bg">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-red-200">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-red-600 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-4">
            We encountered an unexpected error. Please refresh the page and try again.
          </p>
          {error && (
            <details className="text-left text-sm text-gray-500 bg-gray-50 p-3 rounded border">
              <summary className="cursor-pointer font-medium mb-2">Error details</summary>
              <pre className="whitespace-pre-wrap text-xs">{error.message}</pre>
            </details>
          )}
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-accent text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  )
}
