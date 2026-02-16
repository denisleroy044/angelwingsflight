'use client'
import { useState } from 'react'
import { MapPin, Calendar, Users, Search } from 'lucide-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useRouter } from 'next/navigation'

export default function TourSearchForm() {
  const router = useRouter()
  const [searchCity, setSearchCity] = useState('')
  const [tourDate, setTourDate] = useState(new Date())
  const [travellers, setTravellers] = useState(1)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams({
      city: searchCity,
      date: tourDate.toISOString(),
      travellers: travellers.toString()
    })
    router.push(`/tours/results?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Find Best Tours</h1>
      
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Search By City</span>
          </label>
          <input
            type="text"
            placeholder="Enter city name"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>Date</span>
          </label>
          <DatePicker
            selected={tourDate}
            onChange={(date) => setTourDate(date!)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            dateFormat="dd-MM-yyyy"
            minDate={new Date()}
          />
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
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>{num} Traveller{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold flex items-center justify-center space-x-2"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  )
}
