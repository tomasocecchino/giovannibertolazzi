
import Image from "next/image";
import { DISCOGRAPHY_DATA } from "@/lib/discography-data";
import messages from '@/messages/en.json';

export default async function DiscographyPage() {
  const t = messages.Discography;
  const d = messages.DiscographyData;

  const DISCOGRAPHY = DISCOGRAPHY_DATA.map(album => ({
    ...album,
    title: d[album.id.toString() as keyof typeof d].title,
    awards: album.awards.map((_, index) => d[album.id.toString() as keyof typeof d].awards[index])
  }));


  return (
    <div className="bg-[#004165] text-white">
      <div className="container py-16 md:py-24 pt-32">
        <h1 className="text-4xl md:text-6xl font-semibold font-headline text-white mb-16 text-left">
          Discography
        </h1>
        <blockquote className="max-w-2xl text-lg md:text-xl text-white/80 italic mt-4 mb-16">
          <p>&quot;{t.heroQuote}&quot;</p>
          <cite className="block mt-2 not-italic text-sm text-white/50">{t.heroCite}</cite>
        </blockquote>

        <div className="space-y-16">
          {DISCOGRAPHY.map((album) => (
            <div key={album.id}>
              <div className="bg-[#e0e0e0] text-black p-4 md:p-8 grid md:grid-cols-2 gap-8">
                <div className="flex items-center justify-center">
                  <Image
                    src={album.imageUrl}
                    alt={t.albumCoverAlt.replace('{albumTitle}', album.title)}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover aspect-square shadow-lg"
                    data-ai-hint="album cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-semibold text-black/80 tracking-wider mb-2">{album.title}</h2>
                  <p className="text-sm text-black/60 tracking-widest mb-6">{album.recordLabel}</p>
                  <iframe
                    src={album.spotifyEmbedUrl}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg shadow-md"
                  ></iframe>
                </div>
              </div>
              <div className="bg-[#f0f0f0] text-black p-4 md:p-8">
                <div className="mb-6 font-semibold text-lg">
                  {t.getYourCopy} - <a href={`mailto:${album.copyEmail}`} className="text-[#004a63] hover:underline">{album.copyEmail}</a>
                </div>
                <div>
                  <ul className="space-y-2 text-sm font-medium text-black/70">
                    {album.awards.map((award, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">-</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
