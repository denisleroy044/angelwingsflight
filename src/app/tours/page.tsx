import Link from 'next/link'
import { ChevronRight, Star, MapPin } from 'lucide-react'

const tours = [
  {
    id: 1,
    name: 'Dubai & the Desert',
    location: 'Dubai, UAE',
    price: 599,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
  },
  {
    id: 2,
    name: 'Sydney Explorer',
    location: 'Sydney, Australia',
    price: 799,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800'
  },
  {
    id: 3,
    name: 'Nile Egypt',
    location: 'Egypt',
    price: 899,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800'
  }
]

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Tours</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Tours</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{tour.name}</h3>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center mt-1 mb-3">
                  {[...Array(tour.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">${tour.price}</span>
                  <Link href={`/tours/${tour.id}`} className="text-blue-600 hover:text-blue-700">
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
