'use client'
import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Show spinner on route change start
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    // Trigger when route changes
    setIsLoading(false)

    // Listen for link clicks
    const handleClick = () => {
      setIsLoading(true)
      // Auto-hide after 1 second (adjust as needed)
      setTimeout(() => setIsLoading(false), 1000)
    }

    document.addEventListener('click', handleClick)
    
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [pathname, searchParams])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center pt-4 pointer-events-none">
      <div className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-3">
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span>Loading...</span>
      </div>
    </div>
  )
}
