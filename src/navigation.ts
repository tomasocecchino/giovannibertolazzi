import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';
 
export const locales = ['en', 'it', 'fr', 'es', 'de', 'ru', 'zh'] as const;
export const localePrefix = 'always'; // Default
 
// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a single
  // external path can be used for all locales.
  '/': '/',
  '/about': '/about',
  '/concerti': '/concerti',
  '/contact': '/contact',
  '/discografia': '/discografia',
  '/identity': '/identity',
  '/media': '/media',
  '/news': '/news',
  '/philosophy': '/philosophy',
  '/press': '/press'
} satisfies Pathnames<typeof locales>;
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});
