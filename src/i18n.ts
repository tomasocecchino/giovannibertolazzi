import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Define locales and prefix here as the source of truth
export const locales = ['en', 'it', 'fr', 'es', 'de', 'ru', 'zh'] as const;
export const localePrefix = 'always'; // Default
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
