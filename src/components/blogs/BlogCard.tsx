'use client'
import Link from 'next/link'
import { Calendar, User, Clock, ChevronRight } from 'lucide-react'

interface BlogCardProps {
  blog: {
    id: number
    title: string
    excerpt: string
    author: string
    date: string
    readTime: string
    image: string
    category: string
  }
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <Calendar className="w-4 h-4" />
          <span>{blog.date}</span>
          <User className="w-4 h-4" />
          <span>{blog.author}</span>
          <Clock className="w-4 h-4" />
          <span>{blog.readTime}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{blog.excerpt}</p>
        <Link href={`/blogs/${blog.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-700">
          Read More
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}
