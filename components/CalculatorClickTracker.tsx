'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getToolFromPath, isCalculateButton, trackCalculatorUsed } from '@/lib/analytics'

export default function CalculatorClickTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const tool = getToolFromPath(pathname)
    if (!tool) return

    const handleClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const button = target.closest('button')
      if (!button) return

      const label = button.textContent?.trim() ?? ''
      if (!isCalculateButton(label)) return

      trackCalculatorUsed({
        tool_name: tool.name,
        tool_category: tool.category,
        page_path: pathname,
      })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  return null
}
