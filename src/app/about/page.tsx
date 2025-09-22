
'use client';
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/Bertolazzi%20Giovanni%20Bio.png?alt=media&token=1bbada54-9a39-4c95-b4c6-f77693a3c87e"
            alt="Giovanni Bertolazzi performing"
            fill
            priority
            className="object-cover object-center opacity-40"
            data-ai-hint="musician dramatic"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 z-10 text-left relative pt-24">
          <h1 className="text-5xl md:text-7xl font-semibold font-headline text-[#008DDA] mb-4">
            About
          </h1>
          <blockquote className="max-w-xl text-lg md:text-xl text-white/80 italic">
            <p>&quot;Bertolazzi is a clear possessor of talent, something that blazes out with a communicative force(though also with poetic delicacy) that rivets your attention.&quot;</p>
            <cite className="block mt-2 not-italic text-sm text-white/50">Bryce Morrison</cite>
          </blockquote>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-[#f0f0f0] text-black">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-gray-800 leading-relaxed">
            <p>
              Giovanni Bertolazzi made his mark on the international scene by winning 2nd prize and 5 special prizes at the &apos;F. Liszt&apos; International Piano Competition in Budapest.
            </p>
            <p>
              This significant achievement came after winning more than 40 prizes in international piano competitions, including the &apos;S. Thalberg&apos; in Naples, the &apos;F. Busoni&apos; in Bolzano, and the &apos;Alkan Award for Piano Virtuosity&apos; in Milan. In 2022, he was awarded the &apos;Tabor Foundation Award&apos; at the Verbier Festival (Switzerland). The following year he received the &apos;Donna Gagliardi&apos; in an International Piano Award in Milan.
            </p>
            <p>
              Highlights of his career include appearances with the Hungarian Philharmonic Orchestra, the Orchestra del Maggio Musicale Fiorentino, the Kosice Philharmonic Orchestra, the Orchestra del Teatro La Fenice, the Orchestra del Teatro Bellini, the Orchestra Sinfonica Siciliana, the Orchestra of National Opera Theatre in Tirana.
            </p>
            <p>
              Giovanni has performed at major venues including: Teatro del Maggio Musicale Fiorentino in Florence, Teatro La Fenice in Venice, Teatro Ponchielli in Cremona, Teatro Politeama Garibaldi in Palermo, Sala Verdi at the Milan Conservatory, Palazzo del Quirinale in Rome, the Franz Liszt Academy of Music in Budapest, the Liszt Ferenc Memorial Museum in Budapest, the National Theatre for Opera and Ballet in Tirana, the National Liberal Club in London, Eglise de Verbier, Castleton Theatre House in Virginia (USA).
            </p>
             <p>
              He has been a guest of prestigious musical organizations such as the Società del Quartetto in Milan, Accademia Filarmonica of Verona, Amici della Musica of Padua, the Bologna Festival, Amici della Musica of Florence, the Verbier Festival, the Zoltán Kocsis Festival and the Cziffra Festival in Hungary, the Liszt-festival in Schilllingfürst, the Keyboard Trust (UK), the Phonos Arte Foundation (Cyprus), Castleton Festival in Virginia (USA).
            </p>
            <p>
              He officially performed on the world’s longest concert-grand piano during his first public presentation, the BORGATO GRAND-PRIX 333 (3.33 meters long).
            </p>
            <p>
              On this extraordinary instrument, he rerecorded two albums devoted entirely to music by Franz Liszt and published by BORGATO COLLECTION. These recordings have received several awards from International critics (Supersonic Pizzicato Award, 5 Stars from MUSICA Magazine, Nomination at the International Classical Music Awards). His concerts and recordings are broadcast by Radio France Musique, Bartók Rádió, Rai Radio3, Radio Romania Muzical. In addition, Paolo Gavazzeni’s “Mestiere Teatro” programme on Sky Classical HD dedicated an episode to him. The authoritative music critic Bryce Morrison, after listening to Bertolazzi’s albums, wrote in "The Art of Pianists": “Bertolazzi is a clear possessor of talent, something that blazes out with a communicative force (though also with poetic delicacy) that rivets your attention”. Additionally, Remy Franck (PIZZICATO Magazine's Editor-in-Chief) wrote: “The result is a pianistic drama of overwhelming power on the one hand and poetry on the other.”
            </p>
             <p>
              Born in Verona in 1998, he approached the piano as a child, growing up in a family particularly interested in culture, art and music. After brilliantly graduating from the Conservatory of Venice under the guidance of Massimo Somenzi, he continued his studies at the Conservatory of Catania with Epifanio Comis, graduating in Piano Performance and Chamber Music with top honours.
            </p>
            <p>
              He holds main piano chairs at the "G. Frescobaldi" Conservatory of Music in Ferrara. Since 2023, he has been regularly invited to hold Masterclasses at the University of Debrecen (Hungary), during the YMSA - Young Musicians Summer Academy. In 2024, he was awarded the 43rd "Liszt Ferenc International Grand Prix Du Disque" by the Liszt Society of Budapest for his Liszt recordings.
            </p>
          </div>
        </div>
      </div>

      {/* About Him Section */}
      <div className="bg-[#f0f0f0] text-black">
        <div className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-[#004a63] mb-8">About him</h2>
            <div className="space-y-8">
              <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;Bertolazzi is a clear possessor of talent, something that blazes out with a communicative force (though also with poetic delicacy) that rivets your attention.&quot;</p>
                <cite className="block mt-2 not-italic text-sm text-gray-500">Bryce Morrison / The Art of Pianists</cite>
              </blockquote>
              <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;The result is a pianistic drama of overwhelming power on the one hand and poetry on the other.&quot;</p>
                <cite className="block mt-2 not-italic text-sm text-gray-500">Remy Franck / PIZZICATO Magazine</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
