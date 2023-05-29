import { StateCreator } from "zustand";
import { UserModel } from "../types/modelTypes";

export type UserSlice = {
  user?: UserModel;
  setUser: (name: string) => void;
  removeUser: () => void;
};

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: undefined,
  setUser: (name) => set(() => ({ user: { name, id: crypto.randomUUID() } })),
  removeUser: () => set(() => ({ user: undefined })),
});