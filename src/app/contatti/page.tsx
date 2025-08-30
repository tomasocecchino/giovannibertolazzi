import { PageTitle } from "@/components/PageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageTitle>Contact</PageTitle>
      <div className="max-w-lg mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-muted-foreground">
              For booking inquiries, press, or any other questions, please reach out through the channels below.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary transition-colors">
                <Mail className="h-6 w-6 text-accent" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">{CONTACT_DETAILS.email}</p>
                </div>
              </a>
              <a href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary transition-colors">
                <Phone className="h-6 w-6 text-accent" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground">{CONTACT_DETAILS.phone}</p>
                </div>
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4 pt-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground text-primary transition-colors"
                  aria-label={`Visit Giovanni Bertolazzi on ${social.name}`}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
