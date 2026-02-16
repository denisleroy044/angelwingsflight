import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserState {
  profile: any | null;
  bookings: any[];
  notifications: any[];
  setProfile: (profile: any) => void;
  setBookings: (bookings: any[]) => void;
  addNotification: (notification: any) => void;
  markNotificationRead: (id: string) => void;
}

export const useUserStore = create<UserState>()(
  devtools((set) => ({
    profile: null,
    bookings: [],
    notifications: [],
    setProfile: (profile) => set({ profile }),
    setBookings: (bookings) => set({ bookings }),
    addNotification: (notification) =>
      set((state) => ({ notifications: [...state.notifications, notification] })),
    markNotificationRead: (id) =>
      set((state) => ({
        notifications: state.notifications.map((n) =>
          n.id === id ? { ...n, read: true } : n
        )
      })),
  }))
);
