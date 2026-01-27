import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'PDF Tools – Free Online PDF Editor & Converter',
  description: 'Free online PDF tools: merge, split, compress, convert PDF to Word, Word to PDF. 100% browser-based, no upload required. Secure and fast PDF processing.',
  keywords: 'PDF tools, PDF merger, PDF splitter, PDF compressor, PDF converter, online PDF editor',
  url: 'https://calcuzy.app/pdf-tools',
  image: '/og-tools.png',
})

export default function PDFTools() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "PDF Tools",
    "description": "Free online PDF tools for merging, splitting, compressing, and converting PDF files",
    "url": "https://calcuzy.app/pdf-tools",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "PDF Merger",
          "description": "Merge multiple PDF files into one document",
          "url": "https://calcuzy.app/pdf-tools/pdf-merger",
          "applicationCategory": "Utility"
        },
        {
          "@type": "SoftwareApplication", 
          "name": "PDF Splitter",
          "description": "Split PDF files into multiple documents",
          "url": "https://calcuzy.app/pdf-tools/pdf-splitter",
          "applicationCategory": "Utility"
        },
        {
          "@type": "SoftwareApplication",
          "name": "PDF Compressor", 
          "description": "Compress PDF files to reduce file size",
          "url": "https://calcuzy.app/pdf-tools/pdf-compressor",
          "applicationCategory": "Utility"
        },
        {
          "@type": "SoftwareApplication",
          "name": "PDF to Word",
          "description": "Convert PDF files to Word documents", 
          "url": "https://calcuzy.app/pdf-tools/pdf-to-word",
          "applicationCategory": "Utility"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Word to PDF",
          "description": "Convert Word documents to PDF files",
          "url": "https://calcuzy.app/pdf-tools/word-to-pdf", 
          "applicationCategory": "Utility"
        }
      ]
    }
  }

  const pdfTools = [
    {
      title: 'PDF Merger',
      description: 'Combine multiple PDF files into a single document. Perfect for merging reports, presentations, or scanned pages.',
      href: '/pdf-tools/pdf-merger',
      icon: '📄',
      featured: true
    },
    {
      title: 'PDF Splitter', 
      description: 'Split large PDF files into smaller documents. Extract specific pages or create separate files.',
      href: '/pdf-tools/pdf-splitter',
      icon: '✂️'
    },
    {
      title: 'PDF Compressor',
      description: 'Reduce PDF file size without compromising quality. Optimize for web sharing and email attachments.',
      href: '/pdf-tools/pdf-compressor', 
      icon: '🗜️'
    },
    {
      title: 'PDF to Word',
      description: 'Convert PDF documents to editable Word format. Preserve formatting and layout.',
      href: '/pdf-tools/pdf-to-word',
      icon: '📝'
    },
    {
      title: 'Word to PDF',
      description: 'Convert Word documents to PDF format. Create professional PDFs from your Word files.',
      href: '/pdf-tools/word-to-pdf',
      icon: '📋'
    }
  ]

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <Breadcrumbs />
      
      <main className="container section-responsive">
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">
            PDF Tools
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Free online PDF tools that work entirely in your browser. No uploads, no registration, 
            and complete privacy. Merge, split, compress, and convert PDF files instantly.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-6xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-8">Featured PDF Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {pdfTools.map((tool, index) => (
              <Link key={tool.href} href={tool.href}>
                <Card 
                  className={`h-full hover:scale-[1.02] transition-all duration-200 ${
                    tool.featured ? 'ring-2 ring-accent ring-offset-2' : ''
                  }`}
                  animation="fade-in-up"
                  delay={index * 100}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="text-xl font-semibold text-primary-text mb-3">
                      {tool.title}
                      {tool.featured && (
                        <span className="ml-2 px-2 py-1 bg-accent text-white text-xs rounded-full">
                          Popular
                        </span>
                      )}
                    </h3>
                    <p className="text-secondary-text text-sm leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-6">Why Choose Our PDF Tools?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🔒</div>
                <div>
                  <h3 className="font-semibold text-primary-text mb-2">100% Private</h3>
                  <p className="text-secondary-text text-sm">
                    All processing happens in your browser. Your files never leave your device, 
                    ensuring complete privacy and security.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="font-semibold text-primary-text mb-2">Lightning Fast</h3>
                  <p className="text-secondary-text text-sm">
                    No server uploads mean instant processing. Edit your PDFs in seconds, not minutes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">💰</div>
                <div>
                  <h3 className="font-semibold text-primary-text mb-2">Completely Free</h3>
                  <p className="text-secondary-text text-sm">
                    No hidden costs, no premium features. All PDF tools are free to use without limits.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🌐</div>
                <div>
                  <h3 className="font-semibold text-primary-text mb-2">Works Offline</h3>
                  <p className="text-secondary-text text-sm">
                    Once loaded, our tools work offline. Process PDFs anywhere, anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-6">Common Use Cases</h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-secondary-bg rounded-lg">
                <h3 className="font-semibold text-primary-text mb-3">📊 Business Documents</h3>
                <ul className="text-sm text-secondary-text space-y-1">
                  <li>• Merge monthly reports into annual summaries</li>
                  <li>• Split large presentations by sections</li>
                  <li>• Compress contracts for email attachments</li>
                  <li>• Convert invoices between PDF and Word formats</li>
                </ul>
              </div>
              
              <div className="p-4 bg-secondary-bg rounded-lg">
                <h3 className="font-semibold text-primary-text mb-3">🎓 Academic Work</h3>
                <ul className="text-sm text-secondary-text space-y-1">
                  <li>• Combine research papers into literature reviews</li>
                  <li>• Extract specific chapters from textbooks</li>
                  <li>• Reduce thesis file size for submissions</li>
                  <li>• Convert assignments between formats</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16 fade-in-up">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">Are my PDF files uploaded to any server?</h3>
              <p className="paragraph">
                No, absolutely not. All PDF processing happens entirely in your web browser using 
                JavaScript. Your files never leave your device, ensuring complete privacy and security.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What file size limits exist for PDF processing?</h3>
              <p className="paragraph">
                Since processing happens in your browser, the limits depend on your device&apos;s memory 
                and browser capabilities. Most modern browsers can handle PDFs up to 50-100MB comfortably.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Do I need to install any software?</h3>
              <p className="paragraph">
                No installation required. Our PDF tools work entirely in your web browser using modern 
                web technologies. Just visit the page and start processing your PDFs immediately.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Are the converted files compatible with other software?</h3>
              <p className="paragraph">
                Yes, our tools create standard PDF and Word files that are fully compatible with 
                popular software like Adobe Acrobat, Microsoft Word, Google Docs, and other PDF readers.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
