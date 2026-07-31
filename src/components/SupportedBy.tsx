import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { confirmedPartners } from '@/lib/partners';

/**
 * "Supported by" credit, placed high on the home page.
 *
 * Play4Ward puts this credit at the foot of its own banner and social posts, so it
 * belongs near the top of the site too — it is the clearest signal of legitimacy a
 * first-time visitor gets. Logos are sized by height so lockups of very different
 * proportions (the IOC bar is ~5.5:1, EdLight ~2.8:1) sit on the same optical line.
 *
 * Renders nothing if there are no logos, so it cannot become an empty band.
 */
export function SupportedBy() {
  const t = useTranslations('home');
  if (confirmedPartners.length === 0) return null;

  return (
    <section className="border-b border-ink/5 bg-white py-8 sm:py-10">
      <div className="wrap flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
        <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink/45">
          {t('supportedBy')}
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {confirmedPartners.map((p) => (
            <li key={p.name} className="flex items-center">
              <Image
                src={p.logo}
                alt={p.name}
                width={p.width}
                height={p.height}
                className="h-7 w-auto sm:h-9"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
