import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import BlogCard from '@/components/blogs/BlogCard'

// Mock data
const blogs = [
  {
    id: 1,
    title: 'Where to Eat in Rome During Holidays',
    excerpt: 'Discover the best restaurants and local eateries in Rome during the holiday season. From traditional trattorias to modern fusion cuisine.',
    author: 'Maria Rossi',
    date: '15 Feb 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
    category: 'Food & Dining'
  },
  {
    id: 2,
    title: 'Flavio Al Velavevodetto in Testaccio',
    excerpt: 'Experience authentic Roman cuisine at this historic restaurant nestled in the Testaccio district. Known for their carbonara and cacio e pepe.',
    author: 'Giuseppe Romano',
    date: '12 Feb 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    category: 'Restaurant Reviews'
  },
  {
    id: 3,
    title: 'The Tiber River\'s Last Eel Fishermen',
    excerpt: 'Meet the last remaining eel fishermen of Rome and learn about their centuries-old tradition on the Tiber River.',
    author: 'Alessandro Bianchi',
    date: '10 Feb 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800',
    category: 'Culture & History'
  },
  {
    id: 4,
    title: 'Hotel Review: DOM Hotel In Rome',
    excerpt: 'A comprehensive review of the luxurious DOM Hotel in the heart of Rome. From amenities to service and location.',
    author: 'Sofia Conti',
    date: '8 Feb 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    category: 'Hotel Reviews'
  },
  {
    id: 5,
    title: 'Mordi e Vai in the Testaccio Market',
    excerpt: 'Discover the best sandwich shop in Rome\'s famous Testaccio Market. Traditional Roman cuisine at its finest.',
    author: 'Marco Ferrara',
    date: '5 Feb 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    category: 'Food & Dining'
  },
  {
    id: 6,
    title: 'Gluten Dining Food Shopping in Rome',
    excerpt: 'A guide to gluten-free dining and shopping in Rome. Best restaurants, bakeries, and markets for celiac travelers.',
    author: 'Elena Vitale',
    date: '3 Feb 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800',
    category: 'Travel Tips'
  }
]

export default function BlogsPage() {
  // Take first 4 for new blogs
  const newBlogs = blogs.slice(0, 4)
  // Take remaining for other blogs
  const otherBlogs = blogs.slice(4)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Blogs</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Travel Blog</h1>
          <p className="text-lg text-gray-600">Travel tips, guides, and stories from around the world</p>
        </div>

        {/* New Blogs Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">New Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>

        {/* Other Blogs Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            href="/blogs/archive"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View More Articles
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}
