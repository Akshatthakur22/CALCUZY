import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  animation?: 'fade-in' | 'slide-up' | 'fade-in-up' | 'staggered-fade-in' | ''
  delay?: number
}

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  animation = '',
  delay = 0
}: CardProps) {
  const baseClasses = 'bg-white rounded-xl border border-border p-6'
  const hoverClass = hover ? 'transition-all duration-200 hover:scale-[1.01] hover:shadow-md hover:bg-gray-50' : ''
  const animationClass = animation ? animation : ''
  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {}
  
  return (
    <div 
      className={`${baseClasses} ${hoverClass} ${animationClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  )
}
