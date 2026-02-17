'use client'
import Link from 'next/link'
import { Star, Users, Gauge, Fuel } from 'lucide-react'

interface CarCardProps {
  car: {
    id: number
    name: string
    provider: string
    price: number
    image: string
    seats: number
    transmission: string
    fuel: string
    year: number
    category?: string
    rating?: number
  }
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        {car.rating && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{car.rating}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
          <span className="text-sm text-gray-600">{car.year}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{car.provider}</p>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Users className="w-4 h-4 mx-auto mb-1 text-gray-600" />
            <span className="text-xs text-gray-600">{car.seats} seats</span>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Gauge className="w-4 h-4 mx-auto mb-1 text-gray-600" />
            <span className="text-xs text-gray-600">{car.transmission}</span>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <Fuel className="w-4 h-4 mx-auto mb-1 text-gray-600" />
            <span className="text-xs text-gray-600">{car.fuel}</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-600">Per day</p>
            <p className="text-2xl font-bold text-blue-600">${car.price}</p>
          </div>
          <Link 
            href={`/cars/${car.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
