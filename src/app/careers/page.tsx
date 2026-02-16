import Link from 'next/link'
import { ChevronRight, Mail, Target, Users, Globe, Award } from 'lucide-react'

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Careers and Jobs</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Careers and Jobs</h1>
              
              {/* Mission Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">OUR MISSION</h2>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="text-xl text-blue-900 font-semibold italic">
                    "Create a world where anyone can belong anywhere"
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  It's an audacious, incredibly rewarding mission that our increasingly diverse team is dedicated to achieving.
                </p>
                <p className="text-gray-700 mb-4">
                  The main drive behind establishing was our wish to develop the concept of traveling easily, comfortably and elegantly. This is why we have always strived to provide innovative online traveling solutions to travelers around the world, and Middle Eastern travelers especially. We pride ourselves on being the first Saudi website that provides comprehensive and high-quality services in the travel and tourism sector.
                </p>
                <p className="text-gray-700 mb-4">
                  Exciting challenges lie ahead—new regions, technologies, and businesses. Guided by our four core values, we'll meet these challenges creatively and with the support of our global community. Join us!
                </p>
              </div>

              {/* Core Values */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Target className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Innovation</h3>
                      <p className="text-sm text-gray-600">Constantly pushing boundaries in travel technology</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Community</h3>
                      <p className="text-sm text-gray-600">Building connections that last a lifetime</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Globe className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Global Mindset</h3>
                      <p className="text-sm text-gray-600">Thinking beyond borders and cultures</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Excellence</h3>
                      <p className="text-sm text-gray-600">Delivering the best in everything we do</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Join Us Section */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
                <p className="text-blue-100 mb-6">
                  To join us please find our email on contact page and send your portfolio cv or further details we are open to hire collaborate and join hands with people like you.
                </p>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-300" />
                  <div>
                    <p className="text-sm text-blue-200">Send your application to:</p>
                    <a href="mailto:careers@angelwings.com" className="text-xl font-semibold hover:underline">
                      careers@angelwings.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600">Thanks</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Join Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                  <span className="text-sm text-gray-700">Competitive salary and benefits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                  <span className="text-sm text-gray-700">Remote-friendly work environment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                  <span className="text-sm text-gray-700">Professional development opportunities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                  <span className="text-sm text-gray-700">Travel perks and discounts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                  <span className="text-sm text-gray-700">International team culture</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Openings</h3>
                <p className="text-sm text-gray-600 mb-4">We're always looking for talented individuals. Send us your CV!</p>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
