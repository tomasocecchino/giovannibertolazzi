
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
import { PlayCircle, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { getGalleryImages, getVideos } from '@/lib/firebase';
import type { GalleryImage, Video } from '@/lib/firebase';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
            <SelectTrigger className={cn(
              "w-auto bg-transparent border-none text-2xl md:text-3xl font-headline focus:ring-0 focus:ring-offset-0 p-2 h-auto",
              currentView === 'gallery' ? "text-[#004a63]" : "text-black/80",
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

        {currentView === 'gallery' && <PhotoGallery />}
        {currentView === 'videos' && <VideoGallery />}
      </div>
    </div>
  );
}

function PhotoGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadImages() {
      try {
        const fetchedImages = await getGalleryImages();
        setImages(fetchedImages);
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      } finally {
        setLoading(false);
      }
    }
    loadImages();
  }, []);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % images.length);
    }
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + images.length) % images.length);
    }
  };
  
  const currentImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  if (loading) {
    return <div className="text-center">Loading gallery...</div>;
  }

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((photo, index) => (
          <div 
            key={photo.id} 
            className="break-inside-avoid relative w-full h-auto cursor-pointer group"
            onClick={() => setSelectedImageIndex(index)}
          >
            <Image
              src={photo.link}
              alt={photo.title || 'Gallery image'}
              fill
              className="!relative object-cover transition-transform duration-300 group-hover:scale-105"
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
        <DialogContent className="max-w-screen-xl w-[95%] max-h-[90vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center">
           <DialogTitle className="sr-only">Enlarged gallery image: {currentImage?.title}</DialogTitle>
          {currentImage && (
            <div className="relative">
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={handlePrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-white"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="h-8 w-8" />
                </Button>
                <Image
                    src={currentImage.link}
                    alt={currentImage.title || 'Enlarged gallery image'}
                    width={1600}
                    height={900}
                    className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
                />
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 text-white hover:text-white"
                    aria-label="Next image"
                >
                    <ChevronRight className="h-8 w-8" />
                </Button>
                
                {(currentImage.title || currentImage.photographer) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6 text-white z-10">
                    {currentImage.title && (
                      <p className="text-base mb-1">{currentImage.title}</p>
                    )}
                    {currentImage.photographer && (
                      <p className="text-sm opacity-80 flex items-center gap-2"><Camera className="w-4 h-4" /> {currentImage.photographer}</p>
                    )}
                  </div>
                )}
            </div>
          )}
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
                videoId = urlObj.pathname.split('/')[2];
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
