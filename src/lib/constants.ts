
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/bio', label: 'BIO' },
  { href: '/concerti', label: 'AGENDA' },
  { href: '/media', label: 'MEDIA' },
  { href: '/news', label: 'NEWS' },
  { href: '/discografia', label: 'DISCOGRAPHY' },
  { href: '/philosophy', label: 'PHILOSOPHY' },
  { href: '/contatti', label: 'CONTACTS' },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];

export const CONCERTS = [
  {
    id: 1,
    date: 'October 25, 2024',
    city: 'Milan, Italy',
    venue: 'Teatro alla Scala',
    location: 'Milan, Italy',
    ticketLink: '#',
  },
  {
    id: 2,
    date: 'November 12, 2024',
    city: 'Vienna, Austria',
    venue: 'Wiener Musikverein',
    location: 'Vienna, Austria',
    ticketLink: '#',
  },
  {
    id: 3,
    date: 'December 5, 2024',
    city: 'New York, USA',
    venue: 'Carnegie Hall',
    location: 'New York, NY, USA',
    ticketLink: '#',
  },
  {
    id: 4,
    date: 'January 18, 2025',
    city: 'London, UK',
    venue: 'Royal Albert Hall',
    location: 'London, UK',
    ticketLink: '#',
  },
    {
    id: 5,
    date: 'February 9, 2025',
    city: 'Tokyo, Japan',
    venue: 'Suntory Hall',
    location: 'Tokyo, Japan',
    ticketLink: '#',
  },
  {
    id: 6,
    date: 'March 3, 2025',
    city: 'Paris, France',
    venue: 'Philharmonie de Paris',
    location: 'Paris, France',
    ticketLink: '#',
  },
];

export const DISCOGRAPHY = [
  {
    id: 1,
    title: 'LISZT: PIANO WORKS (2CD)',
    recordLabel: 'BORGATO COLLECTION',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/LISZT-DOPPIO-CD.png?alt=media&token=4ead12fc-8dae-4802-aa89-6ac3a320358e',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/album/3xQ1sWgCHzLeX21n4d1P9P?utm_source=generator',
    copyEmail: 'info@borgato.it',
    awards: [
      'ICMA Nomination 2024',
      '"TOP" Album MusicPaper Magazine',
      '5 Stars Rivista MUSICA',
      '5 Stars PIZZICATO Magazine'
    ],
    awardImageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/disco-top%201.png?alt=media&token=0582663c-2726-487d-940a-91975d36e643',
  },
  {
    id: 2,
    title: 'LISZT: PIANO SONATA IN B MINOR, APRÈS UNE LECTURE DU DANTE, HARMONIES DU SOIR, DANTE\'S SONETT',
    recordLabel: 'BORGATO COLLECTION',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/LISZT-PIANO-SONATA-IN-B-MINOR.png?alt=media&token=cabcd94c-6ffe-4b7e-a457-d96ca5e28665',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/album/0pVsDPAv2K6g4h3MiJ4aA4?utm_source=generator',
    copyEmail: 'info@borgato.it',
    awards: [
        'ICMA Nomination 2023',
        'SUPERSONIC PIZZICATO Award (PIZZICATO Magazine)',
        '5 Stars Rivista MUSICA',
        '43rd "Liszt Ferenc Grand Prix du Disque" from Budapest Liszt Society (2024)'
    ],
    awardImageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/Liszt-plakett%201.png?alt=media&token=18320f1d-43e7-4e33-aa19-c815074bc0a5',
  },
];

export const NEWS = [
    {
        id: 1,
        title: 'New Album "Nocturnes & Preludes" Released',
        date: 'September 15, 2023',
        excerpt: 'Giovanni Bertolazzi\'s latest album explores the delicate and profound world of Chopin and Debussy, receiving critical acclaim.',
        link: '#',
    },
    {
        id: 2,
        title: 'Interview with Classical Music Magazine',
        date: 'August 28, 2023',
        excerpt: 'Read an in-depth interview where Giovanni discusses his musical philosophy and the making of his new album.',
        link: '#',
    },
    {
        id: 3,
        title: 'Sold-out Performance at Carnegie Hall',
        date: 'July 10, 2023',
        excerpt: 'A look back at the magical evening in New York where Giovanni enchanted the audience with a breathtaking performance.',
        link: '#',
    },
];

export const CONTACT_DETAILS = {
  email: 'booking@bertolazzi-music.com',
  phone: '+39 123 456 7890',
};
