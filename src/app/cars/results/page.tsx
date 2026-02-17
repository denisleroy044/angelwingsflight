'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

function CarResultsContent() {
  const searchParams = useSearchParams()
  const location = searchParams.get('location')
  const pickupDate = searchParams.get('pickupDate')
  const returnDate = searchParams.get('returnDate')

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/cars" className="hover:text-blue-600">Cars</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Search Results</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Car Rental Results</h1>
        
        {location && (
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">Searching for cars in <span className="font-semibold">{location}</span></p>
            {pickupDate && returnDate && (
              <p className="text-sm text-gray-600 mt-1">
                {new Date(pickupDate).toLocaleDateString()} - {new Date(returnDate).toLocaleDateString()}
              </p>
            )}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-500">Car rental results will appear here. This is a placeholder.</p>
        </div>
      </div>
    </div>
  )
}

export default function CarResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
      </div>
    }>
      <CarResultsContent />
    </Suspense>
  )
}
