import Link from 'next/link'
import { ChevronRight, Globe, Users, DollarSign, Languages, HeadphonesIcon, CheckCircle } from 'lucide-react'

export default function SupplierPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Become a Supplier</span>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Become a Supplier</h1>
            
            <div className="space-y-8">
              {/* A large, global audience */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">A large, global audience</h2>
                  <p className="text-gray-700">
                    We work directly with more properties than anyone else. From family-owned B&Bs to resorts, 
                    we show your property to a large audience of travellers worldwide.
                  </p>
                </div>
              </div>

              {/* No registration fees */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">No registration fees, subscriptions or fixed costs</h2>
                  <p className="text-gray-700">
                    Registration with us is completely free. There are no sign-up or subscription costs.
                  </p>
                </div>
              </div>

              {/* Commission-based model */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Commission-based model</h2>
                  <p className="text-gray-700">
                    This means your property pays a percentage of each confirmed stay to us. This gets you access 
                    to our extensive advertising on search engines like Google, Bing and Yahoo, plus our more than 
                    5,000 affiliate partner websites.
                  </p>
                </div>
              </div>

              {/* 41 languages */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Languages className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Your property details available in 41 languages</h2>
                  <p className="text-gray-700">
                    We are the top choice amongst travellers worldwide because we work with great properties and 
                    present them in a way that is locally relevant.
                  </p>
                </div>
              </div>

              {/* 24/7 assistance */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HeadphonesIcon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Multilingual, 24/7 assistance for our property owners and guests</h2>
                  <p className="text-gray-700">
                    Easily manage your listing and bookings with our simple online tools. Our dedicated support 
                    team is here round-the-clock to help – just in case.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply today for supplier registration</h3>
                  <p className="text-gray-700 mb-4">Join our network of trusted suppliers and reach millions of travellers worldwide.</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
