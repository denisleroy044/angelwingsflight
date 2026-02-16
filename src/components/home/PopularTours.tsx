import { Star, MapPin, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

const tours = [
  {
    id: 1,
    name: 'Dubai & the Desert',
    package: 'Dubai Combo Package',
    location: 'Dubai',
    rating: 4.5,
    price: 599,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    days: 5
  },
  {
    id: 2,
    name: 'Sydney and Bondi Beach Explorer',
    location: 'Sydney',
    rating: 4.4,
    price: 799,
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
    days: 4
  },
  {
    id: 3,
    name: '6 Days Around Thailand',
    location: 'Thailand',
    rating: 4.6,
    price: 649,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800',
    days: 6
  },
  {
    id: 4,
    name: 'Spectaculars Of The Nile',
    package: '3 Nights',
    location: 'Nile Egypt',
    rating: 4.7,
    price: 899,
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800',
    days: 4
  }
]

export default function PopularTours() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">Popular Tours</h2>
            <p className="section-subtitle">These alluring destinations are picked just for you.</p>
          </div>
          <Link href="/tours" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
            View More
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <div key={tour.id} className="card group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{tour.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{tour.location}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                  {tour.name}
                </h3>
                {tour.package && (
                  <p className="text-sm text-gray-600 mb-2">{tour.package}</p>
                )}
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">USD {tour.price}.00</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{tour.days} Days</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Limited Budget Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Limited budget?</h3>
              <p className="text-blue-100">Find price drops and travel as far as you can with our exclusive deals.</p>
            </div>
            <Link 
              href="/deals" 
              className="mt-4 md:mt-0 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Deals
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
