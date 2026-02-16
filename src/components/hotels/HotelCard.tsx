'use client'
import { MapPin, Star, Wifi, Coffee, Users, ParkingCircle, Dumbbell, Waves } from 'lucide-react'
import Link from 'next/link'

interface HotelCardProps {
  hotel: {
    id: number
    name: string
    location: string
    rating: number
    price: number
    image: string
    amenities: string[]
    reviews: number
    description?: string
  }
  featured?: boolean
}

export default function HotelCard({ hotel, featured = false }: HotelCardProps) {
  // Map amenity names to icons
  const getAmenityIcon = (amenity: string) => {
    const icons: Record<string, any> = {
      'Pool': Waves,
      'WiFi': Wifi,
      'Restaurant': Coffee,
      'Bar': Coffee,
      'Gym': Dumbbell,
      'Parking': ParkingCircle,
      'Spa': Waves,
      'Beach': Waves,
      'Free WiFi': Wifi,
      'Airport transfer': Users,
      'Free breakfast': Coffee,
      'Air conditioning': Coffee
    }
    const Icon = icons[amenity] || Coffee
    return <Icon className="w-4 h-4 text-gray-600" />
  }

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden ${featured ? 'lg:flex' : ''}`}>
      <div className={`${featured ? 'lg:w-2/5' : 'w-full'} relative h-48 overflow-hidden`}>
        <img 
          src={hotel.image} 
          alt={hotel.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className={`${featured ? 'lg:w-3/5' : 'w-full'} p-6`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">{hotel.name}</h3>
          <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{hotel.rating}</span>
            <span className="ml-1 text-xs text-gray-600">({hotel.reviews})</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="text-sm">{hotel.location}</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-3 mb-4">
          {hotel.amenities.slice(0, 4).map((amenity, index) => (
            <div key={index} className="flex items-center space-x-1 text-xs text-gray-600">
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
          {hotel.amenities.length > 4 && (
            <span className="text-xs text-gray-500">+{hotel.amenities.length - 4} more</span>
          )}
        </div>

        {hotel.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-600">Per night</p>
            <p className="text-2xl font-bold text-blue-600">USD {hotel.price}.00</p>
          </div>
          <Link
            href={`/hotels/${hotel.id}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}
