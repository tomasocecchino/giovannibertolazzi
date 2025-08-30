
'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { GALLERY_IMAGES, VIDEOS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';

type View = 'gallery' | 'videos';

export default function MediaPage() {
  const [currentView, setCurrentView] = useState<View>('gallery');

  return (
    <div className="animate-in fade-in duration-500 bg-[#f0f0f0] text-black">
      <div className="container mx-auto px-4 py-16 md:py-24 pt-32">
        <div className="flex items-baseline gap-4 mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-semibold font-headline text-[#004165]">
            Media
          </h1>
          <Select value={currentView} onValueChange={(value) => setCurrentView(value as View)}>
            <SelectTrigger className="w-auto bg-transparent border-0 text-2xl md:text-3xl font-headline text-black/80 focus:ring-0 focus:ring-offset-0 p-0 h-auto">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="gallery">Gallery</SelectItem>
              <SelectItem value="videos">Videos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {currentView === 'gallery' && <PhotoGallery />}
        {currentView === 'videos' && <VideoGallery />}
      </div>
    </div>
  );
}

function PhotoGallery() {
  // TODO: Replace with dynamic data from Firebase Storage/Firestore
  // You would fetch a list of image objects with URLs and order properties.
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
      {GALLERY_IMAGES.sort((a, b) => a.order - b.order).map((photo) => (
        <div key={photo.id} className="break-inside-avoid">
          <Image
            src={photo.imageUrl}
            alt={photo.alt}
            width={500}
            height={photo.height}
            className="w-full h-auto object-cover"
            data-ai-hint="musician photo"
          />
        </div>
      ))}
    </div>
  );
}

function VideoGallery() {
    // TODO: Replace with dynamic data from Firestore collection "videos"
    // Fetch video data including title, description, duration, videoUrl, thumbnailUrl, and order.
  return (
    <div className="max-w-4xl mx-auto space-y-6">
        {VIDEOS.sort((a, b) => a.order - b.order).map((video) => (
            <Link href={video.videoUrl} key={video.id} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group p-3 hover:bg-black/5 rounded-lg transition-colors">
                <div className="relative shrink-0">
                    <Image
                        src={video.thumbnailUrl}
                        alt={`Thumbnail for ${video.title}`}
                        width={180}
                        height={101}
                        className="w-[180px] h-auto object-cover rounded-md"
                        data-ai-hint="video thumbnail"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="w-8 h-8 text-white" />
                    </div>
                    <span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                        {video.duration}
                    </span>
                </div>
                <div className="text-black">
                    <h3 className="font-semibold text-lg font-headline group-hover:text-[#004a63]">{video.title}</h3>
                    <p className="text-sm text-black/60">{video.description}</p>
                </div>
            </Link>
        ))}
    </div>
  );
}
