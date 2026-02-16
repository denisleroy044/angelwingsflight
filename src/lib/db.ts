// Simple in-memory database with localStorage persistence
// In production, replace with real database (PostgreSQL, MongoDB, etc.)

export interface User {
  id: string
  name: string
  email: string
  password: string
  phone?: string
  country?: string
  role: 'USER' | 'ADMIN'
  status: 'active' | 'inactive' | 'suspended'
  joined: string
  bookings: number
  avatar?: string
}

export interface Flight {
  id: number
  airline: string
  flightNumber: string
  origin: string
  destination: string
  departure: string
  arrival: string
  duration: string
  price: number
  seats: number
  status: 'active' | 'scheduled' | 'cancelled'
}

export interface Hotel {
  id: number
  name: string
  location: string
  price: number
  rating: number
  rooms: number
  status: 'active' | 'maintenance'
  amenities: string[]
}

export interface Car {
  id: number
  name: string
  provider: string
  price: number
  type: string
  seats: number
  transmission: string
  status: 'available' | 'booked' | 'maintenance'
}

export interface Tour {
  id: number
  name: string
  location: string
  price: number
  days: number
  rating: number
  status: 'active' | 'inactive'
}

export interface Blog {
  id: number
  title: string
  content: string
  author: string
  date: string
  status: 'published' | 'draft'
}

class Database {
  private static instance: Database
  private initialized = false

  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  // Initialize database with default data if empty
  async initialize() {
    if (this.initialized) return

    // Check if data exists
    const users = localStorage.getItem('db_users')
    const flights = localStorage.getItem('db_flights')
    const hotels = localStorage.getItem('db_hotels')
    const cars = localStorage.getItem('db_cars')
    const tours = localStorage.getItem('db_tours')
    const blogs = localStorage.getItem('db_blogs')

    // Initialize users if empty
    if (!users) {
      const defaultUsers: User[] = [
        {
          id: '1',
          name: 'Admin User',
          email: 'admin@angelwings.com',
          password: 'admin123', // In production, use hashed passwords
          phone: '+1 234-567-8901',
          country: 'USA',
          role: 'ADMIN',
          status: 'active',
          joined: '2026-01-01',
          bookings: 5
        },
        {
          id: '2',
          name: 'John Doe',
          email: 'john@example.com',
          password: 'user123',
          phone: '+1 234-567-8902',
          country: 'USA',
          role: 'USER',
          status: 'active',
          joined: '2026-01-15',
          bookings: 3
        },
        {
          id: '3',
          name: 'Jane Smith',
          email: 'jane@example.com',
          password: 'user123',
          phone: '+1 234-567-8903',
          country: 'UK',
          role: 'USER',
          status: 'active',
          joined: '2026-02-01',
          bookings: 1
        }
      ]
      localStorage.setItem('db_users', JSON.stringify(defaultUsers))
    }

    // Initialize flights if empty
    if (!flights) {
      const defaultFlights: Flight[] = [
        { id: 1, airline: 'Emirates', flightNumber: 'EK202', origin: 'DXB', destination: 'JFK', departure: '08:30', arrival: '14:45', duration: '14h 15m', price: 850, seats: 120, status: 'active' },
        { id: 2, airline: 'Qatar Airways', flightNumber: 'QR123', origin: 'DOH', destination: 'LHR', departure: '09:15', arrival: '14:30', duration: '7h 15m', price: 750, seats: 98, status: 'active' }
      ]
      localStorage.setItem('db_flights', JSON.stringify(defaultFlights))
    }

    // Initialize hotels if empty
    if (!hotels) {
      const defaultHotels: Hotel[] = [
        { id: 1, name: 'Burj Al Arab Jumeirah', location: 'Dubai, UAE', price: 1200, rating: 5, rooms: 202, status: 'active', amenities: ['Pool', 'Spa', 'Beach', 'Restaurant'] },
        { id: 2, name: 'Atlantis The Palm', location: 'Dubai, UAE', price: 850, rating: 5, rooms: 1539, status: 'active', amenities: ['Aquarium', 'Waterpark', 'Beach'] }
      ]
      localStorage.setItem('db_hotels', JSON.stringify(defaultHotels))
    }

    // Initialize cars if empty
    if (!cars) {
      const defaultCars: Car[] = [
        { id: 1, name: 'Toyota Camry', provider: 'Hertz', price: 120, type: 'Sedan', seats: 5, transmission: 'Automatic', status: 'available' },
        { id: 2, name: 'BMW X5', provider: 'Sixt', price: 250, type: 'SUV', seats: 7, transmission: 'Automatic', status: 'available' }
      ]
      localStorage.setItem('db_cars', JSON.stringify(defaultCars))
    }

    // Initialize tours if empty
    if (!tours) {
      const defaultTours: Tour[] = [
        { id: 1, name: 'Dubai City Tour', location: 'Dubai, UAE', price: 199, days: 1, rating: 5, status: 'active' },
        { id: 2, name: 'Safari Adventure', location: 'Dubai, UAE', price: 299, days: 2, rating: 5, status: 'active' }
      ]
      localStorage.setItem('db_tours', JSON.stringify(defaultTours))
    }

    // Initialize blogs if empty
    if (!blogs) {
      const defaultBlogs: Blog[] = [
        { id: 1, title: 'Top 10 Places in Dubai', content: 'Lorem ipsum...', author: 'Admin', date: '2026-02-10', status: 'published' },
        { id: 2, title: 'Travel Tips 2026', content: 'Lorem ipsum...', author: 'Admin', date: '2026-02-05', status: 'published' }
      ]
      localStorage.setItem('db_blogs', JSON.stringify(defaultBlogs))
    }

    this.initialized = true
  }

  // Generic CRUD operations
  async get<T>(collection: string): Promise<T[]> {
    await this.initialize()
    const data = localStorage.getItem(`db_${collection}`)
    return data ? JSON.parse(data) : []
  }

  async getById<T>(collection: string, id: number | string): Promise<T | null> {
    const data = await this.get<T>(collection)
    return data.find((item: any) => item.id === id) || null
  }

  async create<T>(collection: string, item: T): Promise<T> {
    const data = await this.get<T>(collection)
    const newItem = { ...item, id: Date.now() }
    data.push(newItem as any)
    localStorage.setItem(`db_${collection}`, JSON.stringify(data))
    return newItem as T
  }

  async update<T>(collection: string, id: number | string, updates: Partial<T>): Promise<T | null> {
    const data = await this.get<T>(collection)
    const index = data.findIndex((item: any) => item.id === id)
    if (index === -1) return null
    
    data[index] = { ...data[index], ...updates }
    localStorage.setItem(`db_${collection}`, JSON.stringify(data))
    return data[index]
  }

  async delete(collection: string, id: number | string): Promise<boolean> {
    const data = await this.get(collection)
    const filtered = data.filter((item: any) => item.id !== id)
    localStorage.setItem(`db_${collection}`, JSON.stringify(filtered))
    return true
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const users = await this.get<User>('users')
    return users.find(u => u.email === email) || null
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const users = await this.get<User>('users')
    const user = users.find(u => u.email === email && u.password === password)
    return user || null
  }
}

export const db = Database.getInstance()
