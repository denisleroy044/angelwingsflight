import Link from 'next/link'
import { ChevronRight, Plane, Clock, Users } from 'lucide-react'

// Mock data - renamed 'from' to 'origin' to avoid reserved keyword
const flights = [
  {
    id: 1,
    airline: 'Pakistan International Airlines',
    origin: 'Multan',
    destination: 'Jeddah',
    price: 385,
    logo: 'PIA',
    departure: '08:00',
    arrival: '12:30',
    duration: '4h 30m',
    stops: 0,
    flightNumber: 'PK-731'
  },
  {
    id: 2,
    airline: 'Malaysia Airlines',
    origin: 'Kuala Lumpur',
    destination: 'Dubai',
    price: 620,
    logo: 'MH',
    departure: '23:45',
    arrival: '04:30',
    duration: '7h 45m',
    stops: 0,
    flightNumber: 'MH-162'
  },
  {
    id: 3,
    airline: 'Air Philippines',
    origin: 'Manila',
    destination: 'Dubai',
    price: 450,
    logo: 'AP',
    departure: '19:20',
    arrival: '00:45',
    duration: '9h 25m',
    stops: 1,
    flightNumber: 'PR-658'
  },
  {
    id: 4,
    airline: 'Pakistan International Airlines',
    origin: 'Lahore',
    destination: 'Dubai',
    price: 100,
    logo: 'PIA',
    departure: '11:00',
    arrival: '13:30',
    duration: '3h 30m',
    stops: 0,
    flightNumber: 'PK-211'
  },
  {
    id: 5,
    airline: 'Emirates',
    origin: 'Dubai',
    destination: 'Sharjah',
    price: 460,
    logo: 'EK',
    departure: '14:15',
    arrival: '14:45',
    duration: '30m',
    stops: 0,
    flightNumber: 'EK-215'
  },
  {
    id: 6,
    airline: 'Air India Limited',
    origin: 'Delhi',
    destination: 'Moscow',
    price: 760,
    logo: 'AI',
    departure: '02:15',
    arrival: '07:45',
    duration: '6h 30m',
    stops: 1,
    flightNumber: 'AI-327'
  },
  {
    id: 7,
    airline: 'American Airlines',
    origin: 'Surabaya',
    destination: 'New York',
    price: 800,
    logo: 'AA',
    departure: '21:30',
    arrival: '08:45',
    duration: '18h 15m',
    stops: 2,
    flightNumber: 'AA-123'
  },
  {
    id: 8,
    airline: 'Turkish Airlines',
    origin: 'Berlin',
    destination: 'Istanbul',
    price: 600,
    logo: 'TK',
    departure: '09:30',
    arrival: '13:15',
    duration: '2h 45m',
    stops: 0,
    flightNumber: 'TK-890'
  },
  {
    id: 9,
    airline: 'Qatar Airways',
    origin: 'Doha',
    destination: 'London',
    price: 750,
    logo: 'QR',
    departure: '07:15',
    arrival: '12:30',
    duration: '7h 15m',
    stops: 0,
    flightNumber: 'QR-123'
  }
]

export default function FlightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Flights</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Flights</h1>
          <p className="text-gray-600">Find the best flight deals to your favorite destinations</p>
        </div>

        {/* Flight Grid */}
        <div className="grid grid-cols-1 gap-4">
          {flights.map((flight) => (
            <div key={flight.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                {/* Airline Info */}
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-600">{flight.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{flight.airline}</h3>
                    <p className="text-sm text-gray-600">{flight.flightNumber}</p>
                  </div>
                </div>

                {/* Flight Route */}
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-900">{flight.departure}</p>
                    <p className="text-sm text-gray-600">{flight.origin}</p>
                  </div>
                  <div className="flex flex-col items-center px-4">
                    <Plane className="w-5 h-5 text-blue-600 transform rotate-90" />
                    <p className="text-xs text-gray-500">{flight.duration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-900">{flight.arrival}</p>
                    <p className="text-sm text-gray-600">{flight.destination}</p>
                  </div>
                </div>

                {/* Flight Details */}
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{flight.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{flight.stops === 0 ? 'Nonstop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4">
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
          ))}
        </div>
      </div>
    </div>
  )
}
