'use client'

import { useEffect } from 'react'
import { saveRecentTool } from '@/components/home/RecentTools'

/**
 * Hook to track tool visits and save them to localStorage
 * Use this in any tool page to track user visits for the "Recent Tools" section
 * 
 * @example
 * // In your tool page component:
 * useTrackToolVisit('Age Calculator', '/age-calculator')
 */
export function useTrackToolVisit(toolName: string, toolUrl: string) {
  useEffect(() => {
    saveRecentTool(toolName, toolUrl)
  }, [toolName, toolUrl])
}

export default useTrackToolVisit
