import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools, { getRelatedToolsByCategory } from '@/components/RelatedTools'
import PDFSplitterClient from '@/components/client/PDFSplitterClient'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'PDF Splitter – Split PDF Pages Online Free | Calcuzy',
  description: 'Split PDF pages online for free. Extract pages, split by range, split into individual pages, reorder pages visually. 100% client-side.',
  keywords: 'PDF splitter, split PDF pages, extract PDF pages, PDF page separator, divide PDF',
  url: 'https://calcuzy.app/pdf-tools/pdf-splitter',
  image: '/og-tools.png',
})

export default function PDFSplitter() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF Splitter",
    "description": "Split PDF pages online for free. Extract pages, split by range, split into individual pages, reorder pages visually.",
    "url": "https://calcuzy.app/pdf-tools/pdf-splitter",
    "applicationCategory": "PDF Utility",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Extract selected pages",
      "Split by page range",
      "Split into individual pages",
      "Visual page reordering",
      "Drag & drop interface",
      "Split by custom chunks",
      "Split into two PDFs"
    ]
  }

  const relatedTools = getRelatedToolsByCategory('pdf-tools', '/pdf-tools/pdf-splitter')

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
            PDF Splitter
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Split PDF pages with precision. Extract specific pages, split by ranges, divide into individual files, 
            or reorder pages visually. All processing happens in your browser for complete privacy and security.
          </p>
        </div>

        <AdUnit slot={1} />

        <PDFSplitterClient />

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <section className="prose max-w-none mt-12">
            <h2 className="heading-2 mb-6">About PDF Splitter</h2>
            
            <p className="paragraph">
              Our advanced PDF splitter provides comprehensive page manipulation capabilities with an intuitive visual interface. 
              Unlike basic PDF tools that only offer simple splitting, our tool includes multiple splitting methods, visual page 
              reordering, and precise control over your PDF documents.
            </p>
            
            <p className="paragraph">
              The splitter is designed for professionals and casual users who need to work with PDF documents regularly. 
              Whether you&apos;re extracting specific chapters from a book, separating pages from a report, or reorganizing 
              document structure, our tool provides the flexibility and precision you need.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Advanced Splitting Options</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text"><strong>Extract Selected Pages:</strong> Choose specific pages by checking boxes in the visual preview</li>
              <li className="text-secondary-text"><strong>Split by Page Range:</strong> Define custom ranges like 3-7 or 10-12 for precise extraction</li>
              <li className="text-secondary-text"><strong>Split Every Page:</strong> Convert multi-page PDF into individual single-page documents</li>
              <li className="text-secondary-text"><strong>Split by Custom Chunks:</strong> Divide PDF into groups of pages (every 2, 5, or n pages)</li>
              <li className="text-secondary-text"><strong>Split Into Two PDFs:</strong> Create a clean break at any page number</li>
              <li className="text-secondary-text"><strong>Visual Reordering:</strong> Drag and drop pages to rearrange before splitting</li>
            </ul>
            
            <h3 className="heading-3 mt-8 mb-4">Visual Page Management</h3>
            <p className="paragraph mb-6">
              The visual interface displays thumbnail previews of each page, making it easy to identify content before splitting. 
              Each page shows its number, a preview image, and selection controls. The drag-and-drop functionality allows you to 
              reorder pages intuitively, with all splitting operations respecting your new page arrangement.
            </p>
            
            <p className="paragraph mb-8">
              This visual approach eliminates guesswork and ensures you extract exactly the pages you need. For large documents, 
              the responsive grid layout adapts to your screen size, providing an optimal viewing experience on desktop and mobile devices.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Privacy and Performance</h3>
            <p className="paragraph mb-6">
              All PDF processing happens entirely in your browser using advanced JavaScript libraries. Your files never leave your device, 
              ensuring complete privacy for sensitive documents. The client-side processing also means instant results without waiting for 
              server uploads or downloads.
            </p>
            
            <p className="paragraph">
              The tool is optimized for performance with efficient memory management and progressive loading. Large PDF files are handled 
              gracefully, with thumbnail generation and processing happening in the background to maintain responsive user experience.
            </p>
          </section>

          <RelatedTools tools={relatedTools} />
        </div>

        <div className="max-w-4xl mx-auto mt-16 fade-in-up">
          <h2 className="heading-2 mb-6">Use Cases & Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-secondary-bg rounded-lg">
              <h3 className="font-semibold text-primary-text mb-3">📚 Academic Research</h3>
              <ul className="text-sm text-secondary-text space-y-2">
                <li>• Extract specific chapters from textbooks for focused study</li>
                <li>• Separate bibliography and appendix from research papers</li>
                <li>• Split multi-article journals into individual papers</li>
                <li>• Create custom reading packets from course materials</li>
                <li>• Extract figures and tables for presentations</li>
                <li>• Organize dissertation chapters into separate documents</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary-bg rounded-lg">
              <h3 className="font-semibold text-primary-text mb-3">💼 Business Documents</h3>
              <ul className="text-sm text-secondary-text space-y-2">
                <li>• Extract specific sections from annual reports</li>
                <li>• Separate financial statements from board meeting minutes</li>
                <li>• Split contracts into individual agreement clauses</li>
                <li>• Create targeted proposal sections for different clients</li>
                <li>• Extract invoice pages from accounting records</li>
                <li>• Separate project documentation by phase or milestone</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary-bg rounded-lg">
              <h3 className="font-semibold text-primary-text mb-3">⚖️ Legal Documents</h3>
              <ul className="text-sm text-secondary-text space-y-2">
                <li>• Extract exhibits from legal case files</li>
                <li>• Separate witness statements from evidence documents</li>
                <li>• Split contracts into individual clauses for review</li>
                <li>• Create discovery packets by document type</li>
                <li>• Extract specific regulations from compliance manuals</li>
                <li>• Separate court filings by motion type</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary-bg rounded-lg">
              <h3 className="font-semibold text-primary-text mb-3">📖 Publishing & Media</h3>
              <ul className="text-sm text-secondary-text space-y-2">
                <li>• Extract magazine articles for digital distribution</li>
                <li>• Split book chapters for e-book formatting</li>
                <li>• Create individual page samples for previews</li>
                <li>• Separate advertisements from editorial content</li>
                <li>• Extract specific pages for social media sharing</li>
                <li>• Create custom page layouts for print production</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary-bg rounded-lg">
              <h3 className="font-semibold text-primary-text mb-3">🏥 Healthcare & Medical</h3>
              <ul className="text-sm text-secondary-text space-y-2">
                <li>• Extract patient records by visit or treatment</li>
                <li>• Separate lab results from medical histories</li>
                <li>• Split medical textbooks by organ system</li>
                <li>• Create focused study guides from medical journals</li>
                <li>• Extract prescription information from medical records</li>
                <li>• Separate imaging reports from diagnostic documents</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary-bg rounded-lg">
              <h3 className="font-semibold text-primary-text mb-3">🎓 Education & Training</h3>
              <ul className="text-sm text-secondary-text space-y-2">
                <li>• Extract worksheet pages from workbooks</li>
                <li>• Split lesson plans by subject or activity</li>
                <li>• Create individual assignment sheets from packets</li>
                <li>• Separate answer keys from test materials</li>
                <li>• Extract specific pages for student handouts</li>
                <li>• Organize curriculum materials by unit</li>
              </ul>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16 fade-in-up">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How accurate is the page preview in the splitter?</h3>
              <p className="paragraph">
                The page preview generates high-quality thumbnail images that accurately represent each page&apos;s content. 
                While optimized for performance, the previews maintain sufficient detail for you to identify pages confidently 
                before splitting operations.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I split password-protected PDF files?</h3>
              <p className="paragraph">
                No, the tool cannot process password-protected PDFs. You&apos;ll need to remove the password protection first 
                using a PDF password remover tool, then you can use our splitter on the unprotected file.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What&apos;s the maximum file size for PDF splitting?</h3>
              <p className="paragraph">
                The tool supports PDF files up to 50MB, which accommodates most documents including textbooks, reports, 
                and manuals. For larger files, consider compressing them first using our <Link href="/pdf-tools/pdf-compressor" className="link-accent">PDF Compressor</Link>.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How do page ranges work in the splitter?</h3>
              <p className="paragraph">
                Page ranges use the format &quot;start-end&quot; (e.g., 3-7 for pages 3 through 7). You can enter multiple ranges 
                separated by commas (e.g., 1-3, 5-7, 10). The tool validates all ranges and shows clear error messages for invalid inputs.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I undo page reordering after making changes?</h3>
              <p className="paragraph">
                Currently, there&apos;s no undo function, but you can simply reload the original file to start over. 
                The visual interface makes it easy to see your changes before committing to any splitting operations.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What happens to bookmarks and links when splitting PDFs?</h3>
              <p className="paragraph">
                Basic document structure is preserved, but complex features like bookmarks, form fields, or interactive 
                elements may not transfer to the split files. The focus is on maintaining page content and layout integrity.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How many output files can the splitter create at once?</h3>
              <p className="paragraph">
                The tool can create multiple output files depending on your splitting method. Split every page creates 
                one file per page, while other methods typically create 2-5 files. All files are available for download 
                individually after processing.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is the splitter suitable for sensitive or confidential documents?</h3>
              <p className="paragraph">
                Absolutely. Since all processing happens in your browser, your files never leave your device or get 
                uploaded to any server. This makes it completely secure for confidential legal, medical, or business documents.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
