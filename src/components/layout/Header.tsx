'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { 
  ChevronDown, 
  User, 
  Globe, 
  DollarSign, 
  Menu, 
  X,
  ShoppingBag,
  Heart,
  LogOut,
  Shield
} from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

export default function Header() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [language, setLanguage] = useState('English')
  const [currency, setCurrency] = useState('USD')
  const { getItemCount } = useCartStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut({ 
        redirect: true,
        callbackUrl: '/' 
      })
      router.refresh()
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  // Determine dashboard link based on user role
  const getDashboardLink = () => {
    if (!session) return '/login'
    return session.user?.role === 'ADMIN' ? '/admin/dashboard' : '/account/dashboard'
  }

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ]

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
    { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' }
  ]

  const getPathWithoutLocale = (path: string) => {
    const segments = path.split('/')
    if (segments.length > 1 && ['en', 'es', 'fr', 'de', 'ar'].includes(segments[1])) {
      return '/' + segments.slice(2).join('/')
    }
    return path
  }

  const pathWithoutLocale = getPathWithoutLocale(pathname || '')
  const isActive = (path: string) => pathWithoutLocale.startsWith(path)

  const cartCount = mounted ? getItemCount() : 0

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AW</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg leading-tight">Angel Wings</span>
              <span className="text-xs text-gray-500">Flight Company</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              <Link href="/hotels" className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/hotels') ? 'text-blue-600' : ''}`}>
                HOTELS
              </Link>
              <Link href="/cars" className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/cars') ? 'text-blue-600' : ''}`}>
                CARS
              </Link>
              <Link href="/flights" className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/flights') ? 'text-blue-600' : ''}`}>
                FLIGHTS
              </Link>
              <Link href="/tours" className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/tours') ? 'text-blue-600' : ''}`}>
                TOURS
              </Link>
              <Link href="/blogs" className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/blogs') ? 'text-blue-600' : ''}`}>
                BLOGS
              </Link>
              <Link href="/more-services" className={`text-gray-700 hover:text-blue-600 font-medium ${isActive('/more-services') ? 'text-blue-600' : ''}`}>
                MORE
              </Link>
            </nav>

            {/* Language & Currency Dropdowns */}
            <div className="flex items-center space-x-4 border-l pl-6">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{language}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showLangMenu && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.name)
                          setShowLangMenu(false)
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 text-left"
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm text-gray-700">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Currency Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                >
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm font-medium">{currency}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showCurrencyMenu && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {currencies.map((curr) => (
                      <button
                        key={curr.code}
                        onClick={() => {
                          setCurrency(curr.code)
                          setShowCurrencyMenu(false)
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 text-left"
                      >
                        <span className="text-sm font-medium text-gray-900">{curr.symbol}</span>
                        <span className="text-sm text-gray-700">{curr.name} ({curr.code})</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingBag className="w-5 h-5 text-gray-700 hover:text-blue-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Account Dropdown - Now with role-based redirect */}
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-600">
                      {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {session.user?.name?.split(' ')[0] || 'Account'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-700" />
                </button>
                
                {showUserMenu && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {/* Show role badge */}
                    <div className="px-4 py-2 border-b border-gray-100">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        session.user?.role === 'ADMIN' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {session.user?.role === 'ADMIN' ? '👑 Admin' : '👤 User'}
                      </span>
                    </div>
                    
                    {/* Dynamic dashboard link based on role */}
                    <Link
                      href={getDashboardLink()}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="w-4 h-4" />
                      <span className="text-sm">Dashboard</span>
                      {session.user?.role === 'ADMIN' && (
                        <span className="ml-auto text-xs text-purple-600">Admin</span>
                      )}
                    </Link>
                    
                    <Link
                      href="/account/settings"
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Shield className="w-4 h-4" />
                      <span className="text-sm">Settings</span>
                    </Link>
                    
                    <button
                      onClick={() => {
                        setShowUserMenu(false)
                        handleSignOut()
                      }}
                      className="w-full flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 text-left text-red-600 border-t border-gray-100 mt-2 pt-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/hotels" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1">HOTELS</Link>
              <Link href="/cars" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1">CARS</Link>
              <Link href="/flights" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1">FLIGHTS</Link>
              <Link href="/tours" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1">TOURS</Link>
              <Link href="/blogs" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1">BLOGS</Link>
              <Link href="/more-services" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-1">MORE SERVICES</Link>
            </nav>
            
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center space-x-4">
                <select 
                  className="text-sm border rounded px-2 py-1"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.name}>{lang.flag} {lang.name}</option>
                  ))}
                </select>
                <select 
                  className="text-sm border rounded px-2 py-1"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {currencies.map(curr => (
                    <option key={curr.code} value={curr.code}>{curr.symbol} {curr.code}</option>
                  ))}
                </select>
              </div>
              <Link href="/cart" className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {session ? (
              <div className="pt-2 border-t space-y-2">
                <div className="px-2 py-1">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    session.user?.role === 'ADMIN' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {session.user?.role === 'ADMIN' ? '👑 Admin' : '👤 User'}
                  </span>
                </div>
                <Link 
                  href={getDashboardLink()} 
                  className="flex items-center space-x-2 text-gray-700 hover:bg-gray-50 p-2 rounded"
                >
                  <User className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center space-x-2 text-red-600 hover:bg-red-50 p-2 rounded"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="pt-2 border-t">
                <Link href="/login" className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg">
                  Sign In
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
