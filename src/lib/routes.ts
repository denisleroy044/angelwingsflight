// Centralized route definitions for the entire application
// Use this file to manage all routes in one place

export const ROUTES = {
  // Public routes
  HOME: '/',
  ABOUT: '/about',
  BLOGS: '/blogs',
  CARS: '/cars',
  CARS_RESULTS: '/cars/results',
  CART: '/cart',
  CHECKOUT: '/checkout',
  CONTACT: '/contact',
  COOKIES_POLICY: '/cookies-policy',
  FAQ: '/faq',
  FLIGHTS: '/flights',
  FLIGHTS_RESULTS: '/flights/results',
  HOTELS: '/hotels',
  HOTELS_RESULTS: '/hotels/results',
  HOW_TO_BOOK: '/how-to-book',
  LOGIN: '/login',
  MORE_SERVICES: '/more-services',
  PRIVACY: '/privacy',
  REGISTER: '/register',
  SIGNUP: '/signup',
  SUPPLIER: '/supplier',
  TERMS: '/terms',
  TOURS: '/tours',
  TOURS_RESULTS: '/tours/results',
  VERIFY_OTP: '/verify-otp',
  BOOKING_CONFIRMATION: '/booking/confirmation',
  
  // User account routes
  ACCOUNT: '/account',
  ACCOUNT_DASHBOARD: '/account/dashboard',
  ACCOUNT_BOOKINGS: '/account/bookings',
  ACCOUNT_WISHLIST: '/account/wishlist',
  ACCOUNT_PAYMENTS: '/account/payments',
  ACCOUNT_SETTINGS: '/account/settings',
  
  // Admin routes
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_FLIGHTS: '/admin/flights',
  ADMIN_HOTELS: '/admin/hotels',
  ADMIN_CARS: '/admin/cars',
  ADMIN_TOURS: '/admin/tours',
  ADMIN_BOOKINGS: '/admin/bookings',
  ADMIN_BLOGS: '/admin/blogs',
  ADMIN_SETTINGS: '/admin/settings',
} as const

// Helper type for routes
export type Route = typeof ROUTES[keyof typeof ROUTES]

// Helper function to check if a string is a valid route
export function isValidRoute(path: string): boolean {
  return Object.values(ROUTES).includes(path as Route)
}
