'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Mail, ArrowLeft, RefreshCw, CheckCircle } from 'lucide-react'

export default function VerifyOTPPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || 'your email'
  
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [timer, setTimer] = useState(60)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setCanResend(true)
    }
  }, [timer])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const otpCode = otp.join('')
    if (otpCode.length !== 6) {
      setError('Please enter complete 6-digit code')
      setLoading(false)
      return
    }

    // For demo, accept any 6-digit code
    if (otpCode.length === 6) {
      setSuccess(true)
      setTimeout(() => {
        router.push('/signup/success')
      }, 2000)
    } else {
      setError('Invalid code')
      setLoading(false)
    }
  }

  const handleResendOTP = () => {
    setCanResend(false)
    setTimer(60)
    setOtp(['', '', '', '', '', ''])
    // Show toast or message
    alert(`Demo OTP sent to ${email} (use any 6 digits)`)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verified!</h2>
          <p className="text-gray-600 mb-4">Redirecting to success page...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <Link href="/signup" className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Signup
            </Link>

            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-10 h-10 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h1>
              <p className="text-gray-600">
                We've sent a 6-digit code to<br />
                <span className="font-semibold text-gray-900">{email}</span>
              </p>
              <p className="text-sm text-blue-600 mt-2">
                Demo: Use any 6 digits (e.g., 123456)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                  Enter verification code
                </label>
                <div className="flex justify-center space-x-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 text-center text-xl font-semibold border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      autoFocus={index === 0}
                    />
                  ))}
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
              >
                {loading ? 'Verifying...' : 'Verify Email'}
              </button>

              <div className="text-center">
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Resend Code
                  </button>
                ) : (
                  <p className="text-sm text-gray-600">
                    Resend code in {timer} seconds
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
