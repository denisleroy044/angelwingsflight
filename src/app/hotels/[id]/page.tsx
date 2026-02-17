import DynamicLink from '@/components/ui/DynamicLink'
'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { 
  ChevronRight, MapPin, Star, Wifi, Coffee, Users, 
  ParkingCircle, Dumbbell, Waves, Calendar, Home, 
  Check, X, Phone, Mail, Globe
} from 'lucide-react'

// Mock data - in real app, fetch based on ID
const hotelData = {
  id: 1,
  name: 'Movenpick Grand Al Bustan',
  location: 'Dubai United Arab Emirates',
  rating: 4.5,
  reviews: 342,
  price: 200,
  description: 'Luxury hotel with stunning views, multiple pools, and world-class dining options. Located in the heart of Dubai with easy access to major attractions.',
  images: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800'
  ],
  amenities: [
    { name: 'Outdoor Pool', icon: 'Waves', available: true },
    { name: 'Free WiFi', icon: 'Wifi', available: true },
    { name: 'Restaurant', icon: 'Coffee', available: true },
    { name: 'Bar/Lounge', icon: 'Coffee', available: true },
    { name: 'Fitness Center', icon: 'Dumbbell', available: true },
    { name: 'Free Parking', icon: 'ParkingCircle', available: true },
    { name: 'Spa', icon: 'Waves', available: true },
    { name: 'Room Service', icon: 'Coffee', available: true },
    { name: 'Airport Shuttle', icon: 'Users', available: false },
    { name: 'Beach Access', icon: 'Waves', available: false }
  ],
  rooms: [
    {
      type: 'Standard Room',
      size: '25 m²',
      beds: '1 King Bed',
      maxGuests: 2,
      price: 200,
      amenities: ['WiFi', 'TV', 'Air Conditioning', 'Mini Bar']
    },
    {
      type: 'Deluxe Room',
      size: '35 m²',
      beds: '1 King Bed or 2 Twin Beds',
      maxGuests: 3,
      price: 280,
      amenities: ['WiFi', 'TV', 'Air Conditioning', 'Mini Bar', 'Balcony', 'Coffee Machine']
    },
    {
      type: 'Executive Suite',
      size: '50 m²',
      beds: '1 King Bed',
      maxGuests: 4,
      price: 400,
      amenities: ['WiFi', 'TV', 'Air Conditioning', 'Mini Bar', 'Living Room', 'Jacuzzi', 'Butler Service']
    }
  ],
  address: 'Sheikh Zayed Road, Dubai, United Arab Emirates',
  phone: '+971 4 123 4567',
  email: 'reservations@movenpick.ae',
  website: 'www.movenpick.com',
  checkIn: '14:00',
  checkOut: '12:00'
}

export default function HotelDetailPage() {
  const params = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [checkIn, setCheckIn] = useState(new Date())
  const [checkOut, setCheckOut] = useState(new Date(Date.now() + 86400000))
  const [guests, setGuests] = useState(2)
  const [rooms, setRooms] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState(hotelData.rooms[0])

  // Calculate number of nights
  const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
  const totalPrice = selectedRoom.price * nights * rooms

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</DynamicLink>
          <ChevronRight className="w-4 h-4" />
          <Link href="/hotels" className="hover:text-blue-600">Hotels</DynamicLink>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium line-clamp-1">{hotelData.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                <img 
                  src={hotelData.images[selectedImage]} 
                  alt={hotelData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {hotelData.images.map((img, index) => (
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

            {/* Hotel Overview */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{hotelData.name}</h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{hotelData.location}</span>
                  </div>
                </div>
                <div className="flex items-center bg-blue-50 px-3 py-2 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{hotelData.rating}</span>
                  <span className="ml-1 text-sm text-gray-600">({hotelData.reviews} reviews)</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{hotelData.description}</p>

              {/* Amenities */}
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotelData.amenities.map((amenity, index) => {
                  const Icon = amenity.icon === 'Wifi' ? Wifi :
                              amenity.icon === 'Coffee' ? Coffee :
                              amenity.icon === 'Users' ? Users :
                              amenity.icon === 'ParkingCircle' ? ParkingCircle :
                              amenity.icon === 'Dumbbell' ? Dumbbell : Waves
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      {amenity.available ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                      <Icon className="w-4 h-4 text-gray-600" />
                      <span className={`text-sm ${amenity.available ? 'text-gray-700' : 'text-gray-400'}`}>
                        {amenity.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Rooms */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Rooms</h2>
              <div className="space-y-4">
                {hotelData.rooms.map((room) => (
                  <div 
                    key={room.type}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedRoom.type === room.type 
                        ? 'border-blue-600 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedRoom(room)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{room.type}</h3>
                      <p className="text-lg font-bold text-blue-600">USD {room.price}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-2">
                      <span>{room.size}</span>
                      <span>{room.beds}</span>
                      <span>Max {room.maxGuests} guests</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
              <p className="text-gray-600 mb-2">{hotelData.address}</p>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map will be displayed here</p>
              </div>
            </div>

            {/* Hotel Policies */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Hotel Policies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Check-in</p>
                  <p className="font-semibold">From {hotelData.checkIn}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Check-out</p>
                  <p className="font-semibold">Until {hotelData.checkOut}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Cancellation</p>
                  <p className="font-semibold">Free cancellation up to 24 hours before check-in</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Payment</p>
                  <p className="font-semibold">Credit card required for guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Book Your Stay</h2>

              {/* Selected Room */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Selected Room</p>
                <p className="font-semibold text-gray-900">{selectedRoom.type}</p>
                <p className="text-xs text-gray-600 mt-1">Max {selectedRoom.maxGuests} guests</p>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Check-in Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={checkIn.toISOString().split('T')[0]}
                      onChange={(e) => setCheckIn(new Date(e.target.value))}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Check-out Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={checkOut.toISOString().split('T')[0]}
                      onChange={(e) => setCheckOut(new Date(e.target.value))}
                      min={checkIn.toISOString().split('T')[0]}
                    />
                  </div>
                </div>
              </div>

              {/* Guests & Rooms */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Guests</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Rooms</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                    value={rooms}
                    onChange={(e) => setRooms(Number(e.target.value))}
                  >
                    {[1,2,3,4].map(num => (
                      <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Price Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">${selectedRoom.price} x {nights} nights x {rooms} room(s)</span>
                    <span className="font-medium">USD {selectedRoom.price * nights * rooms}.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Taxes & Fees</span>
                    <span className="font-medium">USD {Math.round(selectedRoom.price * nights * rooms * 0.15)}.00</span>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">
                    USD {selectedRoom.price * nights * rooms + Math.round(selectedRoom.price * nights * rooms * 0.15)}.00
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
                Contact Hotel
              </button>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Hotel Contact</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <span>{hotelData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <span>{hotelData.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-gray-600" />
                    <span>{hotelData.website}</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">Free cancellation • No hidden fees</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Secure Payment</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Instant Confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Hotels */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Hotels You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Luxury Hotel {i}</h3>
                  <p className="text-sm text-gray-600 mb-2">Dubai, UAE</p>
                  <p className="text-blue-600 font-bold">USD 299/night</p>
                  <DynamicLink href={`/hotels/${i}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 block">
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
