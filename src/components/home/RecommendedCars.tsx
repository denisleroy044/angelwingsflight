'use client'
import Link from 'next/link'
import { Car, Users, Gauge } from 'lucide-react'

const cars = [
  { id: 1, name: 'Hyundai i10', provider: 'DKB', price: 150, image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800', seats: 4, transmission: 'Automatic' },
  { id: 2, name: 'Nissan Micra', provider: 'DKB', price: 250, image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800', seats: 5, transmission: 'Automatic' },
  { id: 3, name: 'Kia Picanto', provider: 'DKB', price: 120, image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800', seats: 4, transmission: 'Manual' },
]

export default function RecommendedCars() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-8">Recommended Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{car.provider}</p>
                <div className="flex space-x-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{car.seats} seats</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Gauge className="w-4 h-4 mr-1" />
                    <span>{car.transmission}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-xl font-bold text-blue-600">${car.price}</span>
                  <Link href={`/cars/${car.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
