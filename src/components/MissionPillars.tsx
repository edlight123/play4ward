import { useTranslations } from 'next-intl';

// Play4Ward's four official pillars. Unlike a sequence, these are four parallel
// commitments — so they're numbered only as visual anchors, and laid out 2×2
// rather than 4-across because the official copy for each runs several lines.
const pillars = ['inclusion', 'youthLeadership', 'empowerment', 'resilience'] as const;

export function MissionPillars() {
  const t = useTranslations('mission');
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {pillars.map((key, i) => (
        <div
          key={key}
          className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-8 shadow-card"
        >
          <span className="font-display text-6xl font-extrabold leading-none text-cream">
            0{i + 1}
          </span>
          <h3 className="mt-4 text-2xl text-blue">{t(`${key}.title`)}</h3>
          <p className="mt-3 leading-relaxed text-ink/75">{t(`${key}.body`)}</p>
          <span className="absolute right-6 top-8 h-3 w-3 rounded-full bg-coral" />
        </div>
      ))}
    </div>
  );
}
