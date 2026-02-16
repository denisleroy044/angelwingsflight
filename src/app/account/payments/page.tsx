'use client'
import { useState } from 'react'
import Link from 'next/link'
import { CreditCard, Plus, Trash2, CheckCircle, AlertCircle, Calendar, Lock } from 'lucide-react'

interface PaymentMethod {
  id: number
  type: 'visa' | 'mastercard' | 'amex' | 'paypal'
  last4: string
  expiry: string
  holderName: string
  isDefault: boolean
}

export default function PaymentMethodsPage() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: 1,
      type: 'visa',
      last4: '4242',
      expiry: '12/25',
      holderName: 'John Doe',
      isDefault: true
    },
    {
      id: 2,
      type: 'mastercard',
      last4: '8888',
      expiry: '06/26',
      holderName: 'John Doe',
      isDefault: false
    },
    {
      id: 3,
      type: 'paypal',
      last4: 'john@example.com',
      expiry: 'N/A',
      holderName: 'John Doe',
      isDefault: false
    }
  ])

  const [newCard, setNewCard] = useState({
    cardNumber: '',
    holderName: '',
    expiry: '',
    cvv: ''
  })

  const getCardIcon = (type: string) => {
    switch(type) {
      case 'visa':
        return <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">VISA</div>
      case 'mastercard':
        return <div className="w-12 h-8 bg-yellow-600 rounded flex items-center justify-center text-white font-bold text-sm">MC</div>
      case 'amex':
        return <div className="w-12 h-8 bg-blue-400 rounded flex items-center justify-center text-white font-bold text-sm">AMEX</div>
      default:
        return <CreditCard className="w-8 h-8 text-gray-400" />
    }
  }

  const setDefaultMethod = (id: number) => {
    setPaymentMethods(methods =>
      methods.map(method => ({
        ...method,
        isDefault: method.id === id
      }))
    )
  }

  const removeMethod = (id: number) => {
    setPaymentMethods(methods => methods.filter(method => method.id !== id))
  }

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, send to payment processor
    const newMethod: PaymentMethod = {
      id: paymentMethods.length + 1,
      type: 'visa',
      last4: newCard.cardNumber.slice(-4),
      expiry: newCard.expiry,
      holderName: newCard.holderName,
      isDefault: false
    }
    setPaymentMethods([...paymentMethods, newMethod])
    setShowAddForm(false)
    setNewCard({ cardNumber: '', holderName: '', expiry: '', cvv: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Methods</h1>
            <p className="text-gray-600">Manage your payment methods securely</p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Payment Method</span>
          </button>
        </div>

        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex items-start space-x-3">
          <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-blue-900">Secure Payment Methods</p>
            <p className="text-sm text-blue-700">Your payment information is encrypted and stored securely. We never store your full card details.</p>
          </div>
        </div>

        {/* Payment Methods List */}
        <div className="space-y-4 mb-8">
          {paymentMethods.map((method) => (
            <div key={method.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  {getCardIcon(method.type)}
                  <div>
                    <p className="font-semibold text-gray-900">
                      {method.type === 'paypal' ? 'PayPal' : `${method.type.charAt(0).toUpperCase() + method.type.slice(1)} ending in ${method.last4}`}
                    </p>
                    <p className="text-sm text-gray-600">
                      {method.holderName} • Expires {method.expiry}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {method.isDefault ? (
                    <span className="flex items-center space-x-1 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Default</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => setDefaultMethod(method.id)}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Set as Default
                    </button>
                  )}
                  <button
                    onClick={() => removeMethod(method.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Payment Method Form */}
        {showAddForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Add Payment Method</h3>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleAddCard} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={newCard.cardNumber}
                      onChange={(e) => setNewCard({...newCard, cardNumber: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={newCard.holderName}
                      onChange={(e) => setNewCard({...newCard, holderName: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={newCard.expiry}
                        onChange={(e) => setNewCard({...newCard, expiry: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={newCard.cvv}
                        onChange={(e) => setNewCard({...newCard, cvv: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg">
                    <Lock className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-600">
                      Your card details are encrypted and secure
                    </span>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Add Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Billing History */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Booking #{i}234</p>
                    <p className="text-sm text-gray-600">Feb {i}, 2026</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-900">${i}99.00</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
