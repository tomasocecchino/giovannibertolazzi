
'use client';
import { CONCERTS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from "react";

export default function ConcertsPage() {
    const [selectedYear, setSelectedYear] = useState('2025');

  return (
    <div className="animate-in fade-in duration-500">
       {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/concerts-hero.png?alt=media&token=41539a2f-9271-477c-a496-b09b5f5431fa"
            alt="Giovanni Bertolazzi performing in a concert hall"
            fill
            priority
            className="object-cover object-center opacity-40"
            data-ai-hint="concert hall musician"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 z-10 text-left relative pt-24">
            <div className="flex items-end gap-4">
                 <h1 className="text-6xl md:text-8xl font-semibold font-headline text-white mb-4">
                    Concerts
                </h1>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-auto bg-transparent border-none text-4xl md:text-6xl font-headline text-[#008DDA] focus:ring-0 focus:ring-offset-0 p-2 h-auto mb-4 font-semibold shadow-none">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black/80 text-white border-white/20">
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                    </SelectContent>
                </Select>
            </div>
          <blockquote className="max-w-xl text-lg md:text-xl text-white/80 italic">
            <p>&quot;On this majestic instrument, BORGATO Grand-Prix 333, Giovanni Bertolazzi performed Rachmaninov’s Third Concerto, capable of enhancing its full range and richness of sound.&quot;</p>
            <cite className="block mt-2 not-italic text-sm text-white/50">Rivista Musica</cite>
          </blockquote>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-[#f0f0f0] text-black">
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto space-y-4">
                {CONCERTS.filter(c => c.date.includes(selectedYear)).map((concert) => {
                    const dateParts = concert.date.split(' ');
                    const month = dateParts[0].substring(0, 3);
                    const day = dateParts[1].replace(',', '');

                    return (
                        <div key={concert.id} className="grid grid-cols-[100px_1fr_auto] items-center gap-6 p-4 border-b border-gray-300">
                            <Image
                                src={concert.imageUrl || "https://picsum.photos/100/100"}
                                alt={`Concert at ${concert.venue}`}
                                width={100}
                                height={100}
                                className="w-full h-auto object-cover aspect-square"
                                data-ai-hint="musician portrait monochrome"
                            />
                            <div>
                                <p className="text-sm text-black/60 tracking-wider">{concert.city} - {concert.date.split(', ')[1]}</p>
                                <h2 className="text-xl font-semibold my-1 text-[#004165] font-headline tracking-wide">{concert.venue}</h2>
                                <p className="text-sm text-black/70 mb-2">Piano Recital</p>
                                <Link href={concert.ticketLink} className="text-sm text-[#004a63] font-semibold hover:underline">
                                    Buy Ticket <ArrowRight className="inline h-3 w-3" />
                                </Link>
                            </div>
                            <div className="text-right">
                                <p className="text-lg text-[#008DDA] font-medium">{month}</p>
                                <p className="text-6xl font-bold text-[#004a63]">{day}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
}
