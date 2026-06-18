import Link from 'next/link'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import YMYLDisclaimer from '@/components/YMYLDisclaimer'
import BlogGuideJsonLd from '@/components/blog/BlogGuideJsonLd'

export interface BlogGuideSection {
  id: string
  title: string
  content: ReactNode
}

export interface BlogGuideLayoutProps {
  category: string
  title: string
  description: string
  datePublished: string
  readTime: string
  slug: string
  ymylCategory?: 'health' | 'finance' | 'legal'
  tocItems: { id: string; label: string }[]
  sections: BlogGuideSection[]
  faqs: { question: string; answer: string }[]
  ctaTitle: string
  ctaDescription: string
  ctaHref: string
  ctaLabel: string
  schemas?: object[]
}

export default function BlogGuideLayout({
  category,
  title,
  description,
  datePublished,
  readTime,
  slug,
  ymylCategory,
  tocItems,
  sections,
  faqs,
  ctaTitle,
  ctaDescription,
  ctaHref,
  ctaLabel,
  schemas = [],
}: BlogGuideLayoutProps) {
  return (
    <>
      {schemas.length > 0 && <BlogGuideJsonLd schemas={schemas} />}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/blog/" className="text-blue-600 hover:text-blue-700">Blog</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">{title}</li>
          </ol>
        </nav>

        <header className="text-center mb-8">
          <div className="mb-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 mb-6">{description}</p>
          <div className="flex items-center justify-center text-sm text-gray-500 space-x-4">
            <time dateTime={datePublished}>
              {new Date(datePublished).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </header>

        {ymylCategory && (
          <div className="mb-12">
            <YMYLDisclaimer category={ymylCategory} />
          </div>
        )}

        <AdUnit slot={1} className="mb-12" />

        <Card className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <nav>
            <ul className="space-y-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-blue-600 hover:text-blue-700">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Card>

        <article className="prose prose-lg max-w-none">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
              {section.content}
            </section>
          ))}
        </article>

        <AdUnit slot={2} className="mb-12" />

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>

        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{ctaTitle}</h2>
          <p className="mb-6 text-blue-100">{ctaDescription}</p>
          <Link
            href={ctaHref}
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            {ctaLabel}
          </Link>
        </Card>
      </main>

      <Footer />
    </div>
    </>
  )
}
