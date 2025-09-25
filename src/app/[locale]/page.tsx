
import Image from 'next/image';
import { Link } from '@/navigation';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Card, CardHeader } from '@/components/ui/card';
import { getNews, getVideos } from '@/lib/firebase';
import type { NewsArticle, Video } from "@/lib/firebase";
import { getTranslations } from 'next-intl/server';
import { DISCOGRAPHY_DATA } from '@/lib/discography-data';
import { HomeHero } from '@/components/home/HomeHero';
import { format } from 'date-fns';

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
        return `https://picsum.photos/seed/${url}/600/338`;
    }

    if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }

    // Fallback if no videoId could be extracted
    return `https://picsum.photos/seed/${url}/600/338`;
}

export default async function Home() {
  const homeNews: NewsArticle[] = await getNews({ onHomepage: true });
  const latestNews = homeNews.slice(0, 3);

  const allVideos: Video[] = await getVideos();
  const nextTwoVideos = allVideos.slice(0, 2);

  const t = await getTranslations('Home');
  const d = await getTranslations('DiscographyData');
  const tNews = await getTranslations('News');

  const DISCOGRAPHY = DISCOGRAPHY_DATA.map(album => ({
    ...album,
    title: d(`${album.id}.title`),
    awards: album.awards.map((_, index) => d(`${album.id}.awards.${index}`))
  }));


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HomeHero />

      {/* About Section */}
      <section id="about" className="bg-[#f0f0f0] py-16 md:py-24">
        <div className="container">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-[#004a63] mb-8">ABOUT</h2>
            <div className="max-w-3xl text-[#333] space-y-4 text-lg">
              <p>{t('aboutText1')}</p>
              <p>{t('aboutText2')}</p>
              <p>{t('aboutText3')}</p>
              <p>{t('aboutText4')}</p>
            </div>
          <div className="text-left mt-8">
            <Link href="/about" className="text-[#004a63] font-semibold hover:underline">
              {t('readAbout')} <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Explore CDs Section */}
      <section id="cds" className="bg-[#004165] py-16 md:py-24">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-white">
              EXPLORE CDs
            </h2>
            <Link href="/discografia" className="text-white font-semibold hover:underline">
              {t('viewDiscography')} <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DISCOGRAPHY.slice(0, 2).map((album) => (
              <Card key={album.id} className="bg-transparent border-0 shadow-none overflow-hidden group">
                <CardHeader className="p-0">
                  <Image
                    src={album.imageUrl}
                    alt={t('albumCoverAlt', {albumTitle: album.title})}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover aspect-square"
                    data-ai-hint="album cover"
                  />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="bg-[#f0f0f0] py-16 md:py-24">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-black">
              NEWS
            </h2>
            <Link href="/news" className="text-[#004a63] font-semibold hover:underline">
              All News <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-8">
            {latestNews.length > 0 ? (
              latestNews.map((item) => {
                const dateObj = new Date(item.date);
                const formattedDate = format(dateObj, 'dd/MM/yyyy');
                return (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-x-6 gap-y-4 items-start p-4 bg-white rounded-lg shadow-sm">
                     {item.image && (
                        <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden">
                            <Image 
                                src={item.image} 
                                alt={item.title} 
                                fill
                                className="object-cover"
                                data-ai-hint="news article" 
                                sizes="(max-width: 768px) 30vw, 150px"
                            />
                        </div>
                    )}
                    <div className="flex flex-col">
                        <p className="text-sm text-gray-500 mb-1">{formattedDate}</p>
                        <h3 className="font-bold text-lg text-[#333] mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{item.text}</p>
                        {item.link && item.buttonText && (
                         <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#004a63] hover:underline font-semibold self-start">
                            {item.buttonText} <ArrowRight className="inline h-3 w-3"/>
                         </Link>
                        )}
                    </div>
                  </div>
                )
              })
            ) : (
              <p className="text-center text-gray-600">{tNews('noNews')}</p>
            )}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="bg-[#004165] py-16 md:py-24">
        <div className="container">
           <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-white">VIDEOS</h2>
            <Link href="/media" className="text-white font-semibold hover:underline">
              {t('viewVideos')} <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {nextTwoVideos.map((video) => (
              <Link href={video.link} key={video.id} target="_blank" rel="noopener noreferrer" className="text-white group">
                  <div className="relative aspect-video bg-black/30 rounded-lg mb-4 overflow-hidden">
                    <Image 
                      src={getYouTubeThumbnail(video.link)} 
                      width={600} 
                      height={338} 
                      alt={t('videoThumbnailAlt', {videoTitle: video.title})} 
                      className="rounded-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      data-ai-hint="piano concert" 
                    />
                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{video.title}</h3>
                  <p className="text-white/70">{video.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
