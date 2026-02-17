'use client'
import Link from 'next/link'
import { MapPin, Star, Calendar } from 'lucide-react'

interface TourCardProps {
  tour: {
    id: number
    name: string
    location: string
    price: number
    rating: number
    image: string
    days: number
    description?: string
  }
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium">{tour.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{tour.location}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{tour.name}</h3>
        {tour.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-600">Starting from</p>
            <p className="text-2xl font-bold text-blue-600">${tour.price}</p>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{tour.days} days</span>
          </div>
        </div>
        <Link
          href={`/tours/${tour.id}`}
          className="block w-full mt-4 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
