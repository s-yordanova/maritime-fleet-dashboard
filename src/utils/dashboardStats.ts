import { vessels } from "../data/vessels";
import { manningAgents } from "../data/manningAgents";

export const dashboardStats = {
  totalVessels: vessels.length,

  activeVoyages: vessels.length,

  totalManningAgents: manningAgents.length,

  totalPool: manningAgents.reduce((acc, agent) => acc + agent.totalPoolSize, 0),

  crewOnboard: manningAgents.reduce((acc, agent) => acc + agent.crewOnboard, 0),

  crewAvailable: manningAgents.reduce(
    (acc, agent) => acc + agent.crewAvailableAtHome,
    0
  ),

  openPositions: manningAgents.reduce(
    (acc, agent) => acc + agent.openVacancies,
    0
  ),
};
