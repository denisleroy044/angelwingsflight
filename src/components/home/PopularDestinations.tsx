import Link from 'next/link'

const destinations = [
  { city: 'New York', country: 'USA', price: 499, image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9' },
  { city: 'Paris', country: 'France', price: 599, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' },
  { city: 'Tokyo', country: 'Japan', price: 799, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf' },
  { city: 'Dubai', country: 'UAE', price: 699, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c' },
  { city: 'London', country: 'UK', price: 549, image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad' },
  { city: 'Rome', country: 'Italy', price: 529, image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5' },
]

export default function PopularDestinations() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link 
              href={`/flights/results?destination=${dest.city}`} 
              key={dest.city}
              className="group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold">{dest.city}</h3>
              <p className="text-sm text-gray-600">{dest.country}</p>
              <p className="mt-2 font-semibold text-blue-600">From ${dest.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
