'use client'
import Link from 'next/link'
import { MapPin, Star } from 'lucide-react'

interface HotelCardProps {
  hotel: {
    id: number
    name: string
    location: string
    price: number
    rating: number
    image: string
    description?: string
    amenities?: string[]
  }
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={hotel.image} 
          alt={hotel.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{hotel.name}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="text-sm">{hotel.location}</span>
        </div>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < hotel.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        {hotel.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-600">Per night</p>
            <p className="text-2xl font-bold text-blue-600">${hotel.price}</p>
          </div>
          <Link
            href={`/hotels/${hotel.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
