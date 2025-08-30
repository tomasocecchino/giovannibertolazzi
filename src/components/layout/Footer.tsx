import Link from 'next/link';
import { SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-background border-t mt-12 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold font-headline text-lg text-primary">Giovanni Bertolazzi</h3>
            <p className="text-sm text-muted-foreground">Concert-Pianist</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-2">Menu</h3>
            <ul className="space-y-1">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h3 className="font-semibold text-primary mb-2">Data Protection</h3>
             <ul className="space-y-1">
                 <li>
                    <Link href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                        Privacy Policy
                    </Link>
                 </li>
                 <li>
                    <Link href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                        Cookie Policy
                    </Link>
                 </li>
             </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 border-t pt-6">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Giovanni Bertolazzi. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
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
