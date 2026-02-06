"use client"
import { useState } from 'react'

export default function ReadMore({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className={
          expanded
            ? 'prose max-w-4xl mx-auto py-10 transition-all duration-300'
            : 'prose max-w-4xl mx-auto py-10 overflow-hidden max-h-[400px] relative transition-all duration-300'
        }
        style={{ position: 'relative' }}
      >
        {children}
        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
        )}
      </div>
      <button
        className="flex items-center gap-1 text-blue-600 hover:underline mt-2 mx-auto"
        style={{ display: 'block' }}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? <><span className="inline-block rotate-180">▼</span> Read Less</> : <><span className="inline-block">▼</span> Read More</>}
      </button>
    </div>
  )
}
