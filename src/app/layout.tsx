// This is the root layout component for your Next.js app.
// It applies to all routes in your application.
//
// Read more about routing and layouts in Next.js:
// https://nextjs.org/docs/getting-started/react-essentials#layouts

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
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
        {children}
      </body>
    </html>
  );
}