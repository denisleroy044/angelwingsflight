'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Mail,
  Phone,
  Calendar,
  Shield,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

// Mock data
const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'USER', status: 'active', joined: '2026-01-15', bookings: 3, phone: '+1 234-567-8901' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'ADMIN', status: 'active', joined: '2026-01-10', bookings: 8, phone: '+1 234-567-8902' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'USER', status: 'active', joined: '2026-02-01', bookings: 1, phone: '+1 234-567-8903' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'USER', status: 'inactive', joined: '2026-01-20', bookings: 0, phone: '+1 234-567-8904' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'USER', status: 'active', joined: '2026-02-05', bookings: 2, phone: '+1 234-567-8905' },
]

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers)
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingUser, setEditingUser] = useState<any>(null)
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'USER', phone: '' })

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id))
    }
  }

  const handleAddUser = () => {
    const user = {
      id: users.length + 1,
      ...newUser,
      status: 'active',
      joined: new Date().toISOString().split('T')[0],
      bookings: 0
    }
    setUsers([...users, user])
    setShowAddModal(false)
    setNewUser({ name: '', email: '', role: 'USER', phone: '' })
  }

  const handleEditUser = () => {
    setUsers(users.map(u => u.id === editingUser.id ? editingUser : u))
    setShowEditModal(false)
    setEditingUser(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Manage Users</h1>
        <button 
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add User</span>
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">User</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Contact</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Role</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Joined</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t border-gray-100">
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">{user.name.charAt(0)}</span>
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="text-sm">
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-3 h-3 mr-1" /> {user.email}
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Phone className="w-3 h-3 mr-1" /> {user.phone}
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.role === 'ADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600">{user.joined}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => { setEditingUser(user); setShowEditModal(true); }}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className="p-1 hover:bg-red-100 rounded"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Add New User</h3>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg mb-3"
              value={newUser.name}
              onChange={(e) => setNewUser({...newUser, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg mb-3"
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 border rounded-lg mb-3"
              value={newUser.phone}
              onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
            />
            <select
              className="w-full px-4 py-2 border rounded-lg mb-4"
              value={newUser.role}
              onChange={(e) => setNewUser({...newUser, role: e.target.value})}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
            <div className="flex space-x-3">
              <button onClick={handleAddUser} className="flex-1 bg-blue-600 text-white py-2 rounded-lg">Add</button>
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-100 py-2 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && editingUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Edit User</h3>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg mb-3"
              value={editingUser.name}
              onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg mb-3"
              value={editingUser.email}
              onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 border rounded-lg mb-3"
              value={editingUser.phone}
              onChange={(e) => setEditingUser({...editingUser, phone: e.target.value})}
            />
            <select
              className="w-full px-4 py-2 border rounded-lg mb-4"
              value={editingUser.role}
              onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
            <div className="flex space-x-3">
              <button onClick={handleEditUser} className="flex-1 bg-blue-600 text-white py-2 rounded-lg">Save</button>
              <button onClick={() => setShowEditModal(false)} className="flex-1 bg-gray-100 py-2 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
