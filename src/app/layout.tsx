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
  return children;
}
