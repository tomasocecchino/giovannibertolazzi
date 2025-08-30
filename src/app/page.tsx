import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Home() {

  return (
    <div className="space-y-16 md:space-y-24 -mt-16 md:-mt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Image
                src="https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/Bertolazzi%20Giovanni%20Home.png?alt=media&token=e4b31c76-4870-426e-96ed-c6a423fe7967"
                alt="Giovanni Bertolazzi"
                fill
                priority
                className="object-cover object-[70%_50%] sm:object-center"
                data-ai-hint="musician portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 z-10 h-full">
          <div className="grid md:grid-cols-2 items-center h-full">
            <div className="py-16 md:py-24 text-left flex flex-col justify-between h-full pt-24 sm:pt-16">
              <div>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-headline tracking-tight text-white">
                  <span className="font-normal">Giovanni</span>
                  <br />
                  <span className="font-semibold">Bertolazzi</span>
                </h1>
                <p className="mt-4 text-xl sm:text-2xl md:text-3xl max-w-2xl font-normal text-white/20 tracking-widest">
                  CONCERT-PIANIST
                </p>
                <blockquote className="mt-8 sm:mt-12 italic text-base sm:text-lg text-white/50 max-w-md">
                  &quot;The result is a pianistic drama of overwhelming power on the one hand and poetry on the other.&quot;
                  <cite className="block mt-2 not-italic text-sm sm:text-base text-white/20 tracking-widest">PIZZICATO Magazine</cite>
                </blockquote>
              </div>
              <div className="mt-24 flex items-center gap-4 text-accent absolute bottom-10 left-4 sm:relative sm:bottom-auto sm:left-auto">
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
