'use client'

import { Suspense } from 'react'

interface PageSuspenseProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function PageSuspense({ 
  children, 
  fallback = (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  )
}: PageSuspenseProps) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}
