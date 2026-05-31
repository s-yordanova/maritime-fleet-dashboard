export type VesselType =
  | "Container Ship"
  | "Bulk Carrier"
  | "Oil Tanker"
  | "LNG Carrier";

export interface Vessel {
  id: string;
  name: string;
  imo: string;
  type: VesselType;
  currentPosition: {
    lat: number;
    lng: number;
  };
  destination: string;
  eta: string;
  crewOnboard: number;
  manningAgentId: string;
}
