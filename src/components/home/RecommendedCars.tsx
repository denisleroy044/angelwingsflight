import { Car, Star, Users, Gauge } from 'lucide-react'
import Link from 'next/link'

const cars = [
  {
    id: 1,
    name: 'Hyundai i10 or similar',
    provider: 'DKB',
    price: 150,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    seats: 4,
    transmission: 'Automatic',
    rating: 4.2
  },
  {
    id: 2,
    name: 'Nisan Micra 2021',
    provider: 'DKB',
    price: 250,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800',
    seats: 5,
    transmission: 'Automatic',
    rating: 4.5
  },
  {
    id: 3,
    name: 'Kia Picanto 2020',
    provider: 'DKB',
    price: 120,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800',
    seats: 4,
    transmission: 'Manual',
    rating: 4.1
  }
]

export default function RecommendedCars() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">Recommended Transfer Cars</h2>
            <p className="section-subtitle">Discover great cars for transfers</p>
          </div>
          <Link href="/cars" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
            View More
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{car.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{car.name}</h3>
                  <p className="text-sm text-gray-600">{car.provider}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span className="text-sm">{car.seats} seats</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Gauge className="w-4 h-4 mr-1" />
                  <span className="text-sm">{car.transmission}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-blue-600">USD {car.price}.00</span>
                </div>
                <Link 
                  href={`/cars/${car.id}`}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
                >
                  Book Now
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
