import { Link } from '@/i18n/navigation';

// Play4Ward's official logo (pulled from their Instagram profile).
// NOTE: this is a low-resolution (100×100) copy — the only version available
// without logging in. For crisp display and a transparent/dark-bg version,
// replace public/play4ward-logo.jpg with the original logo files.
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label="Play4Ward — home"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/play4ward-logo.jpg"
          alt="Play4Ward"
          width={100}
          height={100}
          className="h-full w-full object-contain"
        />
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
