import Link from 'next/link'
import { ChevronRight, Shield, Lock, Eye, Mail, Cookie, UserCheck } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Privacy Policy</span>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">
              This Privacy Policy governs the manner in which Capital Trust Travel Agency collects, uses, maintains and discloses information collected from users (each, a "User") of the website ("Site"). This privacy policy applies to the Site and all products and services offered by Capital Trust Travel Agency.
            </p>

            <div className="space-y-8">
              {/* Personal identification information */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <UserCheck className="w-5 h-5 text-blue-600 mr-2" />
                  Personal identification information
                </h2>
                <p className="text-gray-700 mb-3">
                  We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, place an order, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information.
                </p>
                <p className="text-gray-700">
                  We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
                </p>
              </section>

              {/* Non-personal identification information */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-5 h-5 text-green-600 mr-2" />
                  Non-personal identification information
                </h2>
                <p className="text-gray-700">
                  We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
                </p>
              </section>

              {/* Web browser cookies */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Cookie className="w-5 h-5 text-yellow-600 mr-2" />
                  Web browser cookies
                </h2>
                <p className="text-gray-700">
                  Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
                </p>
              </section>

              {/* How we use collected information */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">How we use collected information</h2>
                <p className="text-gray-700 mb-3">Capital Trust Travel Agency may collect and use Users personal information for the following purposes:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><span className="font-semibold">To improve customer service</span> - Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                  <li><span className="font-semibold">To personalize user experience</span> - We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
                  <li><span className="font-semibold">To improve our Site</span> - We may use feedback you provide to improve our products and services.</li>
                  <li><span className="font-semibold">To process payments</span> - We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
                  <li><span className="font-semibold">To send periodic emails</span> - We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, they may do so by contacting us via our Site.</li>
                </ul>
              </section>

              {/* How we protect your information */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-5 h-5 text-purple-600 mr-2" />
                  How we protect your information
                </h2>
                <p className="text-gray-700 mb-3">
                  We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
                </p>
                <p className="text-gray-700">
                  Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.
                </p>
              </section>

              {/* Sharing your personal information */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Sharing your personal information</h2>
                <p className="text-gray-700">
                  We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
                </p>
              </section>

              {/* Changes to this privacy policy */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Changes to this privacy policy</h2>
                <p className="text-gray-700">
                  Capital Trust Travel Agency has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
                </p>
              </section>

              {/* Your acceptance of these terms */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Your acceptance of these terms</h2>
                <p className="text-gray-700">
                  By using this Site, you signify your acceptance of this policy and . If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
                </p>
              </section>

              {/* Contacting us */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-2" />
                  Contacting us
                </h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us.
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
              <p>Last updated: February 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
