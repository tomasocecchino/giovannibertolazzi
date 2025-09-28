// src/i18n.ts

import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from './i18nConfig';
import {getLocale} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  const locale = await getLocale();
 
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});