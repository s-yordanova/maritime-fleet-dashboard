import { dashboardStats } from "../../utils/dashboardStats";
import { CountUp } from "./CountUp";

export function SummaryCards() {
  const cards = [
    {
      title: "Total Vessels",
      value: dashboardStats.totalVessels,
    },
    {
      title: "Active Voyages",
      value: dashboardStats.activeVoyages,
    },
    {
      title: "Manning Agents",
      value: dashboardStats.totalManningAgents,
    },
    {
      title: "Total Pool",
      value: dashboardStats.totalPool,
    },
    {
      title: "Crew Onboard",
      value: dashboardStats.crewOnboard,
    },
    {
      title: "Crew Available",
      value: dashboardStats.crewAvailable,
    },
    {
      title: "Open Positions",
      value: dashboardStats.openPositions,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-7">
      {cards.map((card) => (
        <div
          key={card.title}
          className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/40 backdrop-blur transition duration-300 hover:-translate-y-2 hover:scale-[1.02] transition-all hover:border-sky-500/40 hover:shadow-sky-950/40"
        >
          <p className="text-sm text-slate-400">{card.title}</p>

          <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
            <CountUp end={card.value} />
          </h3>
        </div>
      ))}
    </div>
  );
}
