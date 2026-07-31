import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { Photo } from '@/components/Photo';
import { Button } from '@/components/Button';
import { CTASection } from '@/components/CTASection';
import { realItems, real } from '@/lib/placeholder';

// Multi-paragraph body copy. `dark` matches Section's own dark-tone text colour.
function Prose({ paragraphs, dark = false }: { paragraphs: string[]; dark?: boolean }) {
  return (
    <div className={`max-w-3xl space-y-4 ${dark ? 'text-white/80' : 'text-ink/80'}`}>
      {paragraphs.map((p, i) => (
        <p key={i} className="leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-ink/80">
          <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/15 text-[11px] font-bold text-coral-600">
            ✓
          </span>
          <span className="leading-relaxed">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('programs');
  const nav = useTranslations('nav');
  const centerBody = t.raw('center.body') as string[];
  const receive = t.raw('center.receive') as string[];
  const expect = t.raw('center.expect') as string[];
  // Rows whose value is still unfilled (cost, what to bring) are omitted.
  const details = realItems(
    t.raw('center.details') as { label: string; value: string }[],
    'value',
  );
  const leadershipBody = t.raw('leadership.body') as string[];
  const topics = t.raw('leadership.topics') as string[];
  const outreach = t.raw('outreach.items') as string[];
  const tournBody = t.raw('tournaments.body') as string[];
  const tourn = t.raw('tournaments.items') as string[];

  return (
    <>
      <PageHero eyebrow={t('hero.eyebrow')} title={t('hero.title')} intro={t('hero.intro')} />

      {/* Training center */}
      <Section id="center" tone="sand" eyebrow={t('center.eyebrow')} title={t('center.title')}>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <Prose paragraphs={centerBody} />
            <div>
              <h3 className="text-xl text-blue">{t('center.whoTitle')}</h3>
              <p className="mt-3 leading-relaxed text-ink/80">{t('center.who')}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xl text-blue">{t('center.receiveTitle')}</h3>
                <div className="mt-4">
                  <CheckList items={receive} />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-blue">{t('center.expectTitle')}</h3>
                <div className="mt-4">
                  <CheckList items={expect} />
                </div>
              </div>
            </div>
            <div className="pt-2">
              <Button href="/join" variant="primary">
                {nav('join')}
              </Button>
            </div>
          </div>

          <div>
            <Photo
              src="/photos/training-drills.jpg"
              label={t('center.photo')}
              ratio="aspect-[3/2]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="mt-5 overflow-hidden rounded-2xl bg-white shadow-card">
              <h3 className="border-b border-ink/10 bg-ink px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-white">
                {t('center.detailsTitle')}
              </h3>
              <dl className="divide-y divide-ink/5">
                {details.map((d, i) => (
                  <div key={i} className="flex justify-between gap-4 px-5 py-3 text-sm">
                    <dt className="font-semibold text-ink/60">{d.label}</dt>
                    <dd className="text-right text-ink/90">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section id="leadership" tone="white" eyebrow={t('leadership.eyebrow')} title={t('leadership.title')} intro={t('leadership.intro')}>
        <Prose paragraphs={leadershipBody} />
        <div className="mt-10 flex flex-wrap gap-3">
          {topics.map((tp, i) => (
            <span
              key={i}
              className="rounded-full border-2 border-ink/10 bg-sand px-5 py-2.5 font-display text-sm font-bold text-ink"
            >
              {tp}
            </span>
          ))}
        </div>
      </Section>

      {/* Outreach */}
      <Section id="outreach" tone="sand" eyebrow={t('outreach.eyebrow')} title={t('outreach.title')}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outreach.map((it, i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-card">
              <span className="font-display text-lg font-extrabold text-coral">0{i + 1}</span>
              <span className="font-semibold text-ink/85">{it}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Tournaments */}
      <Section id="tournaments" tone="ink" eyebrow={t('tournaments.eyebrow')} title={t('tournaments.title')} intro={t('tournaments.intro')}>
        <Prose paragraphs={tournBody} dark />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tourn.map((it, i) => (
            <div key={i} className="rounded-2xl bg-white/5 p-5">
              <span className="text-white/90">{it}</span>
            </div>
          ))}
        </div>
        {real(t('tournaments.note')) && (
          <p className="mt-6 text-sm text-white/50">{t('tournaments.note')}</p>
        )}
      </Section>

      <CTASection />
    </>
  );
}
