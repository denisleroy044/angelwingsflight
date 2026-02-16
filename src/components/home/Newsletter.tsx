'use client'
import { useState } from 'react'
import { Send, Mail, User } from 'lucide-react'

export default function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', { name, email })
    // Add your newsletter signup logic here
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Never miss a deal</h2>
              <p className="text-lg text-gray-600 mb-6">
                Subscribe to our newsletter and get exclusive offers, travel tips, and inspiration delivered to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Signup Newsletter</span>
                </button>
              </form>
            </div>
            <div className="relative h-64 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-12 h-12 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">Join 50,000+</p>
                  <p className="text-gray-600">travelers who trust Angel Wings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
