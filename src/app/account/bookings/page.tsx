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
  Download, 
  Eye, 
  XCircle,
  Calendar,
  MapPin,
  Users,
  CreditCard,
  Filter,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowLeft
} from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { InvoiceGenerator } from '@/lib/invoice/generator'
import { toast } from 'react-hot-toast'

export default function BookingsPage() {
  const { data: session } = useSession()
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [bookings, setBookings] = useState<any[]>([])
  const [selectedBooking, setSelectedBooking] = useState<any>(null)
  const [showDetails, setShowDetails] = useState(false)
  const [showCancelConfirm, setShowCancelConfirm] = useState(false)
  const [cancellingBooking, setCancellingBooking] = useState<any>(null)
  
  const { loadBookings, updateBookingStatus } = useCartStore()

  useEffect(() => {
    const loadedBookings = loadBookings()
    setBookings(loadedBookings)
  }, [loadBookings])

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200'
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'confirmed': return <CheckCircle className="w-4 h-4" />
      case 'pending': return <Clock className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'cancelled': return <AlertCircle className="w-4 h-4" />
      default: return null
    }
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

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'flight': return 'bg-blue-100 text-blue-600'
      case 'hotel': return 'bg-green-100 text-green-600'
      case 'car': return 'bg-purple-100 text-purple-600'
      case 'tour': return 'bg-orange-100 text-orange-600'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  const handleViewDetails = (booking: any) => {
    setSelectedBooking(booking)
    setShowDetails(true)
  }

  const handleDownloadInvoice = (booking: any) => {
    try {
      const invoice = InvoiceGenerator.createInvoice(
        booking.bookingId,
        [booking],
        {
          name: session?.user?.name || 'Customer',
          email: session?.user?.email || 'customer@example.com'
        },
        'Credit Card'
      )
      InvoiceGenerator.downloadPDF(invoice)
      toast.success('Invoice downloaded successfully')
    } catch (error) {
      toast.error('Failed to download invoice')
    }
  }

  const handleCancelBooking = (booking: any) => {
    setCancellingBooking(booking)
    setShowCancelConfirm(true)
  }

  const confirmCancelBooking = () => {
    if (cancellingBooking) {
      updateBookingStatus(cancellingBooking.bookingId, 'cancelled')
      setBookings(bookings.map(b => 
        b.bookingId === cancellingBooking.bookingId 
          ? { ...b, status: 'cancelled' } 
          : b
      ))
      setShowCancelConfirm(false)
      setCancellingBooking(null)
      toast.success('Booking cancelled successfully')
    }
  }

  const filteredBookings = bookings.filter(booking => {
    if (filter !== 'all' && booking.type !== filter) return false
    if (searchTerm && !booking.name.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with back button */}
        <div className="mb-8">
          <Link href="/account/dashboard" className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 mb-4 group">
            <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage and view all your travel bookings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Total Bookings</p>
            <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Upcoming</p>
            <p className="text-2xl font-bold text-green-600">
              {bookings.filter(b => b.status === 'confirmed' || b.status === 'pending').length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Completed</p>
            <p className="text-2xl font-bold text-blue-600">
              {bookings.filter(b => b.status === 'completed').length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Total Spent</p>
            <p className="text-2xl font-bold text-purple-600">
              ${bookings.reduce((sum, b) => sum + (b.price * (b.quantity || 1)), 0)}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {['all', 'flight', 'hotel', 'car', 'tour'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      filter === type
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search bookings..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-16 text-center border-2 border-dashed border-gray-200">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No bookings found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                {searchTerm || filter !== 'all' 
                  ? "Try adjusting your filters or search terms"
                  : "Start planning your next adventure and create your first booking!"}
              </p>
              <Link
                href="/"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Explore Destinations
              </Link>
            </div>
          ) : (
            filteredBookings.map((booking) => (
              <div key={booking.id + booking.bookingId} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex flex-col md:flex-row">
                  {/* Image/Icon Section */}
                  <div className={`md:w-32 h-32 flex items-center justify-center ${getTypeColor(booking.type)}`}>
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur flex items-center justify-center">
                      {getTypeIcon(booking.type)}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)} border`}>
                            {getStatusIcon(booking.status)}
                            <span>{booking.status?.charAt(0).toUpperCase() + booking.status?.slice(1) || 'Pending'}</span>
                          </span>
                          <span className="text-sm text-gray-500">Booking ID: {booking.bookingId}</span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{booking.name}</h3>
                        
                        {booking.type === 'flight' && booking.details && (
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center"><Plane className="w-4 h-4 mr-1" /> {booking.details.airline}</span>
                            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {booking.details.origin} → {booking.details.destination}</span>
                          </div>
                        )}

                        {booking.type === 'hotel' && booking.details && (
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {booking.details.location}</span>
                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {booking.details.checkIn} → {booking.details.checkOut}</span>
                          </div>
                        )}

                        {booking.type === 'car' && booking.details && (
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {booking.details.pickup}</span>
                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {booking.details.duration}</span>
                          </div>
                        )}

                        {booking.type === 'tour' && booking.details && (
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {booking.details.duration}</span>
                            <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {booking.details.guide || 'Guide included'}</span>
                          </div>
                        )}
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                        <p className="text-3xl font-bold text-blue-600">${booking.price * (booking.quantity || 1)}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-100">
                      <button
                        onClick={() => handleViewDetails(booking)}
                        className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors group"
                      >
                        <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">View Details</span>
                      </button>
                      <button
                        onClick={() => handleDownloadInvoice(booking)}
                        className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors group"
                      >
                        <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">Download Invoice</span>
                      </button>
                      {booking.status !== 'cancelled' && booking.status !== 'completed' && (
                        <button
                          onClick={() => handleCancelBooking(booking)}
                          className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors group"
                        >
                          <XCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span className="text-sm">Cancel Booking</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Booking Details Modal */}
        {showDetails && selectedBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Booking Details</h3>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700">Booking ID</p>
                    <p className="text-lg font-semibold text-blue-600">{selectedBooking.bookingId}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Type</p>
                      <p className="font-semibold text-gray-900 capitalize flex items-center mt-1">
                        <span className={`w-8 h-8 rounded-full ${getTypeColor(selectedBooking.type)} flex items-center justify-center mr-2`}>
                          {getTypeIcon(selectedBooking.type)}
                        </span>
                        {selectedBooking.type}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <span className={`inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium mt-1 ${getStatusColor(selectedBooking.status)}`}>
                        {getStatusIcon(selectedBooking.status)}
                        <span>{selectedBooking.status?.charAt(0).toUpperCase() + selectedBooking.status?.slice(1) || 'Pending'}</span>
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Booked On</p>
                      <p className="font-semibold text-gray-900 mt-1">
                        {new Date(selectedBooking.bookedAt || Date.now()).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-2xl font-bold text-blue-600 mt-1">${selectedBooking.price * (selectedBooking.quantity || 1)}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Item Details</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-900 text-lg mb-2">{selectedBooking.name}</p>
                      {selectedBooking.description && (
                        <p className="text-sm text-gray-600 mb-3">{selectedBooking.description}</p>
                      )}
                      {selectedBooking.details && (
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          {Object.entries(selectedBooking.details).map(([key, value]) => (
                            <div key={key}>
                              <span className="text-gray-500 capitalize">{key}:</span>
                              <span className="ml-2 font-medium text-gray-900">{String(value)}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      onClick={() => {
                        handleDownloadInvoice(selectedBooking)
                        setShowDetails(false)
                      }}
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Invoice</span>
                    </button>
                    <button
                      onClick={() => setShowDetails(false)}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cancel Confirmation Modal */}
        {showCancelConfirm && cancellingBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
              <div className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Cancel Booking?</h3>
                <p className="text-gray-600 text-center mb-6">
                  Are you sure you want to cancel <span className="font-semibold">{cancellingBooking.name}</span>? 
                  This action cannot be undone.
                </p>

                <div className="flex space-x-3">
                  <button
                    onClick={confirmCancelBooking}
                    className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                  >
                    Yes, Cancel
                  </button>
                  <button
                    onClick={() => setShowCancelConfirm(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                  >
                    No, Keep
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
