import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  animation?: 'fade-in' | 'slide-up' | 'fade-in-up' | 'staggered-fade-in' | ''
  delay?: number
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  animation = '',
  delay = 0,
  padding = 'md'
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4 md:p-5',
    md: 'p-5 md:p-6',
    lg: 'p-6 md:p-8'
  }
  
  const baseClasses = `bg-white rounded-2xl md:rounded-[20px] border border-slate-100 shadow-[0_2px_12px_rgb(0,0,0,0.03)] ${paddingClasses[padding]}`
  const hoverClass = hover 
    ? 'transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:scale-[1.01] hover:border-slate-200 active:scale-[0.99]' 
    : ''
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
