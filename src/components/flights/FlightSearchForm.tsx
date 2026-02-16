'use client'
import { useState } from 'react'
import { Plane, MapPin, Calendar, Users, ChevronDown } from 'lucide-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useRouter } from 'next/navigation'

export default function FlightSearchForm() {
  const router = useRouter()
  const [tripType, setTripType] = useState('oneway')
  const [fromCity, setFromCity] = useState('')
  const [toCity, setToCity] = useState('')
  const [departDate, setDepartDate] = useState(new Date())
  const [returnDate, setReturnDate] = useState(new Date(Date.now() + 86400000 * 7))
  const [cabinClass, setCabinClass] = useState('Economy')
  const [travellers, setTravellers] = useState(1)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams({
      from: fromCity,
      to: toCity,
      depart: departDate.toISOString(),
      travellers: travellers.toString(),
      class: cabinClass
    })
    if (tripType === 'round') {
      params.append('return', returnDate.toISOString())
    }
    router.push(`/flights/results?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Search for best Flights</h1>
      
      {/* Trip Type Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setTripType('oneway')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            tripType === 'oneway'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          One Way
        </button>
        <button
          onClick={() => setTripType('round')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            tripType === 'round'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Round Trip
        </button>
      </div>

      <form onSubmit={handleSearch} className="space-y-6">
        {/* From/To Cities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Flying From</span>
            </label>
            <input
              type="text"
              placeholder="Select City"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Destination To</span>
            </label>
            <input
              type="text"
              placeholder="Select City"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Depart Date</span>
            </label>
            <DatePicker
              selected={departDate}
              onChange={(date) => setDepartDate(date!)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              dateFormat="dd-MM-yyyy"
              minDate={new Date()}
            />
          </div>
          {tripType === 'round' && (
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
                minDate={departDate}
              />
            </div>
          )}
        </div>

        {/* Cabin Class & Travellers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
              <Plane className="w-4 h-4 text-blue-600" />
              <span>Cabin Class</span>
            </label>
            <select
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value)}
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>
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
              {[1,2,3,4,5,6,7,8,9].map(num => (
                <option key={num} value={num}>{num} Traveller{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
        >
          Search Flights
        </button>
      </form>
    </div>
  )
}
