'use client'
import { useState } from 'react'
import { Eye, CheckCircle, XCircle, Clock } from 'lucide-react'

const initialBookings = [
  { id: 'BK001', customer: 'John Doe', type: 'Flight', item: 'New York to London', amount: 450, status: 'pending', date: '2026-02-14' },
  { id: 'BK002', customer: 'Jane Smith', type: 'Hotel', item: 'Burj Al Arab', amount: 1200, status: 'confirmed', date: '2026-02-14' },
  { id: 'BK003', customer: 'Bob Johnson', type: 'Car', item: 'BMW X5', amount: 250, status: 'completed', date: '2026-02-13' },
  { id: 'BK004', customer: 'Alice Brown', type: 'Tour', item: 'Dubai City Tour', amount: 199, status: 'cancelled', date: '2026-02-13' },
]

export default function BookingsPage() {
  const [bookings, setBookings] = useState(initialBookings)

  const updateStatus = (id: string, newStatus: string) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b))
  }

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'confirmed': return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> Confirmed</span>
      case 'pending': return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs flex items-center"><Clock className="w-3 h-3 mr-1" /> Pending</span>
      case 'cancelled': return <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs flex items-center"><XCircle className="w-3 h-3 mr-1" /> Cancelled</span>
      case 'completed': return <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> Completed</span>
      default: return null
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Manage Bookings</h1>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4">Booking ID</th>
              <th className="text-left py-3 px-4">Customer</th>
              <th className="text-left py-3 px-4">Item</th>
              <th className="text-left py-3 px-4">Amount</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-t">
                <td className="py-3 px-4 font-mono text-sm">{booking.id}</td>
                <td className="py-3 px-4">{booking.customer}</td>
                <td className="py-3 px-4">
                  <div>
                    <p className="font-medium">{booking.item}</p>
                    <p className="text-xs text-gray-500">{booking.type}</p>
                  </div>
                </td>
                <td className="py-3 px-4">${booking.amount}</td>
                <td className="py-3 px-4">{booking.date}</td>
                <td className="py-3 px-4">{getStatusBadge(booking.status)}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    {booking.status === 'pending' && (
                      <>
                        <button onClick={() => updateStatus(booking.id, 'confirmed')} className="p-1 hover:bg-green-100 rounded" title="Confirm">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </button>
                        <button onClick={() => updateStatus(booking.id, 'cancelled')} className="p-1 hover:bg-red-100 rounded" title="Cancel">
                          <XCircle className="w-4 h-4 text-red-600" />
                        </button>
                      </>
                    )}
                    {booking.status === 'confirmed' && (
                      <button onClick={() => updateStatus(booking.id, 'completed')} className="p-1 hover:bg-blue-100 rounded" title="Mark Complete">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </button>
                    )}
                    <button className="p-1 hover:bg-gray-100 rounded" title="View">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
