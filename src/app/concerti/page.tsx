
'use client';
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState, useEffect } from "react";
import { getConcerts } from "@/lib/firebase";
import type { Concert as RawConcert } from "@/lib/firebase";
import { Loader2 } from "lucide-react";

// Extend the concert type to work with JS Date objects
interface Concert extends Omit<RawConcert, 'date'> {
  date: Date;
}

export default function ConcertsPage() {
  const t = {
    title: "Concerts",
    heroAlt: "Giovanni Bertolazzi performing in a concert hall",
    heroQuote: "Giovanni Bertolazzi performed Rachmaninov’s Third Concerto, capable of enhancing its full range and richness of sound.",
    heroCite: "Rivista Musica",
    infoAndTickets: "Info & Tickets",
    noConcerts: "No concerts scheduled for {year}.",
    errorTitle: "Error Loading Concerts",
    errorHint: "Please ensure your Firestore security rules for the `concerts` collection allow public read access. For example: `match /concerts/{'concertId'} {'{ allow read; }'}`. Also, check that the `date` field is a valid Timestamp or a string that can be parsed into a Date."
  };
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
  const [allConcerts, setAllConcerts] = useState<Concert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadConcerts() {
      try {
        setLoading(true);
        const fetchedConcerts = await getConcerts();
        // Convert ISO date strings from firebase.ts back to JS Dates for client-side manipulation
        const formattedConcerts = fetchedConcerts.map(c => ({
          ...c,
          date: new Date(c.date),
        }));
        setAllConcerts(formattedConcerts);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred.');
      } finally {
        setLoading(false);
      }
    }
    loadConcerts();
  }, []);
  
  const years = [...new Set(allConcerts.map(c => c.date.getFullYear().toString()))].sort((a, b) => b.localeCompare(a));
  
  // Set initial year to the latest year with concerts if available
  useEffect(() => {
    if (!loading && years.length > 0 && !years.includes(selectedYear)) {
      setSelectedYear(years[0]);
    }
  }, [loading, years, selectedYear]);
  
  const filteredConcerts = allConcerts
    .filter(c => c.date.getFullYear().toString() === selectedYear)
    .sort((a, b) => a.date.getTime() - b.date.getTime());
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#f0f0f0]">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#f0f0f0] text-black">
        <div className="container py-16 md:py-24 pt-40">
            <div className="max-w-4xl mx-auto text-center bg-red-100 border border-red-400 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-red-800 mb-4">{t.errorTitle}</h2>
                <p className="text-red-700 mb-4">{error}</p>
                <p className="text-sm text-gray-700">{t.errorHint}</p>
            </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="animate-in fade-in duration-500">
       {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[70vh] flex items-center justify-center text-white bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/Agenda%2F17_MicheleMonasta_2M_09180%201.png?alt=media&token=fde8cce3-3f89-4123-bb0f-364cd05bfdf5"
            alt={t.heroAlt}
            fill
            priority
            className="object-cover object-center opacity-40"
            data-ai-hint="concert hall musician"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="container z-10 text-left relative pt-24">
            <div className="flex items-end gap-4">
                 <h1 className="text-5xl md:text-7xl font-semibold font-headline text-white mb-4">
                    Concerts
                </h1>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger 
                        className="w-auto bg-transparent border-none text-3xl md:text-5xl font-headline text-[#008DDA] focus:ring-0 focus:ring-offset-0 p-2 h-auto mb-4 font-semibold shadow-none"
                        icon={<ChevronDown className="h-8 w-8 text-[#008DDA]" />}
                    >
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black">
                        {years.map(year => (
                           <SelectItem key={year} value={year}>{year}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
          <blockquote className="max-w-xl text-lg md:text-xl text-white/80 italic">
            <p>&quot;{t.heroQuote}&quot;</p>
            <cite className="block mt-2 not-italic text-sm text-white/50">{t.heroCite}</cite>
          </blockquote>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-[#f0f0f0] text-black">
        <div className="container py-16 md:py-24">
              <div className="max-w-5xl mx-auto space-y-8">
                  {filteredConcerts.length > 0 ? filteredConcerts.map((concert, index) => {
                      const month = concert.date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
                      const day = concert.date.getDate().toString().padStart(2, '0');
                      const time = concert.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

                      return (
                          <div key={concert.id}>
                              <div className="grid grid-cols-[1fr_auto] items-center gap-6 p-4">
                                  <div className="flex flex-col justify-center h-full space-y-2">
                                      <h2 className="text-xl font-semibold text-[#004a63] font-headline tracking-wide">{concert.title}</h2>
                                      <p className="text-base text-black/80 font-medium">{concert.music}</p>
                                      {concert.people && <p className="text-sm text-black/60">{concert.people}</p>}
                                      {concert.ticketUrl && (
                                        <Link href={concert.ticketUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#004a63] font-semibold hover:underline inline-block pt-2 pb-8">
                                            {t.infoAndTickets} <ArrowRight className="inline h-3 w-3" />
                                        </Link>
                                      )}
                                  </div>
                                   <div className="text-center w-24 shrink-0">
                                      <p className="text-xl text-[#008DDA] font-medium">{month}</p>
                                      <p className="text-6xl font-semibold text-[#004a63] leading-none my-1">{day}</p>
                                      <p className="text-lg text-[#008DDA] font-medium">{time}</p>
                                  </div>
                              </div>
                              {index < filteredConcerts.length - 1 && <hr className="border-t-2 border-black/80 max-w-5xl mx-auto" />}
                          </div>
                      );
                  }) : (
                     <p className="text-center text-lg text-black/70">{t.noConcerts.replace('{year}', selectedYear)}</p>
                  )}
              </div>
        </div>
      </div>
    </div>
  );
}
