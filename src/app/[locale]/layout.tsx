import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Giovanni Bertolazzi",
  description: "The official website of Giovanni Bertolazzi, Concert-Pianist",
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/GB.png?alt=media&token=7dd3a1e3-0244-455a-b48e-11a8e2a05a10',
  },
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow -mt-24">{children}</main>
        <Footer />
        <Toaster />
      </div>
  );
}
