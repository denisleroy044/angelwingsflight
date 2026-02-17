import { Star, MapPin } from 'lucide-react'
import Link from 'next/link'

const hotels = [
  {
    id: 1,
    name: 'Movenpick Grand Al Bustan',
    location: 'Dubai United Arab Emirates',
    price: 200,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    featured: true
  },
  {
    id: 2,
    name: 'Four Points by Sheraton Bur Dubai',
    location: 'Dubai United Arab Emirates',
    price: 260,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    featured: true
  },
  {
    id: 3,
    name: 'Voco Dubai an IHG Hotel',
    location: 'Dubai United Arab Emirates',
    price: 200,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    featured: true
  },
  {
    id: 4,
    name: 'Burj Al Arab Jumeirah',
    location: 'Dubai United Arab Emirates',
    price: 1200,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    featured: false
  },
  {
    id: 5,
    name: 'Atlantis The Palm',
    location: 'Dubai United Arab Emirates',
    price: 850,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
    featured: false
  },
  {
    id: 6,
    name: 'Jumeirah Beach Hotel',
    location: 'Dubai United Arab Emirates',
    price: 550,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
    featured: false
  }
]

export default function FeaturedHotels() {
  const featuredHotels = hotels.filter(h => h.featured)
  const otherHotels = hotels.filter(h => !h.featured)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">Featured Hotels</h2>
            <p className="section-subtitle">Discover great deals on hotels around the world</p>
          </div>
          <Link href="/hotels" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
            View More
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </DynamicLink>
        </div>

        {/* Featured Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredHotels.map((hotel) => (
            <div key={hotel.id} className="card group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{hotel.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {hotel.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="text-sm">{hotel.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">USD {hotel.price}.00</span>
                  </div>
                  <Link 
                    href={`/hotels/${hotel.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
                  >
                    Book Now
                  </DynamicLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherHotels.map((hotel) => (
            <div key={hotel.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 truncate">{hotel.name}</h4>
                <p className="text-sm text-gray-600 truncate">{hotel.location}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-blue-600">USD {hotel.price}.00</span>
                  <DynamicLink href={`/hotels/${hotel.id}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Book Now
                  </DynamicLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
