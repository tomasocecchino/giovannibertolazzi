
'use client';

import { HardHat } from "lucide-react";

export default function IdentityPage() {
  const t = {
    title: "Identity",
    subtitle: "This section is under construction. Come back soon to find out more about Giovanni Bertolazzi's musical philosophy."
  };
  return (
    <div className="animate-in fade-in duration-500 bg-[#f0f0f0]">
      <div className="container mx-auto px-4 py-16 md:py-24 pt-32 text-center">
        <HardHat className="mx-auto h-16 w-16 text-[#008DDA] mb-6" />
        <h1 className="text-4xl md:text-5xl font-semibold font-headline text-[#004165] mb-4">
          Identity
        </h1>
        <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>
    </div>
  );
}
