
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Preloader({ loading }: { loading: boolean }) {
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/GB.png?alt=media&token=7dd3a1e3-0244-455a-b48e-11a8e2a05a10";

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-[#004165] transition-opacity duration-500',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute h-24 w-24 animate-spin rounded-full border-2 border-white/50 border-t-white"></div>
        <Image
          src={logoUrl}
          alt="Giovanni Bertolazzi Logo"
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
