
import { PageTitle } from "@/components/PageTitle";
import { ArrowUpRight, Linkedin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
    { name: 'facebook', href: 'https://facebook.com' },
    { name: 'instagram', href: 'https://instagram.com' },
    { name: 'linkedin', href: '#' },
    { name: 'tiktok', href: '#' },
    { name: 'rednote', href: '#' },
];

export default function ContactPage() {
  return (
    <div className="animate-in fade-in duration-500 bg-[#f0f0f0] text-black">
        <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-6xl md:text-8xl font-semibold font-headline text-[#004165] mb-16 text-left">
                Contact
            </h1>
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/giovanni-bertolazzi-contact.png?alt=media&token=e9375545-a92c-4740-977d-7f4158a1f7d5"
                        alt="Giovanni Bertolazzi"
                        width={600}
                        height={800}
                        className="w-full h-auto object-cover"
                        data-ai-hint="musician portrait"
                    />
                </div>
                <div className="space-y-12">
                     <a href="mailto:info@giovannibertolazzi.com" className="flex items-center text-xl md:text-2xl text-black/80 border-b border-black/20 pb-4 transition-colors hover:text-[#004a63] hover:border-[#004a63]">
                        <ArrowUpRight className="h-8 w-8 mr-4 text-[#008DDA]"/>
                        <span className="font-light mr-4">email</span>
                        <span className="font-medium">info@giovannibertolazzi.com</span>
                    </a>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 pt-8">
                        {socialLinks.map((social) => (
                             <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-black/80 border-b border-black/20 pb-2 transition-colors hover:text-[#004a63] hover:border-[#004a63]">
                                <ArrowUpRight className="h-6 w-6 mr-3 text-[#008DDA]"/>
                                <span className="font-medium">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
