
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/concerti', label: 'AGENDA' },
  { href: '/media', label: 'MEDIA' },
  { href: '/news', label: 'NEWS' },
  { href: '/discografia', label: 'DISCOGRAPHY' },
  { href: '/identity', label: 'IDENTITY' },
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/concert-1.png?alt=media&token=b7e2a9b3-4aaa-43e6-8c40-7e3f22c15982'
  },
  {
    id: 2,
    date: 'November 12, 2024',
    city: 'Vienna, Austria',
    venue: 'Wiener Musikverein',
    location: 'Vienna, Austria',
    ticketLink: '#',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/concert-2.png?alt=media&token=8e9b380d-830c-43f1-b9a3-57c5a0890f50'
  },
  {
    id: 3,
    date: 'December 05, 2024',
    city: 'New York, USA',
    venue: 'Carnegie Hall',
    location: 'New York, NY, USA',
    ticketLink: '#',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/concert-3.png?alt=media&token=7c1c2b5c-43a5-430b-9b48-18e3c54d3e8e'
  },
  {
    id: 4,
    date: 'January 18, 2025',
    city: 'London, UK',
    venue: 'Royal Albert Hall',
    location: 'London, UK',
    ticketLink: '#',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/concert-4.png?alt=media&token=c2c10705-0e6d-4958-8681-4b3e6e8e8e6f'
  },
    {
    id: 5,
    date: 'February 09, 2025',
    city: 'Tokyo, Japan',
    venue: 'Suntory Hall',
    location: 'Tokyo, Japan',
    ticketLink: '#',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/concert-5.png?alt=media&token=0a5a90d4-a78b-4b1f-9c01-7b7e51a44e5e'
  },
  {
    id: 6,
    date: 'March 03, 2025',
    city: 'Paris, France',
    venue: 'Philharmonie de Paris',
    location: 'Paris, France',
    ticketLink: '#',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/concert-6.png?alt=media&token=9a15f9b4-0b7c-474c-b3e1-7e8c07e8c3b7'
  },
];

export const DISCOGRAPHY = [
  {
    id: 1,
    title: 'LISZT: PIANO WORKS (2CD)',
    recordLabel: 'BORGATO COLLECTION',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/LISZT-DOPPIO-CD.png?alt=media&token=4ead12fc-8dae-4802-aa89-6ac3a320358e',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/album/1DYHB8psfmArsIOLGF5V6c?utm_source=generator&theme=0',
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
    spotifyEmbedUrl: 'https://open.spotify.com/embed/album/3Onuw6iklYNjwvMYNzoPKz?utm_source=generator&theme=0',
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
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/News%2Fnews-1.png?alt=media&token=1c6b12a8-12c5-4d2d-9a67-27a1e2a8e805',
    },
    {
        id: 2,
        title: 'Interview with Classical Music Magazine',
        date: 'August 28, 2023',
        excerpt: 'Read an in-depth interview where Giovanni discusses his musical philosophy and the making of his new album.',
        link: '#',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/News%2Fnews-2.png?alt=media&token=4a7a8d0e-5d1e-4f1a-8c7a-9a9a35e4d271',
    },
    {
        id: 3,
        title: 'Sold-out Performance at Carnegie Hall',
        date: 'July 10, 2023',
        excerpt: 'A look back at the magical evening in New York where Giovanni enchanted the audience with a breathtaking performance.',
        link: '#',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/News%2Fnews-3.png?alt=media&token=8d2e8b0a-7e1d-4f1e-9a1c-7a6c9e0d1b1a',
    },
];

export const CONTACT_DETAILS = {
  email: 'booking@bertolazzi-music.com',
  phone: '+39 123 456 7890',
};

// This is now placeholder data. The page will fetch from Firebase.
export interface GalleryImage {
    id: string;
    order: number;
    imageUrl: string;
    alt: string;
    description?: string;
    photographer?: string;
}

// This is now placeholder data. The page will fetch from Firebase.
export const VIDEOS = [
    {
        id: 1,
        title: "Placeholder Video",
        description: "This is placeholder data, please update from Firebase.",
        duration: "0:00",
        videoUrl: "#",
        thumbnailUrl: "https://picsum.photos/seed/v1/180/101",
        order: 1,
    },
];
