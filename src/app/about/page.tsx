
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
              Giovanni Bertolazzi made his mark on the international scene by winning 2nd prize and 5 special prizes at the prestigious “F. Liszt” International Piano Competition in Budapest.
            </p>
            <p>
              This significant achievement came after winning more than 40 prizes in international piano competitions, including the “Busoni” in Bolzano, the “Thalberg” in Naples, the “Alkan Award for Piano Virtuosity” in Milan.
            </p>
            <p>
              In 2022, he was awarded the “Tabor Foundation Award” at the Verbier Festival (Switzerland). The following year he received the “Donna Guglielmina Durini Litta” International Piano Award in Milan.
            </p>
            <p>
              Highlights of his career include appearances with the Hungarian Philharmonic Orchestra, Orchestra del Maggio Musicale Fiorentino, the Kodály Philharmonic Orchestra, Orchestra del Teatro La Fenice, Orchestra del Teatro Bellini, Orchestra Sinfonica Siciliana, Orchestra of National Opera Theatre of Tirana.
            </p>
            <p>
              He performs in important venues and for prestigious musical organisations including Teatro del
Maggio Musicale Fiorentino in Florence, Società del Quartetto in Milan, Teatro La Fenice in
Venice, Palazzo del Quirinale in Rome, Bologna Festival, “F. Liszt” Academy of Music and “F.
Liszt” Memorial Museum in Budapest, National Liberal Club in London, National Opera House
in Tirana, Verbier Festival, Pharos Arts Foundation (Cyprus), Castleton Festival Theatre House
(Virginia, USA).
            </p>
            <p>
              He officially performed on the world’s longest concert-grand piano during his first public
presentation, the BORGATO GRAND-PRIX 333 (3.33 meters long).
            </p>
            <p>
              On this extraordinary instrument, he recorded two albums devoted entirely to music by Franz
Liszt and published by BORGATO COLLECTION. These recordings have received several
awards from international critics (“Supersonic Pizzicato Award”, 5 Stars from MUSICA
Magazine, Nomination at the “International Classical Music Awards”).
            </p>
            <p>
              His concerts and recordings are broadcast by Radio France Musique, Bartók Rádió, Rai Radio3,
Radio Romania Muzical. In addition, Paolo Gavazzeni's “Mestiere Teatro” programme on Sky
Classica HD dedicated an episode to him.
            </p>
            <p>
              Born in Verona in 1998, he approached the piano as a child, growing up in a family particularly
interested in culture, art and music.
            </p>
            <p>
              After brilliantly graduating from the Conservatory of Venice under the guidance of Massimo
Somenzi, he continued his studies at the Conservatory of Catania with Epifanio Comis,
graduating in Piano Performance and Chamber Music with top honours.
            </p>
            <p>
              He holds a main piano chair at the “G. Frescobaldi” Conservatory of Music in Ferrara.
            </p>
            <p>
              Since 2023, he has been regularly invited to hold Masterclasses at the University of Debrecen
(Hungary), during the YMSA - Young Musicians' Summer Academy.
            </p>
            <p>
              In 2024, he was awarded the 43rd “Liszt Ferenc International Grand Prix Du Disque” by the Liszt
Society of Budapest for his Liszt recordings.
            </p>
          </div>
        </div>
      </div>

      {/* Quotes Section */}
      <div className="bg-[#f0f0f0] text-black">
        <div className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto space-y-12">
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;A clear possessor of talent, something that blazes out with a communicative force (though also with poetic delicacy) that rivets your attention.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Bryce Morrison</span><span className="text-gray-500"> / The Art of Pianists</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;The result is a pianistic drama of overwhelming power on the one hand and poetry on the other.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Remy Franck</span><span className="text-gray-500"> / Pizzicato Magazine</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;There is no doubt in my mind that the performances of both Liszt Sonatas (B minor and Dante) are among the very best I have ever heard!&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Cyprien Katsaris</span><span className="text-gray-500"> – Concert-pianist</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;One of his generation’s most gifted pianists, Giovanni Bertolazzi is Liszt interpreter to the manner born and mature beyond his years, consistently channeling his remarkable virtuosity and boundless coloristic resources towards musical ends. His fusion of poetry and scintillation falls directly in the tradition of great aristocratic Lisztians like Jorge Bolet and Claudio Arrau.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Jed Distler</span><span className="text-gray-500"> – Composer/pianist, radio host and writer</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;His level of playing the piano, which is outstanding even by the highest international standards, is enchanting, delightful, calling for meditation and entertaining at the same time, at the highest level of music performance.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Budapest Liszt Society</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;Giovanni Bertolazzi belongs to the best pianists of his generation. Not only his pianistic abilities and his formidable technique are of a superior level, but it is his deep musicality and search for musical truth I found so rare and inestimable.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Jean-Efflam Bavouzet</span><span className="text-gray-500"> – Concert-pianist</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;From the first moment you start listening to any piece by choice, you realise that it’s an exceptional pianist playing an exceptional instrument, and moreover, the quality of the recording is also exceptional.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Laszlo Gombos</span><span className="text-gray-500"> / Budapest Liszt Society Journal</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;He possesses remarkable qualities, musicianship, brilliant technique, depth, beautiful sound, sensitivity, and maybe the most important, an artistic personality, which speaks on its own when he plays.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Anne Queffélec</span><span className="text-gray-500"> – Concert-pianist</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;A huge success for a talent who is living up to every flattering promise.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Nicola Cattò</span><span className="text-gray-500"> / Rivista Musica</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;Bertolazzi displays great technique, accompanied by the ability to showcase expressiveness and sensitive, refined lyricism.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Fabio Bardelli</span><span className="text-gray-500"> / OperaClick</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;On this majestic instrument [BORGATO Grand-Prix 333], Giovanni Bertolazzi performed Rachmaninov's Third Concerto, showcasing its full range and richness of sound.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Giuseppe Rossi</span><span className="text-gray-500"> / Rivista Musica</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;A virtuoso who dominates the score with the authority of a Cziffra.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Luca Segalla</span><span className="text-gray-500"> / Rivista Musica</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;Not only a great virtuoso of the keyboard, but also an effective communicator, capable of enchanting audiences both in his live recitals and in the recording studio.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Silvia Del Zoppo</span><span className="text-gray-500"> / MusicPaper Magazine</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;His was an interpretation that was energetic and dynamic in the most brilliant passages, but performed with restraint in highlighting every expressive nuance of the phrasing.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Dario Miozzi</span><span className="text-gray-500"> / Rivista Musica</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;The name of Sviatoslav Richter inevitably comes to mind, paying tribute to the artistry and drama of Giovanni Bertolazzi.&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">Maria Zaleskaya</span><span className="text-gray-500"> / MuzLife Magazine</span></cite>
            </blockquote>

          </div>
        </div>
      </div>
    </div>
  );
}
