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
  }
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{tour.location}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2">{tour.name}</h3>
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < tour.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
          ))}
        </div>
        <div className="flex justify-between items-center pt-4 border-t">
          <div>
            <span className="text-2xl font-bold text-blue-600">${tour.price}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{tour.days} days</span>
          </div>
        </div>
        <Link href={`/tours/${tour.id}`} className="block w-full mt-4 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
          View Details
        </Link>
      </div>
    </div>
  )
}
