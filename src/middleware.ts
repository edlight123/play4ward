import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - the TinaCMS admin: it is a static SPA built into public/admin and is not
  //   locale-routed. Without this exclusion /admin is redirected to /fr/admin,
  //   which is not a route, so the CMS 404s for anyone following the README.
  // - Next.js internals (_next)
  // - static files (files with an extension)
  matcher: ['/((?!api|admin|_next|_vercel|.*\\..*).*)'],
};
