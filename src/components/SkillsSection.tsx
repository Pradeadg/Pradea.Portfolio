import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, CheckCircle2, Sparkles, Layers, Code, Zap } from 'lucide-react';
import { SKILL_ACCORDION_ITEMS } from '../data/portfolioData';
import { useLanguage } from '../LanguageContext';

export const SkillsSection: React.FC = () => {
  const { language, copy } = useLanguage();
  const englishDescriptions: Record<string, string> = {
    'ui-ux': 'Research, wireframes, and complete design systems—including fintech dashboards with complex business logic.',
    frontend: 'Building modern interfaces from design canvas to clean, modular, production-ready code, including backend architecture and data.',
    'ai-workflow': 'Accelerating research, design exploration, and code through vibe coding and leading AI tools.',
  };
  const englishDetails: Record<string, string[]> = {
    'ui-ux': ['Creating effective information architecture and wireframes', 'Translating complex business logic into intuitive, explainable UI', 'Building token-based design systems', 'High-fidelity interactive prototyping with responsive micro-interactions'],
    frontend: ['Modern React 19 / Next.js with functional component architecture', 'Precise Tailwind CSS implementation', 'Backend integration with Supabase and payment gateways', 'Row Level Security and permission-layer design', 'Core Web Vitals and technical SEO optimization'],
    'ai-workflow': ['Vibe coding for rapid prototypes from sketch to working software', 'Applying generative AI to accelerate research and design exploration', 'Synthesizing qualitative research and creating user personas', 'Exploring copy, transcribing feedback, and automating design workflows'],
  };
  // Single open item state (default: 'ui-ux')
  const [openItemId, setOpenItemId] = useState<string | null>('ui-ux');

  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="skills" 
      className="py-20 sm:py-28 bg-black text-white border-b border-line-dark"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-28 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-6 space-y-4">
            <span className="block font-display text-xl sm:text-2xl font-semibold text-accent">{copy.skills.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              {copy.skills.title}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-12">
            <p className="font-display text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-white">
              {copy.skills.lead}
            </p>
          </div>
        </div>

        {/* 3-Row Accordion */}
        <div className="space-y-4">
          {SKILL_ACCORDION_ITEMS.map((item) => {
            const isOpen = openItemId === item.id;
            return (
              <div
                key={item.id}
                id={`skill-accordion-${item.id}`}
                className={`border rounded-card transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-near-black border-white/20' 
                    : 'bg-black border-line-dark hover:border-white/20'
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
                    <span className="font-display text-base sm:text-lg font-bold text-accent">
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
                          className="text-xs bg-white/5 text-muted-soft px-3 py-1 rounded-pill border border-line-dark"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Smooth Rotating Plus/Minus Icon */}
                    <div 
                      className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-350 ease-in-out ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <div className="relative w-4 h-4 flex items-center justify-center">
                        <Plus 
                          className={`w-4 h-4 absolute inset-0 transition-all duration-350 ease-in-out ${
                            isOpen ? 'opacity-0 rotate-90 scale-75 text-accent' : 'opacity-100 rotate-0 scale-100 text-white'
                          }`} 
                        />
                        <Minus 
                          className={`w-4 h-4 absolute inset-0 transition-all duration-350 ease-in-out ${
                            isOpen ? 'opacity-100 rotate-0 scale-100 text-accent' : 'opacity-0 -rotate-90 scale-75 text-white'
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
                      className={`px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-line-dark transition-all duration-350 ease-out ${
                        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2.5 opacity-0'
                      }`}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-3">
                        <div className="lg:col-span-6">
                          <p className="text-sm sm:text-base text-white leading-relaxed">
                            {language === 'en' ? englishDescriptions[item.id] : item.description}
                          </p>
                        </div>

                        {item.details && (
                          <div className="lg:col-span-6 space-y-2">
                            <div className="text-xs tracking-wide text-muted-soft mb-2 font-semibold">
                              {copy.skills.scope}
                            </div>
                            {(language === 'en' ? englishDetails[item.id] : item.details).map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-soft">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
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
