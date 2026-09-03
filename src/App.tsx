import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutQuote } from './components/AboutQuote';
import { WorkSection } from './components/WorkSection';
import { SkillsSection } from './components/SkillsSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyMeSection } from './components/WhyMeSection';
import { SiteFooter } from './components/SiteFooter';
import { CvModal } from './components/CvModal';
import { CaseStudyFramework as CaseStudyPage } from './components/CaseStudyFramework';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  // Close CV on ESC key or return from case study
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isCvOpen) {
          setIsCvOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCvOpen]);

  // Subtle one-time reveal for landing-page sections.
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('#about, #work, #skills, #process, #why-me, [data-case-study-section]')
    );

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    sections.forEach((section) => {
      section.classList.add('scroll-reveal');

      const items = section.querySelectorAll<HTMLElement>(
        ':scope > div > *, [id^="accordion-card-"], [id^="skill-accordion-"], [id^="process-card-"], [data-scroll-item]'
      );
      items.forEach((item, index) => {
        item.classList.add('scroll-reveal-item');
        item.style.setProperty('--reveal-order', String(Math.min(index, 7)));
      });
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [activeCaseStudy]);

  const handleOpenProject = (project: Project) => {
    setActiveCaseStudy(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setActiveCaseStudy(null);
    setTimeout(() => {
      const workElem = document.getElementById('work');
      if (workElem) {
        workElem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectProjectByType = (type: 'fazch' | 'fintech') => {
    const found = PROJECTS.find((p) => p.previewType === type);
    if (found) {
      handleOpenProject(found);
    }
  };

  const handleContactClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If a case study is active, display the dedicated full-width scrollable case study page
  if (activeCaseStudy) {
    return (
      <div className="min-h-screen bg-gray-bg">
        <CaseStudyPage 
          project={activeCaseStudy} 
          onBack={handleBackToPortfolio} 
          onSelectProject={handleOpenProject}
          onContactClick={() => {
            handleBackToPortfolio();
            setTimeout(handleContactClick, 150);
          }}
          onOpenCv={() => setIsCvOpen(true)}
        />
        
        {/* Interactive CV Modal available even from case study page */}
        <CvModal 
          isOpen={isCvOpen} 
          onClose={() => setIsCvOpen(false)} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-bg text-ink font-sans antialiased selection:bg-accent selection:text-white">
      {/* 1. NAVBAR (Dark, Sticky) */}
      <Navbar onOpenCv={() => setIsCvOpen(true)} />

      <main>
        {/* 2. HERO (Background Hitam #0A0A0A) */}
        <Hero 
          onSelectProject={handleSelectProjectByType} 
          onContactClick={handleContactClick} 
        />

        {/* 3. ABOUT / QUOTE (Background Putih #FFFFFF) */}
        <AboutQuote onContactClick={handleContactClick} />

        {/* 4. WORK (Background Putih #FFFFFF) */}
        <WorkSection onOpenProject={handleOpenProject} />

        {/* 5. SKILLS (Background Near-Black #111111) */}
        <SkillsSection />

        {/* 6. PROCESS (Background Putih #FFFFFF) */}
        <ProcessSection onContactClick={handleContactClick} />

        {/* 7. KENAPA SAYA (Background Gray-Bg #F1F0EC) */}
        <WhyMeSection onOpenCv={() => setIsCvOpen(true)} />
      </main>

      {/* 8. CONTACT & FOOTER (Background Hitam #0A0A0A) */}
      <SiteFooter onOpenCv={() => setIsCvOpen(true)} />

      {/* Interactive CV Modal */}
      <CvModal 
        isOpen={isCvOpen} 
        onClose={() => setIsCvOpen(false)} 
      />
    </div>
  );
}
