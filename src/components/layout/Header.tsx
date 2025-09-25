
'use client';

import { usePathname, Link } from '@/navigation';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const darkLogoUrl = "https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/GIOVANNI%20BERTOLAZZI.png?alt=media&token=aedad2ea-6e74-4ac4-ad4a-0619ffa2667d";
  const whiteLogoUrl = "https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/GIOVANNI%20BERTOLAZZI%20W.png?alt=media&token=a2635b0b-7ee8-4e7b-928d-31cfcd761853";
  const mobileLogoUrl = whiteLogoUrl;
  
  const [logoUrl, setLogoUrl] = useState(darkLogoUrl);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    if (isMounted) {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);
  
  const isDiscographyPage = pathname.startsWith('/discografia');
  const isLightPage = ['/media', '/news', '/identity', '/contact'].some(p => pathname.startsWith(p));

  useEffect(() => {
    if (isMounted) {
      if (isDiscographyPage) {
        setLogoUrl(whiteLogoUrl);
      } else {
        setLogoUrl(darkLogoUrl);
      }
    }
  }, [pathname, isDiscographyPage, isMounted, whiteLogoUrl, darkLogoUrl]);

  const NAV_LINKS = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/concerti', label: 'AGENDA' },
    { href: '/media', label: 'MEDIA' },
    { href: '/news', label: 'NEWS' },
    { href: '/discografia', label: 'DISCOGRAPHY' },
    { href: '/identity', label: 'IDENTITY' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const currentPath = pathname;

  const showDarkHeader = isMounted && (isScrolled || isDiscographyPage);
  const showDarkTextOnLoad = isMounted && isLightPage && !isScrolled && !isDiscographyPage;
  
  const headerBgClass = showDarkHeader ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent';
  
  let headerTextColorClass = 'text-white';
  if (showDarkTextOnLoad) {
      headerTextColorClass = 'text-black';
  } else if (showDarkHeader) {
      headerTextColorClass = 'text-white';
  }

  let headerTextHoverColorClass = 'text-white/60 hover:text-white';
   if (showDarkTextOnLoad) {
      headerTextHoverColorClass = 'text-black/60 hover:text-black';
  } else if (showDarkHeader) {
      headerTextHoverColorClass = 'text-white/60 hover:text-white';
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-300',
        headerBgClass
      )}
    >
      <div className="container flex h-24 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src={logoUrl}
            alt="Giovanni Bertolazzi Logo"
            width={250}
            height={24}
            className="h-auto"
            priority
            key={logoUrl} 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          {NAV_LINKS.map((link) => {
            const isActive = (link.href === '/' && currentPath === '/') || (link.href !== '/' && currentPath.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors duration-300',
                  isActive ? headerTextColorClass : headerTextHoverColorClass
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <LanguageSwitcher forceDark={showDarkHeader} forceLight={showDarkTextOnLoad} />
        </nav>

        <div className="flex flex-1 items-center justify-end md:hidden">
          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className={cn("h-6 w-6", headerTextColorClass)} />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#004165]">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <div className="p-4">
                <Link href="/" className="flex items-center space-x-2 mb-8">
                  <Image
                    src={mobileLogoUrl}
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
                        ((link.href === '/' && currentPath === '/') ||
                          (link.href !== '/' &&
                            currentPath.startsWith(link.href))) &&
                          'text-white'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8">
                  <LanguageSwitcher forceDark={true} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
