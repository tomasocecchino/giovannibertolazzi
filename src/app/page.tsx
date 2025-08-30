import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { CONCERTS, NEWS } from '@/lib/constants';
import { PageTitle } from '@/components/PageTitle';

export default function Home() {
  const futureConcerts = CONCERTS.slice(0, 3);
  const latestNews = NEWS.slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white -mt-8 md:-mt-12 -mx-4">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Giovanni Bertolazzi"
          fill
          priority
          className="object-cover brightness-50"
          data-ai-hint="musician portrait"
        />
        <div className="relative z-10 p-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tight">
            Giovanni Bertolazzi
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto font-light">
            Pianist & Composer
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/bio">Discover More</Link>
          </Button>
        </div>
      </section>

      {/* Bio Section */}
      <section className="animate-in fade-in duration-500">
        <PageTitle>About the Artist</PageTitle>
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2">
            <Image
              src="https://picsum.photos/600/800"
              alt="Giovanni Bertolazzi playing piano"
              width={600}
              height={800}
              className="rounded-lg shadow-2xl object-cover aspect-[3/4]"
              data-ai-hint="pianist concert"
            />
          </div>
          <div className="md:col-span-3 space-y-4 text-lg text-foreground/80">
            <p>
              Hailed for his extraordinary talent and profound musicality, Giovanni Bertolazzi is a pianist who captivates audiences worldwide. With a repertoire that spans from baroque masterpieces to contemporary compositions, his performances are celebrated for their technical brilliance and emotional depth.
            </p>
            <p>
              Giovanni began his journey at a young age, quickly distinguishing himself as a prodigy. His dedication to the art has earned him numerous accolades and the opportunity to perform in the world's most prestigious concert halls.
            </p>
            <Button asChild variant="link" className="text-accent text-lg p-0 h-auto">
              <Link href="/bio">Read Full Biography <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Concerts */}
      <section className="animate-in fade-in duration-500">
        <PageTitle>Upcoming Concerts</PageTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureConcerts.map((concert) => (
            <Card key={concert.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-primary">{concert.city}</CardTitle>
                <p className="text-muted-foreground pt-1">{concert.venue}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>{concert.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{concert.location}</span>
                </div>
                <Button asChild className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={concert.ticketLink} target="_blank">View Event</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
            <Button asChild variant="outline">
                <Link href="/concerti">View All Concerts</Link>
            </Button>
        </div>
      </section>
      
    </div>
  );
}
