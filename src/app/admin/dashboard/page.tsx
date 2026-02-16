'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  DollarSign,
  Plane,
  Hotel,
  Car,
  Compass,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  Calendar,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

export default function AdminDashboardPage() {
  const { data: session } = useSession()
  
  const [stats, setStats] = useState({
    totalBookings: 1250,
    totalRevenue: 450000,
    totalUsers: 890,
    activeBookings: 342,
    revenueGrowth: 12.5,
    userGrowth: 8.2,
    bookingGrowth: 15.3
  })

  const revenueData = [
    { month: 'Jan', amount: 32000 },
    { month: 'Feb', amount: 35000 },
    { month: 'Mar', amount: 38000 },
    { month: 'Apr', amount: 42000 },
    { month: 'May', amount: 45000 },
    { month: 'Jun', amount: 48000 },
    { month: 'Jul', amount: 52000 },
    { month: 'Aug', amount: 55000 },
    { month: 'Sep', amount: 53000 },
    { month: 'Oct', amount: 58000 },
    { month: 'Nov', amount: 62000 },
    { month: 'Dec', amount: 68000 }
  ]

  const bookingsByType = [
    { name: 'Flights', value: 450 },
    { name: 'Hotels', value: 380 },
    { name: 'Cars', value: 220 },
    { name: 'Tours', value: 200 }
  ]

  const recentBookings = [
    { id: 'BK001', customer: 'John Doe', type: 'Flight', amount: 450, status: 'confirmed', date: '2026-02-14' },
    { id: 'BK002', customer: 'Jane Smith', type: 'Hotel', amount: 890, status: 'pending', date: '2026-02-14' },
    { id: 'BK003', customer: 'Bob Johnson', type: 'Car', amount: 230, status: 'confirmed', date: '2026-02-13' },
    { id: 'BK004', customer: 'Alice Brown', type: 'Tour', amount: 1200, status: 'completed', date: '2026-02-13' },
    { id: 'BK005', customer: 'Charlie Wilson', type: 'Flight', amount: 670, status: 'confirmed', date: '2026-02-12' }
  ]

  // Quick Actions Cards - These link to the actual pages
  const quickActions = [
    { 
      title: 'Add New Flight', 
      icon: Plane, 
      href: '/admin/flights/new',
      color: 'bg-blue-500',
      description: 'Create a new flight route',
      count: '12 routes'
    },
    { 
      title: 'Add New Hotel', 
      icon: Hotel, 
      href: '/admin/hotels/new',
      color: 'bg-green-500',
      description: 'List a new hotel',
      count: '8 pending'
    },
    { 
      title: 'Add New Car', 
      icon: Car, 
      href: '/admin/cars/new',
      color: 'bg-purple-500',
      description: 'Add a rental car',
      count: '5 available'
    },
    { 
      title: 'Add New Tour', 
      icon: Compass, 
      href: '/admin/tours/new',
      color: 'bg-orange-500',
      description: 'Create a tour package',
      count: '3 new'
    }
  ]

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'confirmed': return <CheckCircle className="w-3 h-3 mr-1" />
      case 'pending': return <Clock className="w-3 h-3 mr-1" />
      case 'completed': return <CheckCircle className="w-3 h-3 mr-1" />
      default: return null
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {session?.user?.name?.split(' ')[0] || 'Admin'}! Here's what's happening with your business today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/admin/bookings" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow group">
          <div className="flex items-center justify-between mb-2">
            <div className="p-3 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUp className="w-4 h-4 mr-1" />
              {stats.revenueGrowth}%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
          <p className="text-sm text-gray-600">Total Revenue</p>
        </Link>

        <Link href="/admin/bookings" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow group">
          <div className="flex items-center justify-between mb-2">
            <div className="p-3 bg-green-100 rounded-lg group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUp className="w-4 h-4 mr-1" />
              {stats.bookingGrowth}%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.totalBookings}</p>
          <p className="text-sm text-gray-600">Total Bookings</p>
        </Link>

        <Link href="/admin/users" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow group">
          <div className="flex items-center justify-between mb-2">
            <div className="p-3 bg-purple-100 rounded-lg group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUp className="w-4 h-4 mr-1" />
              {stats.userGrowth}%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
          <p className="text-sm text-gray-600">Total Users</p>
        </Link>

        <Link href="/admin/bookings" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow group">
          <div className="flex items-center justify-between mb-2">
            <div className="p-3 bg-yellow-100 rounded-lg group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUp className="w-4 h-4 mr-1" />
              8.5%
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.activeBookings}</p>
          <p className="text-sm text-gray-600">Active Bookings</p>
        </Link>
      </div>

      {/* Quick Actions - These link to actual pages */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <Link
                key={action.title}
                href={action.href}
                className="group block p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {action.title}
                  </h3>
                  <span className="text-xs bg-white px-2 py-1 rounded-full shadow-sm">
                    {action.count}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{action.description}</p>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Revenue Overview</h2>
            <Link href="/admin/bookings" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              View Details
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bookings by Type */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Bookings by Type</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={bookingsByType}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {bookingsByType.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
          <Link href="/admin/bookings" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
            View All
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Booking ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-mono text-gray-900">{booking.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{booking.customer}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{booking.type}</td>
                  <td className="py-3 px-4 text-sm font-semibold text-blue-600">${booking.amount}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{booking.date}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                      {getStatusIcon(booking.status)}
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Link href={`/admin/bookings/${booking.id}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Links to All Sections */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href="/admin/users" className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white hover:shadow-lg transition-all hover:-translate-y-1">
          <Users className="w-8 h-8 mb-2" />
          <p className="font-semibold">Manage Users</p>
          <p className="text-xs text-purple-100">{stats.totalUsers} total</p>
        </Link>
        <Link href="/admin/flights" className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white hover:shadow-lg transition-all hover:-translate-y-1">
          <Plane className="w-8 h-8 mb-2" />
          <p className="font-semibold">Manage Flights</p>
          <p className="text-xs text-blue-100">24 active</p>
        </Link>
        <Link href="/admin/hotels" className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white hover:shadow-lg transition-all hover:-translate-y-1">
          <Hotel className="w-8 h-8 mb-2" />
          <p className="font-semibold">Manage Hotels</p>
          <p className="text-xs text-green-100">18 properties</p>
        </Link>
        <Link href="/admin/tours" className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white hover:shadow-lg transition-all hover:-translate-y-1">
          <Compass className="w-8 h-8 mb-2" />
          <p className="font-semibold">Manage Tours</p>
          <p className="text-xs text-orange-100">12 packages</p>
        </Link>
      </div>
    </div>
  )
}
