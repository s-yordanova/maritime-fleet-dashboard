import {
  IdentificationIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import { crewProfile } from "../../data/crewProfile";
import { heroStats, miniStats } from "../../constants/crewStats";

export function CrewHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-sky-500/20 bg-slate-900/80 p-6 shadow-[0_0_40px_rgba(56,189,248,0.08)] backdrop-blur"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 120,
              }}
              className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl border border-sky-500/30 bg-sky-500/10 text-sky-300 shadow-[0_0_30px_rgba(56,189,248,0.2)]"
            >
              <UserCircleIcon className="h-16 w-16" />

              <motion.span
                className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-slate-900 bg-emerald-400"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
                <ShieldCheckIcon className="h-4 w-4" />
                {crewProfile.status}
              </div>

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="text-4xl font-black tracking-tight text-white"
              >
                {crewProfile.name}
              </motion.h1>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-medium text-sky-300">
                  <IdentificationIcon className="h-4 w-4" />
                  {crewProfile.rank}
                </span>

                <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                  <span>ID: {crewProfile.id}</span>

                  <span>•</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-slate-300">
                    <img
                      src="https://flagcdn.com/w20/bg.png"
                      alt="Bulgaria"
                      className="h-3 w-5 rounded-sm"
                    />
                    <span>{crewProfile.nationality}</span>
                  </span>

                  <span>•</span>

                  <span>Personal ID: {crewProfile.personalId}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2 xl:w-[620px] xl:grid-cols-4">
            {heroStats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-950"
                >
                  <div
                    className={`mb-4 rounded-xl bg-white/5 p-2 ${item.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="text-xs text-slate-400">{item.label}</p>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    {item.value}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-3 border-t border-slate-800 pt-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          {miniStats.map(([label, value], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + index * 0.05,
                duration: 0.3,
              }}
              className="rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-950"
            >
              <p className="text-xs text-slate-500">{label}</p>
              <p className="mt-1 text-sm font-semibold text-slate-200">
                {value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
