import {getRequestConfig, getLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from './i18nConfig';
 
export default getRequestConfig(async () => {
  // Validate that the incoming `locale` parameter is valid
  const locale = await getLocale();
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});