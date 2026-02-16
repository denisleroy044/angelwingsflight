'use client'
import { useState } from 'react'
import { Save } from 'lucide-react'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    companyName: 'Angel Wings Flight Company',
    email: 'info@angelwings.com',
    phone: '+971 4 123 4567',
    address: '123 Travel Street, Dubai, UAE',
    facebook: 'https://facebook.com/angelwings',
    twitter: 'https://twitter.com/angelwings',
    instagram: 'https://instagram.com/angelwings'
  })

  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      {saved && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg">
          Settings saved successfully!
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Company Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <input type="text" className="w-full border rounded-lg p-2" value={settings.companyName} onChange={(e) => setSettings({...settings, companyName: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border rounded-lg p-2" value={settings.email} onChange={(e) => setSettings({...settings, email: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input type="text" className="w-full border rounded-lg p-2" value={settings.phone} onChange={(e) => setSettings({...settings, phone: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea className="w-full border rounded-lg p-2" rows={2} value={settings.address} onChange={(e) => setSettings({...settings, address: e.target.value})} />
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-6">Social Media</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Facebook</label>
            <input type="url" className="w-full border rounded-lg p-2" value={settings.facebook} onChange={(e) => setSettings({...settings, facebook: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Twitter</label>
            <input type="url" className="w-full border rounded-lg p-2" value={settings.twitter} onChange={(e) => setSettings({...settings, twitter: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Instagram</label>
            <input type="url" className="w-full border rounded-lg p-2" value={settings.instagram} onChange={(e) => setSettings({...settings, instagram: e.target.value})} />
          </div>
        </div>

        <div className="mt-6">
          <button onClick={handleSave} className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  )
}
