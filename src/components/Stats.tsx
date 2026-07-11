import { GoalArc } from './GoalArc';

/**
 * ImpactStrip — the honest fallback per the brief: no invented numbers.
 * Shows a single confident statement until Play4Ward can document real metrics.
 */
export function ImpactStrip({ message }: { message: string }) {
  return (
    <section className="relative overflow-hidden bg-ink py-12 text-white court-lines">
      <GoalArc
        className="pointer-events-none absolute -bottom-8 left-6 h-32 w-64 text-white/10"
        strokeWidth={1.5}
      />
      <div className="wrap relative flex items-center justify-center">
        <p className="max-w-3xl text-center font-display text-xl font-bold leading-snug sm:text-2xl">
          {message}
        </p>
      </div>
    </section>
  );
}

/**
 * StatGrid — metric slots for the Impact page. Values are [REPLACE] markers
 * until Play4Ward confirms documented numbers.
 */
export function StatGrid({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div key={i} className="rounded-2xl bg-white p-6 text-center shadow-card">
          <div className="font-display text-4xl font-extrabold text-coral sm:text-5xl">
            {s.value}
          </div>
          <div className="mt-2 text-sm font-semibold leading-tight text-ink/70">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
