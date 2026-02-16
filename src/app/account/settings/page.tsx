'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Lock, 
  Bell, 
  Shield,
  Camera,
  Save,
  Eye,
  EyeOff,
  ChevronRight
} from 'lucide-react'

export default function AccountSettingsPage() {
  const { data: session } = useSession()
  const [activeTab, setActiveTab] = useState('profile')
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: session?.user?.email || 'john@example.com',
    phone: '+1 234 567 8900',
    address: '123 Travel Street',
    city: 'San Francisco',
    country: 'United States',
    zipCode: '94105',
    language: 'English',
    currency: 'USD',
    timezone: 'America/Los_Angeles'
  })

  const [notifications, setNotifications] = useState({
    emailBookings: true,
    emailPromotions: false,
    emailNewsletter: true,
    smsBookings: true,
    smsPromotions: false,
    pushBookings: true,
    pushPromotions: false
  })

  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: ''
  })

  const [passwordError, setPasswordError] = useState('')
  const [passwordSuccess, setPasswordSuccess] = useState(false)

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    })
  }

  const handleNotificationChange = (key: string) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key as keyof typeof notifications]
    })
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    })
  }

  const handleSaveProfile = () => {
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    setPasswordError('')
    setPasswordSuccess(false)

    if (passwordData.new !== passwordData.confirm) {
      setPasswordError('New passwords do not match')
      return
    }

    if (passwordData.new.length < 6) {
      setPasswordError('Password must be at least 6 characters')
      return
    }

    // In real app, call API to change password
    setPasswordSuccess(true)
    setPasswordData({ current: '', new: '', confirm: '' })
    setTimeout(() => setPasswordSuccess(false), 3000)
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const tabs = [
    { id: 'profile', label: 'Profile Information', icon: User },
    { id: 'password', label: 'Password & Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'preferences', label: 'Preferences', icon: Globe }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
          <p className="text-gray-600">Manage your account preferences and security</p>
        </div>

        {/* Success Message */}
        {saveSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8 flex items-center space-x-3">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm text-green-800">Profile updated successfully!</p>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 space-y-4">
            {/* Profile Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                  {avatarPreview ? (
                    <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl font-bold text-blue-600">
                      {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
                    </span>
                  )}
                </div>
                <label className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <Camera className="w-4 h-4 text-white" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                </label>
              </div>
              <h3 className="font-semibold text-gray-900">{profile.firstName} {profile.lastName}</h3>
              <p className="text-sm text-gray-600">{profile.email}</p>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg mb-1 transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{tab.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm p-8">
              {/* Profile Information */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="firstName"
                          value={profile.firstName}
                          onChange={handleProfileChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="lastName"
                          value={profile.lastName}
                          onChange={handleProfileChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfileChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="address"
                        value={profile.address}
                        onChange={handleProfileChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={profile.city}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={profile.country}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={profile.zipCode}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleSaveProfile}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Password & Security */}
              {activeTab === 'password' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Change Password</h2>
                  
                  <form onSubmit={handleChangePassword} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showCurrentPassword ? 'text' : 'password'}
                          name="current"
                          value={passwordData.current}
                          onChange={handlePasswordChange}
                          className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showCurrentPassword ? (
                            <EyeOff className="w-5 h-5 text-gray-400" />
                          ) : (
                            <Eye className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showNewPassword ? 'text' : 'password'}
                          name="new"
                          value={passwordData.new}
                          onChange={handlePasswordChange}
                          className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showNewPassword ? (
                            <EyeOff className="w-5 h-5 text-gray-400" />
                          ) : (
                            <Eye className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirm"
                          value={passwordData.confirm}
                          onChange={handlePasswordChange}
                          className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5 text-gray-400" />
                          ) : (
                            <Eye className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    {passwordError && (
                      <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                        {passwordError}
                      </div>
                    )}

                    {passwordSuccess && (
                      <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm">
                        Password changed successfully!
                      </div>
                    )}

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        Update Password
                      </button>
                    </div>
                  </form>

                  <div className="border-t border-gray-100 pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                    <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">Secure Your Account</p>
                          <p className="text-sm text-gray-600">Add an extra layer of security</p>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        Enable 2FA
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Email Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Booking Confirmations</p>
                            <p className="text-sm text-gray-600">Receive emails about your bookings</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={notifications.emailBookings}
                            onChange={() => handleNotificationChange('emailBookings')}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                          />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Promotions & Offers</p>
                            <p className="text-sm text-gray-600">Receive special deals and discounts</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={notifications.emailPromotions}
                            onChange={() => handleNotificationChange('emailPromotions')}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                          />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Newsletter</p>
                            <p className="text-sm text-gray-600">Travel tips and inspiration</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={notifications.emailNewsletter}
                            onChange={() => handleNotificationChange('emailNewsletter')}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">SMS Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Booking Updates</p>
                            <p className="text-sm text-gray-600">Receive SMS about your bookings</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={notifications.smsBookings}
                            onChange={() => handleNotificationChange('smsBookings')}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                          />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">Promotional SMS</p>
                            <p className="text-sm text-gray-600">Receive deals via SMS</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={notifications.smsPromotions}
                            onChange={() => handleNotificationChange('smsPromotions')}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleSaveProfile}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}

              {/* Preferences */}
              {activeTab === 'preferences' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Preferences</h2>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Language
                      </label>
                      <select
                        name="language"
                        value={profile.language}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Arabic</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Currency
                      </label>
                      <select
                        name="currency"
                        value={profile.currency}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option>USD - US Dollar</option>
                        <option>EUR - Euro</option>
                        <option>GBP - British Pound</option>
                        <option>AED - UAE Dirham</option>
                        <option>JPY - Japanese Yen</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timezone
                      </label>
                      <select
                        name="timezone"
                        value={profile.timezone}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option>America/Los_Angeles - Pacific Time</option>
                        <option>America/New_York - Eastern Time</option>
                        <option>Europe/London - GMT</option>
                        <option>Asia/Dubai - Gulf Time</option>
                        <option>Asia/Tokyo - Japan Time</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleSaveProfile}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
