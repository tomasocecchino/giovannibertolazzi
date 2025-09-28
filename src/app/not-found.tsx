// src/app/not-found.tsx
'use client';

import Error from 'next/error';

// This component is not used for localized 404 pages.
// It's a fallback for requests that don't have a locale.
// The primary 404 page is in [locale]/not-found.tsx.
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
