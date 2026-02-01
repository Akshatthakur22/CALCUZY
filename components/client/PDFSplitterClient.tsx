'use client'

import { useState, useCallback, useRef } from 'react'
import dynamic from 'next/dynamic'
import Card from '@/components/Card'
import Skeleton from '@/components/Skeleton'
import AdUnit from '@/components/AdUnit'

interface PDFPage {
  pageNumber: number
  thumbnail: string
  selected: boolean
  width: number
  height: number
}

interface SplitResult {
  filename: string
  blob: Blob
  size: string
  pages: number[]
}

export default function PDFSplitterClient() {
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [pages, setPages] = useState<PDFPage[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')
  const [dragActive, setDragActive] = useState(false)
  const [results, setResults] = useState<SplitResult[]>([])
  const [selectedMethod, setSelectedMethod] = useState<'selected' | 'range' | 'every' | 'chunks' | 'two'>('selected')
  const [pageRange, setPageRange] = useState('')
  const [chunkSize, setChunkSize] = useState('2')
  const [breakPage, setBreakPage] = useState('')
  const [draggedPage, setDraggedPage] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleFile = useCallback(async (file: File) => {
    if (file.type !== 'application/pdf') {
      setError('Please select a PDF file only')
      return false
    }

    if (file.size > 50 * 1024 * 1024) {
      setError('File size must be less than 50MB')
      return false
    }

    try {
      setIsProcessing(true)
      setError('')
      setPdfFile(file)
      setResults([])

      // In a real implementation, we would use PDF.js or pdf-lib
      // For now, we'll simulate page extraction
      const extractedPages = await extractPDFPages(file)
      setPages(extractedPages)

    } catch (error) {
      console.error('PDF processing failed:', error)
      setError('Failed to process PDF file. Please try again.')
      setPdfFile(null)
      setPages([])
    } finally {
      setIsProcessing(false)
    }

    return true
  }, [])

  // Placeholder function - in production, use PDF.js
  const extractPDFPages = async (file: File): Promise<PDFPage[]> => {
    // Simulate PDF processing delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulate extracting pages (in reality, this would use PDF.js)
    const pageCount = 10 // Simulated page count
    const extractedPages: PDFPage[] = []
    
    for (let i = 1; i <= pageCount; i++) {
      extractedPages.push({
        pageNumber: i,
        thumbnail: `data:image/svg+xml,${encodeURIComponent(`
          <svg width="200" height="280" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="280" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
            <text x="100" y="140" text-anchor="middle" font-family="Arial" font-size="16" fill="#6c757d">
              Page ${i}
            </text>
          </svg>
        `)}`,
        selected: false,
        width: 200,
        height: 280
      })
    }
    
    return extractedPages
  }

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFile(files[0])
    }
  }, [handleFile])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFile(files[0])
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const togglePageSelection = (pageNumber: number) => {
    setPages(prev => prev.map(page => 
      page.pageNumber === pageNumber 
        ? { ...page, selected: !page.selected }
        : page
    ))
  }

  const selectAllPages = () => {
    setPages(prev => prev.map(page => ({ ...page, selected: true })))
  }

  const deselectAllPages = () => {
    setPages(prev => prev.map(page => ({ ...page, selected: false })))
  }

  const handleDragStart = (pageNumber: number) => {
    setDraggedPage(pageNumber)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDropOnPage = (targetPageNumber: number) => {
    if (draggedPage === null || draggedPage === targetPageNumber) return

    setPages(prev => {
      const draggedIndex = prev.findIndex(p => p.pageNumber === draggedPage)
      const targetIndex = prev.findIndex(p => p.pageNumber === targetPageNumber)
      
      if (draggedIndex === -1 || targetIndex === -1) return prev

      const newPages = [...prev]
      const [draggedItem] = newPages.splice(draggedIndex, 1)
      newPages.splice(targetIndex, 0, draggedItem)

      return newPages
    })
    setDraggedPage(null)
  }

  const parsePageRanges = (rangeString: string): number[] => {
    const ranges = rangeString.split(',').map(r => r.trim())
    const pageNumbers: number[] = []

    for (const range of ranges) {
      if (range.includes('-')) {
        const [start, end] = range.split('-').map(n => parseInt(n.trim()))
        if (isNaN(start) || isNaN(end) || start < 1 || end > pages.length || start > end) {
          throw new Error(`Invalid range: ${range}`)
        }
        for (let i = start; i <= end; i++) {
          pageNumbers.push(i)
        }
      } else {
        const pageNum = parseInt(range)
        if (isNaN(pageNum) || pageNum < 1 || pageNum > pages.length) {
          throw new Error(`Invalid page number: ${range}`)
        }
        pageNumbers.push(pageNum)
      }
    }

    return Array.from(new Set(pageNumbers)).sort((a, b) => a - b)
  }

  const performSplit = async () => {
    if (!pdfFile || pages.length === 0) {
      setError('Please upload a PDF file first')
      return
    }

    try {
      setIsProcessing(true)
      setError('')
      setResults([])

      let splitResults: SplitResult[] = []

      switch (selectedMethod) {
        case 'selected':
          const selectedPages = pages.filter(p => p.selected).map(p => p.pageNumber)
          if (selectedPages.length === 0) {
            throw new Error('Please select at least one page')
          }
          splitResults = await createSplitPDF(selectedPages, 'selected-pages.pdf')
          break

        case 'range':
          if (!pageRange.trim()) {
            throw new Error('Please enter a page range')
          }
          const rangePages = parsePageRanges(pageRange)
          splitResults = await createSplitPDF(rangePages, 'range-pages.pdf')
          break

        case 'every':
          splitResults = await createIndividualPDFs()
          break

        case 'chunks':
          const chunkNum = parseInt(chunkSize)
          if (isNaN(chunkNum) || chunkNum < 1) {
            throw new Error('Please enter a valid chunk size')
          }
          splitResults = await createChunkedPDFs(chunkNum)
          break

        case 'two':
          const breakNum = parseInt(breakPage)
          if (isNaN(breakNum) || breakNum < 1 || breakNum >= pages.length) {
            throw new Error(`Please enter a valid break page (1-${pages.length - 1})`)
          }
          splitResults = await createTwoPDFs(breakNum)
          break
      }

      setResults(splitResults)

    } catch (error) {
      console.error('Split failed:', error)
      setError(error instanceof Error ? error.message : 'Split operation failed')
    } finally {
      setIsProcessing(false)
    }
  }

  // Placeholder functions - in production, use pdf-lib
  const createSplitPDF = async (pageNumbers: number[], filename: string): Promise<SplitResult[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const blob = new Blob(['PDF content'], { type: 'application/pdf' })
    return [{
      filename,
      blob,
      size: formatFileSize(blob.size),
      pages: pageNumbers
    }]
  }

  const createIndividualPDFs = async (): Promise<SplitResult[]> => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    return pages.map(page => ({
      filename: `page-${page.pageNumber}.pdf`,
      blob: new Blob([`PDF content for page ${page.pageNumber}`], { type: 'application/pdf' }),
      size: '15.2 KB',
      pages: [page.pageNumber]
    }))
  }

  const createChunkedPDFs = async (chunkSize: number): Promise<SplitResult[]> => {
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const results: SplitResult[] = []
    for (let i = 0; i < pages.length; i += chunkSize) {
      const chunkPages = pages.slice(i, i + chunkSize).map(p => p.pageNumber)
      results.push({
        filename: `chunk-${Math.floor(i / chunkSize) + 1}.pdf`,
        blob: new Blob([`PDF content for chunk ${Math.floor(i / chunkSize) + 1}`], { type: 'application/pdf' }),
        size: `${(chunkPages.length * 15.2).toFixed(1)} KB`,
        pages: chunkPages
      })
    }
    return results
  }

  const createTwoPDFs = async (breakAt: number): Promise<SplitResult[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const firstPart = pages.slice(0, breakAt).map(p => p.pageNumber)
    const secondPart = pages.slice(breakAt).map(p => p.pageNumber)
    
    return [
      {
        filename: 'part-1.pdf',
        blob: new Blob([`PDF content for part 1`], { type: 'application/pdf' }),
        size: `${(firstPart.length * 15.2).toFixed(1)} KB`,
        pages: firstPart
      },
      {
        filename: 'part-2.pdf',
        blob: new Blob([`PDF content for part 2`], { type: 'application/pdf' }),
        size: `${(secondPart.length * 15.2).toFixed(1)} KB`,
        pages: secondPart
      }
    ]
  }

  const downloadResult = (result: SplitResult) => {
    const url = URL.createObjectURL(result.blob)
    const link = document.createElement('a')
    link.href = url
    link.download = result.filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const downloadAllResults = () => {
    results.forEach(result => downloadResult(result))
  }

  const resetTool = () => {
    setPdfFile(null)
    setPages([])
    setResults([])
    setError('')
    setPageRange('')
    setChunkSize('2')
    setBreakPage('')
    setSelectedMethod('selected')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <Card className="max-w-6xl mx-auto mb-12 fade-in-up">
      <div className="space-y-6">
        {/* File Upload Area */}
        {!pdfFile && (
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive 
                ? 'border-accent bg-accent/5' 
                : 'border-border hover:border-gray-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              onChange={handleFileInput}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Upload PDF file"
            />
            
            <div className="space-y-4">
              <div className="text-4xl">📄</div>
              <div>
                <p className="text-lg font-medium text-primary-text">
                  Drop PDF file here or click to browse
                </p>
                <p className="text-sm text-secondary-text mt-2">
                  Select a PDF file to split (Max 50MB)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        {/* File Info and Reset */}
        {pdfFile && (
          <div className="flex items-center justify-between p-4 bg-secondary-bg rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">📄</div>
              <div>
                <p className="font-medium text-primary-text">{pdfFile.name}</p>
                <p className="text-sm text-secondary-text">
                  {formatFileSize(pdfFile.size)} • {pages.length} pages
                </p>
              </div>
            </div>
            <button
              onClick={resetTool}
              className="px-4 py-2 text-sm text-red-600 hover:text-red-700 transition-colors"
            >
              Reset Tool
            </button>
          </div>
        )}

        {/* Page Thumbnails */}
        {pages.length > 0 && (
          <>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-primary-text">
                  Pages ({pages.length})
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={selectAllPages}
                    className="px-3 py-1 text-sm bg-accent text-white rounded hover:bg-accent/90 transition-colors"
                  >
                    Select All
                  </button>
                  <button
                    onClick={deselectAllPages}
                    className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                  >
                    Deselect All
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {pages.map((page) => (
                  <div
                    key={page.pageNumber}
                    draggable
                    onDragStart={() => handleDragStart(page.pageNumber)}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDropOnPage(page.pageNumber)}
                    className={`relative cursor-move border rounded-lg overflow-hidden transition-all ${
                      page.selected 
                        ? 'border-accent ring-2 ring-accent/20' 
                        : 'border-border hover:border-gray-400'
                    } ${draggedPage === page.pageNumber ? 'opacity-50' : ''}`}
                  >
                    <div className="aspect-[3/4] bg-gray-50">
                      <img 
                        src={page.thumbnail}
                        alt={`Page ${page.pageNumber}`}
                        width={120}
                        height={160}
                        className="w-full h-full object-contain"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    
                    <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                      Page {page.pageNumber}
                    </div>
                    
                    <div className="absolute top-2 right-2">
                      <input
                        type="checkbox"
                        checked={page.selected}
                        onChange={() => togglePageSelection(page.pageNumber)}
                        className="w-4 h-4 text-accent rounded focus:ring-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <AdUnit slot={2} />

            {/* Splitting Options */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-primary-text">Splitting Method</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button
                  onClick={() => setSelectedMethod('selected')}
                  className={`p-4 border rounded-lg text-left transition-all ${
                    selectedMethod === 'selected'
                      ? 'border-accent bg-accent/5'
                      : 'border-border hover:border-gray-400'
                  }`}
                >
                  <h4 className="font-medium text-primary-text mb-1">Extract Selected Pages</h4>
                  <p className="text-sm text-secondary-text">
                    Extract pages you select with checkboxes
                  </p>
                </button>

                <button
                  onClick={() => setSelectedMethod('range')}
                  className={`p-4 border rounded-lg text-left transition-all ${
                    selectedMethod === 'range'
                      ? 'border-accent bg-accent/5'
                      : 'border-border hover:border-gray-400'
                  }`}
                >
                  <h4 className="font-medium text-primary-text mb-1">Split by Page Range</h4>
                  <p className="text-sm text-secondary-text">
                    Extract pages using ranges like 3-7, 10-12
                  </p>
                </button>

                <button
                  onClick={() => setSelectedMethod('every')}
                  className={`p-4 border rounded-lg text-left transition-all ${
                    selectedMethod === 'every'
                      ? 'border-accent bg-accent/5'
                      : 'border-border hover:border-gray-400'
                  }`}
                >
                  <h4 className="font-medium text-primary-text mb-1">Split Every Page</h4>
                  <p className="text-sm text-secondary-text">
                    Create individual PDF files for each page
                  </p>
                </button>

                <button
                  onClick={() => setSelectedMethod('chunks')}
                  className={`p-4 border rounded-lg text-left transition-all ${
                    selectedMethod === 'chunks'
                      ? 'border-accent bg-accent/5'
                      : 'border-border hover:border-gray-400'
                  }`}
                >
                  <h4 className="font-medium text-primary-text mb-1">Split by Chunks</h4>
                  <p className="text-sm text-secondary-text">
                    Divide PDF into groups of pages
                  </p>
                </button>

                <button
                  onClick={() => setSelectedMethod('two')}
                  className={`p-4 border rounded-lg text-left transition-all ${
                    selectedMethod === 'two'
                      ? 'border-accent bg-accent/5'
                      : 'border-border hover:border-gray-400'
                  }`}
                >
                  <h4 className="font-medium text-primary-text mb-1">Split Into Two PDFs</h4>
                  <p className="text-sm text-secondary-text">
                    Create a break at a specific page
                  </p>
                </button>
              </div>

              {/* Method-specific inputs */}
              {selectedMethod === 'range' && (
                <div>
                  <label className="block text-primary-text font-medium mb-2">
                    Page Range
                  </label>
                  <input
                    type="text"
                    value={pageRange}
                    onChange={(e) => setPageRange(e.target.value)}
                    placeholder="e.g., 3-7, 10-12, 15"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <p className="text-sm text-secondary-text mt-1">
                    Enter page numbers and ranges (e.g., 1-3, 5, 7-9)
                  </p>
                </div>
              )}

              {selectedMethod === 'chunks' && (
                <div>
                  <label className="block text-primary-text font-medium mb-2">
                    Pages per Chunk
                  </label>
                  <input
                    type="number"
                    value={chunkSize}
                    onChange={(e) => setChunkSize(e.target.value)}
                    min="1"
                    max={pages.length}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <p className="text-sm text-secondary-text mt-1">
                    Number of pages per chunk (1-{pages.length})
                  </p>
                </div>
              )}

              {selectedMethod === 'two' && (
                <div>
                  <label className="block text-primary-text font-medium mb-2">
                    Break at Page
                  </label>
                  <input
                    type="number"
                    value={breakPage}
                    onChange={(e) => setBreakPage(e.target.value)}
                    min="1"
                    max={pages.length - 1}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <p className="text-sm text-secondary-text mt-1">
                    Page number where to split (1-{pages.length - 1})
                  </p>
                </div>
              )}

              {/* Split Button */}
              <button
                onClick={performSplit}
                disabled={isProcessing}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Split PDF'}
              </button>
            </div>
          </>
        )}

        {/* Processing State */}
        {isProcessing && (
          <div className="p-6 bg-secondary-bg rounded-lg">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full">
                <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium text-primary-text">Splitting your PDF...</p>
                <p className="text-sm text-secondary-text mt-1">
                  This may take a few moments depending on file size and operation
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-primary-text">
                Split Results ({results.length} file{results.length > 1 ? 's' : ''})
              </h3>
              {results.length > 1 && (
                <button
                  onClick={downloadAllResults}
                  className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/90 transition-colors"
                >
                  Download All
                </button>
              )}
            </div>

            <div className="space-y-2">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-secondary-bg rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📄</div>
                    <div>
                      <p className="font-medium text-primary-text">{result.filename}</p>
                      <p className="text-sm text-secondary-text">
                        {result.size} • Pages: {result.pages.join(', ')}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => downloadResult(result)}
                    className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/90 transition-colors"
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        {!pdfFile && (
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-3">How to Split PDFs:</h4>
            <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
              <li>Upload a PDF file by clicking the upload area or dragging a file</li>
              <li>View page thumbnails and select pages or choose a splitting method</li>
              <li>Configure your splitting options (range, chunks, break point, etc.)</li>
              <li>Click &quot;Split PDF&quot; to process your file</li>
              <li>Download the resulting PDF files</li>
            </ol>
          </div>
        )}
      </div>
    </Card>
  )
}
