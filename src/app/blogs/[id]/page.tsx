'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

// Mock data - in real app, fetch based on ID
const blogData = {
  id: 1,
  title: 'Where to Eat in Rome During Holidays',
  content: `
    <p>Rome during the holidays is a magical experience, and the food scene is no exception. From traditional Christmas markets to festive trattorias, the Eternal City offers countless culinary delights during the holiday season.</p>
    
    <h2>Traditional Roman Holiday Dishes</h2>
    <p>The holiday season in Rome brings out the best of traditional Roman cuisine. Christmas Eve, known as La Vigilia, traditionally features a feast of seven fishes. On Christmas Day, families gather for a multi-course meal that often includes pasta dishes like cacio e pepe or carbonara, followed by roasted meats and an array of holiday sweets.</p>
    
    <h2>Best Restaurants for Holiday Dining</h2>
    <p>Several restaurants in Rome offer special holiday menus that showcase the best of Roman cuisine. Trattoria Da Enzo in Trastevere is known for its authentic atmosphere and traditional dishes. For a more upscale experience, Ristorante Aroma offers stunning views of the Colosseum along with exquisite cuisine.</p>
    
    <h2>Christmas Markets and Street Food</h2>
    <p>Piazza Navona transforms into a Christmas wonderland during the holidays, with vendors selling everything from roasted chestnuts to mulled wine. The market features traditional Italian holiday treats like torrone (nougat), panettone, and pandoro.</p>
    
    <h2>Tips for Holiday Dining</h2>
    <p>Reservations are essential during the holiday season, especially for Christmas Eve and Christmas Day. Many restaurants offer fixed holiday menus, so be prepared for prix fixe options. It's also worth noting that many restaurants close on Christmas Day itself, so plan accordingly.</p>
  `,
  author: 'Maria Rossi',
  date: '15 Feb 2026',
  readTime: '5 min read',
  image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
  category: 'Food & Dining',
  tags: ['Rome', 'Italian Food', 'Holiday Travel', 'Restaurants']
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
          <span className="text-gray-900 font-medium line-clamp-1">{blogData.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-96">
                <img 
                  src={blogData.image} 
                  alt={blogData.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category */}
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {blogData.category}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {blogData.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{blogData.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{blogData.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{blogData.readTime}</span>
                  </div>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogData.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogData.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blogs/tag/${tag.toLowerCase()}`}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Share this article:</h3>
                  <div className="flex space-x-3">
                    <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Posts</h3>
              <div className="space-y-4">
                {[1,2,3].map((i) => (
                  <Link key={i} href={`/blogs/${i}`} className="flex space-x-3 group">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        Amazing travel experiences you won't forget
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">5 min read</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Categories */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {['Food & Dining', 'Travel Tips', 'Hotel Reviews', 'Culture & History', 'Street Food'].map((cat) => (
                    <Link
                      key={cat}
                      href={`/blogs/category/${cat.toLowerCase()}`}
                      className="flex items-center justify-between group"
                    >
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">{cat}</span>
                      <span className="text-sm text-gray-400">(12)</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">Subscribe for the latest travel tips and guides</p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg mb-2"
                />
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
