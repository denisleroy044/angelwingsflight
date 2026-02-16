export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: number;
  stops: number;
  priceEconomy: number;
  priceBusiness?: number;
  priceFirst?: number;
  availableSeats: number;
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  starRating: number;
  description: string;
  amenities: string[];
  images: string[];
  rooms: Room[];
}

export interface Room {
  id: string;
  type: string;
  pricePerNight: number;
  capacity: number;
  availableRooms: number;
}

export interface Car {
  id: string;
  provider: string;
  model: string;
  type: string;
  seats: number;
  transmission: string;
  pricePerDay: number;
  location: string;
}

export interface Booking {
  id: string;
  bookingNumber: string;
  bookingType: 'FLIGHT' | 'HOTEL' | 'CAR';
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  totalPrice: number;
  paymentStatus: 'PENDING' | 'PAID' | 'REFUNDED' | 'FAILED';
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'USER' | 'ADMIN';
}
