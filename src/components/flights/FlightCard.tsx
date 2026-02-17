'use client'
import Link from 'next/link'
import { Plane, Clock, Users } from 'lucide-react'

interface FlightCardProps {
  flight: {
    id: number
    airline: string
    flightNumber: string
    from: string
    to: string
    price: number
    logo: string
    departure: string
    arrival: string
    duration: string
    stops: number
  }
}

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="font-bold text-blue-600">{flight.logo}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{flight.airline}</h3>
            <p className="text-sm text-gray-600">{flight.flightNumber}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900">{flight.departure}</p>
            <p className="text-sm text-gray-600">{flight.from}</p>
          </div>
          <div className="flex flex-col items-center px-4">
            <Plane className="w-5 h-5 text-blue-600 transform rotate-90" />
            <p className="text-xs text-gray-500">{flight.duration}</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900">{flight.arrival}</p>
            <p className="text-sm text-gray-600">{flight.to}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{flight.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">{flight.stops === 0 ? 'Nonstop' : `${flight.stops} stop`}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
          </div>
          <Link
            href={`/flights/${flight.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
