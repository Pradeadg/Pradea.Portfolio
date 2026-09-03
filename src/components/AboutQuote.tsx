import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedPillContent } from './AnimatedPillContent';
import { useLanguage } from '../LanguageContext';

interface AboutQuoteProps {
  onContactClick: () => void;
}

export const AboutQuote: React.FC<AboutQuoteProps> = ({ onContactClick }) => {
  const { copy } = useLanguage();
  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 bg-gray-bg text-ink border-b border-line "
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12 sm:space-y-16">
        
        {/* BARIS 1: HEADER & HEADLINE UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-28 items-start pb-4">
          
          {/* KIRI: LABEL + HEADLINE SINGKAT */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-accent text-xl sm:text-2xl font-semibold block font-display">
              {copy.about.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black leading-[1.08] tracking-tight">
              {copy.about.title}
            </h2>
          </div>

          {/* KANAN: SUB-HEADLINE HIGH LIGHT */}
          <div className="lg:col-span-6 lg:pt-9">
            <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed font-display text-ink">
              {copy.about.lead}
            </p>
          </div>

        </div>

        {/* BARIS 2: FOTO PROFIL & PARAGRAF LENGKAP + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* FOTO PROFIL KIRI */}
          <div className="lg:col-span-6">
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-card-lg bg-gray-bg border border-line shadow-photo">
              <img 
                src="/Gambar-pradea.png" 
                alt="Pradea — Lead UI/UX Designer" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top contrast-105 brightness-95"
              />
            </div>
          </div>

          {/* KANAN: PENJELASAN DESKRIPSI + TOMBOL HUBUNGI SAYA */}
          <div className="lg:col-span-6 space-y-2 lg:pl-4">
            <p className="text-2xl font-medium leading-relaxed font-display text-ink">
              {copy.about.bodyLead}
            </p>

            <p className="text-base sm:text-lg text-muted font-normal leading-relaxed">
              {copy.about.body}
            </p>

            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="hero-button-motion relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-black bg-black py-2 pl-2 pr-6 text-sm font-bold text-white shadow-md group"
              >
                <AnimatedPillContent label={copy.common.contact} icon={ArrowUpRight} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
