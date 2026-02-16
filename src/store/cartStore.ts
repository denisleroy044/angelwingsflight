import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { toast } from 'react-hot-toast'

export interface CartItem {
  id: string
  type: 'flight' | 'hotel' | 'car' | 'tour'
  name: string
  description?: string
  price: number
  currency: string
  quantity: number
  image?: string
  details: any
  date?: string
  bookingId?: string
  status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
  checkout: () => Promise<{ success: boolean; bookingId?: string }>
  loadBookings: () => CartItem[]
  updateBookingStatus: (bookingId: string, status: 'pending' | 'confirmed' | 'cancelled' | 'completed') => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        const items = get().items
        const existingItem = items.find(i => i.id === item.id)
        
        if (existingItem) {
          set({
            items: items.map(i =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            )
          })
          toast.success(`Added another ${item.name} to cart`)
        } else {
          set({ items: [...items, { ...item, quantity: 1 }] })
          toast.success(`${item.name} added to cart`)
        }
      },
      
      removeItem: (id) => {
        const item = get().items.find(i => i.id === id)
        set({ items: get().items.filter(item => item.id !== id) })
        if (item) {
          toast.success(`${item.name} removed from cart`)
        }
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }
        set({
          items: get().items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        })
      },
      
      clearCart: () => {
        set({ items: [] })
        toast.success('Cart cleared')
      },
      
      getTotal: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
      
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },

      checkout: async () => {
        const items = get().items
        if (items.length === 0) {
          toast.error('Your cart is empty')
          return { success: false }
        }

        // Generate booking ID
        const bookingId = 'BK' + Date.now().toString().slice(-8)
        
        // Update items with booking ID and status
        const bookedItems = items.map(item => ({
          ...item,
          bookingId,
          status: 'pending' as const,
          bookedAt: new Date().toISOString()
        }))

        // Save to localStorage as bookings
        const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
        localStorage.setItem('bookings', JSON.stringify([...existingBookings, ...bookedItems]))

        // Clear cart
        set({ items: [] })
        
        toast.success('Checkout successful! Booking is pending confirmation.')
        return { success: true, bookingId }
      },

      loadBookings: () => {
        try {
          const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
          return bookings
        } catch {
          return []
        }
      },

      updateBookingStatus: (bookingId, status) => {
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
        const updatedBookings = bookings.map((booking: CartItem) => 
          booking.bookingId === bookingId ? { ...booking, status } : booking
        )
        localStorage.setItem('bookings', JSON.stringify(updatedBookings))
        
        // If this is an admin action, show toast
        toast.success(`Booking ${status} successfully`)
        
        // Trigger storage event for other tabs
        window.dispatchEvent(new Event('storage'))
      }
    }),
    {
      name: 'cart-storage'
    }
  )
)
