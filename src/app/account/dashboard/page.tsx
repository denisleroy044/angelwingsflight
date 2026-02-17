'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { 
  Plane, 
  Hotel, 
  Car, 
  Compass, 
  ChevronRight,
  Calendar,
  MapPin,
  Star,
  Clock,
  Users,
  Sun,
  Coffee,
  Wifi
} from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

// Define a type for the booking
interface Booking {
  id: string
  bookingId?: string
  name: string
  type: string
  price: number
  quantity?: number
  status?: string
  date?: string
  bookedAt?: string
}

// Define a type for route paths
type RoutePath = '/flights' | '/hotels' | '/cars' | '/tours' | '/blogs' | '/account/bookings' | '/'

// Helper function to create booking detail URL
const getBookingDetailUrl = (bookingId: string): string => {
  return `/account/bookings/${bookingId}`
}

export default function AccountDashboardPage() {
  const { data: session } = useSession()
  const [recentBookings, setRecentBookings] = useState<Booking[]>([])
  const { loadBookings } = useCartStore()

  useEffect(() => {
    const bookings = loadBookings() as Booking[]
    setRecentBookings(bookings.slice(-3))
  }, [loadBookings])

  // Quick Actions with enhanced styling - typed as RoutePath
  const quickActions: Array<{
    title: string
    icon: any
    href: RoutePath
    gradient: string
    description: string
    stats: string
  }> = [
    { 
      title: 'Search Flights', 
      icon: Plane, 
      href: '/flights',
      gradient: 'from-blue-500 to-blue-600',
      description: 'Find the best flight deals',
      stats: 'Save up to 30%'
    },
    { 
      title: 'Find Hotels', 
      icon: Hotel, 
      href: '/hotels',
      gradient: 'from-green-500 to-green-600',
      description: 'Discover amazing stays',
      stats: '2000+ properties'
    },
    { 
      title: 'Rent a Car', 
      icon: Car, 
      href: '/cars',
      gradient: 'from-purple-500 to-purple-600',
      description: 'Get wheels for your trip',
      stats: 'Free cancellation'
    },
    { 
      title: 'Book Tours', 
      icon: Compass, 
      href: '/tours',
      gradient: 'from-orange-500 to-orange-600',
      description: 'Explore local experiences',
      stats: 'Best price guarantee'
    }
  ]

  // Enhanced recommended items
  const recommendedItems = [
    {
      id: 1,
      name: 'Dubai Luxury Package',
      type: 'tour',
      location: 'Dubai, UAE',
      price: 599,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
      rating: 4.8,
      reviews: 1234,
      days: 5,
      highlights: ['Burj Khalifa', 'Desert Safari', 'Luxury Shopping']
    },
    {
      id: 2,
      name: 'Paris Getaway',
      type: 'hotel',
      location: 'Paris, France',
      price: 799,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      rating: 4.7,
      reviews: 892,
      nights: 4,
      highlights: ['Eiffel Tower', 'Seine Cruise', 'Gourmet Dining']
    },
    {
      id: 3,
      name: 'Tokyo Explorer',
      type: 'tour',
      location: 'Tokyo, Japan',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      rating: 4.9,
      reviews: 2156,
      days: 7,
      highlights: ['Mount Fuji', 'Sushi Making', 'Temple Tours']
    },
    {
      id: 4,
      name: 'Santorini Escape',
      type: 'hotel',
      location: 'Santorini, Greece',
      price: 899,
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',
      rating: 4.9,
      reviews: 1678,
      nights: 5,
      highlights: ['Caldera View', 'Sunset Cruise', 'Wine Tasting']
    }
  ]

  const getStatusColor = (status?: string) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status?: string) => {
    switch(status) {
      case 'confirmed': return '✓'
      case 'pending': return '⏳'
      case 'completed': return '✅'
      case 'cancelled': return '✗'
      default: return '•'
    }
  }

  const formatStatus = (status?: string) => {
    if (!status) return 'Pending'
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  const stats = [
    { label: 'Trips Planned', value: '12', icon: Calendar },
    { label: 'Countries Visited', value: '8', icon: MapPin },
    { label: 'Reward Points', value: '2,450', icon: Star },
    { label: 'Days Traveling', value: '45', icon: Sun }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Header with Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {session?.user?.name?.split(' ')[0] || 'Traveler'}!
            </h1>
            <p className="text-blue-100">Ready for your next adventure? Let's explore the world together.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-block bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-sm">
              Member since {new Date().getFullYear() - 1}
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-lg p-4">
                <Icon className="w-5 h-5 mb-2 text-blue-200" />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-blue-200">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <Link
                key={action.title}
                href={action.href}
                className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="relative p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8" />
                    <span className="text-xs bg-white/30 px-3 py-1 rounded-full">
                      {action.stats}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{action.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{action.description}</p>
                  <div className="flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform">
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Recent Bookings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Bookings</h2>
          <Link
            href="/account/bookings"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center group"
          >
            View All
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {recentBookings.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center border-2 border-dashed border-gray-200">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No bookings yet</h3>
            <p className="text-gray-600 mb-6">Start planning your next adventure!</p>
            <Link
              href="/"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Destinations
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      booking.type === 'flight' ? 'bg-blue-100' :
                      booking.type === 'hotel' ? 'bg-green-100' :
                      booking.type === 'car' ? 'bg-purple-100' : 'bg-orange-100'
                    }`}>
                      {booking.type === 'flight' && <Plane className="w-7 h-7 text-blue-600" />}
                      {booking.type === 'hotel' && <Hotel className="w-7 h-7 text-green-600" />}
                      {booking.type === 'car' && <Car className="w-7 h-7 text-purple-600" />}
                      {booking.type === 'tour' && <Compass className="w-7 h-7 text-orange-600" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{booking.name}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <p className="text-sm text-gray-600 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {booking.date || (booking.bookedAt ? new Date(booking.bookedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          }) : 'Date not set')}
                        </p>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                          <span className="mr-1">{getStatusIcon(booking.status)}</span>
                          {formatStatus(booking.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Total</p>
                      <p className="text-2xl font-bold text-blue-600">${booking.price * (booking.quantity || 1)}</p>
                    </div>
                    {booking.bookingId && (
                      <Link
                        href={getBookingDetailUrl(booking.bookingId)}
                        className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                      >
                        View Details
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recommended for You */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-lg flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-bold text-gray-900">{item.rating}</span>
                  <span className="ml-1 text-xs text-gray-500">({item.reviews})</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-black/50 backdrop-blur text-white px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                    {item.highlights.length > 2 && (
                      <span className="text-xs bg-black/50 backdrop-blur text-white px-2 py-1 rounded-full">
                        +{item.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-xs font-medium">{item.location}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-1">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Starting from</p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-blue-600">${item.price}</span>
                      <span className="text-xs text-gray-500 ml-1">
                        /{item.days ? 'person' : 'night'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="font-medium">{item.days || item.nights} {item.days ? 'days' : 'nights'}</span>
                  </div>
                </div>
                <Link
                  href={`/${item.type}s/${item.id}`}
                  className="block w-full mt-4 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Inspiration Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Travel Inspiration</h3>
            <p className="text-purple-100">Discover hidden gems and unique experiences around the world</p>
          </div>
          <Link
            href="/blogs"
            className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Explore Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
