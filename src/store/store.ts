import { create } from "zustand";
import { UserSlice, createUserSlice } from "./userSlice";

type StoresTypes = UserSlice;

export const useAppStore = create<StoresTypes>()((...a) => ({
  ...createUserSlice(...a),
}));
