'use client'

import { ReactNode } from 'react'
import Card from '@/components/Card'
import CopyButton from '@/components/CopyButton'

interface ToolWrapperProps {
  children: ReactNode
  className?: string
}

interface ToolInputProps {
  label: string
  id: string
  type?: 'text' | 'number' | 'date' | 'select' | 'radio'
  value: string | number
  onChange: (value: string) => void
  placeholder?: string
  helpText?: string
  error?: string
  min?: string | number
  max?: string | number
  step?: string | number
  options?: { value: string; label: string }[]
  required?: boolean
  autoFocus?: boolean
  disabled?: boolean
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
}

interface ToolResultProps {
  children: ReactNode
  copyText?: string
  copyLabel?: string
  className?: string
  variant?: 'default' | 'success' | 'error' | 'warning'
}

interface ToolErrorProps {
  message: string
  className?: string
}

/**
 * ToolWrapper - Consistent wrapper for all calculator tools
 * Provides Apple-white design consistency across all tools
 */
export function ToolWrapper({ children, className = '' }: ToolWrapperProps) {
  return (
    <Card className={`max-w-2xl mx-auto mb-12 ${className}`}>
      <div className="space-y-6">
        {children}
      </div>
    </Card>
  )
}

/**
 * ToolInput - Accessible input with consistent styling
 * Includes label, help text, and error states for ADA compliance
 */
export function ToolInput({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  helpText,
  error,
  min,
  max,
  step,
  options = [],
  required = false,
  autoFocus = false,
  disabled = false,
  inputMode,
}: ToolInputProps) {
  // Auto-detect inputMode for mobile keyboards
  const resolvedInputMode = inputMode || (type === 'number' ? 'decimal' : undefined)
  
  const inputClasses = `w-full px-4 py-3 border rounded-lg transition-all duration-200
    ${error 
      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
      : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'
    }
    focus:outline-none focus:ring-2
    disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed
    text-slate-900 placeholder:text-slate-400`

  const renderInput = () => {
    if (type === 'select') {
      return (
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClasses}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={helpText ? `${id}-help` : error ? `${id}-error` : undefined}
          disabled={disabled}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )
    }

    if (type === 'radio') {
      return (
        <div className="flex flex-wrap gap-4" role="radiogroup" aria-labelledby={`${id}-label`}>
          {options.map((opt) => (
            <label key={opt.value} className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name={id}
                value={opt.value}
                checked={value === opt.value}
                onChange={(e) => onChange(e.target.value)}
                className="w-4 h-4 text-blue-500 border-slate-300 focus:ring-blue-500 focus:ring-2"
                disabled={disabled}
              />
              <span className="ml-2 text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      )
    }

    return (
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClasses}
        min={min}
        max={max}
        step={step}
        inputMode={resolvedInputMode}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={helpText ? `${id}-help` : error ? `${id}-error` : undefined}
        autoFocus={autoFocus}
        disabled={disabled}
      />
    )
  }

  return (
    <div className="space-y-1.5">
      <label
        id={`${id}-label`}
        htmlFor={id}
        className="block text-slate-900 font-medium text-sm"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {renderInput()}
      
      {helpText && !error && (
        <p id={`${id}-help`} className="text-xs text-slate-500">
          {helpText}
        </p>
      )}
      
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-500 flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

/**
 * ToolResult - Result display with copy functionality
 * Separated result area with premium micro-feedback
 */
export function ToolResult({ 
  children, 
  copyText, 
  copyLabel = 'Copy Result',
  className = '',
  variant = 'default'
}: ToolResultProps) {
  const variantStyles = {
    default: 'bg-slate-50 border-slate-100',
    success: 'bg-emerald-50 border-emerald-100',
    error: 'bg-red-50 border-red-100',
    warning: 'bg-amber-50 border-amber-100',
  }

  return (
    <div 
      className={`relative p-4 rounded-xl border ${variantStyles[variant]} ${className} fade-in`}
      role="region"
      aria-live="polite"
      aria-label="Calculation result"
    >
      <div className="text-center text-lg font-medium text-slate-900">
        {children}
      </div>
      
      {copyText && (
        <div className="absolute top-3 right-3">
          <CopyButton 
            text={copyText} 
            variant="icon" 
            successMessage={`${copyLabel} copied!`}
          />
        </div>
      )}
    </div>
  )
}

/**
 * ToolError - Standardized error state
 */
export function ToolError({ message, className = '' }: ToolErrorProps) {
  return (
    <div 
      className={`p-4 rounded-xl bg-red-50 border border-red-100 ${className}`}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-sm text-red-700">{message}</p>
      </div>
    </div>
  )
}

/**
 * ToolButton - Primary action button with loading state
 */
interface ToolButtonProps {
  onClick: () => void
  children: ReactNode
  loading?: boolean
  disabled?: boolean
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  className?: string
}

export function ToolButton({
  onClick,
  children,
  loading = false,
  disabled = false,
  variant = 'primary',
  fullWidth = true,
  className = '',
}: ToolButtonProps) {
  const baseClasses = `px-6 py-3 rounded-lg font-medium transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    hover:scale-[1.01] active:scale-[0.99]`
  
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 hover:shadow-md',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-500 border border-slate-200',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      aria-busy={loading}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Processing...
        </span>
      ) : (
        children
      )}
    </button>
  )
}

/**
 * ToolGrid - Responsive grid for inputs
 */
interface ToolGridProps {
  children: ReactNode
  columns?: 1 | 2 | 3
  className?: string
}

export function ToolGrid({ children, columns = 2, className = '' }: ToolGridProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
  }

  return (
    <div className={`grid ${gridClasses[columns]} gap-4 ${className}`}>
      {children}
    </div>
  )
}

/**
 * ProgressBar - Apple-style horizontal progress bar
 * Used for tax rates, percentages, comparisons
 */
interface ProgressBarProps {
  value: number
  max: number
  label?: string
  showValue?: boolean
  color?: 'blue' | 'emerald' | 'amber' | 'red' | 'gradient'
  height?: 'sm' | 'md' | 'lg'
}

export function ProgressBar({
  value,
  max,
  label,
  showValue = true,
  color = 'blue',
  height = 'md',
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  const colorClasses = {
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    red: 'bg-red-500',
    gradient: 'bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500',
  }

  const heightClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  }

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-medium text-slate-700">{label}</span>}
          {showValue && <span className="text-sm font-semibold text-slate-900">{value.toFixed(1)}%</span>}
        </div>
      )}
      <div className={`w-full bg-slate-100 rounded-full overflow-hidden ${heightClasses[height]}`}>
        <div
          className={`${colorClasses[color]} ${heightClasses[height]} rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

/**
 * ShareLinkButton - Copy link to current result with URL state
 */
interface ShareLinkButtonProps {
  resultData: Record<string, string | number>
  toolPath: string
  className?: string
}

export function ShareLinkButton({ resultData, toolPath, className = '' }: ShareLinkButtonProps) {
  const handleShare = async () => {
    // Create URL with result parameters
    const params = new URLSearchParams()
    Object.entries(resultData).forEach(([key, value]) => {
      params.set(key, String(value))
    })
    
    const shareUrl = `https://calcuzy.app${toolPath}?${params.toString()}`
    
    try {
      await navigator.clipboard.writeText(shareUrl)
      // Toast will be triggered by the parent component
      return true
    } catch {
      return false
    }
  }

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 
        bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        hover:scale-[1.02] active:scale-[0.98] ${className}`}
      aria-label="Copy link to share this result"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      Share Result
    </button>
  )
}

/**
 * ResultCard - Enhanced result display with visual elements
 */
interface ResultCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: ReactNode
  trend?: 'up' | 'down' | 'neutral'
  color?: 'blue' | 'emerald' | 'amber' | 'red' | 'slate'
}

export function ResultCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  color = 'slate',
}: ResultCardProps) {
  const colorClasses = {
    blue: 'text-blue-600',
    emerald: 'text-emerald-600',
    amber: 'text-amber-600',
    red: 'text-red-600',
    slate: 'text-slate-900',
  }

  const bgClasses = {
    blue: 'bg-blue-50',
    emerald: 'bg-emerald-50',
    amber: 'bg-amber-50',
    red: 'bg-red-50',
    slate: 'bg-slate-50',
  }

  const trendIcons = {
    up: (
      <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    ),
    down: (
      <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
    neutral: (
      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
      </svg>
    ),
  }

  return (
    <div className={`p-4 rounded-xl ${bgClasses[color]} transition-all duration-200 hover:scale-[1.02]`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">{title}</span>
        {trend && trendIcons[trend]}
      </div>
      <div className="flex items-center gap-2">
        {icon}
        <span className={`text-xl font-bold ${colorClasses[color]}`}>{value}</span>
      </div>
      {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
    </div>
  )
}

// Reintroducing VisualGauge with proper export
export function VisualGauge({ value, max, label, className }: { value: number; max: number; label: string; className?: string }) {
  const percentage = (value / max) * 100;
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm font-semibold text-slate-900">{percentage.toFixed(1)}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full overflow-hidden h-4">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
