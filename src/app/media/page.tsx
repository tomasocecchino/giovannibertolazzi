
'use client';

import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle, Camera } from 'lucide-react';
import { getGalleryImages, getVideos } from '@/lib/firebase';
import type { GalleryImage, Video } from '@/lib/firebase';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

type View = 'gallery' | 'videos';

export default function MediaPage() {
  const [currentView, setCurrentView] = useState<View>('gallery');
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [shootingImages, setShootingImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      try {
        const allImages = await getGalleryImages();
        const validImages = allImages.filter(img => img.link && img.link.trim() !== '');
        setGalleryImages(validImages.filter(img => img.type !== 'shooting'));
        setShootingImages(validImages.filter(img => img.type === 'shooting'));
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      } finally {
        setLoading(false);
      }
    }
    loadImages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#f0f0f0]">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 bg-[#f0f0f0] text-black">
      <div className="container mx-auto px-4 py-16 md:py-24 pt-32">
        <div className="flex items-baseline gap-4 mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-semibold font-headline text-[#004165]">
            Media
          </h1>
          <Select value={currentView} onValueChange={(value) => setCurrentView(value as View)}>
            <SelectTrigger className={cn(
              "w-auto bg-transparent border-none text-2xl md:text-3xl font-headline focus:ring-0 focus:ring-offset-0 p-2 h-auto",
               "text-[#004a63]",
              "shadow-none",
              "data-[state=open]:bg-white"
            )}>
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="gallery">Gallery</SelectItem>
              <SelectItem value="videos">Videos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {currentView === 'gallery' && (
          <div className="space-y-16">
            <PhotoGrid images={galleryImages} />
            {shootingImages.length > 0 && (
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold font-headline text-[#004165] mb-8">
                  Shooting
                </h2>
                <PhotoGrid images={shootingImages} />
              </div>
            )}
          </div>
        )}
        {currentView === 'videos' && <VideoGallery />}
      </div>
    </div>
  );
}

interface PhotoGridProps {
  images: GalleryImage[];
}

function PhotoGrid({ images }: PhotoGridProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (carouselApi && selectedImageIndex !== null) {
      carouselApi.scrollTo(selectedImageIndex, true);
    }
  }, [carouselApi, selectedImageIndex]);
  
  const handleImageClick = (index: number) => {
    // Set loading state only for the clicked image initially
    const newLoadingStates: Record<string, boolean> = {};
    images.forEach(img => {
      newLoadingStates[img.id] = true; // Assume all are loading until proven otherwise
    });
    setImageLoadingStates(newLoadingStates);
    setSelectedImageIndex(index);
  };
  
  const handleImageLoad = (id: string) => {
    setImageLoadingStates(prev => ({ ...prev, [id]: false }));
  };

  if (images.length === 0) {
    return <div className="text-center">No images in this section.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((photo, index) => (
          <div 
            key={photo.id} 
            className="relative w-full aspect-[4/3] cursor-pointer group bg-black/5"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={photo.link}
              alt={photo.title || 'Gallery image'}
              fill
              className={cn(
                "object-cover transition-transform duration-300 group-hover:scale-105",
                photo.link === 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/Media%2FGallery%2FBERTOLAZZI_SHOOTING2.jpg?alt=media&token=6babd24b-ba57-41aa-bac4-b7b4094a9c1a' ? 'object-center' : 'object-top'
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint="musician photo"
            />
             <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.title && <span className="text-white text-lg font-semibold">{photo.title}</span>}
             </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={(isOpen) => !isOpen && setSelectedImageIndex(null)}>
        <DialogContent className="max-w-none w-screen h-screen p-0 bg-black/80 border-none">
           <DialogTitle className="sr-only">Image Gallery</DialogTitle>
            <Carousel setApi={setCarouselApi} className="w-full h-full max-w-7xl mx-auto">
              <CarouselContent className="h-full">
                {images.map((photo) => (
                  <CarouselItem key={photo.id} className="h-full w-full">
                    <div className="relative w-full h-full p-4">
                       {imageLoadingStates[photo.id] !== false && (
                         <div className="absolute inset-0 flex items-center justify-center z-10">
                            <Loader2 className="w-10 h-10 animate-spin text-white/50" />
                         </div>
                       )}
                      <div className="relative w-full h-full">
                          <Image
                            src={photo.link}
                            alt={photo.title || 'Enlarged gallery image'}
                            fill
                            className={cn(
                              "object-contain transition-opacity duration-500",
                              imageLoadingStates[photo.id] === false ? "opacity-100" : "opacity-0"
                            )}
                            sizes="100vw"
                            onLoad={() => handleImageLoad(photo.id)}
                            onError={() => handleImageLoad(photo.id)} // Also hide loader on error
                          />
                      </div>
                      {(photo.title || photo.photographer) && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6 text-white z-20">
                          {photo.title && (
                            <p className="text-base mb-1">{photo.title}</p>
                          )}
                          {photo.photographer && (
                            <p className="text-sm opacity-80 flex items-center gap-2"><Camera className="w-4 h-4" /> {photo.photographer}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-white hidden md:flex" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-white hidden md:flex" />
            </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}

function getYouTubeThumbnail(url: string): string {
    let videoId: string | null = null;
    try {
        const urlObj = new URL(url);
        if (urlObj.hostname === 'youtu.be') {
            videoId = urlObj.pathname.slice(1);
        } else if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
            if (urlObj.pathname === '/watch') {
                videoId = urlObj.searchParams.get('v');
            } else if (urlObj.pathname.startsWith('/embed/')) {
                videoId = urlObj.pathname.split('/embed/')[1];
            }
        }
    } catch (e) {
        console.error('Invalid URL for YouTube thumbnail:', url);
        return `https://picsum.photos/seed/${url}/180/101`;
    }

    if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    }

    // Fallback if no videoId could be extracted
    return `https://picsum.photos/seed/${url}/180/101`;
}

function VideoGallery() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVideos() {
      try {
        const fetchedVideos = await getVideos();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        setLoading(false);
      }
    }
    loadVideos();
  }, []);

  if (loading) {
    return <div className="text-center">Loading videos...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
        {videos.map((video) => (
            <Link href={video.link} key={video.id} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group p-3 hover:bg-black/5 rounded-lg transition-colors">
                <div className="relative shrink-0">
                    <Image
                        src={getYouTubeThumbnail(video.link)}
                        alt={`Thumbnail for ${video.title}`}
                        width={180}
                        height={101}
                        className="w-[180px] h-auto object-cover rounded-md"
                        data-ai-hint="video thumbnail"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="w-8 h-8 text-white" />
                    </div>
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
