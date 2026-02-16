export default function PromoCards() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Save up to 30%</h3>
            <p className="mb-4">On flight bookings to Asia</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Hotel Deals</h3>
            <p className="mb-4">Free breakfast & late checkout</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Car Rental</h3>
            <p className="mb-4">10% off for members</p>
          </div>
        </div>
      </div>
    </section>
  );
}
