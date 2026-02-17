'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Users, MapPin, Home, Car, Plane, Compass, Search } from 'lucide-react'
import DatePickerField from '@/components/ui/DatePickerField'
import Link from 'next/link'

const tabs = [
  { id: 'hotels', label: 'HOTELS', icon: Home },
  { id: 'cars', label: 'CARS', icon: Car },
  { id: 'flights', label: 'FLIGHTS', icon: Plane },
  { id: 'tours', label: 'TOURS', icon: Compass },
]

export default function HeroSearch() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('hotels')
  
  // Hotel search state
  const [hotelCity, setHotelCity] = useState('')
  const [checkIn, setCheckIn] = useState<Date | null>(new Date())
  const [checkOut, setCheckOut] = useState<Date | null>(new Date(Date.now() + 86400000))
  const [hotelGuests, setHotelGuests] = useState(2)
  const [hotelRooms, setHotelRooms] = useState(1)

  // Car search state
  const [pickupLocation, setPickupLocation] = useState('')
  const [pickupDate, setPickupDate] = useState<Date | null>(new Date())
  const [returnDate, setReturnDate] = useState<Date | null>(new Date(Date.now() + 86400000 * 3))
  const [carTravellers, setCarTravellers] = useState(1)

  // Flight search state
  const [flightFrom, setFlightFrom] = useState('')
  const [flightTo, setFlightTo] = useState('')
  const [departDate, setDepartDate] = useState<Date | null>(new Date())
  const [returnFlightDate, setReturnFlightDate] = useState<Date | null>(new Date(Date.now() + 86400000 * 7))
  const [flightTravellers, setFlightTravellers] = useState(1)
  const [tripType, setTripType] = useState('round')

  // Tour search state
  const [tourCity, setTourCity] = useState('')
  const [tourDate, setTourDate] = useState<Date | null>(new Date())
  const [tourTravellers, setTourTravellers] = useState(1)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    switch(activeTab) {
      case 'hotels':
        router.push(`/hotels/results?city=${encodeURIComponent(hotelCity)}&checkIn=${checkIn?.toISOString()}&checkOut=${checkOut?.toISOString()}&guests=${hotelGuests}&rooms=${hotelRooms}`)
        break
      case 'cars':
        router.push(`/cars/results?location=${encodeURIComponent(pickupLocation)}&pickup=${pickupDate?.toISOString()}&return=${returnDate?.toISOString()}&travellers=${carTravellers}`)
        break
      case 'flights':
        router.push(`/flights/results?from=${encodeURIComponent(flightFrom)}&to=${encodeURIComponent(flightTo)}&depart=${departDate?.toISOString()}&return=${returnFlightDate?.toISOString()}&travellers=${flightTravellers}&tripType=${tripType}`)
        break
      case 'tours':
        router.push(`/tours/results?city=${encodeURIComponent(tourCity)}&date=${tourDate?.toISOString()}&travellers=${tourTravellers}`)
        break
    }
  }

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Your Trip Starts Here!</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">Let us help you plan your next journey — the one that will leave a lifetime of memories.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-t-xl p-1 inline-flex flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id ? 'bg-white text-blue-900 shadow-lg' : 'text-white hover:bg-white/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
          <Link href="/more-services" className="flex items-center space-x-2 px-6 py-3 text-white hover:bg-white/20 rounded-lg font-medium transition-all">
            <span>MORE SERVICES</span>
          </Link>
        </div>

        <div className="bg-white rounded-b-xl rounded-tr-xl p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleSearch}>
            {/* HOTELS FORM */}
            {activeTab === 'hotels' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Search By City</span>
                  </label>
                  <input type="text" placeholder="Where are you going?" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={hotelCity} onChange={(e) => setHotelCity(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Check-in</span>
                  </label>
                  <DatePickerField selected={checkIn} onChange={setCheckIn} minDate={new Date()} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Check-out</span>
                  </label>
                  <DatePickerField selected={checkOut} onChange={setCheckOut} minDate={checkIn || new Date()} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>Travellers & Rooms</span>
                  </label>
                  <div className="flex space-x-2">
                    <select className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={hotelGuests} onChange={(e) => setHotelGuests(Number(e.target.value))}>
                      {[1,2,3,4,5,6].map(num => <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>)}
                    </select>
                    <select className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={hotelRooms} onChange={(e) => setHotelRooms(Number(e.target.value))}>
                      {[1,2,3,4,5].map(num => <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* CARS FORM */}
            {activeTab === 'cars' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Pickup Location</span>
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} required>
                    <option value="">Select location</option>
                    <option value="DXB">Dubai Airport (DXB)</option>
                    <option value="AUH">Abu Dhabi Airport (AUH)</option>
                    <option value="SHJ">Sharjah Airport (SHJ)</option>
                    <option value="JFK">New York JFK</option>
                    <option value="LHR">London Heathrow</option>
                  </select>
                </div>
                <DatePickerField selected={pickupDate} onChange={setPickupDate} placeholderText="Pickup Date" minDate={new Date()} />
                <DatePickerField selected={returnDate} onChange={setReturnDate} placeholderText="Return Date" minDate={pickupDate || new Date()} />
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>Travellers</span>
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={carTravellers} onChange={(e) => setCarTravellers(Number(e.target.value))}>
                    {[1,2,3,4,5,6,7,8].map(num => <option key={num} value={num}>{num} Traveller{num > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
              </div>
            )}

            {/* FLIGHTS FORM */}
            {activeTab === 'flights' && (
              <div className="space-y-4">
                <div className="flex space-x-4 mb-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" value="round" checked={tripType === 'round'} onChange={(e) => setTripType(e.target.value)} className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Round Trip</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" value="oneway" checked={tripType === 'oneway'} onChange={(e) => setTripType(e.target.value)} className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">One Way</span>
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <input type="text" placeholder="From" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500" value={flightFrom} onChange={(e) => setFlightFrom(e.target.value)} required />
                  <input type="text" placeholder="To" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500" value={flightTo} onChange={(e) => setFlightTo(e.target.value)} required />
                  <DatePickerField selected={departDate} onChange={setDepartDate} placeholderText="Depart" minDate={new Date()} />
                  {tripType === 'round' && (
                    <DatePickerField selected={returnFlightDate} onChange={setReturnFlightDate} placeholderText="Return" minDate={departDate || new Date()} />
                  )}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>Travellers</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={flightTravellers} onChange={(e) => setFlightTravellers(Number(e.target.value))}>
                      {[1,2,3,4,5,6,7,8,9].map(num => <option key={num} value={num}>{num} Traveller{num > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* TOURS FORM */}
            {activeTab === 'tours' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <input type="text" placeholder="Destination" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={tourCity} onChange={(e) => setTourCity(e.target.value)} required />
                <DatePickerField selected={tourDate} onChange={setTourDate} placeholderText="Tour Date" minDate={new Date()} />
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={tourTravellers} onChange={(e) => setTourTravellers(Number(e.target.value))}>
                  {[1,2,3,4,5,6,7,8].map(num => <option key={num} value={num}>{num} Traveller{num > 1 ? 's' : ''}</option>)}
                </select>
                <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Search Tours</span>
                </button>
              </div>
            )}

            {activeTab !== 'tours' && (
              <div className="mt-6 flex justify-center">
                <button type="submit" className="bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl">
                  Search {activeTab}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
