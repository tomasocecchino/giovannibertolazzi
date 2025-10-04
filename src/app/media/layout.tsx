
import { getGalleryImages, getVideos } from '@/lib/firebase';
import MediaPage from './page';

export default async function MediaLayout({ searchParams }: { searchParams?: { view?: string } }) {
  const allImages = await getGalleryImages();
  const validImages = allImages.filter(img => img.link && img.link.trim() !== '');
  const galleryImages = validImages.filter(img => img.type !== 'shooting');
  const shootingImages = validImages.filter(img => img.type === 'shooting');
  
  const videos = await getVideos();
  const initialView = searchParams?.view === 'videos' ? 'videos' : 'gallery';

  return (
    <MediaPage 
      galleryImages={galleryImages} 
      shootingImages={shootingImages} 
      videos={videos} 
      initialView={initialView}
    />
  );
}
