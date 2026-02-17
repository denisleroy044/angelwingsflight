'use client'
import { Plane, Clock, Users } from 'lucide-react'
import Link from 'next/link'

const flights = [
  {
    id: 1,
    airline: 'Pakistan International Airlines',
    from: 'Multan',
    to: 'Jeddah',
    price: 385,
    logo: 'PIA',
    departure: '08:00',
    arrival: '12:30'
  },
  {
    id: 2,
    airline: 'Air Philippines',
    from: 'Manila',
    to: 'Dubai',
    price: 450,
    logo: 'AP',
    departure: '23:45',
    arrival: '04:30'
  },
  {
    id: 3,
    airline: 'Emirates',
    from: 'Dubai',
    to: 'Sharjah',
    price: 460,
    logo: 'EK',
    departure: '14:15',
    arrival: '14:45'
  },
  {
    id: 4,
    airline: 'Malaysia Airlines',
    from: 'Kuala Lumpur',
    to: 'Dubai',
    price: 620,
    logo: 'MH',
    departure: '09:30',
    arrival: '13:15'
  },
  {
    id: 5,
    airline: 'Pakistan International Airlines',
    from: 'Lahore',
    to: 'Dubai',
    price: 100,
    logo: 'PIA',
    departure: '11:00',
    arrival: '13:30'
  },
  {
    id: 6,
    airline: 'Air India Limited',
    from: 'Delhi',
    to: 'Moscow',
    price: 760,
    logo: 'AI',
    departure: '02:15',
    arrival: '07:45'
  },
  {
    id: 7,
    airline: 'Turkish Airlines',
    from: 'Istanbul',
    to: 'Dubai',
    price: 550,
    logo: 'TK',
    departure: '19:20',
    arrival: '00:45'
  }
]

export default function FeaturedFlights() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Flights</h2>
          <p className="text-gray-600">These alluring destinations are picked just for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flights.slice(0, 4).map((flight) => (
            <div key={flight.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">{flight.logo}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 line-clamp-1">{flight.airline}</h3>
                  <p className="text-sm text-gray-600">{flight.from} → {flight.to}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">{flight.departure}</p>
                  <p className="text-xs text-gray-500">{flight.from}</p>
                </div>
                <div className="flex-1 mx-4">
                  <div className="relative">
                    <Plane className="w-4 h-4 text-blue-600 mx-auto transform rotate-90" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">{flight.arrival}</p>
                  <p className="text-xs text-gray-500">{flight.to}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xl font-bold text-blue-600">${flight.price}</span>
                <Link 
                  href={`/flights/${flight.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
                >
                  Book Flight
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Airline Strip */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {flights.map((flight) => (
              <div key={flight.id} className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="font-medium text-gray-700 text-sm">{flight.airline}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
