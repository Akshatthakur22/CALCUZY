import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const baseClasses = 'bg-white rounded-xl border border-border p-6'
  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-200' : ''
  
  return (
    <div className={`${baseClasses} ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}
