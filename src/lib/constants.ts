import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/bio', label: 'Bio' },
  { href: '/concerti', label: 'Concerti' },
  { href: '/discografia', label: 'Discografia' },
  { href: '/media', label: 'Media' },
  { href: '/contatti', label: 'Contatti' },
  { href: '/news', label: 'News' },
  { href: '/ai-recommender', label: 'AI Recommender' },
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
    title: 'Nocturnes & Preludes',
    year: 2023,
    imageUrl: 'https://picsum.photos/500/500?random=1',
    streamLink: '#',
    buyLink: '#',
  },
  {
    id: 2,
    title: 'Sonatas of Light',
    year: 2021,
    imageUrl: 'https://picsum.photos/500/500?random=2',
    streamLink: '#',
    buyLink: '#',
  },
  {
    id: 3,
    title: 'Baroque Reflections',
    year: 2019,
    imageUrl: 'https://picsum.photos/500/500?random=3',
    streamLink: '#',
    buyLink: '#',
  },
  {
    id: 4,
    title: 'An Italian Journey',
    year: 2017,
    imageUrl: 'https://picsum.photos/500/500?random=4',
    streamLink: '#',
    buyLink: '#',
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
