'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { localeShort, localeNames } from '@/lib/nav';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: string) {
    if (next === locale) return;
    // Keep the current pathname, swap only the locale prefix.
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-current/20 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            aria-label={localeNames[l]}
            aria-current={active ? 'true' : undefined}
            className={`rounded-full px-2.5 py-1 font-display text-xs font-bold tracking-wide transition-colors ${
              active ? 'bg-coral text-white' : 'opacity-70 hover:opacity-100'
            }`}
          >
            {localeShort[l]}
          </button>
        );
      })}
    </div>
  );
}
