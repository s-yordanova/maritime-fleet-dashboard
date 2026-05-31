export interface ManningAgent {
  id: string;
  name: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  totalPoolSize: number;
  activeSeafarers: number;
  crewOnboard: number;
  crewAvailableAtHome: number;
  cadets: number;
  openVacancies: number;
}
