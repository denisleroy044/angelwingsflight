'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Heart, Plane, Hotel, Car, Compass, MapPin, Star, Trash2, ShoppingBag } from 'lucide-react'

// Mock data - in real app, fetch from API
const wishlistItems = [
  {
    id: 1,
    type: 'hotel',
    name: 'Burj Al Arab Jumeirah',
    location: 'Dubai, UAE',
    price: 1200,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    reviews: 523
  },
  {
    id: 2,
    type: 'flight',
    name: 'Emirates Airlines',
    route: 'New York (JFK) → Dubai (DXB)',
    price: 850,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
    details: 'Business Class'
  },
  {
    id: 3,
    type: 'tour',
    name: 'Dubai & the Desert',
    location: 'Dubai, UAE',
    price: 599,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    days: 5
  },
  {
    id: 4,
    type: 'car',
    name: 'BMW X5',
    location: 'Dubai Airport',
    price: 250,
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800',
    details: 'Luxury SUV'
  },
  {
    id: 5,
    type: 'hotel',
    name: 'Atlantis The Palm',
    location: 'Dubai, UAE',
    price: 850,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
    reviews: 678
  },
  {
    id: 6,
    type: 'flight',
    name: 'Qatar Airways',
    route: 'London (LHR) → Doha (DOH)',
    price: 650,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
    details: 'Economy'
  }
]

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems)

  const removeFromWishlist = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'flight': return <Plane className="w-5 h-5" />
      case 'hotel': return <Hotel className="w-5 h-5" />
      case 'car': return <Car className="w-5 h-5" />
      case 'tour': return <Compass className="w-5 h-5" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
            <p className="text-gray-600">You have {items.length} saved items</p>
          </div>
          <Link
            href="/"
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Browse More</span>
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-600 mb-6">Start saving your favorite travel experiences!</p>
            <Link
              href="/"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Destinations
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg flex items-center space-x-1">
                    {getTypeIcon(item.type)}
                    <span className="text-sm font-medium text-gray-900">
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                  
                  {item.location && (
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  {item.route && (
                    <p className="text-sm text-gray-600 mb-2">{item.route}</p>
                  )}

                  {item.rating && (
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                      {item.reviews && (
                        <span className="text-sm text-gray-600">({item.reviews} reviews)</span>
                      )}
                    </div>
                  )}

                  {item.details && (
                    <p className="text-sm text-gray-600 mb-2">{item.details}</p>
                  )}

                  {item.days && (
                    <p className="text-sm text-gray-600 mb-2">{item.days} days</p>
                  )}

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-xl font-bold text-blue-600">${item.price}</p>
                    </div>
                    <Link
                      href={`/${item.type}s/${item.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
