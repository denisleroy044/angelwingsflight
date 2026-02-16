'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  ChevronRight, 
  CreditCard, 
  Shield, 
  Lock,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle
} from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Fix: Move redirect to useEffect
  useEffect(() => {
    if (items.length === 0 && !isComplete) {
      router.push('/cart')
    }
  }, [items.length, isComplete, router])

  const subtotal = getTotal()
  const tax = subtotal * 0.1
  const total = subtotal + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
      clearCart()
      
      // Redirect to confirmation after 3 seconds
      setTimeout(() => {
        router.push('/booking/confirmation')
      }, 3000)
    }, 2000)
  }

  if (items.length === 0 && !isComplete) {
    return null // Don't render anything while redirecting
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-md p-12 text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">Your booking has been confirmed. Redirecting to confirmation page...</p>
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/cart" className="hover:text-blue-600">Cart</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Checkout</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

              {/* Progress Steps */}
              <div className="flex items-center mb-8">
                <div className={`flex-1 text-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    1
                  </div>
                  <span className="text-sm">Information</span>
                </div>
                <div className={`flex-1 text-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    2
                  </div>
                  <span className="text-sm">Payment</span>
                </div>
                <div className={`flex-1 text-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    3
                  </div>
                  <span className="text-sm">Confirm</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 mr-2" />
                        Contact Information
                      </h2>
                      <div className="space-y-4">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone number"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                        Billing Address
                      </h2>
                      <div className="space-y-4">
                        <input
                          type="text"
                          name="address"
                          placeholder="Street address"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="city"
                            placeholder="City"
                            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                          <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <input
                          type="text"
                          name="zipCode"
                          placeholder="ZIP / Postal code"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Continue to Payment
                    </button>
                  </div>
                )}

                {/* Step 2: Payment */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <CreditCard className="w-5 h-5 text-blue-600 mr-2" />
                      Payment Details
                    </h2>

                    <div className="space-y-4">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card number"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        type="text"
                        name="cardName"
                        placeholder="Name on card"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="expiryDate"
                          placeholder="MM/YY"
                          className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="text"
                          name="cvv"
                          placeholder="CVV"
                          className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg flex items-start space-x-3">
                      <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Secure Payment</p>
                        <p className="text-xs text-gray-600">Your payment information is encrypted and secure</p>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        Review Order
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Confirm */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Review Your Order</h2>

                    {/* Order Summary */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            {item.name} x{item.quantity}
                          </span>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Total */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span className="text-xl text-blue-600">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="terms" className="mt-1" required />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the{' '}
                        <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
                        {' '}and{' '}
                        <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                      </label>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold disabled:opacity-50"
                      >
                        {isProcessing ? 'Processing...' : 'Confirm & Pay'}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Order</h3>
              
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600 line-clamp-1">{item.name}</span>
                    <span className="font-medium">${item.price} x{item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Shield className="w-4 h-4 text-green-600 mr-2" />
                  <span>Secure checkout guaranteed</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Lock className="w-4 h-4 text-blue-600 mr-2" />
                  <span>256-bit SSL encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
