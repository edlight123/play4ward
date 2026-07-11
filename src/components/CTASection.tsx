import { useTranslations } from 'next-intl';
import { Button } from './Button';
import { GoalArc } from './GoalArc';

// Final call to action used at the foot of most pages.
export function CTASection() {
  const t = useTranslations('cta');
  return (
    <section className="relative overflow-hidden bg-coral text-white">
      <GoalArc
        className="pointer-events-none absolute -top-2 left-1/2 h-52 w-[620px] -translate-x-1/2 text-white/20"
        strokeWidth={2}
      />
      <div className="wrap relative py-20 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl leading-tight sm:text-5xl">
          {t('title')}
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/support#donate" variant="onDark" size="lg">
            {t('donate')}
          </Button>
          <Button
            href="/partners"
            variant="ghost"
            size="lg"
            className="border-2 border-white/60 text-white hover:bg-white/10"
          >
            {t('partner')}
          </Button>
          <Button
            href="/join"
            variant="ghost"
            size="lg"
            className="border-2 border-white/60 text-white hover:bg-white/10"
          >
            {t('volunteer')}
          </Button>
        </div>
      </div>
    </section>
  );
}
