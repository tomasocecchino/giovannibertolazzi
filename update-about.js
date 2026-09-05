const fs = require('fs');

const path = 'src/app/about/page.tsx';
let code = fs.readFileSync(path, 'utf8');

const biosCode = `
const bios = {
  en: [
    "Giovanni Bertolazzi made his mark on the international scene by winning Second Prize and five Special Prizes at the prestigious “Franz Liszt” International Piano Competition in Budapest.",
    "In 2024, he was awarded the 43rd “Liszt Ferenc International Grand Prix du Disque” by the Liszt Society of Budapest for his recordings of Liszt’s music, providing further recognition of his interpretative journey dedicated to the Hungarian composer.",
    "These achievements followed more than forty prizes at major international piano competitions, including the “Busoni” International Piano Competition in Bolzano, the “Thalberg” International Piano Competition in Naples, and the “Alkan Award” in Milan.",
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
    "Giovanni Bertolazzi s’est imposé sur la scène internationale en remportant le Deuxième Prix ainsi que cinq Prix spéciaux au prestigieux Concours international de piano « Franz Liszt » de Budapest.",
    "En 2024, il a reçu le 43e « Liszt Ferenc International Grand Prix du Disque », décerné par la Société Liszt de Budapest pour ses enregistrements consacrés à la musique de Liszt, apportant ainsi une nouvelle reconnaissance à son parcours interprétatif dédié au compositore hongrois.",
    "Ces succès s’inscrivent dans la continuité de plus de quarante prix remportés dans d’importants concours internationaux de piano, parmi lesquels le Concours international de piano « Busoni » de Bolzano, le Concours international de piano « Thalberg » de Naples et le « Prix Alkan » de Milan.",
    "En 2022, il reçoit le « Tabor Foundation Award » au Festival de Verbier (Suisse) et, en 2023, le Prix international « Guglielmina Durini Litta » à Milan.",
    "Parmi les moments marquants de sa carrière figurent ses collaborations avec l’Orchestre Philharmonique Hongrois, l’Orchestre Philharmonique Kodály, l’Orchestre du Teatro La Fenice de Venise, l’Orchestre du Théâtre national d’Opéra et de Ballet de Tirana, ainsi que l’Orchestre du Maggio Musicale Fiorentino.",
    "Il s’est produit dans d’importantes salles de concert et pour de prestigieuses institutions musicales, parmi lesquelles la Società del Quartetto di Milano, le Teatro La Fenice, le Teatro del Maggio Musicale Fiorentino, le Bologna Festival, le Festival international de piano de Brescia et Bergame, le Palais du Quirinal, Ferrara Musica, l’Académie de musique « F. Liszt » et le Musée mémorial « F. Liszt » de Budapest, le Festival de Verbier, le Festival Liszt de Schillingsfürst, le Théâtre national d’Opéra et de Ballet de Tirana, la Pharos Arts Foundation (Chypre) ainsi que le Castleton Festival Theatre House (Virginie, États-Unis).",
    "Il a été le pianiste choisi pour présenter au public le plus long piano à queue de concert au monde, le BORGATO GRAND PRIX 333 (3,33 mètres de longueur). Sur cet instrument extraordinaire, il a enregistré deux albums entièrement consacrés à la musique de Franz Liszt, publiés par BORGATO Collection. Ces enregistrements ont été salués par la critique internationale et ont reçu plusieurs distinctions, parmi lesquelles le Supersonic Pizzicato Award, plusieurs critiques cinq étoiles ainsi que des nominations aux International Classical Music Awards.",
    "Après avoir écouté les albums de Bertolazzi, l’éminent critique musical Bryce Morrison a écrit dans « The Art of Pianists » : « Bertolazzi possède indéniablement du talent, qui rayonne avec une force communicative (mais aussi avec une délicatesse poétique) capable de captiver l’attention de l’auditeur. »",
    "Ses concerts et ses enregistrements ont été diffusés par Radio France Musique, Bartók Rádió, RAI Radio3 et Radio Romania Muzical. Par ailleurs, l’émission télévisée « Mestiere Teatro », animée par Paolo Gavazzeni sur Sky Classica HD, a consacré un épisode entier à son parcours artistique.",
    "En septembre 2026, son nouvel album consacré à Liszt est paru sous le label Piano Classics, réunissant l’intégrale des Études d’après Paganini et des Études de concert.",
    "Né à Vérone en 1998, Giovanni Bertolazzi découvre le piano dès son plus jeune âge au sein d\'une famille profondément attachée à la culture, à l\'art et à la musique.",
    "Après avoir obtenu brillamment son diplôme au Conservatoire de Venise dans la classe de Massimo Somenzi, il poursuit ses études au Conservatoire de Catane auprès d\'Epifanio Comis, où il obtient son diplôme avec les plus hautes distinctions.",
    "Il est actuellement professeur de piano principal au Conservatoire de Ferrara. Depuis 2023, il est régulièrement invité à donner des masterclasses pour les Universités de Debrecen et de Tirana."
  ]
};
`;

// Inject state import if not present
if (!code.includes("useState")) {
  code = code.replace("import Image", "import { useState } from 'react';\nimport Image");
} else if (!code.match(/import\s+.*useState.*from\s+['"]react['"]/)) {
  code = code.replace("import Image", "import { useState } from 'react';\nimport Image");
}

// Inject bios data before export default
code = code.replace("export default function AboutPage() {", biosCode + "\nexport default function AboutPage() {\n  const [bioLang, setBioLang] = useState<'en' | 'it' | 'fr'>('en');\n");

// Replace the BIO section
const bioSectionRegex = /<div className="bg-\[#f0f0f0\] text-black">\s*<div className="container py-16 md:py-24">\s*<h2 className="text-3xl md:text-4xl font-headline font-semibold text-\[#004a63\] mb-8 max-w-3xl mx-auto">BIO<\/h2>[\s\S]*?<\/div>\s*<\/div>/;

const newBioSection = `<div className="bg-[#f0f0f0] text-black">
        <div className="container py-16 md:py-24">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center max-w-3xl mx-auto mb-8 gap-4">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold text-[#004a63]">BIO</h2>
              <div className="flex space-x-2 text-sm font-medium">
                <button 
                  onClick={() => setBioLang('en')}
                  className={\`px-3 py-1 rounded-full transition-colors \${bioLang === 'en' ? 'bg-[#004a63] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}\`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setBioLang('it')}
                  className={\`px-3 py-1 rounded-full transition-colors \${bioLang === 'it' ? 'bg-[#004a63] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}\`}
                >
                  IT
                </button>
                <button 
                  onClick={() => setBioLang('fr')}
                  className={\`px-3 py-1 rounded-full transition-colors \${bioLang === 'fr' ? 'bg-[#004a63] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}\`}
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
      </div>`;

code = code.replace(bioSectionRegex, newBioSection);

fs.writeFileSync(path, code);
