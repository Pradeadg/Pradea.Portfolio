import React from 'react';
import { ArrowUpRight, Code2, PenTool, Rocket, Search } from 'lucide-react';
import { AnimatedPillContent } from './AnimatedPillContent';
import { useLanguage } from '../LanguageContext';

interface ProcessSectionProps {
  onContactClick?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onContactClick }) => {
  const { copy } = useLanguage();
  const steps = [
    {
      number: '01',
      title: copy.process.research,
      description: copy.process.researchDesc,
      theme: 'light' as const,
      icon: (
        <Search className="w-4 h-4 text-accent" strokeWidth={2} aria-hidden="true" />
      )
    },
    {
      number: '02',
      title: copy.process.design,
      description: copy.process.designDesc,
      theme: 'dark' as const,
      icon: (
        <PenTool className="w-4 h-4 text-accent" strokeWidth={2} aria-hidden="true" />
      )
    },
    {
      number: '03',
      title: copy.process.build,
      description: copy.process.buildDesc,
      theme: 'light' as const,
      icon: (
        <Code2 className="w-4 h-4 text-accent" strokeWidth={2} aria-hidden="true" />
      )
    },
    {
      number: '04',
      title: copy.process.launch,
      description: copy.process.launchDesc,
      theme: 'dark' as const,
      icon: (
        <Rocket className="w-4 h-4 text-accent" strokeWidth={2} aria-hidden="true" />
      )
    }
  ];

  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="process" 
      className="py-20 sm:py-28 bg-white text-ink border-b border-line"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header: Title on Left, Contact Pill Button on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-28 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="block font-display text-xl sm:text-2xl font-semibold text-accent">{copy.process.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-black leading-[1.08]">
              {copy.process.title}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-12 space-y-6">
            <p className="font-display text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-ink">
              {copy.process.lead}
            </p>
            <button
              onClick={handleContact}
              className="hero-button-motion relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-black bg-black py-2 pl-2 pr-6 text-xs sm:text-sm font-bold text-white shadow-cta group"
            >
              <AnimatedPillContent label={copy.common.contact} icon={ArrowUpRight} />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid - Matches screenshot layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((item) => {
            const isDark = item.theme === 'dark';
            return (
              <div
                key={item.number}
                id={`process-card-${item.number}`}
                className={`group min-h-[250px] p-6 sm:p-7 rounded-card flex flex-col justify-start transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-photo border cursor-default ${
                  isDark
                    ? 'bg-black text-white border-line-dark hover:border-white/20 hover:bg-near-black'
                    : 'bg-gray-bg text-black border-line hover:border-accent-border hover:bg-accent-soft'
                }`}
              >
                {/* Top Icon Box with Red Stroke */}
                <div>
                  <div className="w-10 h-10 rounded-xl border border-accent/70 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                </div>

                {/* Content: Title & Description */}
                <div className="space-y-2 pt-8">
                  <h3 className={`text-base sm:text-lg font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs sm:text-[13px] leading-relaxed ${isDark ? 'text-muted-soft' : 'text-muted'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
