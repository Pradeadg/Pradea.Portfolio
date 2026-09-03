import React from 'react';
import { 
  ArrowUpRight, 
  Award, 
  User
} from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';
import { AnimatedPillContent } from './AnimatedPillContent';
import { useLanguage } from '../LanguageContext';

interface WhyMeSectionProps {
  onOpenCv?: () => void;
  onAboutMe?: () => void;
}

export const WhyMeSection: React.FC<WhyMeSectionProps> = ({ onOpenCv, onAboutMe }) => {
  const { language, copy } = useLanguage();
  const certificateTitles: Record<string, string> = {
    'Penerapan Generative AI untuk Produktivitas': 'Applying Generative AI for Productivity',
    'Prinsip Dasar UX Design & Research': 'UX Design & Research Fundamentals',
    'Dasar Manajemen Proyek': 'Project Management Fundamentals',
    'Sertifikat Partisipasi Hackathon PIDI Digdaya x BI 2026': 'PIDI Digdaya x BI 2026 Hackathon Participation',
  };
  return (
    <section 
      id="why-me" 
      className="py-20 sm:py-28 bg-gray-bg text-ink border-b border-line"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12 sm:space-y-16">
        
        {/* BARIS 1: HEADER & DESKRIPSI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-28 items-start pb-6">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-accent text-xl sm:text-2xl font-semibold block font-display">
              {copy.why.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black leading-[1.08] tracking-tight">
              {copy.why.title}
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-12">
            <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed font-display">
              {copy.why.lead}
            </p>
          </div>
        </div>

        {/* BARIS 2: SERTIFIKASI */}
        <div>
          
          {/* Existing certificate items, repositioned in a responsive grid. */}
          <div className="space-y-10">
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-7 h-7 text-accent" />
                <h3 className="text-2xl sm:text-2xl font-bold text-black font-display tracking-tight">
                  {copy.why.certifications}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                {CERTIFICATES.map((cert, idx) => (
                      <div 
                        /* Menggunakan kombinasi id/title + index agar key terjamin unik */
                        key={`${cert.title}-${idx}`}
                        data-scroll-item
                        className="py-6 border-b border-line/60 last:border-b-0 flex flex-col space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-accent text-sm font-bold tracking-wide font-display">
                            {cert.issuer}
                          </span>
                          <span className="bg-gray-200/50 px-3 py-1 rounded-full text-xs font-bold text-ink">
                            {cert.date || cert.year}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl sm:text-2xl font-bold text-black leading-snug tracking-tight font-display">
                            {language === 'en' ? certificateTitles[cert.title] || cert.title : cert.title}
                          </h4>
                          <p className="text-sm text-muted mt-1.5 leading-relaxed">
                            {cert.category}
                          </p>
                          {cert.credentialId && (
                            <p className="mt-1.5 text-xs leading-relaxed text-muted">
                              {copy.why.credentialId}: {cert.credentialId}
                            </p>
                          )}
                          {cert.credentialUrl ? (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-3 inline-flex text-xs font-bold text-accent transition-colors hover:text-accent-hover"
                            >
                              {copy.why.verify}
                            </a>
                          ) : (
                            <span
                              aria-disabled="true"
                              className="mt-3 inline-flex cursor-not-allowed text-xs font-bold text-muted opacity-50"
                            >
                              {copy.why.unavailable}
                            </span>
                          )}
                        </div>
                      </div>
                ))}
              </div>

            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-8">
              <button
                onClick={onAboutMe}
                className="hero-button-motion relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-black bg-black py-2 pl-2 pr-6 text-sm font-bold text-white group"
              >
                <AnimatedPillContent label={copy.why.about} icon={User} />
              </button>

              {onOpenCv && (
                <button
                  onClick={onOpenCv}
                  className="hero-button-motion relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-line bg-white py-2 pl-2 pr-6 text-sm font-bold text-ink shadow-sm group"
                >
                  <AnimatedPillContent label={copy.common.openCv} icon={ArrowUpRight} />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
