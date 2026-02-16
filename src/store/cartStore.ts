import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { toast } from 'react-hot-toast'
import { createBooking, getUserBookings } from '@/lib/db'

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
  bookings: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
  checkout: (userId: string) => Promise<{ success: boolean; bookingId?: string }>
  loadUserBookings: (userId: string) => Promise<void>
  updateBookingStatus: (bookingId: string, status: string) => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      bookings: [],
      
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

      checkout: async (userId: string) => {
        const items = get().items
        if (items.length === 0) {
          toast.error('Your cart is empty')
          return { success: false }
        }

        try {
          // Create booking in database
          const bookingPromises = items.map(async (item) => {
            const bookingData = {
              userId,
              bookingType: item.type.toUpperCase(),
              totalPrice: item.price * item.quantity,
              flightId: item.type === 'flight' ? item.id : null,
              hotelId: item.type === 'hotel' ? item.id : null,
              carId: item.type === 'car' ? item.id : null,
              passengers: item.details,
              checkInDate: item.date ? new Date(item.date) : null,
            }
            
            const result = await createBooking(bookingData)
            return result
          })

          const results = await Promise.all(bookingPromises)
          
          if (results.every(r => r.success)) {
            // Clear cart
            set({ items: [] })
            toast.success('Checkout successful! Your booking is pending confirmation.')
            
            // Reload bookings
            await get().loadUserBookings(userId)
            
            return { success: true, bookingId: results[0].booking?.id }
          } else {
            toast.error('Checkout failed. Please try again.')
            return { success: false }
          }
        } catch (error) {
          console.error('Checkout error:', error)
          toast.error('Checkout failed. Please try again.')
          return { success: false }
        }
      },

      loadUserBookings: async (userId: string) => {
        try {
          const result = await getUserBookings(userId)
          if (result.success && result.bookings) {
            // Convert database bookings to CartItem format
            const bookings = result.bookings.map((b: any) => ({
              id: b.id,
              bookingId: b.bookingNumber,
              type: b.bookingType.toLowerCase(),
              name: b.flight?.airline || b.hotel?.name || b.car?.model || 'Booking',
              price: b.totalPrice,
              quantity: 1,
              status: b.status.toLowerCase(),
              date: b.checkInDate,
              details: b,
              image: b.flight?.image || b.hotel?.image || b.car?.image,
            }))
            set({ bookings })
          }
        } catch (error) {
          console.error('Error loading bookings:', error)
        }
      },

      updateBookingStatus: (bookingId, status) => {
        // This will be handled by API call
        toast.success(`Booking ${status}`)
      }
    }),
    {
      name: 'cart-storage'
    }
  )
)
