import { Link } from '@/i18n/navigation';

// Wordmark + a small handball / goal-arc mark. Swap for official logo files
// when available (see CONTENT-CHECKLIST.md).
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="Play4Ward — home"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
          <circle cx="20" cy="20" r="18" className="fill-coral" />
          {/* handball seams */}
          <path
            d="M20 3.5c-4 6-4 12 0 16.5M20 3.5c4 6 4 12 0 16.5M6 14c6 1 11 4 14 6M34 14c-6 1-11 4-14 6"
            stroke="#fff"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="2.4" className="fill-white" />
        </svg>
      </span>
      <span
        className={`font-display text-xl font-extrabold tracking-tightest ${
          onDark ? 'text-white' : 'text-ink'
        }`}
      >
        PLAY<span className="text-coral">4</span>WARD
      </span>
    </Link>
  );
}
