
// This file is deprecated and will be removed in a future iteration.
// Data is now sourced from lib/discography-data.ts and Firebase.

import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

// NAV_LINKS is now handled dynamically in the Header component using translations.
export const NAV_LINKS = [];

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];

export const CONCERTS = []; // Deprecated: Fetched from Firebase
export const DISCOGRAPHY = []; // Deprecated: Moved to lib/discography-data.ts
export const NEWS = []; // Deprecated: Fetched from Firebase

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

    