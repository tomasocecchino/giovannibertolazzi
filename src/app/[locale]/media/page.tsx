
'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import { Link } from 'next-intl';
import { PlayCircle, Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { getGalleryImages, getVideos } from '@/lib/firebase';
import type { GalleryImage, Video } from '@/lib/firebase';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsImageLoading(true);
  };
  
  const closeModal = () => {
    setSelectedIndex(null);
  };

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prevIndex) => (prevIndex! + 1) % images.length);
    setIsImageLoading(true);
  }, [selectedIndex, images.length]);

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prevIndex) => (prevIndex! - 1 + images.length) % images.length);
    setIsImageLoading(true);
  }, [selectedIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goToNext, goToPrevious]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null || selectedIndex === null) return;
    const touchEnd = e.targetTouches[0].clientX;
    if (touchStart - touchEnd > 75) { // Swipe left
      goToNext();
      setTouchStart(null);
    }
    if (touchStart - touchEnd < -75) { // Swipe right
      goToPrevious();
      setTouchStart(null);
    }
  };

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  if (images.length === 0) {
    return <div className="text-center">No images in this section.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((photo, index) => (
          <div 
            key={photo.id} 
            className="relative w-full aspect-[4/3] cursor-pointer group bg-black/5 overflow-hidden"
            onClick={() => openModal(index)}
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

      <Dialog open={selectedIndex !== null} onOpenChange={(isOpen) => !isOpen && closeModal()}>
        <DialogContent 
            className="max-w-none w-screen h-screen p-4 md:p-8 bg-black/90 border-none flex flex-col"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
          <DialogTitle className="sr-only">Image Viewer</DialogTitle>

          {selectedImage && (
            <>
              {/* Main content: Image and Text */}
              <div className="relative flex-1 flex flex-col items-center justify-center min-h-0">
                  {/* Image container */}
                  <div className="relative w-full flex-1">
                    {isImageLoading && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <Loader2 className="w-10 h-10 animate-spin text-white/50" />
                      </div>
                    )}
                    <Image
                      key={selectedImage.id}
                      src={selectedImage.link}
                      alt={selectedImage.title || 'Enlarged gallery image'}
                      fill
                      className={cn(
                        "object-contain transition-opacity duration-300",
                        isImageLoading ? "opacity-0" : "opacity-100"
                      )}
                      sizes="100vw"
                      onLoad={() => setIsImageLoading(false)}
                      onError={() => setIsImageLoading(false)}
                    />
                  </div>

                  {/* Text container */}
                  {(selectedImage.title || selectedImage.photographer) && (
                    <div className="flex-shrink-0 pt-4 text-white text-left w-full max-w-5xl">
                      {selectedImage.title && (
                        <p className="text-base font-semibold mb-1">{selectedImage.title}</p>
                      )}
                      {selectedImage.photographer && (
                        <p className="text-sm opacity-80 flex items-center gap-2"><Camera className="w-4 h-4" /> {selectedImage.photographer}</p>
                      )}
                    </div>
                  )}
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/20 hover:bg-black/40 text-white hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous Image</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/20 hover:bg-black/40 text-white hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next Image</span>
          </Button>
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
