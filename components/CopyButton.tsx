'use client'

import { useState } from 'react'
import { useCopyToClipboard } from './Toast'

interface CopyButtonProps {
  text: string
  label?: string
  successMessage?: string
  className?: string
  variant?: 'icon' | 'button' | 'minimal'
}

/**
 * Reusable copy button with toast feedback and success animation
 * Use this for any "Copy to Clipboard" functionality across tools
 */
export default function CopyButton({
  text,
  label = 'Copy',
  successMessage = 'Copied to clipboard!',
  className = '',
  variant = 'button',
}: CopyButtonProps) {
  const copy = useCopyToClipboard()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const success = await copy(text, successMessage)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (variant === 'icon') {
    return (
      <button
        onClick={handleCopy}
        className={`p-2 rounded-lg transition-all duration-200 ${
          copied
            ? 'bg-emerald-50 text-emerald-600'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        } ${className}`}
        title={copied ? 'Copied!' : 'Copy to clipboard'}
        aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
      >
        {copied ? (
          <svg className="w-4 h-4 animate-success-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    )
  }

  if (variant === 'minimal') {
    return (
      <button
        onClick={handleCopy}
        className={`text-sm font-medium transition-all duration-200 ${
          copied
            ? 'text-emerald-600'
            : 'text-blue-500 hover:text-blue-600'
        } ${className}`}
      >
        {copied ? '✓ Copied' : label}
      </button>
    )
  }

  // Default button variant
  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm
        transition-all duration-200
        ${copied
          ? 'bg-emerald-500 text-white animate-success-pulse'
          : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25'
        }
        ${className}
      `}
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {label}
        </>
      )}
    </button>
  )
}
