import Link from 'next/link'
import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { buildBlogIndexSchema, buildGuidesItemListSchema } from '@/lib/build-blog-schemas'
import { GUIDES, guideUrl } from '@/lib/guides'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import BlogGuideJsonLd from '@/components/blog/BlogGuideJsonLd'

export const metadata: Metadata = createMetadata({
  title: 'Calcuzy Blog - Guides & Tutorials',
  description:
    'In-depth guides for Calcuzy calculators and tools. Learn capital gains tax, crypto taxes, will writing, rent affordability, BMI, and more.',
  keywords:
    'calculator guides, capital gains guide, crypto tax guide, will writing guide, rent affordability guide, BMI guide',
  url: 'https://calcuzy.app/blog',
  image: '/og/og-default.png',
})

const blogSchema = buildBlogIndexSchema()
const guidesListSchema = buildGuidesItemListSchema(
  GUIDES.map((g) => ({ title: g.title, slug: g.slug }))
)

export default function BlogPage() {
  return (
    <>
      <BlogGuideJsonLd schemas={[blogSchema, guidesListSchema]} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Calcuzy Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth guides paired with our free calculators—finance, health, and legal topics explained clearly.
            </p>
          </div>

          <AdUnit slot={1} className="mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {GUIDES.map((post, index) => (
              <Card key={post.slug} hover animation="fade-in" delay={index * 100}>
                <article className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link href={guideUrl(post.slug)} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between mb-4">
                    <time className="text-sm text-gray-500" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <Link
                      href={guideUrl(post.slug)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read Guide →
                    </Link>
                  </div>

                  <Link
                    href={post.toolPath}
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    Try {post.toolName} →
                  </Link>
                </article>
              </Card>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mb-12">
            Have a topic request?{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </Link>
            .
          </p>

          <AdUnit slot={2} className="mb-12" />
        </main>

        <Footer />
      </div>
    </>
  )
}
