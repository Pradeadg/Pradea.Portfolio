import React from 'react';
import { 
  ArrowUpRight, 
  Award, 
  Layers, 
  Compass, 
  Code2,
  CheckCircle2
} from 'lucide-react';
import { CERTIFICATES, TOOLS_LIST } from '../data/portfolioData';

interface WhyMeSectionProps {
  onOpenCv?: () => void;
}

export const WhyMeSection: React.FC<WhyMeSectionProps> = ({ onOpenCv }) => {
  return (
    <section 
      id="why-me" 
      className="py-20 sm:py-28 bg-[#F1EFEA] text-[#111111] border-b border-[#E2E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: PROFILE & STATS CARD */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-4">
            <div className="w-full rounded-[24px] bg-[#D7D5CC] border border-[#CCC9BE] p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm">
              
              {/* Foto Profil Asli (Crop Portrait Square 1:1) */}
              <div className="w-full aspect-square overflow-hidden rounded-2xl border border-[#BEBCB2] bg-[radial-gradient(circle_at_center,_#222222_0%,_#000000_100%)] shadow-inner">
                <img 
                  src="/Gambar-pradea.png" 
                  alt="Pradea — Lead UI/UX Designer" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Big Stat Feature (7+ Tahun) */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black text-[#0A0A0A] tracking-tighter">
                  7+ <span className="text-2xl sm:text-3xl font-extrabold text-[#555550]">Tahun</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#333330]">
                  Pengalaman Desain Kreatif & Produk Digital
                </div>
              </div>

              {/* 3 Item List Bersih & Konsisten */}
              <div className="space-y-2 pt-1 border-t border-[#C7C5BA]">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#111111] bg-[#E7E5DC] p-3 rounded-xl border border-[#DCDAD0]">
                  <Layers className="w-4 h-4 text-[#FF3B30] shrink-0" />
                  <span>Creative & Branding</span>
                </div>
                
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#111111] bg-[#E7E5DC] p-3 rounded-xl border border-[#DCDAD0]">
                  <Compass className="w-4 h-4 text-[#FF3B30] shrink-0" />
                  <span>UI/UX & SaaS Systems</span>
                </div>
                
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#111111] bg-[#E7E5DC] p-3 rounded-xl border border-[#DCDAD0]">
                  <Code2 className="w-4 h-4 text-[#FF3B30] shrink-0" />
                  <span>AI-Assisted Full-Stack Dev</span>
                </div>
              </div>

              {/* View Full CV Button */}
              {onOpenCv && (
                <button
                  onClick={onOpenCv}
                  className="w-full py-3 rounded-full bg-[#0A0A0A] hover:bg-[#222222] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Buka Curriculum Vitae (CV)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF3B30]" />
                </button>
              )}
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: NARRATIVE + TOOLS & CERTIFICATES */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Label */}
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#7A7A76] tracking-wider uppercase">
              <span className="text-[#FF3B30] text-sm leading-none">KENAPA SAYA</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-[#0A0A0A] leading-[1.2]">
              7+ Tahun pengalaman desain dari creative, UI/UX, hingga produk digital.
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#444440] leading-relaxed">
              Berangkat dari creative design, kini fokus di UI/UX & Product — didukung sertifikasi AI dan project management terbaru (2026). Menangani branding, UI/UX, hingga produk digital untuk SaaS dan fintech. Kini memperluas kemampuan lewat workflow AI-assisted, dari riset sampai deployment.
            </p>

            {/* Location & Availability Divider Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-t border-b border-[#DEDCD4] text-xs sm:text-[13px] text-[#666660]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#111111]">Berbasis di Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#15803D] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse"></span>
                  Siap Kerja Freelance / Remote
                </span>
                <span className="text-[11px] font-mono text-[#8A8A85]">· Immediate / On-Demand</span>
              </div>
            </div>

            {/* TOOLS & WORKFLOW CARD */}
            <div className="space-y-3 bg-[#E8E6DF] p-5 sm:p-6 rounded-[20px] border border-[#DDDCD4] flex flex-col justify-between shadow-sm">
              <div className="space-y-0.5">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A0A0A]">
                  TOOLS & WORKFLOW
                </div>
                <div className="text-[11px] text-[#777772]">
                  Tech stack & software harian
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {TOOLS_LIST.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-[#FFFFFF] text-[#222222] px-3 py-1 rounded-full border border-[#D5D4CC] shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-[#FF3B30]/40 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CERTIFICATES: 4x2 CARD GRID (2x4 ON MOBILE) BELOW TOOLS & WORKFLOW */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#7A7A76] uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#FF3B30]" />
                  <span>SERTIFIKASI ({CERTIFICATES.length})</span>
                </div>
                <span className="text-[11px] font-mono text-[#8A8A85]">
                  Terverifikasi & Kompetensi
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
                {CERTIFICATES.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="w-full bg-[#FFFFFF] rounded-lg border border-[#D5D4CC] p-3.5 sm:p-4 flex flex-col justify-between space-y-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-[#FF3B30]/60 hover:shadow-md transition-all duration-200 group text-left"
                  >
                    <div className="space-y-2">
                      <div className="w-6 h-6 rounded-md bg-[#FFF5F5] border border-[#FFE2E0] flex items-center justify-center text-[#FF3B30]">
                        <Award className="w-3.5 h-3.5 text-[#FF3B30]" />
                      </div>

                      <h4 className="text-[13px] sm:text-[13.5px] font-semibold text-[#1A1A1A] leading-snug group-hover:text-[#0A0A0A] transition-colors">
                        {cert.title}
                      </h4>
                    </div>

                    <div className="pt-1 border-t border-[#F0EFEB]">
                      <p className="text-[11px] sm:text-[11.5px] text-[#73736E] leading-tight">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
