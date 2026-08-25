import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { CaseStudyTabs } from './CaseStudyTabs';
import { CASE_STUDIES_DATA, StructuredCaseStudy } from '../data/caseStudyContent';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Reset tab to 0 whenever project or modal state changes
  useEffect(() => {
    if (isOpen) {
      setActiveTab(0);
    }
  }, [isOpen, project?.id]);

  if (!isOpen || !project) return null;

  // Retrieve structured content for the active project
  const structuredData: StructuredCaseStudy = CASE_STUDIES_DATA[project.id] || {
    id: project.id,
    headerBadge: {
      text: project.modalBadge || `PROJECT ${project.number}`,
      variant: project.statusBadge?.variant === 'ongoing' ? 'amber' : 'live'
    },
    title: project.title,
    subtext: project.modalSubtext || project.category,
    challenge: project.caseStudyDetails?.problem || project.description,
    whatWeLearned: project.highlights || [],
    opportunity: project.description,
    solution: project.designProcess?.map(p => `${p.title}: ${p.description}`) || [],
    validation: 'Divalidasi lewat pengujian internal sebelum deployment.',
    outcome: project.description,
    tools: project.tags,
    liveDemoAvailable: Boolean(project.liveDemoAvailable && project.liveUrl),
    liveUrl: project.liveUrl,
    statusNote: project.unavailableNote
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#FFFFFF] text-[#111111] w-full max-w-3xl max-h-[92vh] rounded-[20px] shadow-2xl flex flex-col overflow-hidden border border-[#E5E5E5] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ============================================================ */}
        {/* MODAL HEADER (Persistent) */}
        {/* ============================================================ */}
        <div className="bg-[#0A0A0A] text-white px-6 py-4 flex items-center justify-between border-b border-[#222222]">
          <div className="flex items-center gap-3">
            {/* Header Badge */}
            {structuredData.headerBadge.variant === 'amber' ? (
              <span className="font-mono text-xs font-bold text-[#F59E0B] bg-[#291F0A] px-2.5 py-0.5 rounded border border-[#78350F] flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse"></span>
                {structuredData.headerBadge.text}
              </span>
            ) : (
              <span className="font-mono text-xs font-bold text-[#22C55E] bg-[#0E2914] px-2.5 py-0.5 rounded border border-[#166534] flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                {structuredData.headerBadge.text}
              </span>
            )}

            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white leading-tight">
                {structuredData.title}
              </h3>
              <div className="text-xs text-[#8A8A85] font-mono leading-tight">
                {structuredData.subtext}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Tutup Modal"
            className="p-1.5 rounded-full bg-[#1F1F1F] text-[#8A8A85] hover:text-white hover:bg-[#2A2A2A] transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ============================================================ */}
        {/* MODAL BODY */}
        {/* ============================================================ */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          
          {/* Mockup Preview Area */}
          <div className="w-full">
            <ProjectMockup type={project.previewType} className="shadow-md" />
          </div>

          {/* Unified Action Bar (Tabs Component) */}
          <CaseStudyTabs 
            activeTab={activeTab} 
            onTabChange={(idx) => setActiveTab(idx)} 
          />

          {/* Dynamic Active Tab Content with Smooth Fade Transition */}
          <div key={activeTab} className="animate-in fade-in duration-200 min-h-[160px]">
            
            {/* TAB 1 — The Challenge */}
            {activeTab === 0 && (
              <div className="space-y-3 bg-[#FAFAF8] p-5 rounded-2xl border border-[#EBEAE5]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF3B30]"></span>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-bold">
                    The Challenge
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                  {structuredData.challenge}
                </p>
              </div>
            )}

            {/* TAB 2 — What We Learned */}
            {activeTab === 1 && (
              <div className="space-y-3 bg-[#FAFAF8] p-5 rounded-2xl border border-[#EBEAE5]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF3B30]"></span>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-bold">
                    What We Learned
                  </h4>
                </div>
                <ul className="space-y-2.5 pt-1">
                  {structuredData.whatWeLearned.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] shrink-0 mt-1.5"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* TAB 3 — The Opportunity */}
            {activeTab === 2 && (
              <div className="space-y-3 bg-[#FAFAF8] p-5 rounded-2xl border border-[#EBEAE5]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF3B30]"></span>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-bold">
                    The Opportunity
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                  {structuredData.opportunity}
                </p>
              </div>
            )}

            {/* TAB 4 — The Solution */}
            {activeTab === 3 && (
              <div className="space-y-3 bg-[#FAFAF8] p-5 rounded-2xl border border-[#EBEAE5]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-bold">
                    The Solution
                  </h4>
                </div>

                {/* Multi-column Grid for dense solution points */}
                <div className={`grid ${structuredData.solution.length > 5 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-2.5 pt-1`}>
                  {structuredData.solution.map((sol, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2 text-xs text-[#333333] bg-[#FFFFFF] p-3 rounded-xl border border-[#E5E4DE]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] shrink-0 mt-1.5"></span>
                      <span className="leading-relaxed">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 5 — Validation */}
            {activeTab === 4 && (
              <div className="space-y-3 bg-[#FAFAF8] p-5 rounded-2xl border border-[#EBEAE5]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF3B30]"></span>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-bold">
                    Validation
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                  {structuredData.validation}
                </p>
              </div>
            )}

            {/* TAB 6 — Outcome */}
            {activeTab === 5 && (
              <div className="space-y-3 bg-[#FAFAF8] p-5 rounded-2xl border border-[#EBEAE5]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-bold">
                    Outcome
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                  {structuredData.outcome}
                </p>
              </div>
            )}

          </div>

        </div>

        {/* ============================================================ */}
        {/* MODAL FOOTER ACTIONS (Persistent) */}
        {/* ============================================================ */}
        <div className="bg-[#F1F0EC] px-6 py-4 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left: Tools List */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono font-bold text-[#8A8A85] uppercase mr-1">Tools:</span>
            {structuredData.tools.map((t, i) => (
              <span 
                key={i} 
                className="text-[11px] font-mono bg-[#111111] text-white px-2.5 py-0.5 rounded-full font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {structuredData.liveDemoAvailable && structuredData.liveUrl ? (
              <a
                href={structuredData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#0A0A0A] hover:bg-[#222222] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Lihat Demo Live</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF3B30]" />
              </a>
            ) : structuredData.statusNote ? (
              <span className="text-xs text-[#8A8A85] font-medium italic">
                {structuredData.statusNote}
              </span>
            ) : null}

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#EAE8E3] hover:bg-[#DFDDD6] text-[#0A0A0A] text-xs font-bold transition-colors"
            >
              Tutup Modal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
