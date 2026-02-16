'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Car, Users, Gauge, Fuel, Calendar, Shield, Wifi, Coffee, MapPin, Star } from 'lucide-react'

// Mock data - in real app, fetch based on ID
const carData = {
  id: 1,
  name: 'Hyundai i10 or similar',
  provider: 'DKB Rent a Car',
  price: 150,
  image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
  images: [
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800',
    'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800'
  ],
  seats: 4,
  transmission: 'Automatic',
  fuel: 'Petrol',
  year: 2023,
  category: 'Economy',
  mileage: 'Unlimited',
  insurance: 'Full coverage included',
  features: ['Air Conditioning', 'Bluetooth', 'USB Charger', 'Navigation', 'Backup Camera'],
  rating: 4.5,
  reviews: 128,
  location: 'Dubai International Airport Terminal 1'
}

export default function CarDetailPage() {
  const params = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [pickupDate, setPickupDate] = useState(new Date())
  const [returnDate, setReturnDate] = useState(new Date(Date.now() + 86400000 * 3))

  // Calculate number of days
  const days = Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24))
  const totalPrice = carData.price * days

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/cars" className="hover:text-blue-600">Cars</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{carData.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                <img 
                  src={carData.images[selectedImage]} 
                  alt={carData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {carData.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-blue-600' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Car Details */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{carData.name}</h1>
                  <p className="text-gray-600">{carData.provider}</p>
                </div>
                <div className="flex items-center bg-blue-50 px-3 py-2 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{carData.rating}</span>
                  <span className="ml-1 text-sm text-gray-600">({carData.reviews} reviews)</span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Year</p>
                  <p className="font-semibold">{carData.year}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Seats</p>
                  <p className="font-semibold">{carData.seats}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Gauge className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Transmission</p>
                  <p className="font-semibold">{carData.transmission}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Fuel className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Fuel</p>
                  <p className="font-semibold">{carData.fuel}</p>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-gray-100 pt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {carData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pickup Location */}
              <div className="border-t border-gray-100 pt-6 mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Pickup Location</h2>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <p className="text-gray-700">{carData.location}</p>
                </div>
              </div>

              {/* Insurance */}
              <div className="border-t border-gray-100 pt-6 mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Insurance & Protection</h2>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                  <p className="text-gray-700">{carData.insurance}</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">• Collision Damage Waiver included</p>
                <p className="text-sm text-gray-600">• Theft Protection included</p>
                <p className="text-sm text-gray-600">• Third Party Liability included</p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Rental Summary</h2>

              {/* Date Selection */}
              <div className="mb-6">
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Pickup Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={pickupDate.toISOString().split('T')[0]}
                      onChange={(e) => setPickupDate(new Date(e.target.value))}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Return Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={returnDate.toISOString().split('T')[0]}
                      onChange={(e) => setReturnDate(new Date(e.target.value))}
                      min={pickupDate.toISOString().split('T')[0]}
                    />
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Price Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">${carData.price} x {days} days</span>
                    <span className="font-medium">USD {carData.price * days}.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Insurance Fee</span>
                    <span className="font-medium">USD 45.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="font-medium">USD 15.00</span>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">
                    USD {totalPrice + 60}.00
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
                Contact Provider
              </button>

              {/* Trust Badges */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">Free cancellation • No hidden fees</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Visa</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Mastercard</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Cars */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Economy Car</h3>
                  <p className="text-blue-600 font-bold">USD 120/day</p>
                  <Link href={`/cars/${i}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 block">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
