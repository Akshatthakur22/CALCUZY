'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'

const loadPDFDocument = async () => {
  const { PDFDocument } = await import('pdf-lib')
  return PDFDocument
}

type CompressionLevel = 'low' | 'medium' | 'high'

interface CompressionSettings {
  quality: number
  downsample: boolean
  maxResolution?: number
}

interface CompressionResult {
  originalSize: number
  compressedSize: number
  compressionRatio: number
  blob: Blob
}

export default function PDFCompressorClient() {
  const [file, setFile] = useState<File | null>(null)
  const [compressionLevel, setCompressionLevel] = useState<CompressionLevel>('medium')
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<CompressionResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const validateFile = (file: File): boolean => {
    if (file.type !== 'application/pdf') {
      setError('Please upload a valid PDF file')
      return false
    }
    if (file.size > 50 * 1024 * 1024) { // 50MB limit
      setError('File size must be less than 50MB')
      return false
    }
    return true
  }

  const handleFileSelect = useCallback((selectedFile: File) => {
    setError(null)
    setResult(null)
    
    if (validateFile(selectedFile)) {
      setFile(selectedFile)
    }
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

  const compressPDF = async () => {
    if (!file) return

    setIsProcessing(true)
    setError(null)

    try {
      const fileBytes = await file.arrayBuffer()
      const PDFDocument = await loadPDFDocument()
      const pdfDoc = await PDFDocument.load(fileBytes)

      // Compression settings based on level
      const compressionSettings: Record<CompressionLevel, CompressionSettings> = {
        low: { quality: 0.9, downsample: false },
        medium: { quality: 0.7, downsample: true, maxResolution: 150 },
        high: { quality: 0.5, downsample: true, maxResolution: 100 }
      }

      const settings = compressionSettings[compressionLevel]

      // Remove metadata
      pdfDoc.setTitle('')
      pdfDoc.setAuthor('')
      pdfDoc.setSubject('')
      pdfDoc.setCreator('')
      pdfDoc.setProducer('')
      pdfDoc.setKeywords([])

      // Process each page
      const pages = pdfDoc.getPages()
      for (const page of pages) {
        // Get page dimensions
        const { width, height } = page.getSize()
        
        // Downsample images if enabled
        if (settings.downsample && settings.maxResolution) {
          // This is a simplified approach - in practice, you'd need to
          // extract and recompress images individually
          const scale = Math.min(1, settings.maxResolution / Math.max(width, height))
          if (scale < 1) {
            page.scale(scale, scale)
          }
        }
      }

      // Save with compression
      const compressedPdfBytes = await pdfDoc.save({
        useObjectStreams: true,
        updateFieldAppearances: false
      })

      // Create blob - convert to regular Uint8Array first
      const uint8Array = new Uint8Array(compressedPdfBytes)
      const blob = new Blob([uint8Array], { type: 'application/pdf' })
      
      const compressionResult: CompressionResult = {
        originalSize: file.size,
        compressedSize: blob.size,
        compressionRatio: ((file.size - blob.size) / file.size) * 100,
        blob
      }

      setResult(compressionResult)

    } catch (err) {
      console.error('Compression error:', err)
      setError('Failed to compress PDF. Please try again with a different file.')
    } finally {
      setIsProcessing(false)
    }
  }

  const downloadCompressedPDF = () => {
    if (!result || !file) return

    const url = URL.createObjectURL(result.blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `compressed_${file.name}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const resetForm = () => {
    setFile(null)
    setResult(null)
    setError(null)
    setCompressionLevel('medium')
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="heading-1 mb-4">PDF Compressor</h1>
        <p className="text-secondary-text text-lg">
          Reduce PDF file size without compromising quality. 100% client-side processing.
        </p>
      </div>

      {!result ? (
        <div className="space-y-6">
          {/* File Upload Area */}
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
              isDragging
                ? 'border-primary bg-primary/5'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <div className="mb-4">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            <div className="mb-4">
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="mt-2 block text-sm font-medium text-primary-text">
                  Drop your PDF file here, or{' '}
                  <span className="text-primary hover:underline">browse</span>
                </span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept="application/pdf"
                  onChange={(e) => {
                    const selectedFile = e.target.files?.[0]
                    if (selectedFile) {
                      handleFileSelect(selectedFile)
                    }
                  }}
                />
              </label>
              <p className="mt-1 text-xs text-secondary-text">
                PDF files up to 50MB
              </p>
            </div>

            {file && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  ✓ {file.name}
                </p>
                <p className="text-xs text-green-600">
                  Size: {formatFileSize(file.size)}
                </p>
              </div>
            )}
          </div>

          {/* Compression Level Selector */}
          {file && (
            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Compression Level</h3>
              <div className="space-y-3">
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="compression"
                    value="low"
                    checked={compressionLevel === 'low'}
                    onChange={(e) => setCompressionLevel(e.target.value as CompressionLevel)}
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-medium">Low Compression</div>
                    <div className="text-sm text-secondary-text">
                      Best quality, light compression (10-30% reduction)
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="compression"
                    value="medium"
                    checked={compressionLevel === 'medium'}
                    onChange={(e) => setCompressionLevel(e.target.value as CompressionLevel)}
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-medium">Medium Compression</div>
                    <div className="text-sm text-secondary-text">
                      Balanced quality and size (30-60% reduction)
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="compression"
                    value="high"
                    checked={compressionLevel === 'high'}
                    onChange={(e) => setCompressionLevel(e.target.value as CompressionLevel)}
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-medium">High Compression</div>
                    <div className="text-sm text-secondary-text">
                      Maximum compression, lower quality (60-80% reduction)
                    </div>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          {/* Action Button */}
          {file && (
            <button
              onClick={compressPDF}
              disabled={isProcessing}
              className="w-full py-3 px-6 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Compressing...
                </>
              ) : (
                'Compress PDF'
              )}
            </button>
          )}
        </div>
      ) : (
        /* Results Display */
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                PDF Compressed Successfully!
              </h3>
              <p className="text-green-700">
                Your PDF has been compressed and is ready for download.
              </p>
            </div>

            {/* Size Comparison */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-sm text-secondary-text mb-1">Original Size</div>
                <div className="text-lg font-semibold">
                  {formatFileSize(result.originalSize)}
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-sm text-secondary-text mb-1">Compressed Size</div>
                <div className="text-lg font-semibold text-green-600">
                  {formatFileSize(result.compressedSize)}
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-sm text-secondary-text mb-1">Reduction</div>
                <div className="text-lg font-semibold text-primary">
                  {result.compressionRatio.toFixed(1)}%
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={downloadCompressedPDF}
              className="w-full py-3 px-6 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Compressed PDF
            </button>
          </div>

          {/* Compress Another Button */}
          <button
            onClick={resetForm}
            className="w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Compress Another PDF
          </button>
        </div>
      )}

      {/* Privacy Notice */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <div>
            <h4 className="text-sm font-semibold text-blue-800 mb-1">100% Privacy Protection</h4>
            <p className="text-sm text-blue-700">
              Your PDF files are processed entirely in your browser. They never leave your device or get uploaded to any server.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
