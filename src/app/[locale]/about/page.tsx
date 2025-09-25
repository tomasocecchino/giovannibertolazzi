
'use client';
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/giovanni-bertolazzi.firebasestorage.app/o/Bertolazzi%20Giovanni%20Bio.png?alt=media&token=1bbada54-9a39-4c95-b4c6-f77693a3c87e"
            alt={t('heroAlt')}
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
            <p>&quot;{t('heroQuote')}&quot;</p>
            <cite className="block mt-2 not-italic text-sm text-white/50">{t('heroCite')}</cite>
          </blockquote>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-[#f0f0f0] text-black">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-gray-800 leading-relaxed">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
            <p>{t('p4')}</p>
            <p>{t('p5')}</p>
            <p>{t('p6')}</p>
            <p>{t('p7')}</p>
            <p>{t('p8')}</p>
            <p>{t('p9')}</p>
            <p>{t('p10')}</p>
            <p>{t('p11')}</p>
            <p>{t('p12')}</p>
            <p>{t('p13')}</p>
          </div>
        </div>
      </div>

      {/* Quotes Section */}
      <div className="bg-[#f0f0f0] text-black">
        <div className="container pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto space-y-12">
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t('q1_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q1_cite_name')}</span><span className="text-gray-500"> / {t('q1_cite_source')}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t('q2_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q2_cite_name')}</span><span className="text-gray-500"> / {t('q2_cite_source')}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t('q3_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q3_cite_name')}</span><span className="text-gray-500"> – {t('q3_cite_source')}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t('q4_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q4_cite_name')}</span><span className="text-gray-500"> – {t('q4_cite_source')}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t('q5_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q5_cite_name')}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t('q6_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q6_cite_name')}</span><span className="text-gray-500"> – {t('q6_cite_source')}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t('q7_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q7_cite_name')}</span><span className="text-gray-500"> / {t('q7_cite_source')}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t('q8_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q8_cite_name')}</span><span className="text-gray-500"> – {t('q8_cite_source')}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
              <p className="text-lg text-gray-700">&quot;{t('q9_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q9_cite_name')}</span><span className="text-gray-500"> / {t('q9_cite_source')}</span></cite>
            </blockquote>

            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;{t('q10_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q10_cite_name')}</span><span className="text-gray-500"> / {t('q10_cite_source')}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;{t('q11_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q11_cite_name')}</span><span className="text-gray-500"> / {t('q11_cite_source')}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;{t('q12_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q12_cite_name')}</span><span className="text-gray-500"> / {t('q12_cite_source')}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;{t('q13_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q13_cite_name')}</span><span className="text-gray-500"> / {t('q13_cite_source')}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;{t('q14_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q14_cite_name')}</span><span className="text-gray-500"> / {t('q14_cite_source')}</span></cite>
            </blockquote>
            
            <blockquote className="border-l-4 border-[#008DDA] pl-6 italic">
                <p className="text-lg text-gray-700">&quot;{t('q15_text')}&quot;</p>
              <cite className="block mt-4 not-italic text-sm"><span className="font-semibold text-[#004165]">{t('q15_cite_name')}</span><span className="text-gray-500"> / {t('q15_cite_source')}</span></cite>
            </blockquote>

          </div>
        </div>
      </div>
    </div>
  );
}
