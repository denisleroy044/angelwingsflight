'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, SlidersHorizontal, X, Filter } from 'lucide-react'
import CarCard from '@/components/cars/CarCard'

// Mock data - in real app, this would come from an API
const allCars = [
  {
    id: 1,
    name: 'Hyundai i10 or similar',
    provider: 'DKB Rent a Car',
    price: 150,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Petrol',
    year: 2023,
    category: 'Economy'
  },
  {
    id: 2,
    name: 'Nissan Micra 2021',
    provider: 'DKB Rent a Car',
    price: 250,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    year: 2021,
    category: 'Compact'
  },
  {
    id: 3,
    name: 'Kia Picanto 2020',
    provider: 'DKB Rent a Car',
    price: 120,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800',
    seats: 4,
    transmission: 'Manual',
    fuel: 'Petrol',
    year: 2020,
    category: 'Economy'
  },
  {
    id: 4,
    name: 'Honda Civic 130 e-similar',
    provider: 'Elite Rentals',
    price: 280,
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    year: 2024,
    category: 'Midsize'
  },
  {
    id: 5,
    name: 'Nissan Micra 2003',
    provider: 'Budget Cars',
    price: 90,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
    seats: 4,
    transmission: 'Manual',
    fuel: 'Petrol',
    year: 2003,
    category: 'Economy'
  },
  {
    id: 6,
    name: 'Volvo XC90 T8',
    provider: 'Premium Rentals',
    price: 450,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    year: 2024,
    category: 'SUV'
  },
  {
    id: 7,
    name: 'Toyota Corolla 2022',
    provider: 'Hertz',
    price: 320,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    year: 2022,
    category: 'Midsize'
  },
  {
    id: 8,
    name: 'BMW X5 2024',
    provider: 'Sixt',
    price: 650,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Diesel',
    year: 2024,
    category: 'Luxury SUV'
  }
]

export default function CarResultsPage() {
  const searchParams = useSearchParams()
  const [cars, setCars] = useState(allCars)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    providers: [] as string[],
    categories: [] as string[],
    priceRange: [0, 1000],
    seats: [] as number[]
  })

  // Get search params
  const location = searchParams.get('location')
  const pickupDate = searchParams.get('pickup')
  const returnDate = searchParams.get('return')
  const travellers = searchParams.get('travellers')

  // Get unique providers and categories for filters
  const providers = [...new Set(allCars.map(c => c.provider))]
  const categories = [...new Set(allCars.map(c => c.category))]
  const seatOptions = [2,4,5,7]

  // Apply filters
  useEffect(() => {
    let filtered = allCars

    if (filters.providers.length > 0) {
      filtered = filtered.filter(c => filters.providers.includes(c.provider))
    }
    if (filters.categories.length > 0) {
      filtered = filtered.filter(c => filters.categories.includes(c.category))
    }
    if (filters.seats.length > 0) {
      filtered = filtered.filter(c => filters.seats.includes(c.seats))
    }
    filtered = filtered.filter(c => c.price >= filters.priceRange[0] && c.price <= filters.priceRange[1])

    setCars(filtered)
  }, [filters])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/cars" className="hover:text-blue-600">Cars</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Search Results</span>
        </div>

        {/* Search Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Search</h2>
          <div className="flex flex-wrap gap-4">
            {location && (
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                Location: <span className="font-semibold">{location}</span>
              </div>
            )}
            {pickupDate && (
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                Pickup: <span className="font-semibold">{new Date(pickupDate).toLocaleDateString()}</span>
              </div>
            )}
            {returnDate && (
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                Return: <span className="font-semibold">{new Date(returnDate).toLocaleDateString()}</span>
              </div>
            )}
            {travellers && (
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                Travellers: <span className="font-semibold">{travellers}</span>
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
                <h4 className="font-medium mb-3">Price Range (per day)</h4>
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

              {/* Car Category */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Car Type</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-blue-600 focus:ring-blue-500"
                        checked={filters.categories.includes(category)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({
                              ...filters,
                              categories: [...filters.categories, category]
                            })
                          } else {
                            setFilters({
                              ...filters,
                              categories: filters.categories.filter(c => c !== category)
                            })
                          }
                        }}
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Seats */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Seats</h4>
                <div className="space-y-2">
                  {seatOptions.map((seats) => (
                    <label key={seats} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-blue-600 focus:ring-blue-500"
                        checked={filters.seats.includes(seats)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({
                              ...filters,
                              seats: [...filters.seats, seats]
                            })
                          } else {
                            setFilters({
                              ...filters,
                              seats: filters.seats.filter(s => s !== seats)
                            })
                          }
                        }}
                      />
                      <span className="text-sm">{seats}+ seats</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Providers */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Rental Provider</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {providers.map((provider) => (
                    <label key={provider} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-blue-600 focus:ring-blue-500"
                        checked={filters.providers.includes(provider)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({
                              ...filters,
                              providers: [...filters.providers, provider]
                            })
                          } else {
                            setFilters({
                              ...filters,
                              providers: filters.providers.filter(p => p !== provider)
                            })
                          }
                        }}
                      />
                      <span className="text-sm">{provider}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setFilters({
                  providers: [],
                  categories: [],
                  priceRange: [0, 1000],
                  seats: []
                })}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">{cars.length} cars available</p>
              <select className="border border-gray-200 rounded-lg px-4 py-2">
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Newest First</option>
                <option>Sort by: Most Popular</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {cars.length === 0 && (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No cars found</h3>
                <p className="text-gray-600">Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
