import Link from 'next/link'
import { ChevronRight, Star, MapPin } from 'lucide-react'

const hotels = [
  {
    id: 1,
    name: 'Burj Al Arab Jumeirah',
    location: 'Dubai, UAE',
    price: 1200,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800'
  },
  {
    id: 2,
    name: 'Atlantis The Palm',
    location: 'Dubai, UAE',
    price: 850,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800'
  },
  {
    id: 3,
    name: 'Jumeirah Beach Hotel',
    location: 'Dubai, UAE',
    price: 550,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800'
  }
]

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Hotels</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Hotels</h1>

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
                  {[...Array(hotel.rating)].map((_, i) => (
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
    </div>
  )
}
