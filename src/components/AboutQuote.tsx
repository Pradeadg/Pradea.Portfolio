import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutQuoteProps {
  onContactClick: () => void;
}

export const AboutQuote: React.FC<AboutQuoteProps> = ({ onContactClick }) => {
  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 bg-gray-bg text-ink border-b border-line "
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 space-y-12 sm:space-y-16">
        
        {/* BARIS 1: HEADER & HEADLINE UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-28 items-start pb-4">
          
          {/* KIRI: LABEL + HEADLINE SINGKAT */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-accent text-xs sm:text-2xl font-semibold block font-display">
              Filosofi & Cara Kerja
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black">
              Designer yang paham logika bisnis, bukan cuma tampilan.
            </h2>
          </div>

          {/* KANAN: SUB-HEADLINE HIGH LIGHT */}
          <div className="lg:col-span-6 lg:pt-9">
            <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed font-display text-ink">
              7+ tahun pengalaman desain, kini memperdalam kemampuan di UI/UX, AI, dan pengembangan produk end-to-end.
            </p>
          </div>

        </div>

        {/* BARIS 2: FOTO PROFIL & PARAGRAF LENGKAP + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* FOTO PROFIL KIRI */}
          <div className="lg:col-span-6">
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-200 border border-line shadow-sm">
              <img 
                src="/Gambar-pradea.png" 
                alt="Pradea — Lead UI/UX Designer" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top contrast-105 brightness-95"
              />
            </div>
          </div>

          {/* KANAN: PENJELASAN DESKRIPSI + TOMBOL HUBUNGI SAYA */}
          <div className="lg:col-span-6 space-y-8 lg:pl-4">
            
            <p className="text-base sm:text-lg text-muted font-normal leading-relaxed">
              Saya memadukan ketajaman riset pengguna dengan kapabilitas teknis implementasi kode. Berangkat dari desain grafis dan branding, saya fokus penuh ke UI/UX & Product Design sejak 2024, dan baru saja memperluas kemampuan lewat sertifikasi Deep Learning, Generative AI, dan Manajemen Proyek (2026). Setiap keputusan visual berakar pada tujuan bisnis — bukan cuma soal tampil bagus.
            </p>

            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="px-7 py-3.5 rounded-full bg-black hover:bg-near-black text-white text-sm font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-md group"
              >
                <span>Hubungi saya</span>
                <ArrowUpRight className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};