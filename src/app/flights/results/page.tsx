'use client'

import { Suspense } from 'react'


function resultsContent() {

}

export default function resultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
      </div>
    }>
      <resultsContent />
    </Suspense>
  )
}
