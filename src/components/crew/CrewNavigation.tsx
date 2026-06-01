import clsx from "clsx";
import { useCrewProfileStore } from "../../store/crewProfileStore";
import { tabs } from "../../constants/crewTabs";
import { motion } from "framer-motion";

export function CrewNavigation() {
  const { activeTab, setActiveTab } = useCrewProfileStore();

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <motion.div
        className="mt-6 flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-150 hover:-translate-y-1",
                activeTab === tab.id
                  ? "border-sky-500/40 bg-sky-500/10 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
                  : "border-slate-800 bg-slate-950/40 text-slate-400 hover:border-sky-500/40 hover:text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}
