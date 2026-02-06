import { useCallback, useRef, useState } from 'react'

interface UseWebWorkerOptions {
  timeout?: number
  onError?: (error: Error) => void
  onSuccess?: (result: any) => void
}

interface WebWorkerState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export function useWebWorker<T, R>(
  workerPath: string,
  options: UseWebWorkerOptions = {}
) {
  const [state, setState] = useState<WebWorkerState<R>>({
    data: null,
    loading: false,
    error: null
  })
  
  const workerRef = useRef<Worker | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { timeout = 10000, onError, onSuccess } = options

  const terminateWorker = useCallback(() => {
    if (workerRef.current) {
      workerRef.current.terminate()
      workerRef.current = null
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const execute = useCallback((data: T): Promise<R> => {
    return new Promise((resolve, reject) => {
      // Terminate existing worker if any
      terminateWorker()

      // Create new worker
      workerRef.current = new Worker(workerPath, { type: 'module' })
      
      setState(prev => ({ ...prev, loading: true, error: null }))

      // Set up timeout
      if (timeout > 0) {
        timeoutRef.current = setTimeout(() => {
          terminateWorker()
          const error = new Error(`Web Worker timeout after ${timeout}ms`)
          setState(prev => ({ ...prev, loading: false, error }))
          onError?.(error)
          reject(error)
        }, timeout)
      }

      // Handle messages from worker
      workerRef.current.onmessage = (event) => {
        terminateWorker()
        
        const { success, result, error } = event.data
        
        if (success) {
          setState(prev => ({ ...prev, loading: false, data: result, error: null }))
          onSuccess?.(result)
          resolve(result)
        } else {
          const workerError = new Error(error)
          setState(prev => ({ ...prev, loading: false, error: workerError }))
          onError?.(workerError)
          reject(workerError)
        }
      }

      // Handle worker errors
      workerRef.current.onerror = (error) => {
        terminateWorker()
        const workerError = new Error(`Web Worker error: ${error.message}`)
        setState(prev => ({ ...prev, loading: false, error: workerError }))
        onError?.(workerError)
        reject(workerError)
      }

      // Send data to worker
      workerRef.current.postMessage(data)
    })
  }, [workerPath, timeout, onError, onSuccess, terminateWorker])

  // Cleanup on unmount
  const cleanup = useCallback(() => {
    terminateWorker()
  }, [terminateWorker])

  return {
    execute,
    data: state.data,
    loading: state.loading,
    error: state.error,
    cleanup
  }
}

// Hook specifically for tax calculations
export function useTaxCalculator() {
  return useWebWorker(
    '/workers/tax-calculator.worker.js',
    {
      timeout: 5000,
      onError: (error) => {
        console.error('Tax calculator error:', error)
      },
      onSuccess: (result) => {
        console.log('Tax calculation completed in', result.processingTime, 'ms')
      }
    }
  )
}
