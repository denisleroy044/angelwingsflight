'use client'

import { Suspense, ReactNode } from 'react'

interface GlobalSuspenseProps {
  children: ReactNode
  fallback?: ReactNode
}

export function GlobalSuspense({ 
  children, 
  fallback = (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  )
}: GlobalSuspenseProps) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}
