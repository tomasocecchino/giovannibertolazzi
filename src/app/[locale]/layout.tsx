import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Giovanni Bertolazzi",
  description: "The official website of Giovanni Bertolazzi, Concert-Pianist",
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Props) {

  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow -mt-24">{children}</main>
        <Footer />
        <Toaster />
      </div>
  );
}
