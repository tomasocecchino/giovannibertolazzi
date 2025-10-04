
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
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

function MediaPageComponent({ galleryImages, shootingImages, videos }: MediaPageProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialView = searchParams.get('view') === 'videos' ? 'videos' : 'gallery';

  const [currentView, setCurrentView] = useState<View>(initialView);

  useEffect(() => {
    // This effect ensures that if the user navigates back/forward,
    // the tab selection updates to match the URL.
    const newView = searchParams.get('view') === 'videos' ? 'videos' : 'gallery';
    if (newView !== currentView) {
      setCurrentView(newView);
    }
  }, [searchParams, currentView]);


  const handleValueChange = (value: string) => {
    const newView = value as View;
    setCurrentView(newView);
    // Update the URL to reflect the tab change, without reloading the page
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('view', newView);
    router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  const t = {
    title: "Media",
    gallery: "Gallery",
    videos: "Videos",
    shooting: "Shooting",
  };

  return (
    <div className="animate-in fade-in duration-500 bg-[#f0f0f0] text-black">
      <div className="container py-16 md:py-24 pt-32">

        <Tabs value={currentView} onValueChange={handleValueChange} className="w-full">
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


// A wrapper component is needed to use Suspense for useSearchParams
export default function MediaPage(props: MediaPageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MediaPageComponent {...props} />
    </Suspense>
  )
}
