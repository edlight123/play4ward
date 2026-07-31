import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // All content is static; pages are prerendered at build time.
  // To deploy to a static-only host (e.g. GitHub Pages), see README.md.

  async rewrites() {
    return [
      // The TinaCMS admin is a static SPA that `tinacms build` writes to
      // public/admin/index.html. Next serves public files at their exact path, so
      // /admin alone does not resolve to that file — it 404s, which is the URL the
      // README tells editors to open. The middleware matcher also has to exclude
      // /admin, or next-intl redirects it to /fr/admin first. Both are needed.
      { source: '/admin', destination: '/admin/index.html' },
    ];
  },
};

export default withNextIntl(nextConfig);
