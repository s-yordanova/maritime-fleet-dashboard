import { motion } from "framer-motion";

import { crewProfile } from "../../data/crewProfile";
import { cards } from "../../constants/crewStats";

export function CrewAvailability() {
  const availability = crewProfile.availability;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Availability & Assignment
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Current assignment status and recent availability history
          </p>
        </div>

        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          {availability.status}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.35,
              }}
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
            >
              <div className={`mb-3 w-fit rounded-xl p-2 ${card.color}`}>
                <Icon className="h-5 w-5" />
              </div>

              <p className="text-sm text-slate-400">{card.title}</p>

              <h3 className="mt-2 text-lg font-bold text-white">
                {card.value}
              </h3>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-end">
        <button className="rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 transition hover:bg-sky-500/20">
          View Assignment History
        </button>
      </div>
    </motion.section>
  );
}
