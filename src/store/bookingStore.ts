import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Passenger {
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  passportNumber?: string;
  nationality?: string;
}

interface BookingState {
  currentBooking: any | null;
  passengers: Passenger[];
  extras: any[];
  addPassenger: (passenger: Passenger) => void;
  removePassenger: (index: number) => void;
  updatePassenger: (index: number, passenger: Passenger) => void;
  setBooking: (booking: any) => void;
  clearBooking: () => void;
  addExtra: (extra: any) => void;
  removeExtra: (index: number) => void;
}

export const useBookingStore = create<BookingState>()(
  devtools((set) => ({
    currentBooking: null,
    passengers: [],
    extras: [],
    addPassenger: (passenger) => 
      set((state) => ({ passengers: [...state.passengers, passenger] })),
    removePassenger: (index) =>
      set((state) => ({ 
        passengers: state.passengers.filter((_, i) => i !== index) 
      })),
    updatePassenger: (index, passenger) =>
      set((state) => ({
        passengers: state.passengers.map((p, i) => i === index ? passenger : p)
      })),
    setBooking: (booking) => set({ currentBooking: booking }),
    clearBooking: () => set({ currentBooking: null, passengers: [], extras: [] }),
    addExtra: (extra) => set((state) => ({ extras: [...state.extras, extra] })),
    removeExtra: (index) => set((state) => ({ extras: state.extras.filter((_, i) => i !== index) })),
  }))
);
