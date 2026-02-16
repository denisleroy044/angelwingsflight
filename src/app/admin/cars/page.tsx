'use client'
import { useState } from 'react'
import { Plus, Trash2, Car } from 'lucide-react'

const initialCars = [
  { id: 1, name: 'Toyota Camry', provider: 'Hertz', price: 120, type: 'Sedan', seats: 5 },
  { id: 2, name: 'BMW X5', provider: 'Sixt', price: 250, type: 'SUV', seats: 7 },
  { id: 3, name: 'Hyundai i10', provider: 'DKB', price: 80, type: 'Economy', seats: 4 },
]

export default function CarsPage() {
  const [cars, setCars] = useState(initialCars)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newCar, setNewCar] = useState({ name: '', provider: '', price: '', type: '', seats: '' })

  const handleDelete = (id: number) => {
    if (confirm('Delete this car?')) {
      setCars(cars.filter(c => c.id !== id))
    }
  }

  const handleAddCar = () => {
    const car = {
      id: cars.length + 1,
      ...newCar,
      price: parseInt(newCar.price as string),
      seats: parseInt(newCar.seats as string)
    }
    setCars([...cars, car])
    setShowAddModal(false)
    setNewCar({ name: '', provider: '', price: '', type: '', seats: '' })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Cars</h1>
        <button onClick={() => setShowAddModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" /> <span>Add Car</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4">Model</th>
              <th className="text-left py-3 px-4">Provider</th>
              <th className="text-left py-3 px-4">Type</th>
              <th className="text-left py-3 px-4">Price/Day</th>
              <th className="text-left py-3 px-4">Seats</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id} className="border-t">
                <td className="py-3 px-4">{car.name}</td>
                <td className="py-3 px-4">{car.provider}</td>
                <td className="py-3 px-4">{car.type}</td>
                <td className="py-3 px-4">${car.price}</td>
                <td className="py-3 px-4">{car.seats}</td>
                <td className="py-3 px-4">
                  <button onClick={() => handleDelete(car.id)} className="p-1 hover:bg-red-100 rounded">
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
            <h3 className="text-xl font-bold mb-4">Add Car</h3>
            <input type="text" placeholder="Car Model" className="w-full border rounded-lg p-2 mb-2" value={newCar.name} onChange={(e) => setNewCar({...newCar, name: e.target.value})} />
            <input type="text" placeholder="Provider" className="w-full border rounded-lg p-2 mb-2" value={newCar.provider} onChange={(e) => setNewCar({...newCar, provider: e.target.value})} />
            <input type="text" placeholder="Type (e.g., SUV)" className="w-full border rounded-lg p-2 mb-2" value={newCar.type} onChange={(e) => setNewCar({...newCar, type: e.target.value})} />
            <div className="grid grid-cols-2 gap-2 mb-4">
              <input type="number" placeholder="Price" className="border rounded-lg p-2" value={newCar.price} onChange={(e) => setNewCar({...newCar, price: e.target.value})} />
              <input type="number" placeholder="Seats" className="border rounded-lg p-2" value={newCar.seats} onChange={(e) => setNewCar({...newCar, seats: e.target.value})} />
            </div>
            <div className="flex space-x-3">
              <button onClick={handleAddCar} className="flex-1 bg-blue-600 text-white py-2 rounded-lg">Add</button>
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-100 py-2 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
