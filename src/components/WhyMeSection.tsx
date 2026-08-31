import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Award, 
  User,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATES } from '../data/portfolioData';

interface WhyMeSectionProps {
  onOpenCv?: () => void;
  onAboutMe?: () => void;
}

const CERTS_PER_PAGE = 4;

export const WhyMeSection: React.FC<WhyMeSectionProps> = ({ onOpenCv, onAboutMe }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(CERTIFICATES.length / CERTS_PER_PAGE);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage >= totalPages - 1;

  const handleNext = () => {
    if (!isLastPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const visibleCerts = CERTIFICATES.slice(
    currentPage * CERTS_PER_PAGE, 
    (currentPage + 1) * CERTS_PER_PAGE
  );

  return (
    <section 
      id="why-me" 
      className="py-20 sm:py-28 bg-gray-bg text-ink border-b border-line"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 space-y-12 sm:space-y-12">
        
        {/* BARIS 1: HEADER & DESKRIPSI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-28 items-start pb-6">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-accent text-xs sm:text-2xl font-semibold block font-display">
              Kenapa Saya
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-[1.15] tracking-tight">
              7+ Tahun di industri kreatif. Kini merancang UI/UX & Produk Digital.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-11">
            <p className="text-lg sm:text-2xl lg:text-2xl font-medium leading-snug font-display">
              Dari creative design beralih ke UI/UX & Product. Saya membantu industri SaaS dan fintech membangun produk digital dengan workflow AI-assisted.
            </p>
          </div>
        </div>

        {/* BARIS 2: KONTEN UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* FOTO PROFIL KIRI */}
          <div className="lg:col-span-6">
            <div className="w-full aspect-[3/4] overflow-hidden rounded-[2rem] bg-gray-200">
              <img 
                src="/Gambar-pradea.png" 
                alt="Pradea — Lead UI/UX Designer" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* SERTIFIKAT SLIDER KANAN */}
          <div className="lg:col-span-6 space-y-10 lg:pl-8">
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-7 h-7 text-accent" />
                <h3 className="text-2xl sm:text-2xl font-bold text-black font-display tracking-tight">
                  Sertifikasi
                </h3>
              </div>

              {/* ANIMASI FRAMER MOTION PADA PERGANTIAN HALAMAN */}
              <div className="relative overflow-hidden min-h-[380px]">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentPage} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="flex flex-col"
                  >
                    {visibleCerts.map((cert, idx) => (
                      <div 
                        /* Menggunakan kombinasi id/title + index agar key terjamin unik */
                        key={cert.id || `${cert.title}-${idx}`}
                        className="py-6 border-b border-line/60 last:border-b-0 flex flex-col space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-accent text-sm font-bold tracking-wide font-display">
                            {cert.issuer}
                          </span>
                          <span className="bg-gray-200/50 px-3 py-1 rounded-full text-xs font-bold text-ink">
                            {cert.year}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl sm:text-2xl font-bold text-black leading-snug tracking-tight font-display">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-muted mt-1.5 leading-relaxed">
                            {cert.description || 'Awarded for standout UI/UX and aesthetic harmony across digital products.'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Controls */}
              {totalPages > 1 && (
                <div className="flex items-center gap-3 mt-4">
                  <button 
                    onClick={handlePrev}
                    disabled={isFirstPage}
                    className={`p-2.5 rounded-full border transition-all flex items-center justify-center ${
                      isFirstPage 
                        ? 'border-line bg-gray-50 opacity-40 cursor-not-allowed text-muted' 
                        : 'border-line bg-white hover:border-black hover:bg-gray-50 cursor-pointer text-ink shadow-sm'
                    }`}
                    aria-label="Sertifikat sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button 
                    onClick={handleNext}
                    disabled={isLastPage}
                    className={`p-2.5 rounded-full border transition-all flex items-center justify-center ${
                      isLastPage 
                        ? 'border-line bg-gray-50 opacity-40 cursor-not-allowed text-muted' 
                        : 'border-line bg-white hover:border-black hover:bg-gray-50 cursor-pointer text-ink shadow-sm'
                    }`}
                    aria-label="Sertifikat selanjutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-8">
              <button
                onClick={onAboutMe}
                className="px-7 py-3.5 rounded-full bg-black hover:bg-near-black text-white text-sm font-bold transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <User className="w-4 h-4 text-accent" />
                <span>Tentang Saya</span>
              </button>

              {onOpenCv && (
                <button
                  onClick={onOpenCv}
                  className="px-7 py-3.5 rounded-full bg-transparent text-ink hover:text-accent text-sm font-bold transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Buka CV Lengkap</span>
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};