'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, SlidersHorizontal, X } from 'lucide-react'
import TourCard from '@/components/tours/TourCard'

// Mock data
const allTours = [
  {
    id: 1,
    name: 'Dubai & the Desert',
    package: 'Dubai Combo Package',
    location: 'Dubai',
    rating: 4.5,
    price: 599,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    days: 5,
    reviews: 234
  },
  {
    id: 2,
    name: 'Stunning Dubai',
    location: 'Dubai',
    rating: 4.7,
    price: 699,
    image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800',
    days: 4,
    reviews: 189
  },
  {
    id: 3,
    name: 'Sydney and Bondi Beach Explorer',
    location: 'Sydney',
    rating: 4.6,
    price: 799,
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
    days: 6,
    reviews: 156
  },
  {
    id: 4,
    name: 'Nile Egypt',
    location: 'Egypt',
    rating: 4.8,
    price: 899,
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800',
    days: 7,
    reviews: 312
  },
  {
    id: 5,
    name: 'Spectaculars Of The Nile',
    package: '3 Nights',
    location: 'Nile Egypt',
    rating: 4.7,
    price: 649,
    image: 'https://images.unsplash.com/photo-1568322445389-f64ac251502f?w=800',
    days: 4,
    reviews: 178
  },
  {
    id: 6,
    name: '6 Days Around Thailand',
    location: 'Thailand',
    rating: 4.5,
    price: 549,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800',
    days: 6,
    reviews: 267
  }
]

export default function TourResultsPage() {
  const searchParams = useSearchParams()
  const [tours, setTours] = useState(allTours)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    destinations: [] as string[],
    duration: [] as string[],
    priceRange: [0, 1000],
    rating: null as number | null
  })

  const city = searchParams.get('city')

  // Get unique destinations
  const destinations = [...new Set(allTours.map(t => t.location))]

  // Apply filters
  useEffect(() => {
    let filtered = allTours

    if (city) {
      filtered = filtered.filter(t => t.location.toLowerCase().includes(city.toLowerCase()))
    }

    if (filters.destinations.length > 0) {
      filtered = filtered.filter(t => filters.destinations.includes(t.location))
    }

    if (filters.rating) {
      filtered = filtered.filter(t => t.rating >= filters.rating!)
    }

    filtered = filtered.filter(t => t.price >= filters.priceRange[0] && t.price <= filters.priceRange[1])

    setTours(filtered)
  }, [city, filters])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/tours" className="hover:text-blue-600">Tours</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Search Results</span>
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

              {/* Rating */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2].map((rating) => (
                    <label key={rating} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="rating"
                        className="text-blue-600 focus:ring-blue-500"
                        checked={filters.rating === rating}
                        onChange={() => setFilters({...filters, rating})}
                      />
                      <span className="text-sm">{rating}+ Stars</span>
                    </label>
                  ))}
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="rating"
                      className="text-blue-600 focus:ring-blue-500"
                      checked={filters.rating === null}
                      onChange={() => setFilters({...filters, rating: null})}
                    />
                    <span className="text-sm">Any</span>
                  </label>
                </div>
              </div>

              {/* Destinations */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Destinations</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {destinations.map((dest) => (
                    <label key={dest} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-blue-600 focus:ring-blue-500"
                        checked={filters.destinations.includes(dest)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({
                              ...filters,
                              destinations: [...filters.destinations, dest]
                            })
                          } else {
                            setFilters({
                              ...filters,
                              destinations: filters.destinations.filter(d => d !== dest)
                            })
                          }
                        }}
                      />
                      <span className="text-sm">{dest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setFilters({
                  destinations: [],
                  duration: [],
                  priceRange: [0, 1000],
                  rating: null
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
              <p className="text-gray-600">{tours.length} tours found</p>
              <select className="border border-gray-200 rounded-lg px-4 py-2">
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Duration</option>
                <option>Sort by: Rating</option>
              </select>
            </div>

            <div className="space-y-6">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>

            {tours.length === 0 && (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No tours found</h3>
                <p className="text-gray-600">Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
