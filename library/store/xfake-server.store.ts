import users from "@/assets/data/users";
import { AppTypes } from "@/types";
import { create } from "zustand";

type FakeServerStore = {
  users: AppTypes.UserType[];
  addUser: (user: AppTypes.UserType) => boolean;
  isValidUser: (user: AppTypes.UserType) => string | null;
};

const useFakeServer = create<FakeServerStore>((set, get) => ({
  users,
  addUser(user) {
    set((state) => {
      if (!state.users) state.users = [];
      state.users.push(user);
      return state;
    });
    return true;
  },

  isValidUser(user) {
    const u = get().users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    return u ? u.email : null;
  },
}));

export const useStoreFakeServerAuth = () => {
  //   const users = useFakeServer((state) => state.users);
  const register = useFakeServer((state) => state.addUser);
  const login: (data: { email: string; password: string }) => string | null =
    useFakeServer((state) => state.isValidUser as any);

  return {
    register,
    login,
  };
};
