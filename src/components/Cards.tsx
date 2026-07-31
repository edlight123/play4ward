import { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Photo } from './Photo';

/* ---- ProgramCard ---------------------------------------------------- */
export function ProgramCard({
  index,
  title,
  description,
  href,
  cta,
  photoLabel,
  photoSrc,
}: {
  index: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  photoLabel: string;
  /** Real photo, where Play4Ward has one. Falls back to a labelled placeholder. */
  photoSrc?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
    >
      {photoSrc ? (
        <Photo
          src={photoSrc}
          label={photoLabel}
          ratio="aspect-[16/10]"
          className="rounded-none"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      ) : (
        <ImagePlaceholder label={photoLabel} ratio="aspect-[16/10]" className="rounded-none border-0" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <span className="font-display text-sm font-bold text-coral">{index}</span>
        <h3 className="mt-2 text-xl">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-ink group-hover:text-coral">
          {cta}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}

/* ---- StoryCard ------------------------------------------------------- */
export function StoryCard({
  quote,
  name,
  role,
  photoLabel,
}: {
  quote: string;
  name: string;
  role: string;
  photoLabel: string;
}) {
  return (
    <figure className="grid overflow-hidden rounded-3xl bg-white shadow-card md:grid-cols-2">
      <ImagePlaceholder label={photoLabel} ratio="aspect-[4/3] md:aspect-auto md:h-full" className="rounded-none border-0" tone="coral" />
      <div className="flex flex-col justify-center p-8 sm:p-10">
        <span className="font-display text-5xl leading-none text-coral">“</span>
        <blockquote className="-mt-4 text-xl leading-relaxed text-ink sm:text-2xl">
          {quote}
        </blockquote>
        <figcaption className="mt-6">
          <span className="block font-display font-bold text-ink">{name}</span>
          <span className="block text-sm text-ink/60">{role}</span>
        </figcaption>
      </div>
    </figure>
  );
}

/* ---- EventCard ------------------------------------------------------- */
export function EventCard({
  date,
  title,
  place,
  description,
  tag,
}: {
  date: string;
  title: string;
  place: string;
  description: string;
  tag: string;
}) {
  return (
    <article className="flex gap-5 rounded-2xl bg-white p-5 shadow-card sm:p-6">
      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-ink text-white">
        <span className="font-display text-xl font-extrabold leading-none">{date.split(' ')[0]}</span>
        <span className="text-[10px] font-bold uppercase tracking-wide text-gold">
          {date.split(' ').slice(1).join(' ')}
        </span>
      </div>
      <div className="min-w-0">
        <span className="eyebrow text-coral text-[10px]">{tag}</span>
        <h3 className="mt-1.5 text-lg leading-snug">{title}</h3>
        <p className="mt-1 text-sm font-semibold text-ink/60">{place}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">{description}</p>
      </div>
    </article>
  );
}

/* ---- ValueCard / generic feature ------------------------------------ */
export function FeatureCard({
  icon,
  title,
  description,
  tone = 'white',
}: {
  icon?: ReactNode;
  title: string;
  description: string;
  tone?: 'white' | 'sand';
}) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-card ${tone === 'white' ? 'bg-white' : 'bg-sand'}`}
    >
      {icon && <div className="mb-4 text-coral">{icon}</div>}
      <h3 className="text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">{description}</p>
    </div>
  );
}
