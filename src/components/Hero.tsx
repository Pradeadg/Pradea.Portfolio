import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onSelectProject?: (type: 'fazch' | 'fintech') => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section 
      id="hero"
      className="relative min-h-[105vh] lg:min-h-[100vh] pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 lg:pb-20 bg-[#0A0A0A] text-white flex flex-col justify-between overflow-hidden border-b border-[#1A1A1A]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-[#1E1E1E]/60 via-[#141414]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF3B30]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Architectural subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* ========================================================= */}
      {/* VISUAL PROTAGONIST: CENTER/RIGHT LARGE PORTRAIT PHOTO */}
      {/* ========================================================= */}
      <div className="absolute inset-x-0 bottom-0 top-12 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full max-w-xl sm:max-w-4xl lg:max-w-xl h-[117vh] sm:h-[117vh] flex items-end justify-center">
          
          {/* Portrait Image */}
          <img 
             src="/Gambar-pradea.png" 
             alt="Pradea — UI/UX & Product Designer"
             referrerPolicy="no-referrer"
             className="w-auto h-full max-h-[117vh] object-cover object-top filter grayscale contrast-110 brightness-90 transform transition-all duration-700"
             style={{
               maskImage: 'linear-gradient(to bottom, black 50%, black 75%, transparent 98%)',
               WebkitMaskImage: 'linear-gradient(to bottom, black 50%, black 75%, transparent 98%)'
             }}
          />

          {/* Dark gradient overlay on photo to guarantee text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
          <div className="absolute inset-0 bg-[#0A0A0A]/20" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* UPPER SECTION: TWO-COLUMN EDITORIAL TEXT */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start pt-2 sm:pt-0">
          
          {/* LEFT SIDE: Status Pill Badge & Structured 3-Line Headline */}
          <div className="md:col-span-6 lg:col-span-6 space-y-4 sm:space-y-5 text-left">
            
            {/* Status Pill Badge with Flashing Accent Dot */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181818]/90 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#DCDCD8] tracking-tight shadow-xl">
                <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-pulse"></span>
                <span>Membuka peluang untuk role UI/UX Designer</span>
              </span>
            </div>

            {/* Main Punchy 3-Line Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.12] drop-shadow-md">
              Brand & UI/UX<br />
              Designer based<br />
              in Indonesia
            </h1>
          </div>

          {/* RIGHT SIDE: Short Intro Paragraph & Left-Aligned Pill CTA (Positioned below 'in Indonesia') */}
          <div className="md:col-span-6 lg:col-span-6 md:flex md:flex-col md:items-end md:pt-[170px] lg:pt-[190px] xl:pt-[205px]">
            <div className="max-w-xs sm:max-w-sm space-y-4 sm:space-y-5 text-left">
              
              <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#C2C2BD] font-normal leading-relaxed">
                Hi, saya Adam Teja D — UI/UX dan product designer yang fokus menciptakan pengalaman digital terstruktur, estetik, dan berdaya guna tinggi dari riset hingga deployment.
              </p>

              {/* Pill CTA Button with circular arrow icon on the left */}
              <div>
                <a
                  href="#work"
                  id="hero-btn-portfolio"
                  className="inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-[#FF3B30] hover:bg-[#E0342A] text-white font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,59,48,0.35)] group"
                >
                  {/* Circular White Arrow Badge on Left */}
                  <span className="w-7 h-7 rounded-full bg-white text-[#FF3B30] flex items-center justify-center font-bold transition-transform group-hover:translate-x-0.5 shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span>Lihat portofolio</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* LOWER SECTION: GIGANTIC WORDMARK & STATS ROW */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28">
        
        {/* Giant "pradea" Wordmark Spanning Container */}
        <div className="w-full select-none pointer-events-none flex justify-center text-center overflow-hidden">
          <span className="text-[19vw] sm:text-[19vw] lg:text-[1440px] xl:text-[180px] font-black text-white tracking-[-0.04em] leading-[0.78] uppercase opacity-95 drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]">
            ADAM TEJA D
          </span>
        </div>

        {/* Stats Row Bar Below Wordmark with Extra Spacing and Equal Spacing Across 3 Elements (Plain Text, Left-Aligned on Mobile) */}
        <div className="w-full mt-10 sm:mt-14 lg:mt-16 pt-8 sm:pt-10 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#A0A09B]">
          
          {/* Element 1: 7+ Tahun Pengalaman (Left) */}
          <div className="flex items-center gap-2 text-white/90 font-medium">
            <span className="font-mono text-sm sm:text-base font-bold text-white">7+</span>
            <span>Tahun Pengalaman</span>
          </div>

          {/* Element 2: 2+ Tahun Fokus UI/UX & Product (Center) */}
          <div className="flex items-center gap-2 text-white/90 font-medium">
            <span className="font-mono text-sm sm:text-base font-bold text-white">2+</span>
            <span>Tahun Fokus UI/UX & Product</span>
          </div>

          {/* Element 3: Full-Stack Vibe Coder (Right) — Plain Text Without Box/Border/Dot */}
          <div className="flex items-center text-white/90 font-medium">
            <span>Full-Stack Vibe Coder</span>
          </div>

        </div>

      </div>

    </section>
  );
};
