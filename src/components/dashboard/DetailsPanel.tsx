import { useDashboardStore } from "../../store/dashboardStore";
import { motion } from "framer-motion";

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-800 py-3 text-sm">
      <span className="text-slate-400">{label}</span>
      <span className="text-right font-medium text-white">{value}</span>
    </div>
  );
}

export function DetailsPanel() {
  const { selectedVessel, selectedAgent } = useDashboardStore();

  if (!selectedVessel && !selectedAgent) {
    return (
      <motion.aside
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          Overview
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          Fleet Information
        </h2>

        <p className="mt-4 text-sm leading-6 text-slate-400">
          Select a vessel or manning agent on the map to view detailed
          operational information.
        </p>
      </motion.aside>
    );
  }

  if (selectedVessel) {
    return (
      <motion.aside
        key={selectedVessel.id}
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl border border-sky-500/30 bg-slate-900 p-6 shadow-2xl shadow-sky-950/30"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />

          <span className="text-xs uppercase tracking-wider text-sky-300">
            Active Voyage
          </span>
        </div>
        <p className="text-sm uppercase tracking-[0.2em] text-sky-400">
          Vessel
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          {selectedVessel.name}
        </h2>

        <div className="mt-3 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
          {selectedVessel.type}
        </div>

        <div className="mt-6">
          <DetailRow label="IMO Number" value={selectedVessel.imo} />
          <DetailRow label="Destination" value={selectedVessel.destination} />
          <DetailRow label="ETA" value={selectedVessel.eta} />
          <DetailRow label="Crew Onboard" value={selectedVessel.crewOnboard} />
          <DetailRow
            label="Latitude"
            value={selectedVessel.currentPosition.lat}
          />
          <DetailRow
            label="Longitude"
            value={selectedVessel.currentPosition.lng}
          />
        </div>

        <div className="mt-6 rounded-xl border border-sky-500/20 bg-sky-500/5 p-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-slate-300">Crew Utilization</span>
            <span className="font-semibold text-sky-300">
              {Math.round((selectedVessel.crewOnboard / 32) * 100)}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.8)]"
              style={{
                width: `${Math.round((selectedVessel.crewOnboard / 32) * 100)}%`,
              }}
            />
          </div>

          <p className="mt-3 text-xs text-slate-500">
            {selectedVessel.crewOnboard} crew onboard / 32 operational capacity
          </p>
        </div>
      </motion.aside>
    );
  }

  if (selectedAgent) {
    return (
      <motion.aside
        key={selectedAgent.id}
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl border border-emerald-500/30 bg-slate-900 p-6 shadow-2xl shadow-emerald-950/30"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

          <span className="text-xs uppercase tracking-wider text-emerald-300">
            Manning Office
          </span>
        </div>
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
          Manning Agent
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          {selectedAgent.name}
        </h2>

        <div className="mt-3 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          {selectedAgent.city}, {selectedAgent.country}
        </div>

        <div className="mt-6">
          <DetailRow
            label="Total Pool Size"
            value={selectedAgent.totalPoolSize}
          />
          <DetailRow
            label="Active Seafarers"
            value={selectedAgent.activeSeafarers}
          />
          <DetailRow label="Crew Onboard" value={selectedAgent.crewOnboard} />
          <DetailRow
            label="Available at Home"
            value={selectedAgent.crewAvailableAtHome}
          />
          <DetailRow label="Cadets" value={selectedAgent.cadets} />
          <DetailRow
            label="Open Vacancies"
            value={selectedAgent.openVacancies}
          />

          <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-slate-300">Pool Deployment</span>
              <span className="font-semibold text-emerald-300">
                {Math.round(
                  (selectedAgent.crewOnboard / selectedAgent.totalPoolSize) *
                    100
                )}
                %
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]"
                style={{
                  width: `${Math.round(
                    (selectedAgent.crewOnboard / selectedAgent.totalPoolSize) *
                      100
                  )}%`,
                }}
              />
            </div>

            <p className="mt-3 text-xs text-slate-500">
              {selectedAgent.crewOnboard} onboard from{" "}
              {selectedAgent.totalPoolSize} total pool
            </p>
          </div>
        </div>
      </motion.aside>
    );
  }

  return null;
}
