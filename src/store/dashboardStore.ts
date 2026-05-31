import { create } from "zustand";
import type { Vessel } from "../types/vessel";
import type { ManningAgent } from "../types/manningAgent";

interface DashboardStore {
  selectedVessel: Vessel | null;
  selectedAgent: ManningAgent | null;

  setSelectedVessel: (vessel: Vessel | null) => void;
  setSelectedAgent: (agent: ManningAgent | null) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  selectedVessel: null,
  selectedAgent: null,

  setSelectedVessel: (vessel) =>
    set({
      selectedVessel: vessel,
      selectedAgent: null,
    }),

  setSelectedAgent: (agent) =>
    set({
      selectedAgent: agent,
      selectedVessel: null,
    }),
}));
