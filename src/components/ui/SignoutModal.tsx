'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { LogOut, X } from 'lucide-react'

interface SignoutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignoutModal({ isOpen, onClose }: SignoutModalProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
      await signOut({ 
        redirect: true,
        callbackUrl: '/' 
      })
      router.refresh()
    } catch (error) {
      console.error('Sign out error:', error)
      setIsLoading(false)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Sign Out</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="mb-6 text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogOut className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-lg font-medium text-gray-900 mb-2">Ready to leave?</p>
            <p className="text-gray-600">
              Are you sure you want to sign out? You can always sign back in to access your account.
            </p>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Stay Logged In
            </button>
            <button
              onClick={handleSignOut}
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing out...' : 'Sign Out'}
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            We hope to see you again soon! 👋
          </p>
        </div>
      </div>
    </div>
  )
}
