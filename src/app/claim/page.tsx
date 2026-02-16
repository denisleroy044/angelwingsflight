import Link from 'next/link'
import { ChevronRight, FileText, AlertCircle, Shield, Clock, Phone, Mail } from 'lucide-react'

export default function ClaimPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">File a Claim</span>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">File a Claim</h1>
            
            <div className="space-y-8">
              {/* How to file a claim */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 text-blue-600 mr-2" />
                  How to File a Claim
                </h2>
                <p className="text-gray-700 mb-4">
                  Dear customers, we understand your worries and highly appreciate your contact with our team to file a claim in case you have one. Therefore, to file a claim you need to email us with the below information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                  <li>Your name and transaction reference along with a description of your disputes.</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  You may also call us to file or check the status of an existing dispute.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Note:</span> Claim resolutions can take from 24 to 48 hours to be handled and resolved.
                    </p>
                  </div>
                </div>
              </div>

              {/* Avoiding Disputes */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 text-green-600 mr-2" />
                  Avoiding Disputes
                </h2>
                <p className="text-gray-700">
                  We take all measures required to ensure that any inconveniences are resolved within a timely manner. In case a claim has been filed by a customer we would ensure that it is resolved within 48 hours.
                </p>
              </div>

              {/* Detecting Fraud */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-purple-600 mr-2" />
                  Detecting Fraud and preventing fraudulent transactions
                </h2>
                <p className="text-gray-700 mb-4">
                  We have implemented extreme measures to detect and prevent fraud. Our built in risk analysis brings suspicious orders to our attentions for further investigation. Below we share some steps we take into preventing and detecting fraud.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Verifying IP address</li>
                  <li>Calling the phone number on the order</li>
                  <li>Verify billing and shipping address for the payment method used</li>
                  <li>Investigate on AVS (Address verification) or CVV verification failures</li>
                  <li>Special attention to high value orders</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us to File a Claim</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href="mailto:claims@angelwings.com" className="font-semibold text-gray-900 hover:text-blue-600">
                        claims@angelwings.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-semibold text-gray-900">+1 (415) 555-0123</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
