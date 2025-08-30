// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview An AI agent that provides personalized concert recommendations based on user preferences and location.
 *
 * - getConcertRecommendations - A function that generates concert recommendations for a user.
 * - ConcertRecommendationsInput - The input type for the getConcertRecommendations function.
 * - ConcertRecommendationsOutput - The return type for the getConcertRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {getEventsFromTicketMaster} from "@/src/services/ticketmaster";

const ConcertRecommendationsInputSchema = z.object({
  userPreferences: z
    .string()
    .describe(
      'A description of the user\u2019s musical tastes, including preferred genres, artists, and eras.'
    ),
  userLocation: z
    .string()
    .describe(
      'The user\u2019s current location, which should include city and state.'
    ),
  pastConcertAttendance: z
    .string()
    .optional()
    .describe(
      'Optional history of concerts attended by the user, which can be used to refine recommendations.'
    ),
});
export type ConcertRecommendationsInput = z.infer<
  typeof ConcertRecommendationsInputSchema
>;

const ConcertRecommendationsOutputSchema = z.object({
  concertRecommendations: z.array(
    z.object({
      artist: z.string().describe('The name of the performing artist.'),
      venue: z.string().describe('The venue where the concert is held.'),
      date: z.string().describe('The date and time of the concert.'),
      location: z.string().describe('The city and state of the concert.'),
      ticketLink: z
        .string()
        .url()
        .describe('A link to purchase tickets for the concert.'),
      genre: z.string().describe('The genre of the concert'),
    })
  ).describe('A list of concert recommendations.'),
});
export type ConcertRecommendationsOutput = z.infer<
  typeof ConcertRecommendationsOutputSchema
>;

export async function getConcertRecommendations(
  input: ConcertRecommendationsInput
): Promise<ConcertRecommendationsOutput> {
  return concertRecommendationsFlow(input);
}

const concertRecommendationsPrompt = ai.definePrompt({
  name: 'concertRecommendationsPrompt',
  input: {schema: ConcertRecommendationsInputSchema},
  output: {schema: ConcertRecommendationsOutputSchema},
  prompt: `You are an expert music event recommender. Consider the user's musical preferences, location, and past concert attendance to provide a list of personalized concert recommendations.

User Preferences: {{{userPreferences}}}
User Location: {{{userLocation}}}
Past Concert Attendance: {{{pastConcertAttendance}}}

Based on this information, recommend upcoming concerts that the user would enjoy. Ensure that the recommendations are tailored to their tastes and are within a reasonable distance from their location.

Here are some upcoming events from Ticketmaster:

{{#each events}}
Artist: {{name}}
Venue: {{venue.name}}
Date: {{dates.start.localDate}} {{dates.start.localTime}}
Location: {{_embedded.venues.[0].city.name}}, {{_embedded.venues.[0].state.stateCode}}
Genre: {{classifications.[0].genre.name}}
Ticket Link: {{url}}
{{/each}}

Ensure that the recommendations align with the user's stated preferences, location and past concert attendance.`, 
});

const concertRecommendationsFlow = ai.defineFlow(
  {
    name: 'concertRecommendationsFlow',
    inputSchema: ConcertRecommendationsInputSchema,
    outputSchema: ConcertRecommendationsOutputSchema,
  },
  async input => {
    const events = await getEventsFromTicketMaster(input.userLocation);

    const {output} = await concertRecommendationsPrompt({
      ...input,
      events: events?._embedded?.events ?? [],
    });
    return output!;
  }
);
