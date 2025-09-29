
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from "@/lib/firebase";
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoGalleryProps {
  images: GalleryImage[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const t = {
    noImages: "No images in this section.",
    galleryImageAlt: "Gallery image",
    imageViewerTitle: "Image Viewer",
    enlargedGalleryImageAlt: "Enlarged gallery image",
    previousImage: "Previous Image",
    nextImage: "Next Image",
  };

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
    return <div className="text-center">{t.noImages}</div>;
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
              alt={photo.title || t.galleryImageAlt}
              fill
              className={cn(
                "object-cover transition-transform duration-300 group-hover:scale-105",
                photo.link === 'https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/Media%2FGallery%2FBERTOLAZZI_SHOOTING2.jpg?alt=media&token=6babd24b-ba57-41aa-bac4-b7b4094a9c1a' ? 'object-center' : 'object-top'
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint="musician photo"
              priority={index < 3} // Prioritize first 3 images
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
          <DialogTitle className="sr-only">{t.imageViewerTitle}</DialogTitle>

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
                      alt={selectedImage.title || t.enlargedGalleryImageAlt}
                      fill
                      className={cn(
                        "object-contain transition-opacity duration-300",
                        isImageLoading ? "opacity-0" : "opacity-100"
                      )}
                      sizes="100vw"
                      onLoad={() => setIsImageLoading(false)}
                      onError={() => setIsImageLoading(false)}
                      priority
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
            <span className="sr-only">{t.previousImage}</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/20 hover:bg-black/40 text-white hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">{t.nextImage}</span>
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
