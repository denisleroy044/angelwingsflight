import Link from 'next/link'
import { ChevronRight, Clock, Tag, Award, TrendingUp, Mail } from 'lucide-react'

export default function BookingTipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Booking Tips</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Booking Tips</h1>
              
              <div className="space-y-8">
                {/* Tip 1 */}
                <div className="border-l-4 border-blue-600 pl-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    1. Time your booking
                  </h2>
                  <p className="text-gray-700 mb-3">
                    On any given day, prices can fluctuate based on whether the hotel thinks it will be able to fill its rooms for the night. Your best time to book is usually within 24 hours of the stay, when hotels slash prices to avoid vacant rooms, but that creates a lot of uncertainty and isn't ideal when you're traveling in an unfamiliar place.
                  </p>
                  <p className="text-gray-700">
                    Thankfully, websites like TheSuitest.com can help you time your bookings so you get the best price without running the risk of not getting a room at all. The site allows you to and predicts both room availability and price fluctuations.
                  </p>
                </div>

                {/* Tip 2 */}
                <div className="border-l-4 border-green-600 pl-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Tag className="w-5 h-5 text-green-600 mr-2" />
                    2. Check for affiliation and other discounts
                  </h2>
                  <p className="text-gray-700 mb-3">
                    You may qualify for additional discounts simply by belonging to an association or organization. AARP and AAA are prototypical examples, but groups as diverse as the American Bar Association, the United States Billiard Association and even the Professional Disc Golf Association offer discounts on various hotel chains.
                  </p>
                  <p className="text-gray-700">
                    Check with your professional organization, university or any other group you might belong to. Your credit card might also offer discounts – Visa Signature, for example, offers discounts and perks on a rotating cast of hotels.
                  </p>
                </div>

                {/* Tip 3 */}
                <div className="border-l-4 border-purple-600 pl-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Award className="w-5 h-5 text-purple-600 mr-2" />
                    3. Use rewards malls
                  </h2>
                  <p className="text-gray-700 mb-3">
                    When it comes time to finally book, utilize to earn bonus rewards. For instance, ShopDiscover offers 5 percent cash back on Expedia, and topcashback.com gives 14 percent back on HotelClub. Keep in mind that while anyone can use cash back websites, you might need a credit card to access card issuers' online malls.
                  </p>
                </div>

                {/* Tip 4 */}
                <div className="border-l-4 border-yellow-600 pl-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 text-yellow-600 mr-2" />
                    4. Negotiate, not pay, for upgrades
                  </h2>
                  <p className="text-gray-700 mb-3">
                    Instead of booking the fanciest room in the place, reserve a lower-rate room and then ask for an upgrade. If you're traveling at an off-peak time, you have a higher chance of moving up to a vacant, better room at check-in.
                  </p>
                  <p className="text-gray-700 mb-2">You can also try a number of such as:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Calling a manager to see what room is available (it usually helps to mention if it's a special occasion)</li>
                    <li>Showing up exactly at check-in time in hopes that your room won't be ready, and they'll have to upgrade you to a better, prepped room</li>
                    <li>Tipping in advance and asking nicely for an upgrade</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Here, too, your credit card can come in handy. The American Express Fine Hotels and Resorts booking tool gives room upgrades, resort credits and breakfast. Visa Signature and World MasterCard cardholders can also get special deals.
                  </p>
                </div>

                {/* Tip 5 */}
                <div className="border-l-4 border-red-600 pl-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 text-red-600 mr-2" />
                    5. Keep an eye out for price drops
                  </h2>
                  <p className="text-gray-700 mb-3">
                    Savings don't stop when you book your hotel. As mentioned before, a room's price can fluctuate significantly, but not many people have the time or inclination to sit around hitting "refresh" to see if the nightly rate has dropped. Services like Yapta track the price of your room and let you know when it drops. Tingo goes a step further and actually rebooks the room for you, crediting the difference back to your account. It also keeps an eye on other rooms in the same hotel: If a better room's price drops below yours, the service will upgrade you even if your room's price didn't change.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">Subscribe to get the best travel tips and deals</p>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Signup Newsletter
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  All Rights Reserved by Capital Trust Travel Agency
                </p>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Powered by v9.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
