'use client'

import { useState, useCallback } from 'react'
import { saveAs } from 'file-saver'

interface ConversionResult {
  pageCount: number
  textLength: number
  fileSize: number
  conversionType: string
}

export default function PDFToWordClient() {
  const [file, setFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [result, setResult] = useState<ConversionResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const validateFile = (file: File): string | null => {
    if (file.type !== 'application/pdf') {
      return 'Please select a valid PDF file'
    }
    if (file.size > 20 * 1024 * 1024) {
      return 'File size must be less than 20MB'
    }
    return null
  }

  const handleFileSelect = useCallback((selectedFile: File) => {
    const validationError = validateFile(selectedFile)
    if (validationError) {
      setError(validationError)
      setFile(null)
      return
    }
    
    setError(null)
    setFile(selectedFile)
    setResult(null)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      handleFileSelect(droppedFile)
    }
  }, [handleFileSelect])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      handleFileSelect(selectedFile)
    }
  }, [handleFileSelect])

  const extractTextFromPDF = async (file: File): Promise<{ text: string; pageCount: number }> => {
    try {
      // Dynamic import to avoid SSR issues
      const { getDocument } = await import('pdfjs-dist')
      
      // Set worker source
      const pdfjsLib = await import('pdfjs-dist')
      pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`
      
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await getDocument({ data: arrayBuffer }).promise
      const pageCount = pdf.numPages
      
      let fullText = ''
      
      for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
        const page = await pdf.getPage(pageNum)
        const textContent = await page.getTextContent()
        
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(' ')
        
        fullText += pageText + '\n\n'
      }
      
      return { text: fullText.trim(), pageCount }
    } catch (error) {
      throw new Error('Failed to extract text from PDF. The file might be encrypted or corrupted.')
    }
  }

  const createWordDocument = async (text: string, originalFilename: string): Promise<Blob> => {
    try {
      // Dynamic import to avoid SSR issues
      const { Document, Packer, Paragraph, TextRun } = await import('docx')
      
      // Split text into paragraphs
      const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0)
      
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: paragraphs.map(paragraph => 
              new Paragraph({
                children: [
                  new TextRun({
                    text: paragraph.trim(),
                    size: 24, // 12pt font
                    font: "Calibri"
                  })
                ],
                spacing: {
                  after: 200, // 12pt spacing after paragraph
                }
              })
            )
          }
        ]
      })
      
      const buffer = await Packer.toBuffer(doc)
      return new Blob([new Uint8Array(buffer)], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
    } catch (error) {
      throw new Error('Failed to create Word document')
    }
  }

  const handleConvert = async () => {
    if (!file) return
    
    setIsConverting(true)
    setError(null)
    
    try {
      // Extract text from PDF
      const { text, pageCount } = await extractTextFromPDF(file)
      
      if (!text.trim()) {
        throw new Error('This PDF appears to be scanned or contains no selectable text. OCR is not supported yet.')
      }
      
      // Create Word document
      const docxBlob = await createWordDocument(text, file.name)
      
      // Generate filename
      const baseName = file.name.replace(/\.pdf$/i, '')
      const docxFilename = `${baseName}-calcuzy.docx`
      
      // Download the file
      saveAs(docxBlob, docxFilename)
      
      // Set result info
      setResult({
        pageCount,
        textLength: text.length,
        fileSize: docxBlob.size,
        conversionType: 'Text-based'
      })
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setIsConverting(false)
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-border p-6">
        {/* File Upload Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging 
              ? 'border-primary bg-primary/5' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            
            <div>
              <p className="text-lg font-medium text-gray-900">
                {file ? file.name : 'Drop your PDF file here'}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                or click to browse
              </p>
            </div>
            
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
              id="pdf-upload"
            />
            
            <label
              htmlFor="pdf-upload"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 cursor-pointer transition-colors"
            >
              Choose File
            </label>
            
            <p className="text-xs text-gray-400">
              Maximum file size: 20MB • Text-based PDFs only
            </p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Convert Button */}
        {file && !error && (
          <div className="mt-6">
            <button
              onClick={handleConvert}
              disabled={isConverting}
              className="w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
            >
              {isConverting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Converting...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span>Convert to Word</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Conversion Result */}
        {result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-green-800 mb-2">Conversion Complete!</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">PDF Pages:</span>
                    <span className="ml-2 font-medium text-gray-900">{result.pageCount}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Text Length:</span>
                    <span className="ml-2 font-medium text-gray-900">{result.textLength.toLocaleString()} chars</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Word File Size:</span>
                    <span className="ml-2 font-medium text-gray-900">{formatFileSize(result.fileSize)}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Conversion Type:</span>
                    <span className="ml-2 font-medium text-gray-900">{result.conversionType}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Text-Focused Conversion</p>
              <p>This tool extracts text content only. Images, complex formatting, and tables are not preserved. For scanned PDFs, OCR is required (coming soon).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
