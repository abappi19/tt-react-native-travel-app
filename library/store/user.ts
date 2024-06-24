import { AppTypes } from "@/types";
import { create } from "zustand";

type UserStore = {
  user: AppTypes.UserType | null;
  bookings: AppTypes.BookingType[];
  updateUser: (user: AppTypes.UserType) => void;
  addToBookings: (booking: AppTypes.BookingType) => void;
};

const useUserStore = create<UserStore>((set) => {
  return {
    user: null,
    bookings: [],
    updateUser(user) {
      set((state) => ({ ...state, user }));
    },
    addToBookings(booking) {
      set((state) => {
        const bookings = state.bookings || [];
        bookings.push(booking);
        return { ...state, bookings };
      });
    },
  };
});

export const useStoreUser = () => {
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);

  return { user, updateUser };
};

export const useStoreUserBookings = () => {
  const bookings = useUserStore((state) => state.bookings);
  const addToBookings = useUserStore((state) => state.addToBookings);

  return { bookings, addToBookings };
};
