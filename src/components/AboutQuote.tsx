import React from 'react';
import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';

interface AboutQuoteProps {
  onContactClick: () => void;
}

export const AboutQuote: React.FC<AboutQuoteProps> = ({ onContactClick }) => {
  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#111111] border-b border-[#EAEAE8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Statement on Left (Auto Height, Natural Flow) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF3B30] uppercase tracking-wider">
              <span>Filosofi & Cara Kerja</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] text-[#0A0A0A] leading-[1.18]">
              Designer yang paham logika bisnis, bukan cuma tampilan. 7+ tahun pengalaman desain, kini {' '}
              <span className="text-[#FF3B30]">
                 memperdalam kemampuan di UI/UX, AI, dan pengembangan produk end-to-end.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#555554] leading-relaxed">
              Saya memadukan ketajaman riset pengguna dengan kapabilitas teknis implementasi kode. Berangkat dari desain grafis dan branding, saya fokus penuh ke UI/UX & Product Design sejak 2024, dan baru saja memperluas kemampuan lewat sertifikasi Deep Learning, Generative AI, dan Manajemen Proyek (2026). Setiap keputusan visual berakar pada tujuan bisnis — bukan cuma soal tampil bagus.
            </p>

            <div>
              <button
                onClick={onContactClick}
                className="px-7 py-3.5 rounded-full bg-[#0A0A0A] text-white text-sm font-bold hover:bg-[#222222] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md"
              >
                <span>Hubungi saya</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF3B30]" />
              </button>
            </div>
          </div>

          {/* Cards on Right: Wrapped in a single Sticky Container (sticky top-24 self-start) */}
          <div className="lg:col-span-5 sticky top-24 self-start space-y-5">
            
            {/* Card 1: Track Record */}
            <div className="bg-[#F1F0EC] p-6 sm:p-7 rounded-[20px] border border-[#E2E1DC] space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8A8A85]">
                  Track Record
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FF3B30]"></span>
              </div>
              
              <div className="flex items-baseline gap-2.5">
                <span className="text-5xl sm:text-6xl font-extrabold text-[#0A0A0A] font-mono tracking-tight">
                  7+
                </span>
                <span className="text-sm font-medium text-[#555554]">
                  Tahun pengalaman desain
                </span>
              </div>

              <div className="text-sm text-[#444443] font-medium leading-relaxed border-t border-[#DFDED8] pt-3">
                Berangkat dari creative design, kini fokus di UI/UX & Product didukung sertifikasi AI dan project management terbaru (2026).
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1 text-[11px] text-[#555554]">
                <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E5E5E0] space-y-0.5">
                  <div className="font-extrabold text-[#0A0A0A] text-sm font-mono">2+ Tahun</div>
                  <div className="text-[#8A8A85] text-[11px] leading-tight">Fokus UI/UX & Product (2024–sekarang)</div>
                </div>
                <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E5E5E0] space-y-0.5">
                  <div className="font-extrabold text-[#0A0A0A] text-sm font-mono">3 Proyek</div>
                  <div className="text-[#8A8A85] text-[11px] leading-tight">Produk end-to-end</div>
                </div>
              </div>
            </div>

            {/* Card 2: Sertifikasi */}
            <div className="bg-[#FFFFFF] p-6 sm:p-7 rounded-[20px] border border-[#E2E1DC] shadow-sm space-y-3.5 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FFF0EF] flex items-center justify-center text-[#FF3B30] border border-[#FFD5D2]">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0A0A0A]">
                    8 Sertifikat (2024-2026)
                  </h3>
                </div>
                <span className="text-[10px] font-semibold text-[#FF3B30] bg-[#FFF0EF] px-2 py-0.5 rounded-md border border-[#FFD5D2]">
                  Resmi
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#222222] font-medium leading-relaxed">
                Deep Learning · Generative AI · UX Design · Manajemen Proyek · Etc
              </p>

              <div className="flex items-center gap-2 pt-2 border-t border-[#F1F0EC] text-[11px] text-[#8A8A85]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span>Rakamin Accademy dan Dicoding, didukung Bank Indonesia & LPPI</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

