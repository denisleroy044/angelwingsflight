'use client'
import { Plane } from 'lucide-react'

interface FlightCardProps {
  flight: {
    id: number
    airline: string
    from: string
    to: string
    price: number
    logo: string
    departure: string
    arrival: string
  }
}

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="font-bold text-blue-600">{flight.logo}</span>
          </div>
          <div>
            <h3 className="font-semibold">{flight.airline}</h3>
            <p className="text-sm text-gray-600">{flight.from} → {flight.to}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
          <a href={`/flights/${flight.id}`} className="text-blue-600 hover:text-blue-700 text-sm">
            Book Now →
          </a>
        </div>
      </div>
    </div>
  )
}
