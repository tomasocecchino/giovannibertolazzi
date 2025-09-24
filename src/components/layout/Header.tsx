'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('Header');

  const NAV_LINKS = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/concerti', label: t('agenda') },
    { href: '/media', label: t('media') },
    { href: '/news', label: t('news') },
    { href: '/discografia', label: t('discography') },
    { href: '/identity', label: t('identity') },
    { href: '/contatti', label: t('contacts') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strip the locale from the pathname for comparison
  const currentPath = pathname.substring(3) || '/';

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-colors duration-300",
      isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container flex h-24 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image 
            src="https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/GIOVANNI%20BERTOLAZZI.png?alt=media&token=aedad2ea-6e74-4ac4-ad4a-0619ffa2667d" 
            alt="Giovanni Bertolazzi Logo" 
            width={250}
            height={24}
            className="h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-white',
                (link.href === '/' && currentPath === '/') || (link.href !== '/' && currentPath.startsWith(link.href))
                  ? 'text-white'
                  : 'text-white/60'
              )}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="flex flex-1 items-center justify-end md:hidden">
          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0e141a]">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <div className="p-4">
                <Link href="/" className="flex items-center space-x-2 mb-8">
                  <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/GIOVANNI%20BERTOLAZZI.png?alt=media&token=aedad2ea-6e74-4ac4-ad4a-0619ffa2667d" 
                    alt="Giovanni Bertolazzi Logo" 
                    width={200}
                    height={20}
                    className="h-auto"
                  />
                </Link>
                <nav className="grid gap-6 text-lg font-medium">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center text-lg font-semibold text-white/70 hover:text-white',
                         (link.href === '/' && currentPath === '/') || (link.href !== '/' && currentPath.startsWith(link.href)) && 'text-white'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <div className="mt-8">
                    <LanguageSwitcher />
                  </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
