'use client'
import { useState } from 'react'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'

const initialBlogs = [
  { id: 1, title: 'Where to Eat in Rome', author: 'Maria Rossi', date: '2026-02-15', status: 'published' },
  { id: 2, title: 'Travel Tips 2026', author: 'John Smith', date: '2026-02-10', status: 'published' },
  { id: 3, title: 'Best Beaches in Thailand', author: 'Sarah Johnson', date: '2026-02-05', status: 'draft' },
]

export default function BlogsPage() {
  const [blogs, setBlogs] = useState(initialBlogs)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newBlog, setNewBlog] = useState({ title: '', author: '', status: 'draft' })

  const handleDelete = (id: number) => {
    if (confirm('Delete this blog post?')) {
      setBlogs(blogs.filter(b => b.id !== id))
    }
  }

  const handleAddBlog = () => {
    const blog = {
      id: blogs.length + 1,
      ...newBlog,
      date: new Date().toISOString().split('T')[0]
    }
    setBlogs([...blogs, blog])
    setShowAddModal(false)
    setNewBlog({ title: '', author: '', status: 'draft' })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Blogs</h1>
        <button onClick={() => setShowAddModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" /> <span>Add Blog</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4">Title</th>
              <th className="text-left py-3 px-4">Author</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-t">
                <td className="py-3 px-4 font-medium">{blog.title}</td>
                <td className="py-3 px-4">{blog.author}</td>
                <td className="py-3 px-4">{blog.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${blog.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {blog.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(blog.id)} className="p-1 hover:bg-red-100 rounded"><Trash2 className="w-4 h-4 text-red-600" /></button>
                  </div>
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
            <h3 className="text-xl font-bold mb-4">Add Blog Post</h3>
            <input type="text" placeholder="Title" className="w-full border rounded-lg p-2 mb-2" value={newBlog.title} onChange={(e) => setNewBlog({...newBlog, title: e.target.value})} />
            <input type="text" placeholder="Author" className="w-full border rounded-lg p-2 mb-2" value={newBlog.author} onChange={(e) => setNewBlog({...newBlog, author: e.target.value})} />
            <select className="w-full border rounded-lg p-2 mb-4" value={newBlog.status} onChange={(e) => setNewBlog({...newBlog, status: e.target.value})}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <div className="flex space-x-3">
              <button onClick={handleAddBlog} className="flex-1 bg-blue-600 text-white py-2 rounded-lg">Add</button>
              <button onClick={() => setShowAddModal(false)} className="flex-1 bg-gray-100 py-2 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
