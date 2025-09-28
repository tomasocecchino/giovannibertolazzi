
'use client';
import Image from "next/image";

export default function AboutPage() {
  const t = {
    heroAlt: "Giovanni Bertolazzi performing",
    heroQuote: "Bertolazzi is a clear possessor of talent, something that blazes out with a communicative force(though also with poetic delicacy) that rivets your attention.",
    heroCite: "Bryce Morrison",
    p1: "Giovanni Bertolazzi made his mark on the international scene by winning 2nd prize and 5 special prizes at the prestigious “F. Liszt” International Piano Competition in Budapest.",
    p2: "This significant achievement came after winning more than 40 prizes in international piano competitions, including the “Busoni” in Bolzano, the “Thalberg” in Naples, the “Alkan Award for Piano Virtuosity” in Milan. In 2022, he was awarded the “Tabor Foundation Award” at the Verbier Festival (Switzerland). The following year he received the “Donna Guglielmina Durini Litta” International Piano Award in Milan.",
    p4: "Highlights of his career include appearances with the Hungarian Philharmonic Orchestra, Orchestra del Maggio Musicale Fiorentino, the Kodály Philharmonic Orchestra, Orchestra del Teatro La Fenice, Orchestra del Teatro Bellini, Orchestra Sinfonica Siciliana, Orchestra of National Opera Theatre of Tirana.",
    p5: "He performs in important venues and for prestigious musical organisations including Teatro del Maggio Musicale Fiorentino in Florence, Società del Quartetto in Milan, Teatro La Fenice in Venice, Palazzo del Quirinale in Rome, Bologna Festival, “F. Liszt” Academy of Music and “F. Liszt” Memorial Museum in Budapest, National Liberal Club in London, National Opera House in Tirana, Verbier Festival, Pharos Arts Foundation (Cyprus), Castleton Festival Theatre House (Virginia, USA).",
    p6: "He officially performed on the world’s longest concert-grand piano during his first public presentation, the BORGATO GRAND PRIX 333 (3.33 meters long). On this extraordinary instrument, he recorded two albums devoted entirely to music by Franz Liszt and published by BORGATO COLLECTION. These recordings have received several awards from international critics (“Supersonic Pizzicato Award”, 5 Stars from MUSICA Magazine, Nomination at the “International Classical Music Awards”). His concerts and recordings are broadcast by Radio France Musique, Bartók Rádió, Rai Radio3, Radio Romania Muzical. In addition, Paolo Gavazzeni's “Mestiere Teatro” programme on Sky Classica HD dedicated an episode to him.",
    p9: "Born in Verona in 1998, he approached the piano as a child, growing up in a family particularly interested in culture, art and music. After brilliantly graduating from the Conservatory of Venice under the guidance of Massimo Somenzi, he continued his studies at the Conservatory of Catania with Epifanio Comis, graduating in Piano Performance and Chamber Music with top honours.",
    p11: "He holds a main piano chair at the “G. Frescobaldi” Conservatory of Music in Ferrara. Since 2023, he has been regularly invited to hold Masterclasses at the University of Debrecen (Hungary), during the YMSA - Young Musicians' Summer Academy.",
    p13: "In 2024, he was awarded the 43rd “Liszt Ferenc International Grand Prix Du Disque” by the Liszt Society of Budapest for his Liszt recordings.",
    q1_text: "A clear possessor of talent, something that blazes out with a communicative force (though also with poetic delicacy) that rivets your attention.",
    q1_cite_name: "Bryce Morrison",
    q1_cite_source: "The Art of Pianists",
    q2_text: "The result is a pianistic drama of overwhelming power on the one hand and poetry on the other.",
    q2_cite_name: "Remy Franck",
    q2_cite_source: "Pizzicato Magazine",
    q3_text: "There is no doubt in my mind that the performances of both Liszt Sonatas (B minor and Dante) are among the very best I have ever heard!",
    q3_cite_name: "Cyprien Katsaris",
    q3_cite_source: "Concert-pianist",
    q4_text: "One of his generation’s most gifted pianists, Giovanni Bertolazzi is Liszt interpreter to the manner born and mature beyond his years, consistently channeling his remarkable virtuosity and boundless coloristic resources towards musical ends. His fusion of poetry and scintillation falls directly in the tradition of great aristocratic Lisztians like Jorge Bolet and Claudio Arrau.",
    q4_cite_name: "Jed Distler",
    q4_cite_source: "Composer/pianist, radio host and writer",
    q5_text: "His level of playing the piano, which is outstanding even by the highest international standards, is enchanting, delightful, calling for meditation and entertaining at the same time, at the highest level of music performance.",
    q5_cite_name: "Budapest Liszt Society",
    q6_text: "Giovanni Bertolazzi belongs to the best pianists of his generation. Not only his pianistic abilities and his formidable technique are of a superior level, but it is his deep musicality and search for musical truth I found so rare and inestimable.",
    q6_cite_name: "Jean-Efflam Bavouzet",
    q6_cite_source: "Concert-pianist",
    q7_text: "From the first moment you start listening to any piece by choice, you realise that it’s an exceptional pianist playing an exceptional instrument, and moreover, the quality of the recording is also exceptional.",
    q7_cite_name: "Laszlo Gombos",
    q7_cite_source: "Budapest Liszt Society Journal",
    q8_text: "He possesses remarkable qualities, musicianship, brilliant technique, depth, beautiful sound, sensitivity, and maybe the most important, an artistic personality, which speaks on its own when he plays.",
    q8_cite_name: "Anne Queffélec",
    q8_cite_source: "Concert-pianist",
    q9_text: "A huge success for a talent who is living up to every flattering promise.",
    q9_cite_name: "Nicola Cattò",
    q9_cite_source: "Rivista Musica",
    q10_text: "Bertolazzi displays great technique, accompanied by the ability to showcase expressiveness and sensitive, refined lyricism.",
    q10_cite_name: "Fabio Bardelli",
    q10_cite_source: "OperaClick",
    q11_text: "On this majestic instrument [BORGATO Grand Prix 333], Giovanni Bertolazzi performed Rachmaninov's Third Concerto, showcasing its full range and richness of sound. A virtuoso who dominates the score with the authority of a Cziffra.",
    q11_cite_name: "Giuseppe Rossi",
    q11_cite_source: "Rivista Musica",
    q12_text: "A virtuoso who dominates the score with the authority of a Cziffra.",
    q12_cite_name: "Luca Segalla",
    q12_cite_source: "Rivista Musica",
    q13_text: "Not only a great virtuoso of the keyboard, but also an effective communicator, capable of enchanting audiences both in his live recitals and in the recording studio.",
    q13_cite_name: "Silvia Del Zoppo",
    q13_cite_source: "MusicPaper Magazine",
    q14_text: "His was an interpretation that was energetic and dynamic in the most brilliant passages, but performed with restraint in highlighting every expressive nuance of the phrasing.",
    q14_cite_name: "Dario Miozzi",
    q14_cite_source: "Rivista Musica",
    q15_text: "The name of Sviatoslav Richter inevitably comes to mind, paying tribute to the artistry and drama of Giovanni Bertolazzi.",
    q15_cite_name: "Maria Zaleskaya",
    q15_cite_source: "MuzLife Magazine"
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/Bertolazzi%20Giovanni%20Bio.png?alt=media&token=1bbada54-9a39-4c95-b4c6-f77693a3c87e"
            alt={t.heroAlt}
            fill
            priority
            className="object-cover object-center opacity-40"
            data-ai-hint="musician dramatic"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="container z-10 text-left relative pt-24">
          <h1 className="text-5xl md:text-7xl font-semibold font-headline text-[#008DDA] mb-4">
            About
          </h1>
          <blockquote className="max-w-xl text-lg md:text-xl text-white/80 italic">
            <p>&quot;{t.heroQuote}&quot;</p>
            <cite className="block mt-2 not-italic text-sm text-white/50">{t.heroCite}</cite>
          </blockquote>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-[#f0f0f0] text-black">
        <div className="container py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-[#004a63] mb-8 max-w-3xl mx-auto">BIO</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-gray-800 leading-relaxed">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p4}</p>
            <p>{t.p5}</p>
            <p>{t.p6}</p>
            <p>{t.p9}</p>
            <p>{t.p11}</p>
            <p>{t.p13}</p>
          </div>
        </div>
      </div>

      {/* Quotes Section */}
      <div className="bg-[#f0f0f0] text-black">
        <div className="container pb-16 md:pb-24">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-[#004a63] mb-12 max-w-3xl mx-auto">ABOUT HIM</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t.q1_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q1_cite_name}</span><span className="text-gray-500"> / {t.q1_cite_source}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t.q2_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q2_cite_name}</span><span className="text-gray-500"> / {t.q2_cite_source}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t.q3_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q3_cite_name}</span><span className="text-gray-500"> – {t.q3_cite_source}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t.q4_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q4_cite_name}</span><span className="text-gray-500"> – {t.q4_cite_source}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t.q5_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q5_cite_name}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t.q6_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q6_cite_name}</span><span className="text-gray-500"> – {t.q6_cite_source}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t.q7_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q7_cite_name}</span><span className="text-gray-500"> / {t.q7_cite_source}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t.q8_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q8_cite_name}</span><span className="text-gray-500"> – {t.q8_cite_source}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t.q9_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q9_cite_name}</span><span className="text-gray-500"> / {t.q9_cite_source}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;{t.q10_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q10_cite_name}</span><span className="text-gray-500"> / {t.q10_cite_source}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;{t.q11_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q11_cite_name}</span><span className="text-gray-500"> / {t.q11_cite_source}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;{t.q12_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q12_cite_name}</span><span className="text-gray-500"> / {t.q12_cite_source}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;{t.q13_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q13_cite_name}</span><span className="text-gray-500"> / {t.q13_cite_source}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;{t.q14_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q14_cite_name}</span><span className="text-gray-500"> / {t.q14_cite_source}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;{t.q15_text}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t.q15_cite_name}</span><span className="text-gray-500"> / {t.q15_cite_source}</span></cite>
            </blockquote>

          </div>
        </div>
      </div>
    </div>
  );
}
