import DynamicLink from '@/components/ui/DynamicLink'
import Link from 'next/link'
import { ChevronRight, Star } from 'lucide-react'
import TourSearchForm from '@/components/tours/TourSearchForm'
import TourCard from '@/components/tours/TourCard'

// Mock data - in real app, this would come from an API
const popularTours = [
  {
    id: 1,
    name: 'Dubai & the Desert',
    package: 'Dubai Combo Package',
    location: 'Dubai',
    rating: 4.5,
    price: 599,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    days: 5,
    reviews: 234,
    description: 'Experience the magic of Dubai with desert safari, city tours, and luxury shopping.'
  },
  {
    id: 2,
    name: 'Stunning Dubai',
    location: 'Dubai',
    rating: 4.7,
    price: 699,
    image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800',
    days: 4,
    reviews: 189,
    description: 'Discover the stunning skyline, beaches, and cultural heritage of Dubai.'
  },
  {
    id: 3,
    name: 'Sydney and Bondi Beach Explorer',
    location: 'Sydney',
    rating: 4.6,
    price: 799,
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
    days: 6,
    reviews: 156,
    description: 'Explore Sydney Opera House, Bondi Beach, and Blue Mountains.'
  },
  {
    id: 4,
    name: 'Nile Egypt',
    location: 'Egypt',
    rating: 4.8,
    price: 899,
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800',
    days: 7,
    reviews: 312,
    description: 'Cruise the Nile, visit pyramids, and explore ancient temples.'
  },
  {
    id: 5,
    name: 'Spectaculars Of The Nile',
    package: '3 Nights',
    location: 'Nile Egypt',
    rating: 4.7,
    price: 649,
    image: 'https://images.unsplash.com/photo-1568322445389-f64ac251502f?w=800',
    days: 4,
    reviews: 178,
    description: 'Luxury Nile cruise with guided tours of ancient wonders.'
  },
  {
    id: 6,
    name: '6 Days Around Thailand',
    location: 'Thailand',
    rating: 4.5,
    price: 549,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800',
    days: 6,
    reviews: 267,
    description: 'Visit Bangkok, Phuket, and Chiang Mai with island hopping.'
  }
]

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</DynamicLink>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Tours</span>
        </div>

        {/* Search Form */}
        <div className="mb-12">
          <TourSearchForm />
        </div>

        {/* Popular Tours Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Tours</h2>
              <p className="text-gray-600">These alluring destinations are picked just for you.</p>
            </div>
            <Link 
              href="/tours/results" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              View More
              <ChevronRight className="w-5 h-5 ml-1" />
            </DynamicLink>
          </div>

          {/* Featured Tour - Large */}
          <div className="mb-8">
            <TourCard tour={popularTours[0]} featured={true} />
          </div>

          {/* Tour Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTours.slice(1, 4).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>

        {/* All Tours Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTours.slice(4).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>

        {/* Limited Budget Banner */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Limited budget?</h3>
              <p className="text-blue-100">Find price drops and travel as far as you can with our exclusive deals.</p>
            </div>
            <Link
              href="/tours/deals"
              className="mt-4 md:mt-0 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Deals
            </DynamicLink>
          </div>
        </section>

        {/* Destination Strip */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-6">Popular Tour Destinations</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Dubai', 'Sydney', 'Thailand', 'Egypt', 'Paris', 'Tokyo', 'Rome', 'Bali'].map((dest) => (
              <Link
                key={dest}
                href={`/tours/results?city=${dest}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-gray-700">{dest}</span>
              </DynamicLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
