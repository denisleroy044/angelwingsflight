'use client'
import { Plane, Clock, Users, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { format } from 'date-fns'

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
    duration: string
    stops: number
    flightNumber: string
  }
}

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Airline Info */}
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-800 font-bold text-lg">{flight.logo}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{flight.airline}</h3>
            <p className="text-sm text-gray-600">{flight.flightNumber}</p>
          </div>
        </div>

        {/* Flight Route */}
        <div className="flex-1 flex items-center justify-center space-x-4 lg:space-x-8 mb-4 lg:mb-0">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{flight.departure}</p>
            <p className="text-sm text-gray-600">{flight.from}</p>
          </div>
          
          <div className="flex-1 max-w-[200px]">
            <div className="relative">
              <div className="border-t-2 border-gray-300 border-dashed absolute top-1/2 left-0 right-0"></div>
              <Plane className="w-5 h-5 text-blue-600 mx-auto relative bg-white transform rotate-90" />
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">{flight.duration}</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{flight.arrival}</p>
            <p className="text-sm text-gray-600">{flight.to}</p>
          </div>
        </div>

        {/* Flight Details */}
        <div className="flex items-center space-x-6 mb-4 lg:mb-0">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{flight.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">{flight.stops === 0 ? 'Nonstop' : `${flight.stops} stop`}</span>
          </div>
        </div>

        {/* Price & Book Button */}
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <p className="text-sm text-gray-600">From</p>
            <p className="text-3xl font-bold text-blue-600">USD {flight.price}.00</p>
          </div>
          <Link
            href={`/flights/${flight.id}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Free Cancellation</span>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Baggage Included</span>
        </div>
        <Link href={`/flights/${flight.id}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View Details
        </Link>
      </div>
    </div>
  )
}
