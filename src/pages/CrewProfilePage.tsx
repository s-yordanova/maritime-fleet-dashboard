import { useEffect } from "react";
import { CrewActionBar } from "../components/crew/CrewActionBar";
import { CrewAvailability } from "../components/crew/CrewAvailability";
import { CrewHero } from "../components/crew/CrewHero";
import { CrewInfoCards } from "../components/crew/CrewInfoCards";
import { CrewNavigation } from "../components/crew/CrewNavigation";
import { useCrewProfileStore } from "../store/crewProfileStore";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { ScrollToTopButton } from "../components/common/ScrollToTopButton";

export function CrewProfilePage() {
  const navigate = useNavigate();
  const { activeTab } = useCrewProfileStore();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-[1600px] p-6">
        <button
          onClick={() => navigate("/")}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur transition-all duration-150 hover:-translate-y-1 hover:border-sky-500/40 hover:text-white"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Fleet Dashboard
        </button>
        <CrewHero />
        <CrewNavigation />
        <CrewActionBar />
        {activeTab === "personal" && (
          <>
            <CrewInfoCards />
            <CrewAvailability />
          </>
        )}
        <ScrollToTopButton />
      </main>
    </div>
  );
}
