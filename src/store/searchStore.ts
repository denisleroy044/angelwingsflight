import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface FlightSearchParams {
  tripType: "oneway" | "round" | "multi";
  origin: string;
  destination: string;
  departDate: Date;
  returnDate?: Date;
  adults: number;
  children: number;
  cabinClass: "economy" | "business" | "first";
}

interface HotelSearchParams {
  destination: string;
  checkIn: Date;
  checkOut: Date;
  rooms: number;
  guests: number;
}

interface CarSearchParams {
  pickupLocation: string;
  pickupDate: Date;
  returnDate: Date;
}

interface SearchState {
  flightParams: FlightSearchParams;
  hotelParams: HotelSearchParams;
  carParams: CarSearchParams;
  setFlightParams: (params: Partial<FlightSearchParams>) => void;
  setHotelParams: (params: Partial<HotelSearchParams>) => void;
  setCarParams: (params: Partial<CarSearchParams>) => void;
  flightResults: any[];
  hotelResults: any[];
  carResults: any[];
  setFlightResults: (results: any[]) => void;
  setHotelResults: (results: any[]) => void;
  setCarResults: (results: any[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useSearchStore = create<SearchState>()(
  devtools((set) => ({
    flightParams: {
      tripType: "round",
      origin: "",
      destination: "",
      departDate: new Date(),
      adults: 1,
      children: 0,
      cabinClass: "economy",
    },
    hotelParams: {
      destination: "",
      checkIn: new Date(),
      checkOut: new Date(Date.now() + 86400000),
      rooms: 1,
      guests: 2,
    },
    carParams: {
      pickupLocation: "",
      pickupDate: new Date(),
      returnDate: new Date(Date.now() + 86400000),
    },
    setFlightParams: (params) =>
      set((state) => ({ flightParams: { ...state.flightParams, ...params } })),
    setHotelParams: (params) =>
      set((state) => ({ hotelParams: { ...state.hotelParams, ...params } })),
    setCarParams: (params) =>
      set((state) => ({ carParams: { ...state.carParams, ...params } })),
    flightResults: [],
    hotelResults: [],
    carResults: [],
    setFlightResults: (results) => set({ flightResults: results }),
    setHotelResults: (results) => set({ hotelResults: results }),
    setCarResults: (results) => set({ carResults: results }),
    loading: false,
    setLoading: (loading) => set({ loading }),
  }))
);
