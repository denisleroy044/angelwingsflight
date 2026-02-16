'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  ChevronRight, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight,
  Tag,
  Shield,
  Truck,
  CreditCard,
  AlertCircle
} from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { toast } from 'react-hot-toast'

export default function CartPage() {
  const router = useRouter()
  const { items, removeItem, updateQuantity, getTotal, getItemCount, clearCart } = useCartStore()
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const subtotal = getTotal()
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + tax

  const handleCheckout = async () => {
    if (items.length === 0) {
      toast.error('Your cart is empty')
      return
    }

    setIsCheckingOut(true)
    
    // Simulate checkout process
    setTimeout(() => {
      router.push('/checkout')
    }, 500)
  }

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'wings10') {
      setPromoApplied(true)
      toast.success('Promo code applied! 10% discount')
    } else {
      toast.error('Invalid promo code')
    }
  }

  const getItemIcon = (type: string) => {
    switch(type) {
      case 'flight': return '✈️'
      case 'hotel': return '🏨'
      case 'car': return '🚗'
      case 'tour': return '🏝️'
      default: return '📦'
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-md p-12">
              <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
              <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Link
                href="/"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Start Shopping
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
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
          <span className="text-gray-900 font-medium">Shopping Cart</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Shopping Cart ({getItemCount()} items)</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Item Image */}
                  <div className="w-full md:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                        <span className="text-4xl">{getItemIcon(item.type)}</span>
                      </div>
                    )}
                  </div>

                  {/* Item Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-2">
                          {item.type.toUpperCase()}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                        {item.description && (
                          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                        )}
                        {item.date && (
                          <p className="text-sm text-gray-600 mt-1">Date: {item.date}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Additional Details */}
                    {item.details && (
                      <div className="mt-2 text-sm text-gray-600">
                        {item.type === 'flight' && item.details.airline && (
                          <p>Airline: {item.details.airline} • Flight: {item.details.flightNumber}</p>
                        )}
                        {item.type === 'hotel' && item.details.location && (
                          <p>Location: {item.details.location} • {item.details.nights || 1} nights</p>
                        )}
                        {item.type === 'car' && item.details.provider && (
                          <p>Provider: {item.details.provider} • {item.details.duration || '1 day'}</p>
                        )}
                      </div>
                    )}

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Unit Price</p>
                        <p className="text-xl font-bold text-blue-600">${item.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium flex items-center space-x-1"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear Cart</span>
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 block mb-2">Promo Code</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-green-600 text-sm mt-2 flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    10% discount applied!
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount (WINGS10)</span>
                    <span>-${(subtotal * 0.1).toFixed(2)}</span>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${promoApplied ? (total * 0.9).toFixed(2) : total.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
              </button>

              {/* Trust Badges */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600 mr-2" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="w-4 h-4 text-blue-600 mr-2" />
                  <span>Free cancellation on most bookings</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CreditCard className="w-4 h-4 text-purple-600 mr-2" />
                  <span>Multiple payment methods</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center mb-2">We accept:</p>
                <div className="flex justify-center space-x-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Visa</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Mastercard</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Amex</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
