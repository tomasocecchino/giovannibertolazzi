
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Card, CardHeader } from '@/components/ui/card';
import { getNews, getVideos } from '@/lib/firebase';
import type { NewsArticle, Video } from "@/lib/firebase";
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

  const t = {
    title: "CONCERT-PIANIST",
    quote: "\"The result is a pianistic drama of overwhelming power on the one hand and poetry on the other.\"",
    quoteCite: "PIZZICATO Magazine",
    scrollDown: "Scroll Down",
    explore: "& Explore",
    aboutTitle: "ABOUT",
    aboutText1: "Giovanni Bertolazzi made his mark on the international scene by winning 2nd prize and 5 special prizes at the prestigious “F. Liszt” International Piano Competition in Budapest.",
    aboutText2: "Highlights of his career include appearances with the Hungarian Philharmonic Orchestra, Orchestra del Maggio Musicale Fiorentino, the Kodály Philharmonic Orchestra, Orchestra del Teatro La Fenice, Orchestra of National Opera Theatre of Tirana.",
    aboutText3: "He officially performed on the world’s longest concert-grand piano during his first public presentation, the BORGATO GRAND PRIX 333 (3.33 meters long).",
    aboutText4: "In 2024, he was awarded the 43rd “Liszt Ferenc International Grand Prix Du Disque” by the Liszt Society of Budapest for his Liszt recordings.",
    readAbout: "Read About",
    exploreCDsTitle: "EXPLORE CDs",
    viewDiscography: "View Discography",
    nextConcertsTitle: "NEXT CONCERTS",
    allConcerts: "All Concerts",
    buyTicket: "Buy Ticket",
    noConcerts: "No upcoming concerts scheduled. Please check back soon.",
    videosTitle: "VIDEOS",
    viewVideos: "View Videos",
    albumCoverAlt: "Album cover for {albumTitle}",
    videoThumbnailAlt: "Thumbnail for {videoTitle}"
  };
  const d = {
    "1": {
      "title": "LISZT: PIANO WORKS (2CD)",
      "awards": [
        "ICMA Nomination 2024",
        "\"TOP\" Album MusicPaper Magazine",
        "5 Stars Rivista MUSICA",
        "5 Stars PIZZICATO Magazine"
      ]
    },
    "2": {
      "title": "LISZT: PIANO SONATA IN B MINOR, APRÈS UNE LECTURE DU DANTE, HARMONIES DU SOIR, DANTE'S SONETT",
      "awards": [
        "ICMA Nomination 2023",
        "SUPERSONIC PIZZICATO Award (PIZZICATO Magazine)",
        "5 Stars Rivista MUSICA",
        "43rd \"Liszt Ferenc Grand Prix du Disque\" from Budapest Liszt Society (2024)"
      ]
    }
  };
  const tNews = {
    noNews: "No news articles found."
  };

  const DISCOGRAPHY = DISCOGRAPHY_DATA.map(album => ({
    ...album,
    title: d[album.id.toString() as keyof typeof d].title,
    awards: album.awards.map((_, index) => d[album.id.toString() as keyof typeof d].awards[index])
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
              <p>{t.aboutText1}</p>
              <p>{t.aboutText2}</p>
              <p>{t.aboutText3}</p>
              <p>{t.aboutText4}</p>
            </div>
          <div className="text-left mt-8">
            <Link href="/about" className="text-[#004a63] font-semibold hover:underline">
              {t.readAbout} <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Explore CDs Section */}
      <section id="discography" className="bg-[#004165] py-16 md:py-24">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-white">
              EXPLORE <span className="text-accent">CDs</span>
            </h2>
            <Link href="/discography" className="text-white font-semibold hover:underline">
              {t.viewDiscography} <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DISCOGRAPHY.slice(0, 2).map((album) => (
              <Card key={album.id} className="bg-transparent border-0 shadow-none overflow-hidden group">
                <CardHeader className="p-0">
                  <Image
                    src={album.imageUrl}
                    alt={t.albumCoverAlt.replace('{albumTitle}', album.title)}
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
          <div className="space-y-8 max-w-4xl mx-auto">
            {latestNews.length > 0 ? (
              latestNews.map((item) => {
                const dateObj = new Date(item.date);
                const formattedDate = format(dateObj, 'dd/MM/yyyy');
                return (
                  <div key={item.id} className="grid grid-cols-[120px_1fr] gap-x-6 items-start border-b border-black/10 pb-8 last:border-b-0 last:pb-0">
                    <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        {item.image ? (
                            <Image 
                                src={item.image} 
                                alt={item.title} 
                                fill
                                className="object-cover"
                                data-ai-hint="news article" 
                                sizes="120px"
                            />
                        ) : (
                           <div className="w-full h-full bg-gray-200"></div>
                        )}
                    </div>
                    <div className="flex flex-col h-full justify-center">
                        <p className="text-sm text-gray-500 mb-1">{formattedDate}</p>
                        <h3 className="font-semibold text-lg font-headline tracking-wide text-black/80 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-3 mb-3 flex-grow">{item.text}</p>
                        {item.link && item.buttonText && (
                         <div className="text-left mt-auto">
                            <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#004a63] hover:underline font-semibold">
                                {item.buttonText} <ArrowRight className="inline h-3 w-3"/>
                            </Link>
                         </div>
                        )}
                    </div>
                  </div>
                )
              })
            ) : (
              <p className="text-center text-gray-600">{tNews.noNews}</p>
            )}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="media" className="bg-[#004165] py-16 md:py-24">
        <div className="container">
           <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-white">VIDEOS</h2>
            <Link href="/media" className="text-white font-semibold hover:underline">
              {t.viewVideos} <ArrowRight className="inline h-4 w-4" />
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
                      alt={t.videoThumbnailAlt.replace('{videoTitle}', video.title)}
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
