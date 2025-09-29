
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const faviconUrl = "https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/GB.png?alt=media&token=7dd3a1e3-0244-455a-b48e-11a8e2a05a10";
const ogImageUrl = "https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/Media%2FGallery%2FBERTOLAZZI26.png?alt=media&token=ee920d5b-1cc9-49b3-ac35-b252e53e483b";

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

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: Props) {

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

    