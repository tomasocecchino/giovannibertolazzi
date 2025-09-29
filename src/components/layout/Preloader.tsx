
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Preloader({ loading }: { loading: boolean }) {
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/Frame%2050%20(2).png?alt=media&token=01f7d64c-3ff7-4cd5-806a-cfa4a17caf5e";

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-[#004165] transition-opacity duration-500',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="relative flex items-center justify-center h-24 w-24">
        {/* Spinner */}
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-white/50 border-t-white"></div>
        {/* Logo */}
        <Image
          src={logoUrl}
          alt="Giovanni Bertolazzi Logo"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
    </div>
  );
}
