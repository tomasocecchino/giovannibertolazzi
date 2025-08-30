import Image from "next/image";
import { PageTitle } from "@/components/PageTitle";

export default function BioPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageTitle>Biography</PageTitle>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Image
              src="https://picsum.photos/600/900"
              alt="Giovanni Bertolazzi"
              width={600}
              height={900}
              className="rounded-lg shadow-lg object-cover w-full h-auto aspect-[2/3]"
              data-ai-hint="musician professional"
            />
          </div>
          <div className="md:col-span-2 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Giovanni Bertolazzi is an acclaimed pianist whose performances have been described as possessing a "rare combination of technical mastery and poetic insight." From a young age, his prodigious talent was evident, leading him to study at the most prestigious music conservatories in Europe.
            </p>
            <p>
              His career was launched after winning several major international piano competitions, which opened the doors to performances with leading orchestras and conductors across the globe. He has graced the stages of world-renowned venues such as Carnegie Hall in New York, the Musikverein in Vienna, and the Royal Albert Hall in London.
            </p>
            <p>
              Bertolazzi's repertoire is extensive and varied, showcasing a deep affinity for the works of Romantic composers like Chopin, Liszt, and Rachmaninoff, while also championing lesser-known works and contemporary music. His interpretations are noted for their intellectual rigor, emotional depth, and a uniquely personal narrative quality.
            </p>
            <p>
              Beyond the concert stage, Giovanni is a dedicated recording artist with a discography that has earned critical praise and numerous awards. He is also passionate about music education, frequently giving masterclasses and working with young, aspiring musicians to nurture the next generation of talent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
