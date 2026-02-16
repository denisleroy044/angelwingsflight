import Link from 'next/link'
import { CheckCircle, Mail } from 'lucide-react'

export default function SignupSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Your account has been created
            </h1>
            
            <p className="text-gray-600 mb-6">
              Please check your mailbox for activation link
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Next steps:</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Check your email inbox</li>
                <li>✓ Click the activation link</li>
                <li>✓ Login to your account</li>
              </ul>
            </div>

            <Link
              href="/login"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
