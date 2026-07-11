import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // French is the default; Haitian Creole (ht) and English (en) follow.
  locales: ['fr', 'ht', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];
