import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CalendarDays, Ticket } from 'lucide-react';
import { CONCERTS, DISCOGRAPHY } from '@/lib/constants';
import { PageTitle } from '@/components/PageTitle';

export default function Home() {
  const nextConcerts = CONCERTS.slice(0, 2);
  const featuredCds = DISCOGRAPHY.slice(0, 2);
  const videos = [
    { id: 1, title: 'Tchaikovsky Piano Concerto' },
    { id: 2, title: 'Tchaikovsky Piano Concerto' },
  ];

  return (
    <div className="space-y-16 md:space-y-24 -mt-8 md:-mt-12">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center">
            <div className="py-16 md:py-24 text-center md:text-left">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-headline font-bold tracking-tight">
                Giovanni
                <br />
                Bertolazzi
              </h1>
              <p className="mt-4 text-lg md:text-2xl max-w-2xl font-light">
                CONCERT-PIANIST
              </p>
              <blockquote className="mt-8 border-l-4 border-accent pl-4 italic text-lg">
                &quot;He can create a visionary and rhapsodic sound, with a rare maturity of interpretation.&quot;
                <cite className="block mt-2 not-italic text-base">- Le Devoir</cite>
              </blockquote>
              <Button asChild variant="link" className="text-accent text-lg p-0 h-auto mt-8">
                <Link href="/bio">Read More <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="relative h-96 md:h-auto md:self-end">
              <Image
                src="https://picsum.photos/600/800"
                alt="Giovanni Bertolazzi"
                fill
                priority
                className="object-contain object-bottom"
                data-ai-hint="musician portrait"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="container mx-auto px-4 animate-in fade-in duration-500">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">ABOUT</h2>
            <div className="space-y-4 text-lg text-foreground/80 text-left">
              <p>
                Giovanni Bertolazzi established himself as one of the most interesting talents of his generation by winning the 2nd Prize at the prestigious “Franz Liszt” International Piano Competition in Budapest in 2021, also receiving four special awards.
              </p>
              <p>
                His playing is characterized by a rhapsodic and visionary sound, combined with a solid architectonic conception that allows him to give a very personal, original, and at the same time, profoundly respectful interpretation of the musical text.
              </p>
               <Button asChild variant="link" className="text-accent text-lg p-0 h-auto">
                  <Link href="/bio">View full bio <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Explore CDs Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20 animate-in fade-in duration-500">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-headline font-bold">EXPLORE <span className="text-accent">CDs</span></h2>
                <Button asChild variant="link" className="text-accent text-lg p-0 h-auto">
                    <Link href="/discografia">View all <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {featuredCds.map((album) => (
                    <div key={album.id}>
                        <Image
                            src={album.imageUrl}
                            alt={`Album cover for ${album.title}`}
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover aspect-square shadow-lg"
                             data-ai-hint="album cover"
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Next Concerts Section */}
      <section className="container mx-auto px-4 animate-in fade-in duration-500">
         <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-headline font-bold">NEXT <span className="text-accent">CONCERTS</span></h2>
            <Button asChild variant="link" className="text-accent text-lg p-0 h-auto">
                <Link href="/concerti">View all <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </div>
        <div className="space-y-4">
          {nextConcerts.map((concert) => (
            <Card key={concert.id} className="p-4">
              <div className="grid grid-cols-12 items-center gap-4">
                <div className="col-span-2">
                    <Image
                        src="https://picsum.photos/200/200?random=concert"
                        alt="Concert image"
                        width={100}
                        height={100}
                        className="rounded-md w-full aspect-square object-cover"
                        data-ai-hint="classical concert"
                    />
                </div>
                <div className="col-span-7">
                  <p className="text-sm text-muted-foreground">{concert.date}</p>
                  <p className="font-bold text-primary">{concert.venue}</p>
                  <p className="text-sm text-muted-foreground">{concert.city}</p>
                </div>
                <div className="col-span-3 text-right">
                    <p className="text-4xl font-bold text-accent">{new Date(concert.date).getDate()}</p>
                    <p className="text-sm text-muted-foreground uppercase">{new Date(concert.date).toLocaleString('default', { month: 'short' })}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20 animate-in fade-in duration-500">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-headline font-bold">VIDEOS</h2>
                <Button asChild variant="link" className="text-accent text-lg p-0 h-auto">
                    <Link href="/media">View all <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {videos.map((video) => (
                    <div key={video.id}>
                        <div className="aspect-video bg-black rounded-lg mb-2">
                           <Image
                            src={`https://picsum.photos/600/338?random=${video.id}`}
                            alt={video.title}
                            width={600}
                            height={338}
                            className="w-full h-auto object-cover aspect-video rounded-lg"
                            data-ai-hint="piano performance"
                          />
                        </div>
                        <p className="font-semibold">{video.title}</p>
                        <p className="text-sm text-muted-foreground">From a concert in Budapest</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
