'use client'
import Link from 'next/link'
import { Plane } from 'lucide-react'

const flights = [
  { id: 1, airline: 'Pakistan International Airlines', from: 'Multan', to: 'Jeddah', price: 385, logo: 'PIA', departure: '08:00', arrival: '12:30' },
  { id: 2, airline: 'Air Philippines', from: 'Manila', to: 'Dubai', price: 450, logo: 'AP', departure: '23:45', arrival: '04:30' },
  { id: 3, airline: 'Emirates', from: 'Dubai', to: 'Sharjah', price: 460, logo: 'EK', departure: '14:15', arrival: '14:45' },
  { id: 4, airline: 'Malaysia Airlines', from: 'Kuala Lumpur', to: 'Dubai', price: 620, logo: 'MH', departure: '09:30', arrival: '13:15' },
]

export default function FeaturedFlights() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Flights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flights.map((flight) => (
            <div key={flight.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">{flight.logo}</span>
                </div>
                <div>
                  <h3 className="font-semibold">{flight.airline}</h3>
                  <p className="text-sm text-gray-600">{flight.from} → {flight.to}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold">{flight.departure}</span>
                <Plane className="w-4 h-4 text-blue-600" />
                <span className="text-lg font-bold">{flight.arrival}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-xl font-bold text-blue-600">${flight.price}</span>
                <Link href={`/flights/${flight.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                  Book Flight
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
