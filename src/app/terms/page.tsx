import Link from 'next/link'
import { ChevronRight, FileText, AlertCircle, Shield, Ban, Scale } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Terms of Service</span>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600 mb-8">
              This Website is provided solely to assist customers in gathering travel information, determining the availability of travel-related goods and services, making legitimate reservations or otherwise transacting business with travel suppliers, and for no other purposes. the customer visiting the Website and/or booking a reservation through us on this Website, or through our customer service agents.
            </p>

            <div className="space-y-8">
              {/* Acceptance of Terms */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 text-blue-600 mr-2" />
                  Acceptance of Terms
                </h2>
                <p className="text-gray-700 mb-3">
                  This Website is offered to you conditioned upon your acceptance without modification of all the terms, conditions, and notices set forth below (collectively, the 'Terms of Use' or 'Agreement'). Please read the terms of Use carefully. By accessing or using this Website, booking any travel products or services on this Website, or contacting our call center agents, you agree that the Terms of Use then in force shall apply.
                </p>
                <p className="text-gray-700">
                  If you do not agree to the Terms of Use, please do not use or make bookings through this Website or our call center agents. at any time change these Terms of Use and your continued use of this Website is conditioned upon acceptance of the updated Terms of Use.
                </p>
              </section>

              {/* Use of the Website */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  USE OF THE WEBSITE
                </h2>
                <p className="text-gray-700 mb-3">As a condition of your use of this Website, you warrant that:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>(i) you are at least 18 years of age and are of sound mind</li>
                  <li>(ii) you possess the legal authority to create a binding legal obligation</li>
                  <li>(iii) you will use this Website in accordance with the Terms of Use</li>
                  <li>(iv) you will only use this Website to make legitimate reservations for you or for another person for whom you are legally authorized to act</li>
                  <li>(v) you will inform such other persons about the Terms of Use that apply to the reservations you have made on their behalf, including all rules and restrictions</li>
                  <li>(vi) all information supplied by you on this Website is true, accurate, current and complete</li>
                  <li>(vii) if you have an online account with this Website, you will safeguard your account information and will supervise and be completely responsible for any use of your account by you and anyone other than you</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  We retain the right at our sole discretion to deny access to anyone to this Website and the services we offer, at any time without notice and for any reason, including, but not limited to, for violation of these Terms of Use.
                </p>
              </section>

              {/* Prohibited Activities */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Ban className="w-5 h-5 text-red-600 mr-2" />
                  PROHIBITED ACTIVITIES
                </h2>
                <p className="text-gray-700 mb-3">The content and information on this Website (including, but not limited to, price and availability of travel services), as well as the infrastructure used to provide such content and information, is proprietary to us or our suppliers and providers. While you may make limited copies of your travel itinerary (and related documents) for travel or services booked through this Website, you agree not to otherwise modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell or re-sell any information, software, products, or services obtained from or through this Website. Additionally, you agree not to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>use this Website or its contents for any commercial purpose</li>
                  <li>make any speculative, false, or fraudulent reservation or any reservation in anticipation of demand</li>
                  <li>access, monitor or copy any content or information of this Website using any robot, spider, scraper or other automated means or any manual process for any purpose without our express written permission</li>
                  <li>violate the restrictions in any robot exclusion headers on this Website or bypass or circumvent other measures employed to prevent or limit access to this Website</li>
                  <li>take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure</li>
                  <li>deep-link to any portion of this Website (including, without limitation, the purchase path for any travel services) for any purpose without our express written permission</li>
                  <li>'frame', 'mirror' or otherwise incorporate any part of this Website into any other website without our prior written authorization</li>
                </ul>
              </section>

              {/* Fraud Prevention */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                  Fraud Prevention
                </h2>
                <p className="text-gray-700">
                  If your booking or account shows signs of fraud, abuse, or suspicious activity, we may cancel any bookings associated with your name, email address, or account, and close any associated accounts. If you have conducted any fraudulent activity, we reserves the right to take any necessary legal action and you may be liable for monetary losses to, including litigation costs and damages. To contest the cancellation of a booking or freezing or closure of an account, please contact us Customer Service.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
