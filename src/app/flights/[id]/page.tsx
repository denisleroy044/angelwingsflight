'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Plane, Clock, Calendar, Users, Briefcase, Wifi, Coffee, Battery, Shield } from 'lucide-react'

// Mock data - in real app, fetch based on ID
const flightData = {
  id: 1,
  airline: 'Pakistan International Airlines',
  from: 'Multan',
  to: 'Jeddah',
  price: 385,
  logo: 'PIA',
  departure: '08:00',
  arrival: '12:30',
  duration: '4h 30m',
  stops: 0,
  flightNumber: 'PK-731',
  aircraft: 'Boeing 777-300ER',
  seatCapacity: 350,
  baggage: '30kg',
  amenities: ['WiFi', 'Meals', 'Entertainment', 'Power Outlets']
}

export default function FlightDetailPage() {
  const params = useParams()
  const [selectedClass, setSelectedClass] = useState('economy')

  // In real app, fetch flight details based on params.id

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/flights" className="hover:text-blue-600">Flights</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Flight Details</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Flight Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Flight Header */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-800 font-bold text-xl">{flightData.logo}</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{flightData.airline}</h1>
                    <p className="text-gray-600">Flight {flightData.flightNumber} • {flightData.aircraft}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Starting from</p>
                  <p className="text-3xl font-bold text-blue-600">USD {flightData.price}.00</p>
                </div>
              </div>

              {/* Flight Route */}
              <div className="flex items-center justify-between py-6 border-y border-gray-100">
                <div className="text-center flex-1">
                  <p className="text-3xl font-bold text-gray-900">{flightData.departure}</p>
                  <p className="text-lg text-gray-700">{flightData.from}</p>
                  <p className="text-sm text-gray-500">Terminal 1</p>
                </div>
                
                <div className="flex-1 px-8">
                  <div className="relative">
                    <div className="border-t-2 border-gray-300 absolute top-1/2 left-0 right-0"></div>
                    <Plane className="w-6 h-6 text-blue-600 mx-auto relative bg-white transform rotate-90" />
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-2">{flightData.duration}</p>
                  <p className="text-center text-xs text-gray-500">Nonstop</p>
                </div>

                <div className="text-center flex-1">
                  <p className="text-3xl font-bold text-gray-900">{flightData.arrival}</p>
                  <p className="text-lg text-gray-700">{flightData.to}</p>
                  <p className="text-sm text-gray-500">Terminal 2</p>
                </div>
              </div>

              {/* Flight Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                <div className="text-center">
                  <Clock className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{flightData.duration}</p>
                </div>
                <div className="text-center">
                  <Briefcase className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Baggage</p>
                  <p className="font-semibold">{flightData.baggage}</p>
                </div>
                <div className="text-center">
                  <Users className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Seats</p>
                  <p className="font-semibold">{flightData.seatCapacity}</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-semibold">16 Feb 2026</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Wifi className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">WiFi</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Coffee className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Meals</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Battery className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Power</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Insurance</span>
                </div>
              </div>
            </div>

            {/* Fare Rules */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Fare Rules</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                  <p className="text-sm text-gray-700">Free cancellation within 24 hours of booking</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                  <p className="text-sm text-gray-700">Date changes allowed up to 7 days before departure</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                  <p className="text-sm text-gray-700">Baggage allowance: 30kg check-in + 7kg cabin</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                  <p className="text-sm text-gray-700">Meals included in fare</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Booking Summary</h2>

              {/* Class Selection */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Select Class</label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  <option value="economy">Economy - USD {flightData.price}</option>
                  <option value="premium">Premium Economy - USD {flightData.price + 150}</option>
                  <option value="business">Business - USD {flightData.price + 400}</option>
                  <option value="first">First Class - USD {flightData.price + 800}</option>
                </select>
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Price Breakdown</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Base Fare (1 Adult)</span>
                    <span className="font-medium">USD {flightData.price}.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Taxes & Fees</span>
                    <span className="font-medium">USD 45.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="font-medium">USD 10.00</span>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">
                    USD {flightData.price + 55}.00
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
                  <Link
                    href="/checkout"
                    className="block w-full bg-blue-600 text-white text-center px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg mb-3"
                  >
                    Proceed to Book
                  </Link>
                  <button className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                    Hold for 24 Hours
                  </button>

              {/* Trust Badges */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">Secure payment • No hidden fees</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Visa</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Mastercard</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Flights */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Flights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-800 font-bold">EK</span>
                    </div>
                    <div>
                      <p className="font-semibold">Emirates</p>
                      <p className="text-xs text-gray-600">DXB → JFK</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-blue-600">USD 650</p>
                </div>
                <Link href="/flights/2" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
