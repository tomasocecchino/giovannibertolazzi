import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-card border-t mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
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
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
