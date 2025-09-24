
'use client';
import { getNews } from "@/lib/firebase";
import type { NewsArticle } from "@/lib/firebase";
import { ArrowRight, Loader2 } from "lucide-react";
import { Link } from "next-intl";
import Image from "next/image";
import { format } from 'date-fns';
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true);
        const fetchedNews = await getNews();
        setNews(fetchedNews);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred.');
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#f0f0f0]">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#f0f0f0] text-black">
        <div className="container mx-auto px-4 py-16 md:py-24 pt-40">
            <div className="max-w-4xl mx-auto text-center bg-red-100 border border-red-400 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-red-800 mb-4">Error Loading News</h2>
                <p className="text-red-700 mb-4">{error}</p>
                <p className="text-sm text-gray-700">Please ensure your Firestore security rules for the `newsArticle` collection allow public read access. For example: `match /newsArticle/{'articleId'} {'{ allow read; }'}`. Also, check that all required fields (`date`, `title`, `text`) are present and correctly formatted in your documents.</p>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 bg-[#f0f0f0] text-black">
      <div className="container mx-auto px-4 py-16 md:py-24 pt-32">
        <h1 className="text-4xl md:text-6xl font-semibold font-headline text-[#004165] mb-16 text-left">
          News
        </h1>

        <div className="max-w-4xl mx-auto space-y-12">
          {news.length > 0 ? news.map((item) => {
            const dateObj = new Date(item.date);
            const formattedDate = format(dateObj, 'dd/MM/yyyy');

            return (
              <div key={item.id} className="grid grid-cols-1 gap-y-4 items-start border-b border-black/10 pb-12">
                <div className="flex flex-col h-full justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    {item.image && (
                        <div className="relative w-10 h-10">
                            <Image 
                                src={item.image} 
                                alt="Award Badge" 
                                fill
                                className="object-contain"
                                data-ai-hint="award badge" 
                            />
                        </div>
                    )}
                    <p className="text-black/60 font-medium tracking-wider">{formattedDate}</p>
                  </div>
                  <h2 className="text-xl font-semibold text-black/80 font-headline tracking-wide mb-1">{item.title}</h2>
                  {item.subtitle && <p className="text-black/70 font-medium text-base mb-2">{item.subtitle}</p>}
                  <p className="text-black/70 text-base mb-4 flex-grow">{item.text}</p>
                  {item.link && item.buttonText && (
                    <div className="text-right">
                       <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#004a63] font-semibold hover:underline text-sm">
                          {item.buttonText} <ArrowRight className="inline h-3 w-3" />
                       </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          }) : (
            <p className="text-center text-lg text-black/70">No news articles found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
