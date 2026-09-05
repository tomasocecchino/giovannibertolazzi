
'use client';
import { useState } from 'react';
import Image from "next/image";


const bios = {
  en: [
    "Giovanni Bertolazzi made his mark on the international scene by winning 2nd prize and 5 special prizes at the prestigious “Franz Liszt” International Piano Competition in Budapest.",
    "In 2024, he was awarded the 43rd “Liszt Ferenc International Grand Prix du Disque” by the Liszt Society of Budapest for his recordings of Liszt’s music, providing further recognition of his interpretative journey dedicated to the Hungarian composer.",
    "These achievements followed more than 40 prizes at major international piano competitions, including the “Busoni” International Piano Competition in Bolzano, the “Thalberg” International Piano Competition in Naples, and the “Alkan Award” in Milan.",
    "In 2022, he received the “Tabor Foundation Award” at the Verbier Festival (Switzerland), and in 2023 he was presented with the “Guglielmina Durini Litta” International Prize in Milan.",
    "Among the highlights of his career are performances with the Hungarian Philharmonic Orchestra, the Kodály Philharmonic Orchestra, the Orchestra of Teatro La Fenice in Venice, the Orchestra of the National Theatre of Opera and Ballet of Tirana, and the Orchestra del Maggio Musicale Fiorentino.",
    "He has performed at leading concert venues and for prestigious musical institutions, including the Società del Quartetto di Milano, Teatro La Fenice, Teatro del Maggio Musicale Fiorentino, Bologna Festival, the Brescia and Bergamo International Piano Festival, the Quirinal Palace, Ferrara Musica, the “F. Liszt” Academy of Music and the “F. Liszt” Memorial Museum in Budapest, the Verbier Festival, the Liszt Festival in Schillingsfürst, the National Theatre of Opera and Ballet in Tirana, the Pharos Arts Foundation (Cyprus), and the Castleton Festival Theatre House (Virginia, USA).",
    "He was the pianist who presented the world’s longest concert grand piano to the public, the BORGATO GRAND PRIX 333 (3.33 metres in length). On this extraordinary instrument he recorded two albums devoted entirely to the music of Franz Liszt, released by BORGATO Collection. These recordings received international critical acclaim, including the Supersonic Pizzicato Award, several Five-star reviews, and nominations for the International Classical Music Awards.",
    "The authoritative music critic Bryce Morrison, after listening to Bertolazzi’s albums, wrote in “The Art of Pianists”: “Bertolazzi is a clear possessor of talent, something that blazes out with a communicative force (though also with poetic delicacy) that rivets your attention”.",
    "His concerts and recordings have been broadcast by Radio France Musique, Bartók Rádió, RAI Radio3, and Radio Romania Muzical. In addition, the television programme “Mestiere Teatro”, hosted by Paolo Gavazzeni on Sky Classica HD, devoted an entire episode to his artistic career.",
    "In September 2026, his new album dedicated to Liszt was released on the Piano Classics label, featuring the complete Paganini Etudes and Concert Etudes.",
    "Born in Verona in 1998, Giovanni Bertolazzi began studying the piano as a child, growing up in a family with a deep interest in culture, art, and music.",
    "After graduating with distinction from the Conservatory of Venice under the guidance of Massimo Somenzi, he continued his studies at the Conservatory of Catania with Epifanio Comis, graduating with the highest honours.",
    "He currently holds the position of Professor of Principal Piano at the Conservatory of Ferrara. Since 2023, he has been regularly invited to give masterclasses for the Universities of Debrecen and Tirana."
  ],
  it: [
    "Giovanni Bertolazzi si impone sulla scena internazionale vincendo il 2° premio e 5 premi speciali al prestigioso Concorso Internazionale “Franz Liszt” di Budapest.",
    "Nel 2024 riceve il 43° “Liszt Ferenc International Grand Prix du Disque”, conferitogli dalla Società Liszt di Budapest per le sue registrazioni lisztiane, a ulteriore riconoscimento del suo percorso interpretativo dedicato al compositore ungherese.",
    "Questi risultati sono preceduti da più di 40 premi in concorsi pianistici internazionali, come il “Busoni” di Bolzano, il “Thalberg” di Napoli, il “Premio Alkan” di Milano.",
    "Nel 2022 viene premiato con il “Tabor Foundation Award” al Verbier Festival (Svizzera) e nel 2023 riceve il Premio Internazionale “Guglielmina Durini Litta” a Milano.",
    "Tra gli eventi più salienti della sua carriera vi sono i concerti con l'Hungarian Philharmonic, la Kodály Philharmonic, l'Orchestra del Teatro la Fenice di Venezia, l’Orchestra del Teatro Nazionale dell’Opera e del Balletto di Tirana, l’Orchestra del Maggio Musicale Fiorentino.",
    "Si esibisce in importanti sedi e per prestigiose organizzazioni musicali tra cui Società del Quartetto di Milano, Teatro La Fenice, Teatro del Maggio Musicale Fiorentino, Bologna Festival, Festival Pianistico Internazionale di Brescia e Bergamo, Palazzo del Quirinale, Ferrara Musica, “F. Liszt” Academy of Music e “F. Liszt” Memorial Museum a Budapest, Verbier Festival, Liszt-Festival a Schillingsfürst, Teatro Nazionale dell’Opera di Tirana, Pharos Arts Foundation (Cipro), Castleton Festival Theatre House (Virginia, USA).",
    "È stato il protagonista della presentazione al pubblico del pianoforte da concerto più lungo al mondo, il BORGATO Grand Prix 333 (3 metri e 33 centimetri). Su questo straordinario strumento ha registrato due album dedicati interamente a musiche di Liszt e pubblicati da BORGATO Collection, premiati dalla critica internazionale con riconoscimenti quali “Supersonic Pizzicato Award”, diverse recensioni a 5 stelle, Nomination agli “International Classical Music Awards”.",
    "Il critico internazionale Bryce Morrison, dopo aver ascoltato questi lavori discografici, ha scritto in “The Art of Pianists”: “Bertolazzi è un chiaro possessore di talento, qualcosa che sfolgora con una forza comunicativa (ma anche con una delicatezza poetica) capace di catturare l'attenzione”.",
    "I suoi concerti e i suoi dischi vengono diffusi da Radio France Musique, Bartók Rádió, Rai Radio3, Radio Romania Muzical. Inoltre, la trasmissione “Mestiere Teatro” di Paolo Gavazzeni su Sky Classica HD gli ha dedicato una puntata.",
    "Nel settembre 2026 viene pubblicato il suo nuovo album dedicato a Liszt per l’etichetta Piano Classics, comprendente l’integrale degli Studi da Paganini e degli Studi da concerto.",
    "Nato a Verona nel 1998, si è avvicinato al pianoforte da bambino, crescendo in una famiglia particolarmente interessata alla cultura, all’arte ed alla musica.",
    "Dopo essersi brillantemente diplomato presso il Conservatorio di Venezia sotto la guida di Massimo Somenzi, ha proseguito gli studi presso il Conservatorio di Catania con Epifanio Comis, laureandosi con il massimo dei voti e la lode.",
    "É titolare di una cattedra di Pianoforte principale presso il Conservatorio di Ferrara. Dal 2023 viene invitato regolarmente a tenere Masterclass per le Università di Debrecen e Tirana."
  ],
  fr: [
    "Giovanni Bertolazzi s’est imposé sur la scène internationale en remportant le 2e Prix ainsi que 5 Prix spéciaux au prestigieux Concours international de piano « Franz Liszt » de Budapest.",
    "En 2024, il a reçu le 43e « Liszt Ferenc International Grand Prix du Disque », décerné par la Société Liszt de Budapest pour ses enregistrements consacrés à la musique de Liszt, apportant ainsi une nouvelle reconnaissance à son parcours interprétatif dédié au compositore hongrois.",
    "Ces succès s’inscrivent dans la continuité de plus de 40 prix remportés dans d’importants concours internationaux de piano, parmi lesquels le Concours international de piano « Busoni » de Bolzano, le Concours international de piano « Thalberg » de Naples et le « Prix Alkan » de Milan.",
    "En 2022, il reçoit le « Tabor Foundation Award » au Festival de Verbier (Suisse) et, en 2023, le Prix international « Guglielmina Durini Litta » à Milan.",
    "Parmi les moments marquants de sa carrière figurent ses collaborations avec l’Orchestre Philharmonique Hongrois, l’Orchestre Philharmonique Kodály, l’Orchestre du Teatro La Fenice de Venise, l’Orchestre du Théâtre national d’Opéra et de Ballet de Tirana, ainsi que l’Orchestre du Maggio Musicale Fiorentino.",
    "Il s’est produit dans d’importantes salles de concert et pour de prestigieuses institutions musicales, parmi lesquelles la Società del Quartetto di Milano, le Teatro La Fenice, le Teatro del Maggio Musicale Fiorentino, le Bologna Festival, le Festival international de piano de Brescia et Bergame, le Palais du Quirinal, Ferrara Musica, l’Académie de musique « F. Liszt » et le Musée mémorial « F. Liszt » de Budapest, le Festival de Verbier, le Festival Liszt de Schillingsfürst, le Théâtre national d’Opéra et de Ballet de Tirana, la Pharos Arts Foundation (Chypre) ainsi que le Castleton Festival Theatre House (Virginie, États-Unis).",
    "Il a été le pianiste choisi pour présenter au public le plus long piano à queue de concert au monde, le BORGATO GRAND PRIX 333 (3,33 mètres de longueur). Sur cet instrument extraordinaire, il a enregistré deux albums entièrement consacrés à la musique de Franz Liszt, publiés par BORGATO Collection. Ces enregistrements ont été salués par la critique internationale et ont reçu plusieurs distinctions, parmi lesquelles le Supersonic Pizzicato Award, plusieurs critiques cinq étoiles ainsi que des nominations aux International Classical Music Awards.",
    "Après avoir écouté les albums de Bertolazzi, l’éminent critique musical Bryce Morrison a écrit dans « The Art of Pianists » : « Bertolazzi possède indéniablement du talent, qui rayonne avec une force communicative (mais aussi avec une délicatesse poétique) capable de captiver l’attention de l’auditeur. »",
    "Ses concerts et ses enregistrements ont été diffusés par Radio France Musique, Bartók Rádió, RAI Radio3 et Radio Romania Muzical. Par ailleurs, l’émission télévisée « Mestiere Teatro », animée par Paolo Gavazzeni sur Sky Classica HD, a consacré un épisode entier à son parcours artistique.",
    "En septembre 2026, son nouvel album consacré à Liszt est paru sous le label Piano Classics, réunissant l’intégrale des Études d’après Paganini et des Études de concert.",
    "Né à Vérone en 1998, Giovanni Bertolazzi découvre le piano dès son plus jeune âge au sein d'une famille profondément attachée à la culture, à l'art et à la musique.",
    "Après avoir obtenu brillamment son diplôme au Conservatoire de Venise dans la classe de Massimo Somenzi, il poursuit ses études au Conservatoire de Catane auprès d'Epifanio Comis, où il obtient son diplôme avec les plus hautes distinctions.",
    "Il est actuellement professeur de piano principal au Conservatoire de Ferrara. Depuis 2023, il est régulièrement invité à donner des masterclasses pour les Universités de Debrecen et de Tirana."
  ]
};

export default function AboutPage() {
  const [bioLang, setBioLang] = useState<'en' | 'it' | 'fr'>('en');

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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center max-w-3xl mx-auto mb-8 gap-4">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold text-[#004a63]">BIO</h2>
              <div className="flex space-x-2 text-sm font-medium">
                <button 
                  onClick={() => setBioLang('en')}
                  className={`px-3 py-1 rounded-full transition-colors ${bioLang === 'en' ? 'bg-[#004a63] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setBioLang('it')}
                  className={`px-3 py-1 rounded-full transition-colors ${bioLang === 'it' ? 'bg-[#004a63] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  IT
                </button>
                <button 
                  onClick={() => setBioLang('fr')}
                  className={`px-3 py-1 rounded-full transition-colors ${bioLang === 'fr' ? 'bg-[#004a63] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  FR
                </button>
              </div>
            </div>
          <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-gray-800 leading-relaxed">
            {bios[bioLang].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
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
