import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'it', 'fr', 'es', 'de', 'ru', 'zh'],
 
  // Used when no locale matches
  defaultLocale: 'it'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|es|fr|it|ru|zh)/:path*']
};
