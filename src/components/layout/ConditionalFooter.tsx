'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Check if current path is in admin or account dashboard
  const isDashboard = pathname?.startsWith('/admin') || pathname?.startsWith('/account')
  
  // Don't render footer on dashboard pages
  if (isDashboard) {
    return null
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AW</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Angel Wings</h3>
                <p className="text-xs text-gray-400">Flight Company</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              CAPITAL TRUST TRAVEL AGENCY
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm">123 Travel Street, Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm">+971 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm">info@angelwings.com</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* About Us Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">About Us</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-white transition-colors">Careers And Jobs</Link></li>
              <li><Link href="/cookies-policy" className="text-sm hover:text-white transition-colors">Cookies Policy</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/booking-tips" className="text-sm hover:text-white transition-colors">Booking Tips</Link></li>
              <li><Link href="/how-to-book" className="text-sm hover:text-white transition-colors">How To Book</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms Of Service</Link></li>
              <li><Link href="/supplier" className="text-sm hover:text-white transition-colors">Become A Supplier</Link></li>
              <li><Link href="/claim" className="text-sm hover:text-white transition-colors">File A Claim</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              All Rights Reserved by Angel Wings Flight Company
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Powered by</span>
              <span className="text-white font-semibold">Angel Wings</span>
              <span className="text-xs text-gray-500">v1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
