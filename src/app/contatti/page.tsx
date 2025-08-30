
import { PageTitle } from "@/components/PageTitle";
import { ArrowUpRight } from "lucide-react";
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
        <div className="container mx-auto px-4 py-16 md:py-24 pt-32">
            <h1 className="text-5xl md:text-7xl font-semibold font-headline text-[#004165] mb-16 text-left">
                Contact
            </h1>
            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                <div className="max-w-md mx-auto">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/Contact%20Giovanni%20Bertolazzi.png?alt=media&token=f43d2909-d46d-4df3-83be-b0d4b2f2ec29"
                        alt="Giovanni Bertolazzi"
                        width={150}
                        height={200}
                        className="w-full h-auto object-cover"
                        data-ai-hint="musician portrait"
                    />
                </div>
                <div>
                     <a href="mailto:info@giovannibertolazzi.com" className="flex items-center text-xl md:text-2xl text-black/80 border-b border-black/20 pb-4 transition-colors hover:text-[#004a63] hover:border-[#004a63]">
                        <ArrowUpRight className="h-8 w-8 mr-4 text-[#008DDA]"/>
                        <span className="font-light mr-4">email</span>
                        <span className="font-medium">info@giovannibertolazzi.com</span>
                    </a>
                </div>
            </div>
            <div className="flex justify-center flex-wrap gap-x-8 gap-y-8 pt-8">
                {socialLinks.map((social) => (
                     <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-black/80 border-b border-black/20 pb-2 transition-colors hover:text-[#004a63] hover:border-[#004a63]">
                        <ArrowUpRight className="h-6 w-6 mr-3 text-[#008DDA]"/>
                        <span className="font-medium">{social.name}</span>
                    </a>
                ))}
            </div>
        </div>
    </div>
  );
}
