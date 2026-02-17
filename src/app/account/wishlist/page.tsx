'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Heart, Trash2 } from 'lucide-react'

const wishlistItems = [
  { id: 1, name: 'Burj Al Arab Jumeirah', type: 'hotel', price: 1200, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800' },
  { id: 2, name: 'Emirates Airlines', type: 'flight', price: 850, image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800' },
]

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems)

  const removeFromWishlist = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">My Wishlist ({items.length} items)</h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">Your wishlist is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-blue-600 font-bold mt-2">${item.price}</p>
                  <button onClick={() => removeFromWishlist(item.id)} className="mt-2 text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
