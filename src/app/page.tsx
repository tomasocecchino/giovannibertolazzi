import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Home() {

  return (
    <div className="space-y-16 md:space-y-24 -mt-16 md:-mt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-background">
        <div className="absolute inset-0 z-0">
             <Image
                src="https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/Giovanni%20Bertolazzi%20Home.png?alt=media&token=7299ea71-e78f-4a3f-bea0-45df6064aa02"
                alt="Giovanni Bertolazzi"
                fill
                priority
                className="object-cover"
                data-ai-hint="musician portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 items-center">
            <div className="py-16 md:py-24 text-left">
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-headline tracking-tight text-white">
                <span className="font-normal">Giovanni</span>
                <br />
                <span className="font-semibold">Bertolazzi</span>
              </h1>
              <p className="mt-4 text-2xl md:text-3xl max-w-2xl font-light text-white/20 tracking-widest">
                CONCERT-PIANIST
              </p>
              <blockquote className="mt-12 italic text-lg text-white/50 max-w-md">
                &quot;The result is a pianistic drama of overwhelming power on the one hand and poetry on the other.&quot;
                <cite className="block mt-2 not-italic text-base text-white/20 tracking-widest">PIZZICATO Magazine</cite>
              </blockquote>
              <div className="mt-24 flex items-center gap-4 text-accent">
                <ArrowDown className="animate-bounce h-8 w-8"/>
                <div className="text-sm">
                    <p>Scroll Down</p>
                    <p>& Explore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
