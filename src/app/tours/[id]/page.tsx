'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ChevronRight, MapPin, Star, Calendar } from 'lucide-react'

const tourData = {
  id: 1,
  name: 'Dubai & the Desert',
  location: 'Dubai, UAE',
  price: 599,
  rating: 5,
  days: 5,
  image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
}

export default function TourDetailPage() {
  const params = useParams()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/tours" className="hover:text-blue-600">Tours</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{tourData.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img src={tourData.image} alt={tourData.name} className="w-full h-96 object-cover rounded-xl" />
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h1 className="text-2xl font-bold mb-2">{tourData.name}</h1>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-1" /> {tourData.location}
              </div>
              <div className="flex items-center mb-2">
                {[...Array(tourData.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="flex items-center mb-4">
                <Calendar className="w-4 h-4 mr-1" /> {tourData.days} days
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-4">${tourData.price}</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Book Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
