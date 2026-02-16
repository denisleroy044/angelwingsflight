import Link from 'next/link';

const destinations = [
  { city: 'New York', country: 'USA', price: 499 },
  { city: 'Paris', country: 'France', price: 599 },
  { city: 'Tokyo', country: 'Japan', price: 799 },
  { city: 'Dubai', country: 'UAE', price: 699 },
  { city: 'London', country: 'UK', price: 549 },
  { city: 'Rome', country: 'Italy', price: 529 },
];

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
  );
}
