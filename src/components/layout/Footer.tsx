import Link from 'next/link';
import { SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';
import Image from 'next/image';

export function Footer() {
  const footerNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/bio', label: 'Bio' },
    { href: '/concerti', label: 'Agenda' },
    { href: '/media', label: 'Media' },
    { href: '/discography', label: 'Discography' },
    { href: '/press', label: 'Press' },
    { href: '/philosophy', label: 'Philosophy' },
    { href: '/contatti', label: 'Contacts' },
  ];
  
  const dataProtectionLinks = [
     { href: '#', label: 'Privacy Policy' },
     { href: '#', label: 'Terms & Conditions' },
     { href: '#', label: 'Cookie Policy' },
  ]

  return (
    <footer className="bg-[#f0f0f0] text-black py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
             <Link href="/" className="mr-6 flex items-center space-x-2">
                <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/GIOVANNI%20BERTOLAZZI%20-%20blue.png?alt=media&token=1c6b3f7f-56f8-4a57-a926-d38e21a7c5c0"
                    alt="Giovanni Bertolazzi Logo" 
                    width={250}
                    height={24}
                    className="h-auto"
                  />
             </Link>
            <p className="text-sm text-gray-600 mt-2">Pianist</p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-500 mb-4 tracking-widest">MENU</h3>
            <ul className="space-y-2">
              {footerNavLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-800 hover:text-[#004a63] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='md:col-span-1'>
            <h3 className="font-semibold text-gray-500 mb-4 tracking-widest">DATA PROTECTION</h3>
             <ul className="space-y-2">
                 {dataProtectionLinks.map(link => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-gray-800 hover:text-[#004a63] transition-colors font-medium">
                            {link.label}
                        </Link>
                    </li>
                 ))}
             </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 border-t border-gray-300 pt-8">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Giovanni Bertolazzi. All Rights Reserved.
          </p>
           <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#004a63] transition-colors"
                aria-label={`Visit Giovanni Bertolazzi on ${social.name}`}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
