import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface WorkSectionProps {
  onOpenProject: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenProject }) => {
  // Default active card is the first project (FAZCH)
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS[0]?.id || 'fazch');

  return (
    <section 
      id="work" 
      className="py-20 sm:py-28 bg-[#FFFFFF] text-[#111111] border-b border-[#EAEAE8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF3B30] uppercase tracking-wider font-bold">
            <span>SELECTED CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] text-[#0A0A0A] leading-tight">
            Desain yang dibangun, diluncurkan, dan berjalan
          </h2>
          <p className="text-sm sm:text-base text-[#8A8A85]">
            Studi kasus terpilih yang mencerminkan pendekatan end-to-end. Riset mendalam, sistem desain yang terukur, dan eksekusi frontend fungsional.
          </p>
        </div>

        {/* ========================================================= */}
        {/* HORIZONTAL ACCORDION CONTAINER */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-5 w-full h-auto md:h-[580px] lg:h-[620px] select-none">
          {PROJECTS.map((project) => {
            const isActive = project.id === activeProjectId;
            const cardTag = project.cardTag || project.category.split('·')[0].trim();
            const cardDesc = project.cardDescription || project.description;

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
                className={`relative rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#111111] border transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF3B30] ${
                  isActive 
                    ? 'md:flex-[5] h-[480px] md:h-full border-[#333333] shadow-2xl shadow-black/40' 
                    : 'md:flex-[2.5] h-[130px] md:h-full border-[#222222] hover:border-[#444444] shadow-md'
                }`}
              >
                {/* 1. Background Screenshot Image */}
                <img
                  src={project.coverImage || `/fazch-cover.jpg`}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out z-0 ${
                    isActive ? 'scale-105 filter brightness-95' : 'scale-100 filter brightness-60 contrast-125'
                  }`}
                />

                {/* 2. Top Dark Gradient Vignette for Number & Header Legibility */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

                {/* 3. Base Dark Overlay (Darker when inactive to prioritize active focus) */}
                <div 
                  className={`absolute inset-0 transition-all duration-500 z-10 pointer-events-none ${
                    isActive 
                      ? 'bg-gradient-to-t from-[#060606] via-[#0A0A0A]/75 to-transparent' 
                      : 'bg-black/65 backdrop-blur-[0.5px] hover:bg-black/50'
                  }`} 
                />

                {/* 4. Sequence Number */}
                <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-20 pointer-events-none">
                  <span 
                    className={`font-black font-mono tracking-tighter leading-none select-none drop-shadow-lg transition-all duration-500 ${
                      isActive 
                        ? 'text-3xl sm:text-4xl text-white/80' 
                        : 'text-2xl sm:text-3xl text-white/40 group-hover:text-white/60'
                    }`}
                    aria-hidden="true"
                  >
                    {project.number}
                  </span>
                </div>

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
                  <div className="text-xs sm:text-sm font-mono font-bold text-[#FF5A50] tracking-wider uppercase drop-shadow-sm mb-2">
                    {cardTag}
                  </div>

                  {/* Large Case Study Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-white tracking-tight leading-tight drop-shadow-md mb-2 sm:mb-3">
                    {project.title}
                  </h3>

                  {/* Short Description (2-3 lines) */}
                  <p className="text-xs sm:text-sm lg:text-[14px] text-[#D8D8D4] font-normal leading-relaxed max-w-xl mb-5 sm:mb-6 line-clamp-3">
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
                      className="inline-flex items-center gap-2.5 pl-4 pr-3 py-2 rounded-full bg-white hover:bg-[#F2F2F0] text-[#0A0A0A] text-xs sm:text-sm font-bold shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 group"
                    >
                      <span>More Details</span>
                      <span className="w-6 h-6 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center font-bold transition-transform group-hover:translate-x-0.5 shadow-sm">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
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
                    <div className="text-[11px] font-mono font-bold text-[#FF5A50]/80 uppercase tracking-widest mb-1.5">
                      {cardTag}
                    </div>
                    <h4 className="text-base lg:text-lg font-extrabold text-white/90 tracking-tight leading-snug line-clamp-2">
                      {project.title}
                    </h4>
                  </div>

                  {/* Collapsed Title on Mobile */}
                  <div className="flex md:hidden flex-col justify-end pt-8">
                    <div className="text-[10px] font-mono font-bold text-[#FF5A50]/90 uppercase tracking-wider">
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