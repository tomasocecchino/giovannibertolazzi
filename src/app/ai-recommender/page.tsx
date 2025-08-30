'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getConcertRecommendations, ConcertRecommendationsOutput } from '@/ai/flows/ai-concert-recommender';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { PageTitle } from '@/components/PageTitle';
import { Loader2, Music, Ticket, MapPin, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast"

const ConcertRecommendationsInputSchema = z.object({
  userPreferences: z
    .string()
    .min(10, 'Please describe your musical tastes in a bit more detail.'),
  userLocation: z
    .string()
    .min(2, 'Please enter a valid location.'),
  pastConcertAttendance: z
    .string()
    .optional(),
});

type ConcertRecommendationsInput = z.infer<typeof ConcertRecommendationsInputSchema>;

export default function AIRecommenderPage() {
  const [recommendations, setRecommendations] = useState<ConcertRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ConcertRecommendationsInput>({
    resolver: zodResolver(ConcertRecommendationsInputSchema),
    defaultValues: {
      userPreferences: '',
      userLocation: '',
      pastConcertAttendance: '',
    },
  });

  async function onSubmit(values: ConcertRecommendationsInput) {
    setIsLoading(true);
    setRecommendations(null);
    try {
      const result = await getConcertRecommendations(values);
      if ('concertRecommendations' in result) {
        setRecommendations(result);
      } else {
         toast({
          variant: "destructive",
          title: "Error",
          description: "Could not fetch recommendations. Please try again later.",
        })
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "An unexpected error occurred",
        description: "Something went wrong on our end. Please try again.",
      })
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="animate-in fade-in duration-500">
      <PageTitle>AI Concert Recommender</PageTitle>
      <p className="text-center max-w-2xl mx-auto -mt-8 mb-12 text-muted-foreground">
        Discover your next favorite concert. Tell us your musical tastes and location, and our AI will curate a personalized list of upcoming shows just for you.
      </p>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Find Your Concert</CardTitle>
              <CardDescription>Fill out the form to get started.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="userPreferences"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Musical Preferences</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Classical piano, baroque music, Chopin, Liszt, modern jazz..." {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="userLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Milan, Italy" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pastConcertAttendance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Past Concerts (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Attended a Beethoven symphony last year, saw a jazz trio last month..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      'Get Recommendations'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
              <p className="text-lg">Finding the best concerts for you...</p>
            </div>
          )}

          {recommendations && (
            <div className="space-y-6">
               <h2 className="text-2xl font-bold font-headline text-primary">Your Personalised Recommendations</h2>
               {recommendations.concertRecommendations.length > 0 ? (
                recommendations.concertRecommendations.map((rec, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary font-headline">{rec.artist}</CardTitle>
                    <CardDescription className="flex items-center gap-2 pt-1">
                        <Music className="h-4 w-4"/> {rec.genre}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" />{rec.venue}, {rec.location}</p>
                    <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" />{new Date(rec.date).toLocaleString()}</p>
                    <Button asChild className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href={rec.ticketLink} target="_blank" rel="noopener noreferrer">
                        <Ticket className="mr-2 h-4 w-4" />
                        Buy Tickets
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))) : (
                <Card>
                  <CardContent className="p-6 text-center text-muted-foreground">
                    <p>No recommendations found based on your criteria. Try broadening your preferences!</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {!isLoading && !recommendations && (
            <div className="flex items-center justify-center h-full rounded-lg border-2 border-dashed">
                <div className="text-center text-muted-foreground p-8">
                    <Music className="mx-auto h-12 w-12 mb-4" />
                    <h3 className="text-lg font-semibold">Your recommendations will appear here.</h3>
                    <p>Fill out the form and let our AI do the rest.</p>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
