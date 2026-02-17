import FlightSearchForm from '@/components/flights/FlightSearchForm'
import FlightCard from '@/components/flights/FlightCard'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

// Mock data - in real app, this would come from an API
  {
    id: 1,
    airline: 'Pakistan International Airlines',
    from: 'Multan',
    to: 'Jeddah',
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
    from: 'Kuala Lumpur',
    to: 'Dubai',
    price: 620,
    logo: 'MH',
    departure: '23:45',
    arrival: '04:30',
    duration: '7h 45m',
    stops: 0,
    flightNumber: 'MH-162'
  }
]

const popularFlights = [
  {
    id: 3,
    airline: 'Air Philippines',
    from: 'Manila',
    to: 'Dubai',
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
    from: 'Lahore',
    to: 'Dubai',
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
    from: 'Dubai',
    to: 'Sharjah',
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
    from: 'Delhi',
    to: 'Moscow',
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
    from: 'Surabaya',
    to: 'New York',
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
    from: 'Berlin',
    to: 'Istanbul',
    price: 600,
    logo: 'TK',
    departure: '09:30',
    arrival: '13:15',
    duration: '2h 45m',
    stops: 0,
    flightNumber: 'TK-890'
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

        {/* Search Form */}
        <div className="mb-12">
          <FlightSearchForm />
        </div>

        {/* Featured Flights Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Featured Flights</h2>
              <p className="text-gray-600">These alluring destinations are picked just for you.</p>
            </div>
          </div>
          <div className="space-y-4">
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        </section>

        {/* Popular Flights Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Popular Flights</h2>
            <Link href="/flights/results" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              View More
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {popularFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Find the next flight for your coming trips</h3>
                <p className="text-blue-100">Discover amazing deals on flights to destinations worldwide</p>
              </div>
              <Link
                href="/flights/results"
                className="mt-4 md:mt-0 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse All Flights
              </Link>
            </div>
          </div>
        </section>

        {/* Airline Partners Strip */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-6">Trusted by leading airlines</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {['PIA', 'Emirates', 'Qatar', 'Turkish', 'Malaysia', 'Air India', 'American'].map((airline) => (
              <div key={airline} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="font-semibold text-gray-700">{airline}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
