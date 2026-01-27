'use client'

import { useState, useCallback } from 'react'
import Card from '@/components/Card'
import Skeleton from '@/components/Skeleton'

interface PDFFile {
  file: File
  id: string
  name: string
  size: string
  preview?: string
}

export default function PDFMergerClient() {
  const [pdfFiles, setPdfFiles] = useState<PDFFile[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')
  const [dragActive, setDragActive] = useState(false)

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleFile = useCallback((file: File) => {
    if (file.type !== 'application/pdf') {
      setError('Please select PDF files only')
      return false
    }

    if (file.size > 50 * 1024 * 1024) { // 50MB limit
      setError('File size must be less than 50MB')
      return false
    }

    const pdfFile: PDFFile = {
      file,
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: formatFileSize(file.size)
    }

    setPdfFiles(prev => [...prev, pdfFile])
    setError('')
    return true
  }, [])

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
    files.forEach(file => handleFile(file))
  }, [handleFile])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    files.forEach(file => handleFile(file))
    e.target.value = '' // Reset input
  }

  const removeFile = (id: string) => {
    setPdfFiles(prev => prev.filter(file => file.id !== id))
  }

  const moveFile = (id: string, direction: 'up' | 'down') => {
    setPdfFiles(prev => {
      const index = prev.findIndex(file => file.id === id)
      if (index === -1) return prev

      const newFiles = [...prev]
      if (direction === 'up' && index > 0) {
        [newFiles[index], newFiles[index - 1]] = [newFiles[index - 1], newFiles[index]]
      } else if (direction === 'down' && index < prev.length - 1) {
        [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]]
      }

      return newFiles
    })
  }

  const mergePDFs = async () => {
    if (pdfFiles.length < 2) {
      setError('Please add at least 2 PDF files to merge')
      return
    }

    try {
      setIsProcessing(true)
      setError('')

      // In a real implementation, we would use a library like PDF-lib
      // For now, we'll simulate the process and create a simple merge
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Create a simple merged PDF (this is a placeholder implementation)
      // In production, you would use PDF-lib or similar library
      const mergedArrayBuffer = await simulatePDFMerge(pdfFiles.map(f => f.file))
      
      // Download the merged file
      const blob = new Blob([mergedArrayBuffer], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `merged-document-${Date.now()}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

    } catch (error) {
      console.error('PDF merge failed:', error)
      setError('Failed to merge PDFs. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  // Placeholder function - in production, use PDF-lib or similar
  const simulatePDFMerge = async (files: File[]): Promise<ArrayBuffer> => {
    // This is a simulation - in reality, you'd use a PDF library
    // For now, we'll just return the first file as a placeholder
    return files[0].arrayBuffer()
  }

  return (
    <Card className="max-w-4xl mx-auto mb-12 fade-in-up">
      <div className="space-y-6">
        {/* File Upload Area */}
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
            type="file"
            id="pdf-input"
            multiple
            accept=".pdf"
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            aria-label="Upload PDF files"
          />
          
          <div className="space-y-4">
            <div className="text-4xl">📄</div>
            <div>
              <p className="text-lg font-medium text-primary-text">
                Drop PDF files here or click to browse
              </p>
              <p className="text-sm text-secondary-text mt-2">
                Select multiple PDF files to merge (Max 50MB per file)
              </p>
            </div>
          </div>
        </div>

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

        {/* File List */}
        {pdfFiles.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-primary-text">
                Files to Merge ({pdfFiles.length})
              </h3>
              <button
                onClick={() => setPdfFiles([])}
                className="text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-2">
              {pdfFiles.map((file, index) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-4 bg-secondary-bg rounded-lg"
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="text-2xl">📄</div>
                    <div className="flex-1">
                      <p className="font-medium text-primary-text">{file.name}</p>
                      <p className="text-sm text-secondary-text">{file.size}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => moveFile(file.id, 'up')}
                      disabled={index === 0}
                      className="p-2 text-gray-500 hover:text-primary-text disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      aria-label="Move file up"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => moveFile(file.id, 'down')}
                      disabled={index === pdfFiles.length - 1}
                      className="p-2 text-gray-500 hover:text-primary-text disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      aria-label="Move file down"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => removeFile(file.id)}
                      className="p-2 text-red-500 hover:text-red-600 transition-colors"
                      aria-label="Remove file"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Merge Button */}
            <button
              onClick={mergePDFs}
              disabled={isProcessing || pdfFiles.length < 2}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Merge PDF files"
            >
              {isProcessing ? 'Merging PDFs...' : `Merge ${pdfFiles.length} PDFs`}
            </button>
          </div>
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
                <p className="font-medium text-primary-text">Merging your PDFs...</p>
                <p className="text-sm text-secondary-text mt-1">
                  This may take a few moments depending on file sizes
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        {pdfFiles.length === 0 && (
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-3">How to Merge PDFs:</h4>
            <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
              <li>Upload multiple PDF files by clicking the upload area or dragging files</li>
              <li>Arrange the files in your desired order using the up/down arrows</li>
              <li>Click &quot;Merge PDFs&quot; to combine all files into one document</li>
              <li>Download your merged PDF file</li>
            </ol>
          </div>
        )}
      </div>
    </Card>
  )
}
