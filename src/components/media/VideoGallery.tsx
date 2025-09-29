
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';
import type { Video } from "@/lib/firebase";

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

interface VideoGalleryProps {
  videos: Video[];
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const t = {
    videoThumbnailAlt: "Thumbnail for {videoTitle}",
    noVideos: "No videos found.",
  };

  if (!videos || videos.length === 0) {
    return <div className="text-center">{t.noVideos}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
        {videos.map((video, index) => (
            <Link href={video.link} key={video.id} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group p-3 hover:bg-black/5 rounded-lg transition-colors">
                <div className="relative shrink-0">
                    <Image
                        src={getYouTubeThumbnail(video.link)}
                        alt={t.videoThumbnailAlt.replace('{videoTitle}', video.title)}
                        width={180}
                        height={101}
                        className="w-[180px] h-auto object-cover rounded-md"
                        data-ai-hint="video thumbnail"
                        priority={index < 2}
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
