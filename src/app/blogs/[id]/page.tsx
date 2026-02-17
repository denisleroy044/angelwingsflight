'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ChevronRight, Calendar, User, Clock } from 'lucide-react'

const blogData = {
  id: 1,
  title: 'Where to Eat in Rome During Holidays',
  content: '<p>Rome during the holidays is a magical experience...</p>',
  author: 'Maria Rossi',
  date: '15 Feb 2026',
  readTime: '5 min read',
  image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
  category: 'Food & Dining',
}

export default function BlogDetailPage() {
  const params = useParams()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blogs" className="hover:text-blue-600">Blogs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{blogData.title}</span>
        </div>

        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={blogData.image} alt={blogData.title} className="w-full h-96 object-cover" />
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{blogData.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <Calendar className="w-4 h-4" /> {blogData.date}
                <User className="w-4 h-4 ml-4" /> {blogData.author}
                <Clock className="w-4 h-4 ml-4" /> {blogData.readTime}
              </div>
              <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
