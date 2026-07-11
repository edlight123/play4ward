// Central navigation model. `key` maps to a translation key under "nav".
export const primaryNav = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'programs', href: '/programs' },
  { key: 'impact', href: '/impact' },
  { key: 'events', href: '/events' },
  { key: 'join', href: '/join' },
  { key: 'support', href: '/support' },
] as const;

// Secondary links surfaced in the footer.
export const secondaryNav = [
  { key: 'news', href: '/news' },
  { key: 'partners', href: '/partners' },
  { key: 'contact', href: '/contact' },
] as const;

export const localeNames: Record<string, string> = {
  fr: 'Français',
  ht: 'Kreyòl',
  en: 'English',
};

export const localeShort: Record<string, string> = {
  fr: 'FR',
  ht: 'KR',
  en: 'EN',
};
