import { ReactNode } from 'react';

type Tone = 'sand' | 'white' | 'blue' | 'ink' | 'coral';

const tones: Record<Tone, string> = {
  sand: 'bg-sand text-ink',
  white: 'bg-white text-ink',
  blue: 'bg-blue text-white',
  ink: 'bg-ink text-white',
  coral: 'bg-coral text-white',
};

// A page section with consistent vertical rhythm and an optional eyebrow/title.
export function Section({
  children,
  tone = 'sand',
  id,
  className = '',
  eyebrow,
  title,
  intro,
  center = false,
}: {
  children?: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  center?: boolean;
}) {
  const dark = tone === 'blue' || tone === 'ink' || tone === 'coral';
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-24 ${className}`}>
      <div className="wrap">
        {(eyebrow || title || intro) && (
          <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} mb-10 sm:mb-14`}>
            {eyebrow && (
              <span className={`eyebrow ${dark ? 'text-gold' : 'text-coral'}`}>{eyebrow}</span>
            )}
            {title && (
              <h2 className="mt-4 text-3xl leading-[1.05] sm:text-5xl">{title}</h2>
            )}
            {intro && (
              <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-white/80' : 'text-ink/70'}`}>
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
