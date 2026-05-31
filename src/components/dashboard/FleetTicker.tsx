import { vessels } from "../../data/vessels";

export function FleetTicker() {
  const tickerItems = vessels.map(
    (vessel) => `${vessel.name} → ${vessel.destination}`
  );

  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-3">
        <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
          Fleet Activity
        </span>
      </div>
      <div className="flex w-max animate-[ticker_35s_linear_infinite] gap-8 px-6 py-4">
        {repeatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="whitespace-nowrap text-sm text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
