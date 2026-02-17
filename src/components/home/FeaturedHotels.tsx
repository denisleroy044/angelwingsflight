'use client'
import Link from 'next/link'
import { MapPin, Star } from 'lucide-react'

const hotels = [
  { id: 1, name: 'Movenpick Grand Al Bustan', location: 'Dubai, UAE', price: 200, rating: 5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800' },
  { id: 2, name: 'Four Points by Sheraton', location: 'Dubai, UAE', price: 260, rating: 5, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800' },
  { id: 3, name: 'Voco Dubai', location: 'Dubai, UAE', price: 200, rating: 5, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800' },
]

export default function FeaturedHotels() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{hotel.name}</h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{hotel.location}</span>
                </div>
                <div className="flex items-center mt-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">${hotel.price}</span>
                  <Link href={`/hotels/${hotel.id}`} className="text-blue-600 hover:text-blue-700">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
