import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import HotelSearchForm from '@/components/hotels/HotelSearchForm'
import HotelCard from '@/components/hotels/HotelCard'

// Mock data - in real app, this would come from an API
const featuredHotels = [
  {
    id: 1,
    name: 'Movenpick Grand Al Bustan',
    location: 'Dubai United Arab Emirates',
    rating: 4.5,
    price: 200,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    amenities: ['Pool', 'WiFi', 'Restaurant', 'Bar', 'Gym', 'Parking', 'Spa'],
    reviews: 342,
    description: 'Luxury hotel with stunning views, multiple pools, and world-class dining options.'
  },
  {
    id: 2,
    name: 'Four Points by Sheraton Bur Dubai',
    location: 'Dubai United Arab Emirates',
    rating: 4.3,
    price: 260,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    amenities: ['WiFi', 'Restaurant', 'Gym', 'Parking', 'Business Center'],
    reviews: 278,
    description: 'Modern hotel in the heart of Dubai with comfortable rooms and excellent service.'
  },
  {
    id: 3,
    name: 'Voco Dubai an IHG Hotel',
    location: 'Dubai United Arab Emirates',
    rating: 4.4,
    price: 200,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    amenities: ['Pool', 'WiFi', 'Restaurant', 'Bar', 'Gym', 'Spa'],
    reviews: 195,
    description: 'Contemporary hotel with rooftop pool, stylish rooms, and vibrant social spaces.'
  },
  {
    id: 4,
    name: 'Burj Al Arab Jumeirah',
    location: 'Dubai United Arab Emirates',
    rating: 4.9,
    price: 1200,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    amenities: ['Pool', 'WiFi', 'Restaurant', 'Bar', 'Gym', 'Spa', 'Beach', 'Helipad'],
    reviews: 523,
    description: 'Iconic sail-shaped hotel offering ultra-luxury suites, private beach, and butler service.'
  },
  {
    id: 5,
    name: 'Atlantis The Palm',
    location: 'Dubai United Arab Emirates',
    rating: 4.8,
    price: 850,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
    amenities: ['Pool', 'WiFi', 'Restaurant', 'Bar', 'Gym', 'Spa', 'Aquarium', 'Waterpark'],
    reviews: 678,
    description: 'Legendary resort on Palm Jumeirah with underwater suites and massive waterpark.'
  },
  {
    id: 6,
    name: 'Jumeirah Beach Hotel',
    location: 'Dubai United Arab Emirates',
    rating: 4.6,
    price: 550,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
    amenities: ['Pool', 'WiFi', 'Restaurant', 'Bar', 'Gym', 'Spa', 'Private Beach'],
    reviews: 412,
    description: 'Family-friendly resort with direct beach access and stunning Arabian Gulf views.'
  }
]

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</DynamicLink>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Hotels</span>
        </div>

        {/* Search Form */}
        <div className="mb-12">
          <HotelSearchForm />
        </div>

        {/* Featured Hotels Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Hotels</h2>
              <p className="text-gray-600">Discover great deals on hotels around the world</p>
            </div>
            <Link 
              href="/hotels/results" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              View More
              <ChevronRight className="w-5 h-5 ml-1" />
            </DynamicLink>
          </div>

          {/* Hotel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Dubai', 'Paris', 'New York', 'Tokyo', 'London', 'Rome', 'Bangkok', 'Singapore'].map((city) => (
              <Link
                key={city}
                href={`/hotels/results?destination=${city}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-gray-700">{city}</span>
              </DynamicLink>
            ))}
          </div>
        </section>

        {/* Why Book With Us */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Price Guarantee</h3>
              <p className="text-blue-100 text-sm">Find a lower price? We'll match it</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Customer Support</h3>
              <p className="text-blue-100 text-sm">We're here to help anytime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
              <p className="text-blue-100 text-sm">Your data is always protected</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
