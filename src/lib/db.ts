import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Booking functions
export async function createBooking(data: any) {
  try {
    const booking = await prisma.booking.create({
      data: {
        bookingNumber: 'BK' + Date.now().toString().slice(-8),
        userId: data.userId,
        bookingType: data.bookingType,
        totalPrice: data.totalPrice,
        status: 'PENDING',
        paymentStatus: 'PENDING',
        flightId: data.flightId,
        hotelId: data.hotelId,
        carId: data.carId,
        checkInDate: data.checkInDate,
        checkOutDate: data.checkOutDate,
        passengers: data.passengers || {},
      },
      include: {
        flight: true,
        hotel: true,
        car: true,
      }
    })
    return { success: true, booking }
  } catch (error) {
    console.error('Error creating booking:', error)
    return { success: false, error }
  }
}

export async function getUserBookings(userId: string) {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId },
      include: {
        flight: true,
        hotel: true,
        car: true,
      },
      orderBy: { createdAt: 'desc' }
    })
    return { success: true, bookings }
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return { success: false, error }
  }
}

export async function updateBookingStatus(bookingId: string, status: string) {
  try {
    const booking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status: status as any }
    })
    return { success: true, booking }
  } catch (error) {
    console.error('Error updating booking:', error)
    return { success: false, error }
  }
}

export async function getAllBookings() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        user: true,
        flight: true,
        hotel: true,
        car: true,
      },
      orderBy: { createdAt: 'desc' }
    })
    return { success: true, bookings }
  } catch (error) {
    console.error('Error fetching all bookings:', error)
    return { success: false, error }
  }
}
