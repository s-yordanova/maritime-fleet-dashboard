import {
  EyeIcon,
  PencilSquareIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export function CrewActionBar() {
  return (
    <motion.div
      className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-wrap gap-3">
        <button className="inline-flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 transition-all duration-150 hover:-translate-y-1 hover:bg-sky-500/20">
          <PencilSquareIcon className="h-4 w-4" />
          Edit Profile
        </button>

        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-150 hover:-translate-y-1 hover:border-sky-500/40 hover:text-white">
          <EyeIcon className="h-4 w-4" />
          360 View
        </button>
      </div>

      <motion.label
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.12,
        }}
        className="flex cursor-pointer items-center gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300"
      >
        <BellAlertIcon className="h-4 w-4" />

        <span>Document Expiry Reminders</span>

        <span className="relative h-5 w-9 rounded-full bg-amber-400/30">
          <span className="absolute right-1 top-1 h-3 w-3 rounded-full bg-amber-300" />
        </span>
      </motion.label>
    </motion.div>
  );
}
