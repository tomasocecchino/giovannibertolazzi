// src/app/not-found.tsx

import { notFound } from 'next/navigation';

// This is the root not-found.tsx and it doesn't have access to the locale.
// It will render the root 404 page, which is not localized.
// The localized 404 page is handled by `src/app/[locale]/not-found.tsx`.
export default function NotFoundPage() {
  notFound();
}