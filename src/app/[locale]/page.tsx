
import Image from 'next/image';
import { Link } from '@/navigation';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Card, CardHeader } from '@/components/ui/card';
import { getConcerts, getVideos } from '@/lib/firebase';
import type { Concert as RawConcert, Video } from "@/lib/firebase";
import { getTranslations } from 'next-intl/server';
import { DISCOGRAPHY_DATA } from '@/lib/discography-data';
import { HomeHero } from '@/components/home/HomeHero';

interface Concert extends Omit<RawConcert, 'date'> {
  date: Date;
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
        return `https://picsum.photos/seed/${url}/600/338`;
    }

    if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }

    // Fallback if no videoId could be extracted
    return `https://picsum.photos/seed/${url}/600/338`;
}

export default async function Home() {
  const allConcerts: Concert[] = (await getConcerts()).map(c => ({
    ...c,
    date: new Date(c.date),
  }));

  const upcomingConcerts = allConcerts
    .filter(concert => concert.date.getTime() > new Date().getTime())
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const nextTwoConcerts = upcomingConcerts.slice(0, 2);

  const allVideos: Video[] = await getVideos();
  const nextTwoVideos = allVideos.slice(0, 2);

  const t = await getTranslations('Home');
  const d = await getTranslations('DiscographyData');

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
      <section id="about" className="bg-[#f0f0f0]">
        <div className="container mx-auto px-4 py-16 md:py-24 text-left">
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
      <section id="cds" className="bg-[#004165]">
        <div className="container mx-auto px-4 py-16 md:py-24">
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

      {/* Next Concerts Section */}
       <section id="concerts" className="bg-[#f0f0f0]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-black">
              NEXT CONCERTS
            </h2>
            <Link href="/concerti" className="text-[#004a63] font-semibold hover:underline">
              {t('allConcerts')} <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {nextTwoConcerts.length > 0 ? (
              nextTwoConcerts.map((concert) => {
                const month = concert.date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
                const day = concert.date.getDate().toString().padStart(2, '0');
                const time = concert.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
                
                return (
                  <div key={concert.id} className="flex items-center justify-between p-6 bg-white rounded-lg shadow-sm">
                    <div className="flex-grow">
                        <p className="text-sm text-gray-500">{concert.title}</p>
                        <p className="font-bold text-lg text-[#333]">{concert.music}</p>
                         <Link href={concert.ticketUrl || '#'} className="text-sm text-[#004a63] hover:underline">
                            {t('buyTicket')} <ArrowRight className="inline h-3 w-3"/>
                         </Link>
                    </div>
                    <div className="text-right shrink-0 w-24">
                        <div className="text-sm text-gray-500">{month}</div>
                        <div className="text-4xl font-bold text-[#004a63]">{day}</div>
                        <div className="text-sm text-gray-500">{time}</div>
                    </div>
                  </div>
                )
              })
            ) : (
              <p className="text-center text-gray-600">{t('noConcerts')}</p>
            )}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="bg-[#004165]">
        <div className="container mx-auto px-4 py-16 md:py-24">
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
