import { create } from "zustand";

interface CrewProfileStore {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useCrewProfileStore = create<CrewProfileStore>((set) => ({
  activeTab: "personal",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
