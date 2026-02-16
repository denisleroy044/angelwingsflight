'use client'
import { useState } from 'react'
import { Plus, Edit, Trash2, Hotel } from 'lucide-react'

const initialHotels = [
  { id: 1, name: 'Burj Al Arab', location: 'Dubai', price: 1200, rooms: 202, rating: 5 },
  { id: 2, name: 'Atlantis The Palm', location: 'Dubai', price: 850, rooms: 1539, rating: 5 },
  { id: 3, name: 'The Ritz-Carlton', location: 'Paris', price: 950, rooms: 142, rating: 5 },
]

export default function HotelsPage() {
  const [hotels, setHotels] = useState(initialHotels)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newHotel, setNewHotel] = useState({ name: '', location: '', price: '', rooms: '', rating: '5' })

  const handleDelete = (id: number) => {
    if (confirm('Delete this hotel?')) {
      setHotels(hotels.filter(h => h.id !== id))
    }
  }

  const handleAddHotel = () => {
    const hotel = {
      id: hotels.length + 1,
      ...newHotel,
      price: parseInt(newHotel.price as string),
      rooms: parseInt(newHotel.rooms as string),
      rating: parseInt(newHotel.rating as string)
    }
    setHotels([...hotels, hotel])
    setShowAddModal(false)
    setNewHotel({ name: '', location: '', price: '', rooms: '', rating: '5' })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Hotels</h1>
        <button onClick={() => setShowAddModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" /> <span>Add Hotel</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Location</th>
              <th className="text-left py-3 px-4">Price</th>
              <th className="text-left py-3 px-4">Rooms</th>
              <th className="text-left py-3 px-4">Rating</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr key={hotel.id} className="border-t">
                <td className="py-3 px-4">{hotel.name}</td>
                <td className="py-3 px-4">{hotel.location}</td>
                <td className="py-3 px-4">${hotel.price}</td>
                <td className="py-3 px-4">{hotel.rooms}</td>
                <td className="py-3 px-4">{'⭐'.repeat(hotel.rating)}</td>
                <td className="py-3 px-4">
                  <button onClick={() => handleDelete(hotel.id)} className="p-1 hover:bg-red-100 rounded">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Add Hotel</h3>
            <input type="text" placeholder="Hotel Name" className="w-full border rounded-lg p-2 mb-2" value={newHotel.name} onChange={(e) => setNewHotel({...newHotel, name: e.target.value})} />
            <input type="text" placeholder="Location" className="w-full border rounded-lg p-2 mb-2" value={newHotel.location} onChange={(e) => setNewHotel({...newHotel, location: e.target.value})} />
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input type="number" placeholder="Price" className="border rounded-lg p-2" value={newHotel.price} onChange={(e) => setNewHotel({...newHotel, price: e.target.value})} />
              <input type="number" placeholder="Rooms" className="border rounded-lg p-2" value={newHotel.rooms} onChange={(e) => setNewHotel({...newHotel, rooms: e.target.value})} />
            </div>
            <select className="w-full border rounded-lg p-2 mb-4" value={newHotel.rating} onChange={(e) => setNewHotel({...newHotel, rating: e.target.value})}>
              <option value="5">5 Star</option>
              <option value="4">4 Star</option>
              <option value="3">3 Star</option>
            </select>
            <div className="flex space-x-3">
              <button onClick={handleAddHotel} className="flex-1 bg-blue-600 text-white py-2 rounded-lg">Add</button>
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-100 py-2 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
