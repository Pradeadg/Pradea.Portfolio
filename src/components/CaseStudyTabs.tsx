import React from 'react';

export const CASE_STUDY_TAB_NAMES = [
  'The Challenge',
  'What We Learned',
  'The Opportunity',
  'The Solution',
  'Validation',
  'Outcome'
] as const;

export type CaseStudyTabName = typeof CASE_STUDY_TAB_NAMES[number];

interface CaseStudyTabsProps {
  activeTab: number;
  onTabChange: (index: number) => void;
  tabNames?: readonly string[];
}

export const CaseStudyTabs: React.FC<CaseStudyTabsProps> = ({
  activeTab,
  onTabChange,
  tabNames = CASE_STUDY_TAB_NAMES
}) => {
  return (
    <div className="border-b border-[#E5E5E5] pb-2">
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
        {tabNames.map((name, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={index}
              type="button"
              onClick={() => onTabChange(index)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold font-mono transition-colors duration-200 ease-out ${
                isActive
                ? 'bg-[#0A0A0A] text-white shadow-sm ring-1 ring-[#0A0A0A]'
                : 'bg-[#F2F0EB] text-[#666660] hover:text-[#0A0A0A] hover:bg-[#E8E6E0] border border-[#E0DED7]'
              }`}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
