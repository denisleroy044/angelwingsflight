'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import SignoutModal from '@/components/ui/SignoutModal'
import { 
  LayoutDashboard, 
  Calendar, 
  Heart, 
  CreditCard, 
  Settings,
  LogOut,
  Menu,
  ChevronLeft,
  ChevronRight,
  User
} from 'lucide-react'

const menuItems = [
  { href: '/account/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/account/bookings', icon: Calendar, label: 'My Bookings' },
  { href: '/account/wishlist', icon: Heart, label: 'Wishlist' },
  { href: '/account/payments', icon: CreditCard, label: 'Payment Methods' },
  { href: '/account/settings', icon: Settings, label: 'Account Settings' },
]

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [showSignoutModal, setShowSignoutModal] = useState(false)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/login')
    }
  }, [session, status, router])

  useEffect(() => {
    const savedState = localStorage.getItem('userSidebarCollapsed')
    if (savedState !== null) {
      setIsCollapsed(JSON.parse(savedState))
    }
  }, [])

  const toggleSidebar = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    localStorage.setItem('userSidebarCollapsed', JSON.stringify(newState))
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SignoutModal isOpen={showSignoutModal} onClose={() => setShowSignoutModal(false)} />

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-24 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-screen bg-white shadow-xl transition-all duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0
          ${isCollapsed ? 'w-20' : 'w-64'}`}
      >
        {/* Sidebar Header */}
        <div className={`h-20 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-4 border-b border-gray-100`}>
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AW</span>
              </div>
              <span className="font-bold text-gray-900">My Account</span>
            </div>
          )}
          {isCollapsed && (
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AW</span>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="hidden lg:block p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>

        {/* User Info */}
        {!isCollapsed && (
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">
                  {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || 'U'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate">
                  {session.user?.name || 'User'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {session.user?.email}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-3 rounded-lg transition-colors group relative
                  ${typeof window !== 'undefined' && window.location.pathname === item.href
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'}`}
                title={isCollapsed ? item.label : ''}
                onClick={() => setIsMobileOpen(false)}
              >
                <Icon className={`w-5 h-5`} />
                {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                
                {isCollapsed && (
                  <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                    {item.label}
                  </span>
                )}
              </Link>
            )
          })}

          <button
            onClick={() => setShowSignoutModal(true)}
            className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} px-3 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-8 group relative`}
            title={isCollapsed ? 'Sign Out' : ''}
          >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span className="text-sm font-medium">Sign Out</span>}
            {isCollapsed && (
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                Sign Out
              </span>
            )}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ease-in-out min-h-screen flex flex-col
        ${isCollapsed ? 'lg:ml-20' : 'lg:ml-64'}
        ${isMobileOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="flex-1 p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
