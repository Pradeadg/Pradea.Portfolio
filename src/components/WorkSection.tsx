import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { AnimatedPillContent } from './AnimatedPillContent';
import { useLanguage } from '../LanguageContext';

interface WorkSectionProps {
  onOpenProject: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenProject }) => {
  const { language, copy } = useLanguage();
  const englishDescriptions: Record<string, string> = {
    fazch: 'An independent storefront for a Muslim fashion brand, built from design through deployment with Midtrans payment integration.',
    'credit-risk': 'A design system and dashboard for fintech risk teams—risk scores, fraud badges, and decision logs.',
    anvieo: 'An ERP + AI Engine (GARDA) platform for Indonesian SMEs, validated through two real pilot partners.',
  };
  // Default active card is the first project (FAZCH)
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS[0]?.id || 'fazch');

  return (
    <section 
      id="work" 
      className="py-20 sm:py-28 bg-white text-ink border-b border-line"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-28 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="block font-display text-xl sm:text-2xl font-semibold text-accent">{copy.work.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-black leading-[1.08]">
              {copy.work.title}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-12">
            <p className="font-display text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-ink">
              {copy.work.lead}
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* HORIZONTAL ACCORDION CONTAINER */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-5 w-full h-auto md:h-[580px] lg:h-[620px] select-none">
          {PROJECTS.map((project) => {
            const isActive = project.id === activeProjectId;
            const cardTag = project.cardTag || project.category.split('·')[0].trim();
            const cardDesc = language === 'en' ? englishDescriptions[project.id] : (project.cardDescription || project.description);

            return (
              <div
                key={project.id}
                id={`accordion-card-${project.id}`}
                onMouseEnter={() => setActiveProjectId(project.id)}
                onClick={() => {
                  if (isActive) {
                    onOpenProject(project);
                  } else {
                    setActiveProjectId(project.id);
                  }
                }}
                onDoubleClick={() => onOpenProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (isActive) {
                      onOpenProject(project);
                    } else {
                      setActiveProjectId(project.id);
                    }
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                className={`relative rounded-card sm:rounded-card-lg overflow-hidden bg-black border transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent ${
                  isActive 
                    ? 'md:flex-[5] h-[480px] md:h-full border-line-dark shadow-photo' 
                    : 'md:flex-[2.5] h-[130px] md:h-full border-line-dark hover:border-white/20 shadow-md'
                }`}
              >
                {/* 1. Background Screenshot Image */}
                <img
                  src={project.coverImage || `/fazch-cover.jpg`}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out z-0 ${
                    isActive ? 'scale-105 filter brightness-100' : 'scale-100 filter brightness-80 contrast-110'
                  }`}
                />

                {/* Subtle bottom gradient keeps text readable without muting the artwork. */}
                <div 
                  className={`absolute inset-0 transition-all duration-500 z-10 pointer-events-none ${
                    isActive 
                      ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent' 
                      : 'bg-gradient-to-t from-black/70 via-black/10 to-black/10 hover:from-black/60'
                  }`} 
                />

                {/* ========================================================= */}
                {/* STATE A: EXPANDED / ACTIVE CARD CONTENT */}
                {/* ========================================================= */}
                <div 
                  className={`absolute inset-x-0 bottom-0 p-6 sm:p-8 z-20 flex flex-col justify-end transition-opacity duration-500 ease-out ${
                    isActive 
                      ? 'opacity-100 pointer-events-auto' 
                      : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* Category Tag */}
                  <div className="text-xs sm:text-sm font-bold text-accent tracking-wide drop-shadow-sm mb-2">
                    {cardTag}
                  </div>

                  {/* Large Case Study Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-white tracking-tight leading-tight drop-shadow-md mb-2 sm:mb-3">
                    {project.title}
                  </h3>

                  {/* Short Description (2-3 lines) */}
                  <p className="text-xs sm:text-sm lg:text-[14px] text-muted-soft font-normal leading-relaxed max-w-xl mb-5 sm:mb-6 line-clamp-3">
                    {cardDesc}
                  </p>

                  {/* "More Details" Pill Button */}
                  <div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenProject(project);
                      }}
                      className="hero-button-motion relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white bg-white py-2 pl-2 pr-6 text-xs sm:text-sm font-bold text-black shadow-xl group"
                    >
                      <AnimatedPillContent label={copy.common.details} icon={ArrowRight} />
                    </button>
                  </div>
                </div>

                {/* ========================================================= */}
                {/* STATE B: COLLAPSED / INACTIVE CARD CONTENT */}
                {/* ========================================================= */}
                <div
                  className={`absolute inset-0 z-20 p-5 sm:p-6 flex flex-col justify-between transition-opacity duration-500 ease-out ${
                    isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-none md:pointer-events-auto'
                  }`}
                >
                  {/* Top spacer to balance number */}
                  <div />

                  {/* Collapsed Title on Desktop */}
                  <div className="hidden md:flex flex-col items-start pb-4">
                    <div className="text-[11px] font-bold text-accent/80 tracking-wide mb-1.5">
                      {cardTag}
                    </div>
                    <h4 className="text-base lg:text-lg font-extrabold text-white/90 tracking-tight leading-snug line-clamp-2">
                      {project.title}
                    </h4>
                  </div>

                  {/* Collapsed Title on Mobile */}
                  <div className="flex md:hidden flex-col justify-end pt-8">
                    <div className="text-[10px] font-bold text-accent/90 tracking-wide">
                      {cardTag}
                    </div>
                    <h4 className="text-sm font-bold text-white/90 tracking-tight line-clamp-1">
                      {project.title}
                    </h4>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
