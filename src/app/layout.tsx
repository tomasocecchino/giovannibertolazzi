import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Giovanni Bertolazzi",
  description: "The official website of Giovanni Bertolazzi, Concert-Pianist",
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/GB.png?alt=media&token=7dd3a1e3-0244-455a-b48e-11a8e2a05a10',
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
