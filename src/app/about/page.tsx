import Link from 'next/link'
import { ChevronRight, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">About Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  <span className="font-semibold text-blue-600">Capital Trust Travel Agency</span> providing the best and user friendly application to our customers, with extensive tools specially for online travel business from hotels booking to flights reservation, we also provide custom web solutions and services. With over 4 years of experience Capital Trust Travel Agency have unquestionably won a reputation for being a trusted source, a reliable partner and an expert in the area of online travel business applications.
                </p>

                <p className="text-gray-700 mb-6">
                  The combination of our services, 24/5 nonstop support, our pricing, friendly way of conducting business, and our compassionate corporate philosophy is very unique in today's business world. We pride ourselves on exceptional customer service and strive to build lasting relationships with our customers by making it easy and profitable for them to do business with us.
                </p>

                <p className="text-gray-700 mb-6">
                  We value our clients and focus in customer satisfaction. That is why after-sale support is a key factor in our approach. With all this rich experience, now through Capital Trust Travel Agency we are bound to meet customer satisfaction and establish trust.
                </p>

                <p className="text-gray-700 mb-6">
                  If you are looking to enhance your online travel business, Capital Trust Travel Agency functions as the best one stop solution with user friendly interface and such a great features with prices that match your budget.
                </p>

                <p className="text-gray-700">
                  To get in touch with us you can use our support desk system, or feel free to follow us on {' '}
                  <a href="https://twitter.com/CapitalTravel" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Twitter
                  </a>{' '}
                  or{' '}
                  <a href="https://www.facebook.com/CapitalTravel" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Facebook
                  </a>. Please do not hesitate to contact us.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://twitter.com/CapitalTravel" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/CapitalTravel" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">123 Travel Street, Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">+971 4 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">info@angelwings.com</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/careers" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Careers And Jobs
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Terms Of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
