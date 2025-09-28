// src/i18n.ts
import {getRequestConfig, getLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from './i18nConfig';
 
export default getRequestConfig(async () => {
  const locale = await getLocale();
 
  if (!locales.includes(locale as any)) notFound();
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
