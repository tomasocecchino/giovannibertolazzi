
import Link from 'next/link';

export function Footer() {
  const footerNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/bio', label: 'Bio' },
    { href: '/concerti', label: 'Agenda' },
    { href: '/media', label: 'Media' },
    { href: '/discografia', label: 'Discography' },
    { href: '/press', label: 'Press' },
    { href: '/philosophy', label: 'Philosophy' },
    { href: '/contatti', label: 'Contacts' },
  ];
  
  const dataProtectionLinks = [
     { href: '#', label: 'Privacy Policy' },
     { href: '#', label: 'Terms & Conditions' },
     { href: '#', label: 'Cookie Policy' },
  ];
  
  const footerSocials = [
    { name: 'TikTok', href: '#' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Facebook', href: 'https://facebook.com' },
  ];

  return (
    <footer className="bg-[#f0f0f0] text-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
             <Link href="/" className="text-4xl text-[#004165] font-headline tracking-tight">
                <span className="font-normal">Giovanni</span>
                <br />
                <span className="font-semibold">Bertolazzi</span>
             </Link>
            <p className="text-sm text-black mt-2">Pianista</p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold text-[#004165] mb-4 tracking-widest font-headline">MENU</h3>
            <ul className="space-y-2">
              {footerNavLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-black hover:text-[#004a63] transition-colors font-medium text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='md:col-span-1'>
            <h3 className="font-semibold text-[#004165] mb-4 tracking-widest font-headline">DATA PROTECTION</h3>
             <ul className="space-y-2">
                 {dataProtectionLinks.map(link => (
                    <li key={link.label}>
                        <Link href={link.href} className="text-black hover:text-[#004a63] transition-colors font-medium text-sm">
                            {link.label}
                        </Link>
                    </li>
                 ))}
             </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 pt-8">
          <p className="text-xs text-gray-700 mb-4 md:mb-0">
            &copy; Giovanni Bertolazzi, 2025 - Designed by MeYou Srl
          </p>
           <div className="flex items-center space-x-6">
            {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#004a63] transition-colors text-sm font-semibold tracking-widest"
                aria-label={`Visit Giovanni Bertolazzi on ${social.name}`}
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
