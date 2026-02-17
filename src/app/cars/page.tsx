import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import CarSearchForm from '@/components/cars/CarSearchForm'
import CarCard from '@/components/cars/CarCard'

// Mock data - in real app, this would come from an API
const recommendedCars = [
  {
    id: 1,
    name: 'Hyundai i10 or similar',
    provider: 'DKB Rent a Car',
    price: 150,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Petrol',
    year: 2023,
    category: 'Economy'
  },
  {
    id: 2,
    name: 'Nissan Micra 2021',
    provider: 'DKB Rent a Car',
    price: 250,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    year: 2021,
    category: 'Compact'
  },
  {
    id: 3,
    name: 'Kia Picanto 2020',
    provider: 'DKB Rent a Car',
    price: 120,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800',
    seats: 4,
    transmission: 'Manual',
    fuel: 'Petrol',
    year: 2020,
    category: 'Economy'
  },
  {
    id: 4,
    name: 'Honda Civic 130 e-similar',
    provider: 'Elite Rentals',
    price: 280,
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    year: 2024,
    category: 'Midsize'
  },
  {
    id: 5,
    name: 'Nissan Micra 2003',
    provider: 'Budget Cars',
    price: 90,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
    seats: 4,
    transmission: 'Manual',
    fuel: 'Petrol',
    year: 2003,
    category: 'Economy'
  },
  {
    id: 6,
    name: 'Volvo XC90 T8',
    provider: 'Premium Rentals',
    price: 450,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    year: 2024,
    category: 'SUV'
  }
]

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Car Rental</span>
        </div>

        {/* Search Form */}
        <div className="mb-12">
          <CarSearchForm />
        </div>

        {/* Recommended Cars Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Recommended Transfer Cars</h2>
              <p className="text-gray-600">Discover great cars for transfers</p>
            </div>
            <Link 
              href="/cars/results" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              View More
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCars.slice(0, 3).map((car) => (
              <CarCard key={car.id} car={car}  />
            ))}
          </div>
        </section>

        {/* More Cars Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCars.slice(3).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>

        {/* Car Rental Benefits */}
        <section className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Cancellation</h3>
              <p className="text-blue-100 text-sm">Cancel up to 24 hours before pickup</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-100 text-sm">Round-the-clock customer service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Price Guarantee</h3>
              <p className="text-blue-100 text-sm">Find a better price? We'll match it</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
