import { PageTitle } from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONCERTS } from "@/lib/constants";
import { Calendar, MapPin, Ticket } from "lucide-react";
import Link from "next/link";

export default function ConcertsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageTitle>Concerti</PageTitle>
      <div className="max-w-4xl mx-auto space-y-8">
        {CONCERTS.map((concert) => (
          <Card key={concert.id} className="transition-all hover:shadow-md">
            <CardContent className="p-4 md:p-6 grid md:grid-cols-4 items-center gap-4">
              <div className="md:col-span-1">
                <div className="text-primary font-bold font-headline text-lg">{concert.city}</div>
                <div className="text-sm text-muted-foreground">{concert.venue}</div>
              </div>
              <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-center md:gap-8 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>{concert.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{concert.location}</span>
                </div>
              </div>
              <div className="md:col-span-1 md:text-right">
                <Button asChild className="w-full md:w-auto bg-accent hover:bg-accent/90">
                  <Link href={concert.ticketLink} target="_blank" rel="noopener noreferrer">
                    <Ticket className="mr-2 h-4 w-4" />
                    Tickets
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
