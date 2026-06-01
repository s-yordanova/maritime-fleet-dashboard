import {
  BriefcaseIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  FlagIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import { crewProfile } from "../../data/crewProfile";

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
}) {
  return (
    <div className="group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-4 transition-all duration-150 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-950/70">
      <div className="rounded-lg bg-white/5 p-2 text-sky-300 transition-transform duration-150 group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <p className="mt-1 font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

export function CrewInfoCards() {
  return (
    <section className="mt-6 grid gap-6 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Personal Information</h2>

          <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-300">
            Profile
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <InfoRow
            icon={UserIcon}
            label="First Name"
            value={crewProfile.firstName}
          />
          <InfoRow
            icon={UserIcon}
            label="Last Name"
            value={crewProfile.lastName}
          />
          <InfoRow
            icon={CalendarDaysIcon}
            label="Date of Birth"
            value={`${crewProfile.dateOfBirth} (${crewProfile.age} years)`}
          />
          <InfoRow
            icon={MapPinIcon}
            label="Place of Birth"
            value={crewProfile.placeOfBirth}
          />
          <InfoRow
            icon={FlagIcon}
            label="Nationality"
            value={crewProfile.nationality}
          />
          <InfoRow icon={PhoneIcon} label="Phone" value={crewProfile.phone} />
          <InfoRow
            icon={EnvelopeIcon}
            label="Email"
            value={crewProfile.email}
          />
          <InfoRow
            icon={HomeIcon}
            label="Address"
            value={crewProfile.address}
          />
          <InfoRow
            icon={IdentificationIcon}
            label="Personal ID"
            value={crewProfile.personalId}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Employment Overview</h2>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            Active Assignment
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <InfoRow
            icon={BriefcaseIcon}
            label="Employer"
            value={crewProfile.employer}
          />
          <InfoRow icon={UserIcon} label="Rank" value={crewProfile.rank} />
          <InfoRow
            icon={BriefcaseIcon}
            label="Vessel Type"
            value={crewProfile.vesselType}
          />
          <InfoRow
            icon={BriefcaseIcon}
            label="Current Vessel"
            value={crewProfile.currentVessel}
          />
          <InfoRow
            icon={BriefcaseIcon}
            label="Last Vessel"
            value={crewProfile.lastVessel}
          />
          <InfoRow
            icon={BriefcaseIcon}
            label="Next Vessel"
            value={crewProfile.nextVessel}
          />
          <InfoRow
            icon={MapPinIcon}
            label="Airport"
            value={crewProfile.airport}
          />
          <InfoRow
            icon={BriefcaseIcon}
            label="Assigned Agent"
            value={crewProfile.assignedAgent}
          />
        </div>
      </motion.div>
    </section>
  );
}
