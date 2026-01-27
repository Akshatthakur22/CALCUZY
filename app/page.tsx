import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { Language, languages } from '@/src/lib/i18n'

// Detect browser language from Accept-Language header
function detectBrowserLanguage(): Language {
  try {
    const headersList = headers()
    const acceptLanguage = headersList.get('accept-language') || ''
    
    // Extract language codes from Accept-Language header
    const preferredLanguages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase())
    
    // Find first supported language
    for (const preferredLang of preferredLanguages) {
      // Check exact match
      if (languages.includes(preferredLang as Language)) {
        return preferredLang as Language
      }
      
      // Check for language prefix (e.g., 'en-US' -> 'en')
      const langPrefix = preferredLang.split('-')[0]
      if (languages.includes(langPrefix as Language)) {
        return langPrefix as Language
      }
    }
  } catch (error) {
    // Fallback to English if header detection fails
    console.warn('Failed to detect browser language:', error)
  }
  
  return 'en' // Default fallback
}

// Root page component that handles the redirect
export default function RootPage() {
  const detectedLang = detectBrowserLanguage()
  redirect(`/${detectedLang}`)
}
