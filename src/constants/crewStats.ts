import {
  BanknotesIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { crewProfile } from "../data/crewProfile";

export const heroStats = [
  {
    label: "Current Vessel",
    value: crewProfile.currentVessel,
    icon: GlobeAltIcon,
    color: "text-sky-300",
  },
  {
    label: "Salary",
    value: `$${crewProfile.salary.toLocaleString()}`,
    icon: BanknotesIcon,
    color: "text-emerald-300",
  },
  {
    label: "Contract",
    value: crewProfile.contractDuration,
    icon: CalendarDaysIcon,
    color: "text-violet-300",
  },
  {
    label: "Risk Factor",
    value: crewProfile.riskFactor,
    icon: ExclamationTriangleIcon,
    color: "text-amber-300",
  },
];

export const miniStats = [
  ["Next Vessel", crewProfile.nextVessel],
  ["Promotions", crewProfile.promotions],
  ["Performance", crewProfile.performance],
  ["Avg Travel Time", crewProfile.averageTravelTime],
  ["Avg Travel Cost", crewProfile.averageTravelCost],
  ["Age", crewProfile.age],
  ["Exp. in Rank", crewProfile.experienceInRank],
  ["Avg Home Duration", crewProfile.averageHomeDuration],
];

export const cards = [
  {
    title: "Available From",
    value: crewProfile.availability.availableFrom,
    icon: CalendarDaysIcon,
    color: "text-sky-300 bg-sky-500/10",
  },
  {
    title: "Assignment Date",
    value: crewProfile.availability.assignmentDate,
    icon: ClockIcon,
    color: "text-violet-300 bg-violet-500/10",
  },
  {
    title: "Current Vessel",
    value: crewProfile.availability.currentVessel,
    icon: GlobeAltIcon,
    color: "text-emerald-300 bg-emerald-500/10",
  },
];
