/**
 * ImagePlaceholder — a deliberately neutral, clearly-labelled stand-in for a
 * real photo. No stock imagery ships with the site; every block names the
 * asset Play4Ward should drop in. See CONTENT-CHECKLIST.md.
 */
export function ImagePlaceholder({
  label,
  className = '',
  ratio = 'aspect-[4/3]',
  tone = 'blue',
}: {
  label: string;
  className?: string;
  ratio?: string;
  tone?: 'blue' | 'coral' | 'gold' | 'sand';
}) {
  const tones = {
    blue: 'bg-blue/10 text-blue border-blue/20',
    coral: 'bg-coral/10 text-coral-600 border-coral/20',
    gold: 'bg-gold/15 text-gold-600 border-gold/30',
    sand: 'bg-cream text-ink/60 border-ink/10',
  } as const;

  return (
    <div
      className={`relative flex ${ratio} w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed ${tones[tone]} ${className}`}
      role="img"
      aria-label={`Placeholder image: ${label}`}
    >
      {/* faint court-line texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, currentColor 0 1px, transparent 1px 22px)',
        }}
        aria-hidden="true"
      />
      <div className="relative flex max-w-[85%] flex-col items-center gap-2 text-center">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="8.5" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M4 17l4.5-4 3 2.5L16 11l4 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-display text-xs font-bold uppercase tracking-[0.15em]">
          {label}
        </span>
      </div>
    </div>
  );
}
