'use client'
import { useState } from 'react'
import { MapPin, Calendar, Users, Car } from 'lucide-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useRouter } from 'next/navigation'

export default function CarSearchForm() {
  const router = useRouter()
  const [pickupLocation, setPickupLocation] = useState('')
  const [pickupDate, setPickupDate] = useState(new Date())
  const [returnDate, setReturnDate] = useState(new Date(Date.now() + 86400000 * 3))
  const [travellers, setTravellers] = useState(1)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams({
      location: pickupLocation,
      pickup: pickupDate.toISOString(),
      return: returnDate.toISOString(),
      travellers: travellers.toString()
    })
    router.push(`/cars/results?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Rent a Car</h1>
      
      <form onSubmit={handleSearch} className="space-y-6">
        {/* Pickup Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>From Airport / Location</span>
          </label>
          <select
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
          >
            <option value="">Select City</option>
            <option value="Dubai">Dubai International Airport (DXB)</option>
            <option value="Abu Dhabi">Abu Dhabi International (AUH)</option>
            <option value="Sharjah">Sharjah International (SHJ)</option>
            <option value="Ras Al Khaimah">Ras Al Khaimah (RKT)</option>
          </select>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Pickup Date</span>
            </label>
            <DatePicker
              selected={pickupDate}
              onChange={(date) => setPickupDate(date!)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              dateFormat="dd-MM-yyyy"
              minDate={new Date()}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Return Date</span>
            </label>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date!)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              dateFormat="dd-MM-yyyy"
              minDate={pickupDate}
            />
          </div>
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

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
        >
          Search Cars
        </button>
      </form>
    </div>
  )
}
