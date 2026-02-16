'use client'
import { useState } from 'react'
import { MapPin, Calendar, Users, Home, Search } from 'lucide-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useRouter } from 'next/navigation'

export default function HotelSearchForm() {
  const router = useRouter()
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState(new Date())
  const [checkOut, setCheckOut] = useState(new Date(Date.now() + 86400000))
  const [travellers, setTravellers] = useState(2)
  const [rooms, setRooms] = useState(1)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams({
      destination: destination,
      checkIn: checkIn.toISOString(),
      checkOut: checkOut.toISOString(),
      travellers: travellers.toString(),
      rooms: rooms.toString()
    })
    router.push(`/hotels/results?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Search for best hotels</h1>
      
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Destination */}
        <div className="space-y-2 lg:col-span-1">
          <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Destination</span>
          </label>
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>

        {/* Check-in */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>Check-in</span>
          </label>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date!)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            dateFormat="dd-MM-yyyy"
            minDate={new Date()}
          />
        </div>

        {/* Check-out */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>Check-out</span>
          </label>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date!)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            dateFormat="dd-MM-yyyy"
            minDate={checkIn}
          />
        </div>

        {/* Travellers */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
            <Users className="w-4 h-4 text-blue-600" />
            <span>Travellers</span>
          </label>
          <select
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={travellers}
            onChange={(e) => setTravellers(Number(e.target.value))}
          >
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>{num} Traveller{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {/* Rooms */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
            <Home className="w-4 h-4 text-blue-600" />
            <span>Rooms</span>
          </label>
          <select
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
          >
            {[1,2,3,4,5].map(num => (
              <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {/* Search Button - spans full width on mobile, inline on desktop */}
        <div className="lg:col-span-5 flex justify-center mt-4">
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <Search className="w-5 h-5" />
            <span>Search Hotels</span>
          </button>
        </div>
      </form>
    </div>
  )
}
