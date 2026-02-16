'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Filter, SlidersHorizontal, X } from 'lucide-react'
import FlightCard from '@/components/flights/FlightCard'

// Mock data - in real app, this would come from an API
const allFlights = [
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
  },
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

export default function FlightResultsPage() {
  const searchParams = useSearchParams()
  const [flights, setFlights] = useState(allFlights)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    airlines: [] as string[],
    stops: [] as number[],
    priceRange: [0, 1000]
  })

  // Get search params
  const from = searchParams.get('from')
  const to = searchParams.get('to')
  const depart = searchParams.get('depart')
  const travellers = searchParams.get('travellers')
  const cabinClass = searchParams.get('class')

  // Filter flights based on search
  useEffect(() => {
    let filtered = allFlights
    
    if (from) {
      filtered = filtered.filter(f => f.from.toLowerCase().includes(from.toLowerCase()))
    }
    if (to) {
      filtered = filtered.filter(f => f.to.toLowerCase().includes(to.toLowerCase()))
    }
    
    // Apply additional filters
    if (filters.airlines.length > 0) {
      filtered = filtered.filter(f => filters.airlines.includes(f.airline))
    }
    if (filters.stops.length > 0) {
      filtered = filtered.filter(f => filters.stops.includes(f.stops))
    }
    filtered = filtered.filter(f => f.price >= filters.priceRange[0] && f.price <= filters.priceRange[1])
    
    setFlights(filtered)
  }, [from, to, filters])

  // Get unique airlines for filter
  const airlines = [...new Set(allFlights.map(f => f.airline))]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/flights" className="hover:text-blue-600">Flights</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Search Results</span>
        </div>

        {/* Search Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Search</h2>
          <div className="flex flex-wrap gap-4">
            {from && (
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                From: <span className="font-semibold">{from}</span>
              </div>
            )}
            {to && (
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                To: <span className="font-semibold">{to}</span>
              </div>
            )}
            {depart && (
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                Depart: <span className="font-semibold">{new Date(depart).toLocaleDateString()}</span>
              </div>
            )}
            {travellers && (
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                Travellers: <span className="font-semibold">{travellers}</span>
              </div>
            )}
            {cabinClass && (
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                Class: <span className="font-semibold">{cabinClass}</span>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center justify-center space-x-2 w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-6"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span>Filter Results</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-1/2 px-3 py-2 border border-gray-200 rounded-lg"
                    value={filters.priceRange[0]}
                    onChange={(e) => setFilters({
                      ...filters,
                      priceRange: [Number(e.target.value), filters.priceRange[1]]
                    })}
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-1/2 px-3 py-2 border border-gray-200 rounded-lg"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters({
                      ...filters,
                      priceRange: [filters.priceRange[0], Number(e.target.value)]
                    })}
                  />
                </div>
              </div>

              {/* Airlines */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Airlines</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {airlines.map((airline) => (
                    <label key={airline} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-blue-600 focus:ring-blue-500"
                        checked={filters.airlines.includes(airline)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({
                              ...filters,
                              airlines: [...filters.airlines, airline]
                            })
                          } else {
                            setFilters({
                              ...filters,
                              airlines: filters.airlines.filter(a => a !== airline)
                            })
                          }
                        }}
                      />
                      <span className="text-sm">{airline}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stops */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Stops</h4>
                <div className="space-y-2">
                  {[0, 1, 2].map((stop) => (
                    <label key={stop} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-blue-600 focus:ring-blue-500"
                        checked={filters.stops.includes(stop)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({
                              ...filters,
                              stops: [...filters.stops, stop]
                            })
                          } else {
                            setFilters({
                              ...filters,
                              stops: filters.stops.filter(s => s !== stop)
                            })
                          }
                        }}
                      />
                      <span className="text-sm">{stop === 0 ? 'Nonstop' : `${stop} Stop${stop > 1 ? 's' : ''}`}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setFilters({ airlines: [], stops: [], priceRange: [0, 1000] })}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">{flights.length} flights found</p>
              <select className="border border-gray-200 rounded-lg px-4 py-2">
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Duration</option>
                <option>Sort by: Departure</option>
              </select>
            </div>

            <div className="space-y-4">
              {flights.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </div>

            {flights.length === 0 && (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No flights found</h3>
                <p className="text-gray-600">Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
