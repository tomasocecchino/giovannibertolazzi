
'use client'; // Required for useEffect and useState

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useState, useEffect } from 'react';
import { Preloader } from '@/components/layout/Preloader';
import { usePathname } from 'next/navigation';

// Metadata cannot be exported from a client component. 
// We will manage title and description dynamically if needed, or move this to a server component wrapper.
/*
export const metadata: Metadata = {
  title: "Giovanni Bertolazzi | Concert Pianist",
  description: "Sito ufficiale di Giovanni Bertolazzi, pianista da concerto. Scopri le date dei prossimi concerti, ascolta le registrazioni e leggi le ultime notizie.",
  icons: {
    icon: [
      { url: faviconUrl, type: 'image/png', sizes: '32x32' },
      { url: faviconUrl, type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: faviconUrl, sizes: '180x180' }],
  },
  openGraph: {
    title: "Giovanni Bertolazzi | Concert Pianist",
    description: "Sito ufficiale di Giovanni Bertolazzi, pianista da concerto. Scopri le date dei prossimi concerti, ascolta le registrazioni e leggi le ultime notizie.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Giovanni Bertolazzi",
      },
    ],
    type: 'website',
  },
};
*/
const faviconUrl = "https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/GB.png?alt=media&token=7dd3a1e3-0244-455a-b48e-11a8e2a05a10";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This logic now runs only on the client, after the initial render.
    if (sessionStorage.getItem('preloaderShown')) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('preloaderShown', 'true');
      }, 2000); // 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    document.title = "Giovanni Bertolazzi | Concert Pianist";
  }, []);

  return (
    <html lang="en">
        <head>
        <link rel="icon" href={faviconUrl} sizes="any" />
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
        <Preloader loading={loading} />
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow -mt-24">{children}</main>
            <Footer />
            <Toaster />
        </div>
      </body>
    </html>
  );
}
