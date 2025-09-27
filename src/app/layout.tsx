// This is the root layout component for your Next.js app.
// It applies to all routes in your application.
//
// Read more about routing and layouts in Next.js:
// https://nextjs.org/docs/getting-started/react-essentials#layouts

import {NextIntlClientProvider, useMessages} from 'next-intl';
import type {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export default function RootLayout({children, params: {locale}}: Props) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-[#0e141a]">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
