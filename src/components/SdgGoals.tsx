import { useTranslations } from 'next-intl';

/**
 * The three UN Sustainable Development Goals Play4Ward works toward.
 *
 * Each goal is keyed by its official UN number and rendered with that goal's
 * official brand colour. The colours are real; the UN's icon artwork is not
 * bundled, so nothing here impersonates an official SDG badge — if Play4Ward
 * obtains the icon files, drop them in beside the number.
 */
const GOAL_COLORS: Record<string, string> = {
  '3': '#4C9F38', // Good health and well-being
  '5': '#FF3A21', // Gender equality
  '10': '#DD1367', // Reduced inequalities
};

export function SdgGoals() {
  const t = useTranslations('impact.sdg');
  const items = t.raw('items') as { number: string; title: string; body: string }[];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((goal) => (
        <div
          key={goal.number}
          className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card"
        >
          <div
            className="flex items-baseline gap-2 px-6 py-5 text-white"
            style={{ backgroundColor: GOAL_COLORS[goal.number] ?? '#123a6b' }}
          >
            <span className="font-display text-4xl font-extrabold leading-none">
              {goal.number}
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] opacity-90">
              {t('abbr')} {goal.number}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl text-blue">{goal.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{goal.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
