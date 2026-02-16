'use client'
import { useState } from 'react'
import { Plus, Trash2, Compass } from 'lucide-react'

const initialTours = [
  { id: 1, name: 'Dubai City Tour', location: 'Dubai', price: 199, days: 1, rating: 5 },
  { id: 2, name: 'Safari Adventure', location: 'Dubai', price: 299, days: 2, rating: 5 },
  { id: 3, name: 'Nile Cruise', location: 'Egypt', price: 599, days: 4, rating: 5 },
]

export default function ToursPage() {
  const [tours, setTours] = useState(initialTours)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newTour, setNewTour] = useState({ name: '', location: '', price: '', days: '', rating: '5' })

  const handleDelete = (id: number) => {
    if (confirm('Delete this tour?')) {
      setTours(tours.filter(t => t.id !== id))
    }
  }

  const handleAddTour = () => {
    const tour = {
      id: tours.length + 1,
      ...newTour,
      price: parseInt(newTour.price as string),
      days: parseInt(newTour.days as string),
      rating: parseInt(newTour.rating as string)
    }
    setTours([...tours, tour])
    setShowAddModal(false)
    setNewTour({ name: '', location: '', price: '', days: '', rating: '5' })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Tours</h1>
        <button onClick={() => setShowAddModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" /> <span>Add Tour</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4">Tour Name</th>
              <th className="text-left py-3 px-4">Location</th>
              <th className="text-left py-3 px-4">Price</th>
              <th className="text-left py-3 px-4">Days</th>
              <th className="text-left py-3 px-4">Rating</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id} className="border-t">
                <td className="py-3 px-4">{tour.name}</td>
                <td className="py-3 px-4">{tour.location}</td>
                <td className="py-3 px-4">${tour.price}</td>
                <td className="py-3 px-4">{tour.days}</td>
                <td className="py-3 px-4">{'⭐'.repeat(tour.rating)}</td>
                <td className="py-3 px-4">
                  <button onClick={() => handleDelete(tour.id)} className="p-1 hover:bg-red-100 rounded">
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
            <h3 className="text-xl font-bold mb-4">Add Tour</h3>
            <input type="text" placeholder="Tour Name" className="w-full border rounded-lg p-2 mb-2" value={newTour.name} onChange={(e) => setNewTour({...newTour, name: e.target.value})} />
            <input type="text" placeholder="Location" className="w-full border rounded-lg p-2 mb-2" value={newTour.location} onChange={(e) => setNewTour({...newTour, location: e.target.value})} />
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input type="number" placeholder="Price" className="border rounded-lg p-2" value={newTour.price} onChange={(e) => setNewTour({...newTour, price: e.target.value})} />
              <input type="number" placeholder="Days" className="border rounded-lg p-2" value={newTour.days} onChange={(e) => setNewTour({...newTour, days: e.target.value})} />
            </div>
            <select className="w-full border rounded-lg p-2 mb-4" value={newTour.rating} onChange={(e) => setNewTour({...newTour, rating: e.target.value})}>
              <option value="5">5 Star</option>
              <option value="4">4 Star</option>
              <option value="3">3 Star</option>
            </select>
            <div className="flex space-x-3">
              <button onClick={handleAddTour} className="flex-1 bg-blue-600 text-white py-2 rounded-lg">Add</button>
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-100 py-2 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
