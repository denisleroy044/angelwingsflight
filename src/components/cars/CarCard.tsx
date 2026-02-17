'use client'
import { Car, Users, Gauge, Fuel, Calendar } from 'lucide-react'
import Link from 'next/link'

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
    category: string
  }
  featured?: boolean
}

export default function CarCard({ car, featured = false }: CarCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow ${featured ? 'border-2 border-blue-200' : ''}`}>
      <div className="relative h-48 rounded-t-xl overflow-hidden bg-gray-100">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            Recommended
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
          <span className="text-sm text-gray-600">{car.year}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{car.provider}</p>

        {/* Car Specs */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Users className="w-4 h-4" />
            <span className="text-sm">{car.seats} seats</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Gauge className="w-4 h-4" />
            <span className="text-sm">{car.transmission}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Fuel className="w-4 h-4" />
            <span className="text-sm">{car.fuel}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{car.category}</span>
          </div>
        </div>

        {/* Price & Booking */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-600">Per day</p>
            <p className="text-2xl font-bold text-blue-600">USD {car.price}.00</p>
          </div>
          <Link
            href={`/cars/${car.id}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Book Now
          </DynamicLink>
        </div>
      </div>
    </div>
  )
}
