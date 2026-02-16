'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, SlidersHorizontal, X, Star } from 'lucide-react'
import HotelCard from '@/components/hotels/HotelCard'

// Mock data - in real app, this would come from an API
const allHotels = [
  {
    id: 1,
    name: 'Movenpick Grand Al Bustan',
    location: 'Dubai United Arab Emirates',
    rating: 4.5,
    price: 200,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    amenities: ['Pool', 'WiFi', 'Restaurant', 'Bar', 'Gym', 'Parking', 'Spa'],
    reviews: 342
  },
  {
    id: 2,
    name: 'Four Points by Sheraton Bur Dubai',
    location: 'Dubai United Arab Emirates',
    rating: 4.3,
    price: 260,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    amenities: ['WiFi', 'Restaurant', 'Gym', 'Parking', 'Business Center'],
    reviews: 278
  },
  {
    id: 3,
    name: 'Voco Dubai an IHG Hotel',
    location: 'Dubai United Arab Emirates',
    rating: 4.4,
    price: 200,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    amenities: ['Pool', 'WiFi', 'Restaurant', 'Bar', 'Gym', 'Spa'],
    reviews: 195
  },
  {
    id: 4,
    name: 'Burj Al Arab Jumeirah',
    location: 'Dubai United Arab Emirates',
    rating: 4.9,
    price: 1200,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    amenities: ['Pool', 'WiFi', 'Restaurant', 'Bar', 'Gym', 'Spa', 'Beach', 'Helipad'],
    reviews: 523
  },
  {
    id: 5,
    name: 'Atlantis The Palm',
    location: 'Dubai United Arab Emirates',
    rating: 4.8,
    price: 850,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
    amenities: ['Pool', 'WiFi', 'Restaurant', 'Bar', 'Gym', 'Spa', 'Aquarium', 'Waterpark'],
    reviews: 678
  },
  {
    id: 6,
    name: 'Jumeirah Beach Hotel',
    location: 'Dubai United Arab Emirates',
    rating: 4.6,
    price: 550,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
    amenities: ['Pool', 'WiFi', 'Restaurant', 'Bar', 'Gym', 'Spa', 'Private Beach'],
    reviews: 412
  },
  {
    id: 7,
    name: 'The Ritz-Carlton Dubai',
    location: 'Dubai United Arab Emirates',
    rating: 4.7,
    price: 650,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
    amenities: ['Pool', 'WiFi', 'Restaurant', 'Bar', 'Gym', 'Spa', 'Private Beach'],
    reviews: 389
  },
  {
    id: 8,
    name: 'Waldorf Astoria Dubai Palm',
    location: 'Dubai United Arab Emirates',
    rating: 4.8,
    price: 780,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    amenities: ['Pool', 'WiFi', 'Restaurant', 'Bar', 'Gym', 'Spa', 'Private Beach'],
    reviews: 256
  }
]

export default function HotelResultsPage() {
  const searchParams = useSearchParams()
  const [hotels, setHotels] = useState(allHotels)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    rating: null as number | null,
    amenities: [] as string[]
  })

  const destination = searchParams.get('destination')

  // Get unique amenities
  const allAmenities = [...new Set(allHotels.flatMap(h => h.amenities))]

  // Apply filters
  useEffect(() => {
    let filtered = allHotels

    if (destination) {
      filtered = filtered.filter(h => h.location.toLowerCase().includes(destination.toLowerCase()))
    }

    if (filters.rating) {
      filtered = filtered.filter(h => h.rating >= filters.rating!)
    }

    if (filters.amenities.length > 0) {
      filtered = filtered.filter(h => 
        filters.amenities.every(a => h.amenities.includes(a))
      )
    }

    filtered = filtered.filter(h => h.price >= filters.priceRange[0] && h.price <= filters.priceRange[1])

    setHotels(filtered)
  }, [destination, filters])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/hotels" className="hover:text-blue-600">Hotels</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Search Results</span>
        </div>

        {/* Search Summary */}
        {destination && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Search</h2>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                Destination: <span className="font-semibold">{destination}</span>
              </div>
            </div>
          </div>
        )}

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
                <h4 className="font-medium mb-3">Price Range (per night)</h4>
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
                <h4 className="font-medium mb-3">Hotel Rating</h4>
                <div className="space-y-2">
                  {[5,4,3,2].map((rating) => (
                    <label key={rating} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="rating"
                        className="text-blue-600 focus:ring-blue-500"
                        checked={filters.rating === rating}
                        onChange={() => setFilters({...filters, rating})}
                      />
                      <div className="flex items-center">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-1 text-sm">& up</span>
                      </div>
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

              {/* Amenities */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Amenities</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allAmenities.map((amenity) => (
                    <label key={amenity} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded text-blue-600 focus:ring-blue-500"
                        checked={filters.amenities.includes(amenity)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({
                              ...filters,
                              amenities: [...filters.amenities, amenity]
                            })
                          } else {
                            setFilters({
                              ...filters,
                              amenities: filters.amenities.filter(a => a !== amenity)
                            })
                          }
                        }}
                      />
                      <span className="text-sm">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setFilters({
                  priceRange: [0, 2000],
                  rating: null,
                  amenities: []
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
              <p className="text-gray-600">{hotels.length} hotels found</p>
              <select className="border border-gray-200 rounded-lg px-4 py-2">
                <option>Sort by: Recommended</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Rating</option>
              </select>
            </div>

            <div className="space-y-6">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} featured={true} />
              ))}
            </div>

            {hotels.length === 0 && (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No hotels found</h3>
                <p className="text-gray-600">Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
