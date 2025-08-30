import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight, Calendar, MapPin, Ticket } from 'lucide-react';
import { CONCERTS, DISCOGRAPHY } from '@/lib/constants';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#0e141a] overflow-hidden">
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
                <h1 className="text-4xl sm:text-5xl font-headline tracking-tight text-white">
                  <span className="font-normal">Giovanni</span>
                  <br />
                  <span className="font-semibold">Bertolazzi</span>
                </h1>
                <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl font-normal text-white/20 tracking-widest">
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

      {/* About Section */}
      <section id="about" className="bg-[#f0f0f0]">
        <div className="container mx-auto px-4 text-center py-16 md:py-24">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-[#004a63] mb-8">ABOUT</h2>
            <div className="max-w-3xl mx-auto text-[#333] space-y-4 text-lg text-left">
              <p>Giovanni Bertolazzi made his mark on the international scene by winning 2nd prize and 5 special prizes at the 'F. Liszt' International Piano Competition in Budapest.</p>
              <p>He officially performed on the World's longest Concert-grand Piano during its first public presentation, the BORGATO GRAND-PRIX 333 (3.33 meters long).</p>
              <p>In 2024, he was awarded the 43rd 'Liszt Ferenc International Grand Prix Du Disque' by the Liszt Society of Budapest for his Liszt recordings.</p>
              <p>Highlights of his career include appearances with the Hungarian Philharmonic Orchestra, the Orchestra del Maggio Musicale Fiorentino, the MAV Symphony Orchestra, the Orchestra del Teatro La Fenice.</p>
            </div>
          <div className="text-right mt-8">
            <Link href="/bio" className="text-[#004a63] font-semibold hover:underline">
              Read Bio <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Explore CDs Section */}
      <section id="cds" className="bg-[#004165]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-white">
              EXPLORE <span className="text-[#008DDA]">CDs</span>
            </h2>
            <Link href="/discography" className="text-white font-semibold hover:underline">
              View Discography <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DISCOGRAPHY.slice(0, 2).map((album) => (
              <Card key={album.id} className="bg-transparent border-0 shadow-none overflow-hidden group">
                <CardHeader className="p-0">
                  <Image
                    src={album.imageUrl}
                    alt={`Album cover for ${album.title}`}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover aspect-square"
                    data-ai-hint="album cover"
                  />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Next Concerts Section */}
       <section id="concerts" className="bg-[#f0f0f0]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-black">
              NEXT <span className="text-[#004a63]">CONCERTS</span>
            </h2>
            <Link href="/concerti" className="text-[#004a63] font-semibold hover:underline">
              All Concerts <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {CONCERTS.slice(0,2).map((concert) => (
              <div key={concert.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                    <Image src="https://picsum.photos/100/100" width={80} height={80} alt="Concert venue" className="rounded-md" data-ai-hint="concert venue" />
                    <div>
                        <p className="text-sm text-gray-500">{concert.location} - {concert.date.split(' ')[2]}</p>
                        <p className="font-bold text-lg text-[#333]">{concert.venue}, "F. LISZT" MUSIC ACADEMY</p>
                         <Link href={concert.ticketLink} className="text-sm text-[#004a63] hover:underline">
                            Buy Ticket <ArrowRight className="inline h-3 w-3"/>
                         </Link>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-sm text-gray-500">{concert.date.split(' ')[0].substring(0,3)}</div>
                    <div className="text-4xl font-bold text-[#004a63]">{concert.date.split(' ')[1].replace(',', '')}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="bg-[#004165]">
        <div className="container mx-auto px-4 py-16 md:py-24">
           <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-white">VIDEOS</h2>
            <Link href="/media" className="text-white font-semibold hover:underline">
              View Videos <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             <div className="text-white">
                <div className="aspect-video bg-black/30 rounded-lg mb-4">
                   <Image src="https://picsum.photos/600/338" width={600} height={338} alt="Video thumbnail" className="rounded-lg w-full h-full object-cover" data-ai-hint="piano concert" />
                </div>
                <h3 className="text-xl font-semibold">TCHAIKOVSKY Piano Concerto</h3>
                <p className="text-white/70">Piano Concerto live in Budapest Liszt Academy</p>
             </div>
             <div className="text-white">
                <div className="aspect-video bg-black/30 rounded-lg mb-4">
                   <Image src="https://picsum.photos/600/338?random=1" width={600} height={338} alt="Video thumbnail" className="rounded-lg w-full h-full object-cover" data-ai-hint="classical performance" />
                </div>
                <h3 className="text-xl font-semibold">TCHAIKOVSKY Piano Concerto</h3>
                <p className="text-white/70">Piano Concerto live in Budapest Liszt Academy</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
