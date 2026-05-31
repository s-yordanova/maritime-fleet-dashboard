import { useDashboardStore } from "../../store/dashboardStore";

export function SelectedVesselCard() {
  const { selectedVessel } = useDashboardStore();

  if (!selectedVessel) return null;

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-4 text-xl font-semibold">{selectedVessel.name}</h2>

      <div className="space-y-2 text-sm">
        <p>IMO: {selectedVessel.imo}</p>

        <p>Type: {selectedVessel.type}</p>

        <p>Destination: {selectedVessel.destination}</p>

        <p>ETA: {selectedVessel.eta}</p>

        <p>Crew onboard: {selectedVessel.crewOnboard}</p>
      </div>
    </div>
  );
}
