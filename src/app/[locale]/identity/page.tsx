
'use client';

import { PageTitle } from "@/components/PageTitle";
import { HardHat } from "lucide-react";

export default function IdentityPage() {
  return (
    <div className="animate-in fade-in duration-500 bg-[#f0f0f0]">
      <div className="container mx-auto px-4 py-16 md:py-24 pt-32 text-center">
        <HardHat className="mx-auto h-16 w-16 text-[#008DDA] mb-6" />
        <h1 className="text-4xl md:text-5xl font-semibold font-headline text-[#004165] mb-4">
          Pagina in Costruzione
        </h1>
        <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
          Stiamo lavorando per definire al meglio questa sezione. Torna a trovarci presto per scoprire di più sulla filosofia musicale di Giovanni Bertolazzi.
        </p>
      </div>
    </div>
  );
}
