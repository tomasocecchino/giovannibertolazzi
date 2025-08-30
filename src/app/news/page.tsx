
import { NEWS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format, parse } from 'date-fns';

export default function NewsPage() {
  return (
    <div className="animate-in fade-in duration-500 bg-[#f0f0f0] text-black">
      <div className="container mx-auto px-4 py-16 md:py-24 pt-32">
        <h1 className="text-4xl md:text-6xl font-semibold font-headline text-[#004165] mb-16 text-left">
          News
        </h1>

        <div className="max-w-4xl mx-auto space-y-12">
          {NEWS.map((item) => {
            // Parse the date string (e.g., "September 15, 2023")
            const dateObj = parse(item.date, 'MMMM d, yyyy', new Date());
            // Format the date to DD/MM/YYYY
            const formattedDate = format(dateObj, 'dd/MM/yyyy');

            return (
              <div key={item.id} className="grid md:grid-cols-[200px_1fr] gap-x-8 gap-y-4 items-start border-b border-black/10 pb-12">
                <div>
                   <p className="text-black/60 font-medium tracking-wider mb-2">{formattedDate}</p>
                   <Image
                      src={item.imageUrl || "https://picsum.photos/200/200"}
                      alt={`News item: ${item.title}`}
                      width={200}
                      height={200}
                      className="w-full h-auto object-cover aspect-square"
                      data-ai-hint="news placeholder"
                    />
                </div>

                <div className="flex flex-col h-full justify-center">
                  <h2 className="text-xl font-semibold text-black/80 font-headline tracking-wide mb-2">{item.title}</h2>
                  <p className="text-black/70 text-base mb-4 flex-grow">{item.excerpt}</p>
                  <div className="text-right">
                     <Link href={item.link} className="text-[#004a63] font-semibold hover:underline text-sm">
                        View article <ArrowRight className="inline h-3 w-3" />
                     </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
