'use client'
import { MapPin, Star, Calendar, Users, Clock } from 'lucide-react'
import Link from 'next/link'

interface TourCardProps {
  tour: {
    id: number
    name: string
    package?: string
    location: string
    rating: number
    price: number
    image: string
    days: number
    reviews: number
    description?: string
  }
  featured?: boolean
}

export default function TourCard({ tour, featured = false }: TourCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden ${featured ? 'lg:flex' : ''}`}>
      <div className={`${featured ? 'lg:w-1/3' : 'w-full'} relative h-48 overflow-hidden`}>
        <img 
          src={tour.image} 
          alt={tour.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            Popular Choice
          </div>
        )}
      </div>
      
      <div className={`${featured ? 'lg:w-2/3' : 'w-full'} p-6`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{tour.location}</span>
          </div>
          <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{tour.rating}</span>
            <span className="ml-1 text-xs text-gray-600">({tour.reviews})</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-1">{tour.name}</h3>
        {tour.package && (
          <p className="text-sm text-gray-600 mb-3">{tour.package}</p>
        )}
        {tour.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
        )}

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="text-sm">{tour.days} Days</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">Flexible</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-600">Starting from</p>
            <p className="text-2xl font-bold text-blue-600">USD {tour.price}.00</p>
          </div>
          <Link
            href={`/tours/${tour.id}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View Tour
          </DynamicLink>
        </div>
      </div>
    </div>
  )
}
