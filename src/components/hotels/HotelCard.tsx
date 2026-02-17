'use client'
import { MapPin, Star } from 'lucide-react'

interface HotelCardProps {
  hotel: {
    id: number
    name: string
    location: string
    price: number
    rating: number
    image: string
  }
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{hotel.name}</h3>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{hotel.location}</span>
        </div>
        <div className="flex items-center mt-1 mb-3">
          {[...Array(hotel.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">${hotel.price}</span>
          <a href={`/hotels/${hotel.id}`} className="text-blue-600 hover:text-blue-700">
            View Details →
          </a>
        </div>
      </div>
    </div>
  )
}
