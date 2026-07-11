import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // All content is static; pages are prerendered at build time.
  // To deploy to a static-only host (e.g. GitHub Pages), see README.md.
};

export default withNextIntl(nextConfig);
