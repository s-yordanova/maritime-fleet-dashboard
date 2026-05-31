import type { Vessel } from "../types/vessel";

export const vessels: Vessel[] = [
  {
    id: "vessel-1",
    name: "MV Aurora",
    imo: "9319466",
    type: "Container Ship",
    currentPosition: { lat: 8.5, lng: 93.5 },
    destination: "Singapore",
    eta: "2026-06-03 14:30",
    crewOnboard: 22,
    manningAgentId: "agent-5",
  },

  {
    id: "vessel-2",
    name: "MV Neptune",
    imo: "9234567",
    type: "Bulk Carrier",
    currentPosition: { lat: 59.5, lng: -8.5 },
    destination: "Rotterdam",
    eta: "2026-06-05 09:15",
    crewOnboard: 24,
    manningAgentId: "agent-6",
  },

  {
    id: "vessel-3",
    name: "MT Ocean Star",
    imo: "9456781",
    type: "Oil Tanker",
    currentPosition: { lat: 22.5, lng: -84.5 },
    destination: "Houston",
    eta: "2026-06-07 18:00",
    crewOnboard: 28,
    manningAgentId: "agent-7",
  },

  {
    id: "vessel-4",
    name: "MV Horizon",
    imo: "9345678",
    type: "Container Ship",
    currentPosition: { lat: 20.0, lng: 132.0 },
    destination: "Shanghai",
    eta: "2026-06-04 06:45",
    crewOnboard: 21,
    manningAgentId: "agent-8",
  },

  {
    id: "vessel-5",
    name: "MV Black Sea Pearl",
    imo: "9123456",
    type: "Bulk Carrier",
    currentPosition: { lat: 43.8, lng: 33.5 },
    destination: "Varna",
    eta: "2026-06-02 11:20",
    crewOnboard: 20,
    manningAgentId: "agent-2",
  },

  {
    id: "vessel-6",
    name: "MT Aegean Spirit",
    imo: "9567890",
    type: "Oil Tanker",
    currentPosition: { lat: 31.5, lng: 32.5 },
    destination: "Piraeus",
    eta: "2026-06-06 16:10",
    crewOnboard: 27,
    manningAgentId: "agent-3",
  },

  {
    id: "vessel-7",
    name: "LNG Pacific Grace",
    imo: "9678901",
    type: "LNG Carrier",
    currentPosition: { lat: 24.0, lng: 136.5 },
    destination: "Manila",
    eta: "2026-06-08 07:30",
    crewOnboard: 31,
    manningAgentId: "agent-1",
  },

  {
    id: "vessel-8",
    name: "MV Indian Ocean",
    imo: "9789012",
    type: "Container Ship",
    currentPosition: { lat: 8.0, lng: 58.0 },
    destination: "Mumbai",
    eta: "2026-06-09 22:00",
    crewOnboard: 23,
    manningAgentId: "agent-4",
  },
];
