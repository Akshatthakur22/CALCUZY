'use client'

import { useState, useCallback } from 'react'

interface ConversionResult {
  success: boolean
  pdfBlob?: Blob
  wordPageCount?: number
  pdfPageCount?: number
  fileSize?: string
  error?: string
}

export default function WordToPDFClient() {
  const [file, setFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [conversionResult, setConversionResult] = useState<ConversionResult | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      validateAndSetFile(droppedFile)
    }
  }, [])

  const validateAndSetFile = (selectedFile: File) => {
    // Check file type
    const validTypes = [
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword'
    ]
    
    if (!validTypes.includes(selectedFile.type) && !selectedFile.name.toLowerCase().endsWith('.docx')) {
      setConversionResult({
        success: false,
        error: 'Please select a valid Word document (.docx or .doc file)'
      })
      return
    }

    // Check file size (20MB limit)
    if (selectedFile.size > 20 * 1024 * 1024) {
      setConversionResult({
        success: false,
        error: 'File size must be less than 20MB'
      })
      return
    }

    setFile(selectedFile)
    setConversionResult(null)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0])
    }
  }

  const convertToPDF = async () => {
    if (!file) return

    setIsConverting(true)
    setConversionResult(null)

    try {
      // Dynamic imports for performance
      const [docxModule, pdfLibModule] = await Promise.all([
        import('docx'),
        import('pdf-lib')
      ])
      
      const { Document, Packer, Paragraph, TextRun } = docxModule
      const { PDFDocument, rgb, StandardFonts } = pdfLibModule

      // Read the DOCX file
      const arrayBuffer = await file.arrayBuffer()
      
      // For client-side DOCX parsing, we'll use a simpler approach
      // The docx library is primarily for creating documents, not parsing them
      // We'll extract text using a different method
      let fullText = ''
      let estimatedPageCount = 1
      
      try {
        // Try to read as text first (works for simple DOCX files)
        const textDecoder = new TextDecoder('utf-8', { fatal: false })
        const textContent = textDecoder.decode(arrayBuffer)
        
        // Extract readable text from the XML structure
        const textMatches = textContent.match(/<w:t[^>]*>([^<]*)<\/w:t>/g)
        if (textMatches) {
          fullText = textMatches
            .map(match => match.replace(/<[^>]*>/g, ''))
            .join(' ')
            .replace(/\s+/g, ' ')
            .trim()
        }
        
        if (!fullText) {
          // Fallback: try to extract any readable text
          const cleanText = textContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
          fullText = cleanText.substring(0, Math.min(10000, cleanText.length)) // Limit length
        }
      } catch (error) {
        // If all else fails, try basic text extraction
        const textDecoder = new TextDecoder('utf-8', { fatal: false })
        fullText = textDecoder.decode(arrayBuffer).substring(0, 5000)
      }

      // Estimate page count (rough approximation: ~400 words per page)
      estimatedPageCount = Math.max(1, Math.ceil(fullText.split(' ').length / 400))

      if (!fullText.trim()) {
        throw new Error('No text content found in the document')
      }

      // Create PDF document
      const pdfDoc = await PDFDocument.create()
      
      // Add a standard font
      const font = await pdfDoc.embedFont(StandardFonts.TimesRoman)
      const fontSize = 12
      const lineHeight = fontSize * 1.2
      const margin = 50
      const pageWidth = pdfDoc.getPage(0).getWidth()
      const pageHeight = pdfDoc.getPage(0).getHeight()
      const maxWidth = pageWidth - 2 * margin
      const maxHeight = pageHeight - 2 * margin

      // Split text into lines and pages
      const words = fullText.split(/\s+/)
      let currentPage = pdfDoc.getPage(0)
      let yPosition = pageHeight - margin
      let currentLine = ''
      let pdfPageCount = 1

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word
        const textWidth = font.widthOfTextAtSize(testLine, fontSize)

        if (textWidth > maxWidth) {
          // Draw current line
          if (currentLine.trim()) {
            currentPage.drawText(currentLine, {
              x: margin,
              y: yPosition,
              size: fontSize,
              font: font,
              color: rgb(0, 0, 0)
            })
            yPosition -= lineHeight
          }

          currentLine = word

          // Check if we need a new page
          if (yPosition < margin) {
            currentPage = pdfDoc.addPage([pageWidth, pageHeight])
            yPosition = pageHeight - margin
            pdfPageCount++
          }
        } else {
          currentLine = testLine
        }
      }

      // Draw the last line
      if (currentLine.trim()) {
        currentPage.drawText(currentLine, {
          x: margin,
          y: yPosition,
          size: fontSize,
          font: font,
          color: rgb(0, 0, 0)
        })
      }

      // Generate PDF bytes
      const pdfBytes = await pdfDoc.save()
      // Create blob from Uint8Array by converting to ArrayBuffer
      const pdfArrayBuffer = pdfBytes.buffer.slice(pdfBytes.byteOffset, pdfBytes.byteOffset + pdfBytes.byteLength) as ArrayBuffer
      const pdfBlob = new Blob([pdfArrayBuffer], { type: 'application/pdf' })

      setConversionResult({
        success: true,
        pdfBlob,
        wordPageCount: estimatedPageCount,
        pdfPageCount,
        fileSize: `${(pdfBlob.size / 1024).toFixed(1)} KB`
      })

    } catch (error) {
      console.error('Conversion error:', error)
      setConversionResult({
        success: false,
        error: error instanceof Error 
          ? error.message 
          : 'Failed to convert Word document to PDF. Please ensure your file contains readable text content.'
      })
    } finally {
      setIsConverting(false)
    }
  }

  const downloadPDF = () => {
    if (!conversionResult?.pdfBlob) return

    const url = URL.createObjectURL(conversionResult.pdfBlob)
    const a = document.createElement('a')
    a.href = url
    
    // Create filename from original file
    const originalName = file?.name.replace(/\.[^/.]+$/, '') || 'document'
    a.download = `${originalName}-calcuzy.pdf`
    
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const resetConverter = () => {
    setFile(null)
    setConversionResult(null)
    setIsConverting(false)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        {!conversionResult?.success ? (
          <>
            {/* File Upload Area */}
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? 'border-primary bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    {file ? file.name : 'Drop your Word document here'}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    or click to browse
                  </p>
                  <p className="text-xs text-gray-400">
                    Supports .docx files up to 20MB
                  </p>
                </div>

                <input
                  type="file"
                  accept=".docx,.doc"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-input"
                />
                <label
                  htmlFor="file-input"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  Choose File
                </label>
              </div>
            </div>

            {/* Conversion Controls */}
            {file && (
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={convertToPDF}
                  disabled={isConverting}
                  className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isConverting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Converting...
                    </span>
                  ) : (
                    'Convert to PDF'
                  )}
                </button>
                
                <button
                  onClick={resetConverter}
                  disabled={isConverting}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Clear
                </button>
              </div>
            )}

            {/* Error Display */}
            {conversionResult?.error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-medium text-red-800">Conversion Error</h3>
                    <p className="mt-1 text-sm text-red-700">{conversionResult.error}</p>
                    <p className="mt-2 text-xs text-red-600">
                      Note: Advanced formatting or images may not be preserved in client-side conversion.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Success State */
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Conversion Complete!
            </h3>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Word Pages:</span>
                  <span className="ml-2 font-medium">{conversionResult.wordPageCount}</span>
                </div>
                <div>
                  <span className="text-gray-500">PDF Pages:</span>
                  <span className="ml-2 font-medium">{conversionResult.pdfPageCount}</span>
                </div>
                <div>
                  <span className="text-gray-500">File Size:</span>
                  <span className="ml-2 font-medium">{conversionResult.fileSize}</span>
                </div>
                <div>
                  <span className="text-gray-500">Conversion Type:</span>
                  <span className="ml-2 font-medium">Text-based</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={downloadPDF}
                className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Download PDF
              </button>
              
              <button
                onClick={resetConverter}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Convert Another
              </button>
            </div>
            
            <p className="mt-4 text-xs text-gray-500">
              Note: This conversion focused on text content. Advanced formatting, images, and complex layouts may not be preserved.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
