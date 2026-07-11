import { ReactNode } from 'react';
import { GoalArc } from './GoalArc';

// Compact hero for interior pages. The goal-arc motif ties every page to the
// homepage without repeating the full hero.
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <GoalArc
        className="pointer-events-none absolute -bottom-10 right-[-4%] h-56 w-[460px] text-coral/25"
        strokeWidth={2}
      />
      <GoalArc
        className="pointer-events-none absolute -bottom-6 left-[-8%] h-40 w-[320px] text-white/5"
        strokeWidth={1.5}
      />
      <div className="wrap relative py-16 sm:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow text-gold">{eyebrow}</span>
          <h1 className="mt-5 text-4xl leading-[1.02] sm:text-6xl">{title}</h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              {intro}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
