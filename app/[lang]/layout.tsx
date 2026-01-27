import { Inter } from 'next/font/google'
import '../globals.css'
import { createMetadata } from '@/lib/metadata'
import { Analytics } from '@vercel/analytics/react'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingBoundary from '@/components/LoadingBoundary'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Language, getDictionary, generateStaticParams as generateI18nStaticParams, getAlternateLanguages } from '@/src/lib/i18n'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return generateI18nStaticParams()
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const { lang } = params
  const dictionary = getDictionary(lang)
  const alternates = getAlternateLanguages(`/${lang}`)
  
  return createMetadata({
    title: dictionary.common.siteName + ' - ' + dictionary.common.tagline,
    description: dictionary.common.description,
    keywords: dictionary.common.keywords,
    url: `/${lang}`,
  }).metadataBase && {
    alternates: {
      canonical: `/${lang}`,
      languages: alternates as Record<string, string>,
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Language }
}) {
  const { lang } = params
  const dictionary = getDictionary(lang)
  
  return (
    <html lang={lang} className="scroll-smooth">
      <head>
         <meta
          name="google-adsense-account"
          content="ca-pub-2612507905879561"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2612507905879561"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-primary-bg text-primary-text antialiased`}>
        <div className="fixed top-4 right-4 z-50">
          <LanguageSwitcher />
        </div>
        <ErrorBoundary>
          <LoadingBoundary>
            {children}
          </LoadingBoundary>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
