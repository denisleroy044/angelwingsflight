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
  Clock
} from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

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

// Define the quick actions with properly typed hrefs
const quickActions = [
  { 
    title: 'Search Flights', 
    icon: Plane, 
    href: '/flights' as const,
    gradient: 'from-blue-500 to-blue-600',
    stats: 'Save up to 30%'
  },
  { 
    title: 'Find Hotels', 
    icon: Hotel, 
    href: '/hotels' as const,
    gradient: 'from-green-500 to-green-600',
    stats: '2000+ properties'
  },
  { 
    title: 'Rent a Car', 
    icon: Car, 
    href: '/cars' as const,
    gradient: 'from-purple-500 to-purple-600',
    stats: 'Free cancellation'
  },
  { 
    title: 'Book Tours', 
    icon: Compass, 
    href: '/tours' as const,
    gradient: 'from-orange-500 to-orange-600',
    stats: 'Best price guarantee'
  }
]

export default function AccountDashboardPage() {
  const { data: session } = useSession()
  const [recentBookings, setRecentBookings] = useState<Booking[]>([])
  const { loadBookings } = useCartStore()

  useEffect(() => {
    const bookings = loadBookings() as Booking[]
    setRecentBookings(bookings.slice(-3))
  }, [loadBookings])

  const getStatusColor = (status?: string) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
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
    { label: 'Days Traveling', value: '45', icon: Clock }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {session?.user?.name?.split(' ')[0] || 'Traveler'}!</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
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
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
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
                  <Icon className="w-8 h-8 mb-4" />
                  <h3 className="font-semibold text-lg mb-1">{action.title}</h3>
                  <p className="text-sm text-white/80">{action.stats}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Recent Bookings */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
        {recentBookings.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center border-2 border-dashed border-gray-200">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">No bookings yet. Start planning your next adventure!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{booking.name}</h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {formatStatus(booking.status)}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">${booking.price * (booking.quantity || 1)}</p>
                    {booking.bookingId && (
                      <a href={`/account/bookings/${booking.bookingId}`} className="text-blue-600 hover:text-blue-700 text-sm">
                        View Details →
                      </a>
                    )}
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
