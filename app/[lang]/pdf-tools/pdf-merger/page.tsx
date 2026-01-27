import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools, { getRelatedToolsByCategory } from '@/components/RelatedTools'
import PDFMergerClient from '@/components/client/PDFMergerClient'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'PDF Merger – Combine Multiple PDFs into One | Free Online Tool',
  description: 'Merge multiple PDF files into a single document instantly. 100% free, secure, and browser-based. No upload required. Arrange files in any order before merging.',
  keywords: 'PDF merger, combine PDF, merge PDF files, join PDF, PDF concatenation',
  url: 'https://calcuzy.app/pdf-tools/pdf-merger',
  image: '/og-tools.png',
})

export default function PDFMerger() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF Merger",
    "description": "Merge multiple PDF files into a single document instantly. 100% free, secure, and browser-based.",
    "url": "https://calcuzy.app/pdf-tools/pdf-merger",
    "applicationCategory": "Utility",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Merge multiple PDF files",
      "Arrange files in custom order", 
      "No file upload required",
      "100% client-side processing",
      "Instant download"
    ]
  }

  const relatedTools = getRelatedToolsByCategory('pdf-tools', '/pdf-tools/pdf-merger')

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
            PDF Merger
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Combine multiple PDF files into a single document instantly. Arrange files in your preferred order, 
            merge them with one click, and download the result. All processing happens in your browser for complete privacy.
          </p>
        </div>

        <AdUnit slot={1} />

        <PDFMergerClient />

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-6">About PDF Merger</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Our PDF merger tool allows you to combine multiple PDF documents into a single file quickly and securely. 
              Unlike online services that require you to upload your files to external servers, our tool processes everything 
              directly in your browser, ensuring your documents remain private and secure.
            </p>
            
            <p className="paragraph">
              Perfect for combining reports, presentations, research papers, or any PDF documents that need to be consolidated 
              into one file. The intuitive interface lets you arrange files in any order before merging, giving you complete 
              control over the final document structure.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text"><strong>Drag & Drop Interface:</strong> Simply drag PDF files into the upload area or click to browse</li>
              <li className="text-secondary-text"><strong>File Arrangement:</strong> Use up/down arrows to arrange files in your preferred order</li>
              <li className="text-secondary-text"><strong>Instant Processing:</strong> Merge files immediately without waiting for uploads</li>
              <li className="text-secondary-text"><strong>Complete Privacy:</strong> All processing happens locally in your browser</li>
              <li className="text-secondary-text"><strong>No File Limits:</strong> Merge as many files as your browser can handle</li>
              <li className="text-secondary-text"><strong>High Quality:</strong> Maintains original PDF quality and formatting</li>
            </ul>
            
            <p className="paragraph">
              The merger tool is particularly useful for students combining research papers, professionals merging reports, 
              or anyone who needs to consolidate multiple PDF documents. For other PDF operations, try our 
              <Link href="/pdf-tools/pdf-splitter" className="link-accent"> PDF Splitter</Link> to extract pages, or 
              <Link href="/pdf-tools/pdf-compressor" className="link-accent"> PDF Compressor</Link> to reduce file sizes.
            </p>
          </div>

          <RelatedTools tools={relatedTools} />
        </div>

        <div className="max-w-4xl mx-auto mt-16 fade-in-up">
          <h2 className="heading-2 mb-6">Examples & Use Cases</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li className="text-secondary-text"><strong>Academic Research:</strong> Combine multiple research papers, articles, and references into a single literature review document</li>
            <li className="text-secondary-text"><strong>Business Reports:</strong> Merge monthly reports, financial statements, and presentations into comprehensive quarterly or annual reports</li>
            <li className="text-secondary-text"><strong>Legal Documents:</strong> Combine contracts, agreements, exhibits, and supporting documents into a single case file</li>
            <li className="text-secondary-text"><strong>Book Publishing:</strong> Merge individual chapters or sections into a complete manuscript or book</li>
            <li className="text-secondary-text"><strong>Project Documentation:</strong> Consolidate project plans, specifications, diagrams, and progress reports into unified project documentation</li>
            <li className="text-secondary-text"><strong>Personal Organization:</strong> Combine scanned receipts, invoices, and statements into organized monthly or yearly financial records</li>
          </ul>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16 fade-in-up">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How many PDF files can I merge at once?</h3>
              <p className="paragraph">
                You can merge as many PDF files as your browser can handle. Most modern browsers can comfortably 
                process 10-20 files simultaneously, with individual file sizes up to 50MB each.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Will the merged PDF maintain the original quality?</h3>
              <p className="paragraph">
                Yes, our merger preserves the original quality and formatting of all PDF files. Text, images, 
                and other content remain exactly as they were in the original documents.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I change the order of pages after uploading?</h3>
              <p className="paragraph">
                Yes, you can arrange the files in any order before merging. Use the up and down arrows next to 
                each file to reorder them. The files will be merged in the sequence you specify.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is it safe to merge confidential documents?</h3>
              <p className="paragraph">
                Absolutely. Since all processing happens in your browser, your files never leave your device 
                or get uploaded to any server. This makes it completely safe for confidential and sensitive documents.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What happens to bookmarks and links in merged PDFs?</h3>
              <p className="paragraph">
                The merged PDF preserves basic document structure. However, complex features like bookmarks, 
              form fields, or advanced interactive elements may not be maintained in the merged document.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Do I need to install any software or plugins?</h3>
              <p className="paragraph">
                No installation required. Our PDF merger works entirely in your web browser using modern 
                web technologies. Just visit the page and start merging PDFs immediately.
              </p>
            </div>
          </div>

          {/* PDF Tools Cross-Links */}
          <div className="mt-12 p-6 bg-secondary-bg rounded-xl">
            <h3 className="heading-3 mb-4 text-center">Complete PDF Toolkit</h3>
            <p className="paragraph text-center mb-6 text-secondary-text">
              Explore our full range of PDF tools for all your document needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/pdf-tools/pdf-splitter" className="block p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors duration-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">✂️</div>
                  <h4 className="font-medium text-primary-text mb-1">PDF Splitter</h4>
                  <p className="text-sm text-secondary-text">Split PDFs into multiple documents</p>
                </div>
              </Link>
              <Link href="/pdf-tools/pdf-compressor" className="block p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors duration-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">🗜️</div>
                  <h4 className="font-medium text-primary-text mb-1">PDF Compressor</h4>
                  <p className="text-sm text-secondary-text">Reduce PDF file size without quality loss</p>
                </div>
              </Link>
              <Link href="/pdf-tools/pdf-to-word" className="block p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors duration-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">📝</div>
                  <h4 className="font-medium text-primary-text mb-1">PDF to Word</h4>
                  <p className="text-sm text-secondary-text">Convert PDF files to editable Word documents</p>
                </div>
              </Link>
              <Link href="/pdf-tools/word-to-pdf" className="block p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors duration-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">📄</div>
                  <h4 className="font-medium text-primary-text mb-1">Word to PDF</h4>
                  <p className="text-sm text-secondary-text">Convert Word documents to PDF files</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
