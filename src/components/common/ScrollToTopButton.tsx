import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-sky-500/30 bg-slate-900/90 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.2)] backdrop-blur transition-all duration-150 hover:-translate-y-1 hover:scale-105 hover:border-sky-400 hover:text-sky-200"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
