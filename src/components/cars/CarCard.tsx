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
    rating?: number
  }
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{car.name}</h3>
          <span className="text-sm text-gray-600">{car.year}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{car.provider}</p>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center">
            <Users className="w-4 h-4 mx-auto mb-1" />
            <span className="text-xs">{car.seats} seats</span>
          </div>
          <div className="text-center">
            <Gauge className="w-4 h-4 mx-auto mb-1" />
            <span className="text-xs">{car.transmission}</span>
          </div>
          <div className="text-center">
            <Fuel className="w-4 h-4 mx-auto mb-1" />
            <span className="text-xs">{car.fuel}</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <span className="text-2xl font-bold text-blue-600">${car.price}</span>
          <Link href={`/cars/${car.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
