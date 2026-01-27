import en from '../locales/en.json'
import hi from '../locales/hi.json'
import de from '../locales/de.json'
import fr from '../locales/fr.json'
import es from '../locales/es.json'

export type Language = 'en' | 'hi' | 'de' | 'fr' | 'es'

export type Dictionary = typeof en

const dictionaries: Record<Language, Dictionary> = {
  en,
  hi,
  de,
  fr,
  es,
}

export const languages: Language[] = ['en', 'hi', 'de', 'fr', 'es']

export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिन्दी',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
}

export function getDictionary(lang: Language): Dictionary {
  const dictionary = dictionaries[lang]
  
  if (!dictionary) {
    console.warn(`Dictionary for language "${lang}" not found, falling back to English`)
    return dictionaries.en
  }
  
  return dictionary
}

export function getTranslation(dictionary: Dictionary, key: string): string {
  const keys = key.split('.')
  let value: any = dictionary
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      // Fallback to English if key not found
      const englishDict = dictionaries.en
      value = englishDict
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey]
        } else {
          return key // Return the key itself if not found anywhere
        }
      }
      break
    }
  }
  
  return typeof value === 'string' ? value : key
}

export function interpolate(template: string, variables: Record<string, string | number>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return variables[key]?.toString() || match
  })
}

export function createTranslationFunction(dictionary: Dictionary) {
  return function t(key: string, variables?: Record<string, string | number>): string {
    const translation = getTranslation(dictionary, key)
    
    if (variables) {
      return interpolate(translation, variables)
    }
    
    return translation
  }
}

export type TranslationFunction = ReturnType<typeof createTranslationFunction>

export function getLanguageFromPathname(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  
  if (languages.includes(firstSegment as Language)) {
    return firstSegment as Language
  }
  
  return 'en' // Default to English
}

export function createLocalizedPath(pathname: string, targetLang: Language): string {
  const segments = pathname.split('/').filter(Boolean)
  const currentLang = getLanguageFromPathname(pathname)
  
  if (currentLang !== 'en') {
    segments.shift() // Remove current language if not English
  }
  
  if (targetLang !== 'en') {
    segments.unshift(targetLang) // Add target language if not English
  }
  
  return '/' + segments.join('/')
}

export function generateStaticParams(): { lang: Language }[] {
  return languages.map(lang => ({ lang }))
}

export function getAlternateLanguages(pathname: string): Partial<Record<Language, string>> {
  const alternates: Partial<Record<Language, string>> = {}
  
  for (const lang of languages) {
    alternates[lang] = createLocalizedPath(pathname, lang)
  }
  
  return alternates
}
