
import { NEWS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="animate-in fade-in duration-500 bg-[#f0f0f0] text-black">
      <div className="container mx-auto px-4 py-16 md:py-24 pt-32">
        <h1 className="text-4xl md:text-6xl font-semibold font-headline text-[#004165] mb-16 text-left">
          News
        </h1>

        <div className="max-w-4xl mx-auto space-y-12">
          {NEWS.map((item) => (
            <div key={item.id} className="grid md:grid-cols-[150px_1fr] gap-x-8 gap-y-4 items-start border-b border-black/10 pb-12">
              <p className="text-black/60 md:text-right font-medium tracking-wider">{item.date}</p>
              
              <div className="grid md:grid-cols-[180px_1fr] gap-x-8 gap-y-4 items-start">
                <Image
                  src="https://picsum.photos/180/180"
                  alt={`News item: ${item.title}`}
                  width={180}
                  height={180}
                  className="w-full h-auto object-cover aspect-square"
                  data-ai-hint="news placeholder"
                />

                <div className="flex flex-col h-full">
                  <h2 className="text-xl font-semibold text-black/80 font-headline tracking-wide mb-2">{item.title}</h2>
                  <p className="text-black/70 text-base mb-4">{item.excerpt}</p>
                  <div className="mt-auto text-right">
                     <Link href={item.link} className="text-[#004a63] font-semibold hover:underline text-sm">
                        View article <ArrowRight className="inline h-3 w-3" />
                     </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
