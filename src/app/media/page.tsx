
'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PhotoGallery from '@/components/media/PhotoGallery';
import VideoGallery from '@/components/media/VideoGallery';
import type { GalleryImage, Video } from "@/lib/firebase";

type View = 'gallery' | 'videos';

interface MediaPageProps {
  galleryImages: GalleryImage[];
  shootingImages: GalleryImage[];
  videos: Video[];
}

export default function MediaPage({ galleryImages, shootingImages, videos }: MediaPageProps) {
  const [currentView, setCurrentView] = useState<View>('gallery');

  const t = {
    title: "Media",
    gallery: "Gallery",
    videos: "Videos",
    shooting: "Shooting",
  };

  return (
    <div className="animate-in fade-in duration-500 bg-[#f0f0f0] text-black">
      <div className="container py-16 md:py-24 pt-32">

        <Tabs defaultValue="gallery" value={currentView} onValueChange={(value) => setCurrentView(value as View)} className="w-full">
          <div className="flex items-baseline gap-x-6 mb-8 md:mb-12">
            <h1 className="text-4xl md:text-6xl font-semibold font-headline text-[#004165]">
              {t.title}
            </h1>
            <TabsList className="relative -top-2">
              <TabsTrigger value="gallery">{t.gallery}</TabsTrigger>
              <TabsTrigger value="videos">{t.videos}</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="gallery">
            <div className="space-y-16">
              <PhotoGallery images={galleryImages} />
              {shootingImages.length > 0 && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold font-headline text-[#004165] mb-8">
                    {t.shooting}
                  </h2>
                  <PhotoGallery images={shootingImages} />
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="videos">
            <VideoGallery videos={videos} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
