import Image from 'next/image';
import { Link } from '@/i18n/navigation';

// Play4Ward's official logo lockup (mark + wordmark), from the organization's
// brand files. The mark's player silhouette is black, so on dark backgrounds the
// lockup sits in a white pill rather than being recoloured — this keeps the
// official blue/gold wordmark intact instead of flattening it to one colour.
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center"
      aria-label="Play4Ward — home"
    >
      <span
        className={
          onDark
            ? 'inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-sm'
            : 'inline-flex items-center'
        }
      >
        <Image
          src="/logo-play4ward.png"
          alt="Play4Ward"
          width={1200}
          height={638}
          priority
          className="h-11 w-auto sm:h-12"
        />
      </span>
    </Link>
  );
}
