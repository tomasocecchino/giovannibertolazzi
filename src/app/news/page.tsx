
import { getNews } from "@/lib/firebase";
import type { NewsArticle } from "@/lib/firebase";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import { format } from 'date-fns';

export default async function NewsPage() {
  const t = {
    title: "News",
    errorTitle: "Error Loading News",
    errorHint: "Please ensure your Firestore security rules for the `newsArticle` collection allow public read access. For example: `match /newsArticle/{'articleId'} {'{ allow read; }'}`. Also, check that all required fields (`date`, `title`, `text`) are present and correctly formatted in your documents.",
    awardBadgeAlt: "Award Badge",
    noNews: "No news articles found."
  };
  
  let news: NewsArticle[] = [];
  let error: string | null = null;

  try {
    news = await getNews();
  } catch (err: any) {
    error = err.message || 'An unknown error occurred.';
  }

  if (error) {
    return (
      <div className="bg-[#f0f0f0] text-black">
        <div className="container mx-auto px-4 py-16 md:py-24 pt-40">
            <div className="max-w-4xl mx-auto text-center bg-red-100 border border-red-400 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-red-800 mb-4">{t.errorTitle}</h2>
                <p className="text-red-700 mb-4">{error}</p>
                <p className="text-sm text-gray-700">{t.errorHint}</p>
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
          {news.length > 0 ? news.map((item, index) => {
            const dateObj = new Date(item.date);
            const formattedDate = format(dateObj, 'dd/MM/yyyy');

            return (
              <div key={item.id} className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-x-6 md:gap-x-8 items-start border-b border-black/10 pb-12">
                
                <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    {item.image ? (
                        <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill
                            className="object-cover"
                            data-ai-hint="news article" 
                            sizes="(max-width: 768px) 120px, 180px"
                            priority={index === 0}
                        />
                    ) : (
                      <div className="w-full h-full bg-gray-200"></div>
                    )}
                </div>

                <div className="flex flex-col h-full justify-center">
                  <p className="text-black/60 font-medium tracking-wider mb-2 text-sm">{formattedDate}</p>
                  <h2 className="text-lg md:text-xl font-semibold text-black/80 font-headline tracking-wide mb-1">{item.title}</h2>
                  {item.subtitle && <p className="text-black/70 font-medium text-base mb-2">{item.subtitle}</p>}
                  <p className="text-black/70 text-sm md:text-base mb-4 flex-grow">{item.text}</p>
                  {item.link && item.buttonText && (
                    <div className="text-right mt-auto">
                       <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#004a63] font-semibold hover:underline text-sm">
                          {item.buttonText} <ArrowRight className="inline h-3 w-3" />
                       </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          }) : (
            <p className="text-center text-lg text-black/70">{t.noNews}</p>
          )}
        </div>
      </div>
    </div>
  );
}
