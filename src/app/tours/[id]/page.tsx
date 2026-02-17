import DynamicLink from '@/components/ui/DynamicLink'
'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, MapPin, Star, Calendar, Users, Clock, Sun, Umbrella, Camera, Coffee, Shield, Wifi } from 'lucide-react'

// Mock data - in real app, fetch based on ID
const tourData = {
  id: 1,
  name: 'Dubai & the Desert',
  package: 'Dubai Combo Package',
  location: 'Dubai, United Arab Emirates',
  rating: 4.5,
  reviews: 234,
  price: 599,
  images: [
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    'https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800',
    'https://images.unsplash.com/photo-1541877945-4c546d9ec6c2?w=800',
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800'
  ],
  days: 5,
  nights: 4,
  maxPeople: 15,
  minAge: 5,
  languages: ['English', 'Arabic', 'Hindi'],
  highlights: [
    'Burj Khalifa observation deck',
    'Desert safari with dune bashing',
    'Traditional Bedouin camp dinner',
    'Dubai Marina cruise',
    'Gold and spice souk shopping',
    'Abu Dhabi Grand Mosque tour'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Dubai',
      description: 'Welcome to Dubai! Transfer to hotel and free evening to explore Dubai Marina.'
    },
    {
      day: 2,
      title: 'City Tour & Burj Khalifa',
      description: 'Guided city tour including Burj Al Arab, Palm Jumeirah, and Burj Khalifa observation deck.'
    },
    {
      day: 3,
      title: 'Desert Safari',
      description: 'Afternoon desert safari with dune bashing, camel rides, and BBQ dinner in the desert.'
    },
    {
      day: 4,
      title: 'Abu Dhabi Day Trip',
      description: 'Full day trip to Abu Dhabi visiting Sheikh Zayed Grand Mosque and Ferrari World.'
    },
    {
      day: 5,
      title: 'Departure',
      description: 'Free morning for shopping before transfer to airport.'
    }
  ],
  includes: [
    '4 nights hotel accommodation',
    'Daily breakfast',
    'Desert safari with dinner',
    'Dubai city tour',
    'Abu Dhabi day trip',
    'Airport transfers',
    'Professional English-speaking guide'
  ],
  excludes: [
    'International flights',
    'Travel insurance',
    'Personal expenses',
    'Tips for guides and drivers',
    'Visa fees'
  ]
}

export default function TourDetailPage() {
  const params = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [tourDate, setTourDate] = useState(new Date())
  const [travellers, setTravellers] = useState(1)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</DynamicLink>
          <ChevronRight className="w-4 h-4" />
          <Link href="/tours" className="hover:text-blue-600">Tours</DynamicLink>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{tourData.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                <img 
                  src={tourData.images[selectedImage]} 
                  alt={tourData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {tourData.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-blue-600' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Tour Overview */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{tourData.name}</h1>
                  <p className="text-gray-600">{tourData.package}</p>
                </div>
                <div className="flex items-center bg-blue-50 px-3 py-2 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{tourData.rating}</span>
                  <span className="ml-1 text-sm text-gray-600">({tourData.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{tourData.location}</span>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{tourData.days} Days / {tourData.nights} Nights</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Group Size</p>
                  <p className="font-semibold">Max {tourData.maxPeople}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Min Age</p>
                  <p className="font-semibold">{tourData.minAge}+ years</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Sun className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Languages</p>
                  <p className="font-semibold">{tourData.languages.join(', ')}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="border-t border-gray-100 pt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Tour Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tourData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Itinerary</h2>
              <div className="space-y-4">
                {tourData.itinerary.map((item) => (
                  <div key={item.day} className="flex">
                    <div className="w-16 flex-shrink-0">
                      <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full text-sm">
                        Day {item.day}
                      </span>
                    </div>
                    <div className="flex-1 pl-4 border-l-2 border-blue-200">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Included</h3>
                  <ul className="space-y-2">
                    {tourData.includes.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Excluded</h3>
                  <ul className="space-y-2">
                    {tourData.excludes.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Book This Tour</h2>

              {/* Date Selection */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 block mb-1">Select Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={tourDate.toISOString().split('T')[0]}
                  onChange={(e) => setTourDate(new Date(e.target.value))}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Travellers */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 block mb-1">Number of Travellers</label>
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

              {/* Price Breakdown */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Price Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tour Price (x{travellers})</span>
                    <span className="font-medium">USD {tourData.price * travellers}.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Taxes & Fees</span>
                    <span className="font-medium">USD {45 * travellers}.00</span>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">
                    USD {(tourData.price + 45) * travellers}.00
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <Link
                href="/checkout"
                className="block w-full bg-blue-600 text-white text-center px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg mb-3"
              >
                Book Now
              </DynamicLink>
              <button className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Send Inquiry
              </button>

              {/* Trust Badges */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">Free cancellation • Best price guarantee</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Secure Payment</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Instant Confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Tours */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Amazing Tour Package</h3>
                  <p className="text-blue-600 font-bold">USD 499</p>
                  <DynamicLink href={`/tours/${i}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 block">
                    View Details →
                  </DynamicLink>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
