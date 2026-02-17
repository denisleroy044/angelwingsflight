'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ChevronRight, Car, Users, Gauge, Fuel } from 'lucide-react'

const carData = {
  id: 1,
  name: 'BMW X5',
  provider: 'Sixt',
  price: 250,
  image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800',
  seats: 5,
  transmission: 'Automatic',
  fuel: 'Petrol',
  year: 2024,
}

export default function CarDetailPage() {
  const params = useParams()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/cars" className="hover:text-blue-600">Cars</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{carData.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img src={carData.image} alt={carData.name} className="w-full h-96 object-cover rounded-xl" />
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h1 className="text-2xl font-bold mb-2">{carData.name}</h1>
              <p className="text-gray-600 mb-4">{carData.provider}</p>
              <div className="space-y-2 mb-4">
                <p><Users className="inline w-4 h-4 mr-2" /> {carData.seats} seats</p>
                <p><Gauge className="inline w-4 h-4 mr-2" /> {carData.transmission}</p>
                <p><Fuel className="inline w-4 h-4 mr-2" /> {carData.fuel}</p>
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-4">${carData.price}/day</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
