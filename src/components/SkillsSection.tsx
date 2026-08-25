import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, CheckCircle2, Sparkles, Layers, Code, Zap } from 'lucide-react';
import { SKILL_ACCORDION_ITEMS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  // Single open item state (default: 'ui-ux')
  const [openItemId, setOpenItemId] = useState<string | null>('ui-ux');

  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="skills" 
      className="py-24 sm:py-32 bg-[#111111] text-white border-b border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="inline-block text-xs font-mono text-[#FF3B30] uppercase tracking-wider font-bold">
            KEAHLIAN & KAPABILITAS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] text-white leading-tight">
            Dikerjakan dengan tujuan. Dibangun untuk hasil nyata.
          </h2>
          <p className="text-sm sm:text-base text-[#8A8A85]">
            Pendekatan hybrid yang menggabungkan keahlian desain produk digital, rekayasa frontend modern, dan akselerasi workflow AI.
          </p>
        </div>

        {/* 3-Row Accordion */}
        <div className="space-y-4">
          {SKILL_ACCORDION_ITEMS.map((item) => {
            const isOpen = openItemId === item.id;
            return (
              <div
                key={item.id}
                id={`skill-accordion-${item.id}`}
                className={`border rounded-[20px] transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#181818] border-[#383838]' 
                    : 'bg-[#141414] border-[#242424] hover:border-[#303030]'
                }`}
              >
                {/* Accordion Row Header Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 sm:p-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-base sm:text-lg font-bold text-[#FF3B30]">
                      {item.number}.
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Chips on Header (visible on desktop) */}
                  <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {item.chips.map((chip, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono bg-[#222222] text-[#D1D1D0] px-3 py-1 rounded-full border border-[#333333]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Smooth Rotating Plus/Minus Icon */}
                    <div 
                      className={`w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center shrink-0 transition-transform duration-350 ease-in-out ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <div className="relative w-4 h-4 flex items-center justify-center">
                        <Plus 
                          className={`w-4 h-4 absolute inset-0 transition-all duration-350 ease-in-out ${
                            isOpen ? 'opacity-0 rotate-90 scale-75 text-[#FF3B30]' : 'opacity-100 rotate-0 scale-100 text-white'
                          }`} 
                        />
                        <Minus 
                          className={`w-4 h-4 absolute inset-0 transition-all duration-350 ease-in-out ${
                            isOpen ? 'opacity-100 rotate-0 scale-100 text-[#FF3B30]' : 'opacity-0 -rotate-90 scale-75 text-white'
                          }`} 
                        />
                      </div>
                    </div>
                  </div>
                </button>

                {/* Smooth Collapsible Body with Height, Fade, and Slide Transition */}
                <div 
                  className={`grid transition-[grid-template-rows,opacity] duration-350 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div 
                      className={`px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-[#262626] transition-all duration-350 ease-out ${
                        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2.5 opacity-0'
                      }`}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-3">
                        <div className="lg:col-span-6">
                          <p className="text-sm sm:text-base text-[#D1D1D0] leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {item.details && (
                          <div className="lg:col-span-6 space-y-2">
                            <div className="text-xs font-mono uppercase tracking-wider text-[#8A8A85] mb-2 font-semibold">
                              Cakupan Praktik:
                            </div>
                            {item.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#A3A3A0]">
                                <CheckCircle2 className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
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
