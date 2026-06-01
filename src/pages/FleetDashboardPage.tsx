import { motion } from "framer-motion";
import { DetailsPanel } from "../components/dashboard/DetailsPanel";
import { FleetTicker } from "../components/dashboard/FleetTicker";
import { SummaryCards } from "../components/dashboard/SummaryCards";
import { FleetMap } from "../components/map/FleetMap";
import { Link } from "react-router-dom";

const FleetDashboardPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1600px] p-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-4xl font-black tracking-tight text-white">
              Global Fleet Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              Real-time vessel and workforce overview
            </p>
          </div>

          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-sm text-emerald-300">Live Operations</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <SummaryCards />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]"
        >
          <FleetMap />
          <DetailsPanel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <FleetTicker />
        </motion.div>
        <div className="mt-10 flex justify-end">
          <Link
            to="/crew-profile"
            className="rounded-xl border border-sky-500/30 bg-sky-500/10 px-5 py-3 text-sm font-medium text-sky-300 transition-all duration-150 hover:-translate-y-1 hover:bg-sky-500/20"
          >
            View Crew Profile Redesign →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FleetDashboardPage;
