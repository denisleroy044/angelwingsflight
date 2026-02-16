'use client'
import { useState } from 'react'
import { Plus, Edit, Trash2, Plane } from 'lucide-react'

const initialFlights = [
  { id: 1, airline: 'Emirates', flightNumber: 'EK202', from: 'DXB', to: 'JFK', departure: '08:30', arrival: '14:45', price: 850, seats: 120, status: 'active' },
  { id: 2, airline: 'Qatar Airways', flightNumber: 'QR123', from: 'DOH', to: 'LHR', departure: '09:15', arrival: '14:30', price: 750, seats: 98, status: 'active' },
  { id: 3, airline: 'Singapore Airlines', flightNumber: 'SQ321', from: 'SIN', to: 'SYD', departure: '20:00', arrival: '06:15', price: 950, seats: 150, status: 'active' },
]

export default function FlightsPage() {
  const [flights, setFlights] = useState(initialFlights)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newFlight, setNewFlight] = useState({ airline: '', flightNumber: '', from: '', to: '', departure: '', arrival: '', price: '', seats: '' })

  const handleDelete = (id: number) => {
    if (confirm('Delete this flight?')) {
      setFlights(flights.filter(f => f.id !== id))
    }
  }

  const handleAddFlight = () => {
    const flight = {
      id: flights.length + 1,
      ...newFlight,
      price: parseInt(newFlight.price as string),
      seats: parseInt(newFlight.seats as string),
      status: 'active'
    }
    setFlights([...flights, flight])
    setShowAddModal(false)
    setNewFlight({ airline: '', flightNumber: '', from: '', to: '', departure: '', arrival: '', price: '', seats: '' })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Manage Flights</h1>
        <button onClick={() => setShowAddModal(true)} className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          <Plus className="w-4 h-4" /> <span>Add Flight</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4">Airline</th>
              <th className="text-left py-3 px-4">Flight No.</th>
              <th className="text-left py-3 px-4">Route</th>
              <th className="text-left py-3 px-4">Departure</th>
              <th className="text-left py-3 px-4">Arrival</th>
              <th className="text-left py-3 px-4">Price</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id} className="border-t">
                <td className="py-3 px-4">{flight.airline}</td>
                <td className="py-3 px-4">{flight.flightNumber}</td>
                <td className="py-3 px-4">{flight.from} → {flight.to}</td>
                <td className="py-3 px-4">{flight.departure}</td>
                <td className="py-3 px-4">{flight.arrival}</td>
                <td className="py-3 px-4">${flight.price}</td>
                <td className="py-3 px-4">
                  <button onClick={() => handleDelete(flight.id)} className="p-1 hover:bg-red-100 rounded">
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
            <h3 className="text-xl font-bold mb-4">Add Flight</h3>
            <input type="text" placeholder="Airline" className="w-full border rounded-lg p-2 mb-2" value={newFlight.airline} onChange={(e) => setNewFlight({...newFlight, airline: e.target.value})} />
            <input type="text" placeholder="Flight Number" className="w-full border rounded-lg p-2 mb-2" value={newFlight.flightNumber} onChange={(e) => setNewFlight({...newFlight, flightNumber: e.target.value})} />
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input type="text" placeholder="From" className="border rounded-lg p-2" value={newFlight.from} onChange={(e) => setNewFlight({...newFlight, from: e.target.value})} />
              <input type="text" placeholder="To" className="border rounded-lg p-2" value={newFlight.to} onChange={(e) => setNewFlight({...newFlight, to: e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input type="time" placeholder="Departure" className="border rounded-lg p-2" value={newFlight.departure} onChange={(e) => setNewFlight({...newFlight, departure: e.target.value})} />
              <input type="time" placeholder="Arrival" className="border rounded-lg p-2" value={newFlight.arrival} onChange={(e) => setNewFlight({...newFlight, arrival: e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <input type="number" placeholder="Price" className="border rounded-lg p-2" value={newFlight.price} onChange={(e) => setNewFlight({...newFlight, price: e.target.value})} />
              <input type="number" placeholder="Seats" className="border rounded-lg p-2" value={newFlight.seats} onChange={(e) => setNewFlight({...newFlight, seats: e.target.value})} />
            </div>
            <div className="flex space-x-3">
              <button onClick={handleAddFlight} className="flex-1 bg-blue-600 text-white py-2 rounded-lg">Add</button>
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-100 py-2 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
