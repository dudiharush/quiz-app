import { useAppStore } from "./store";

export const useUser = () => useAppStore(state=>state.user);